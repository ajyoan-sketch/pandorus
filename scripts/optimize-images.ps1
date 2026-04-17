param(
  [string]$Root = "C:\Users\kitin\OneDrive\Bureau\Pandorus Universe\wiki\wiki-pandorus\media"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

function Get-JpegCodec {
  return [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq "image/jpeg" } |
    Select-Object -First 1
}

function Save-Jpeg {
  param(
    [System.Drawing.Bitmap]$Bitmap,
    [string]$Path,
    [int]$Quality = 82
  )

  $codec = Get-JpegCodec
  $encoder = [System.Drawing.Imaging.Encoder]::Quality
  $parameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, [long]$Quality)
  try {
    $Bitmap.Save($Path, $codec, $parameters)
  } finally {
    $parameters.Dispose()
  }
}

function Resize-ImageFile {
  param(
    [System.IO.FileInfo]$File,
    [int]$MaxDimension,
    [int]$JpegQuality = 82
  )

  $image = [System.Drawing.Image]::FromFile($File.FullName)
  $width = 0
  $height = 0
  $newWidth = 0
  $newHeight = 0
  $tempPath = $null
  $extension = $File.Extension.ToLowerInvariant()

  try {
    $width = $image.Width
    $height = $image.Height
    $longestSide = [Math]::Max($width, $height)

    if ($longestSide -le $MaxDimension) {
      return $null
    }

    $ratio = $MaxDimension / [double]$longestSide
    $newWidth = [Math]::Max(1, [int][Math]::Round($width * $ratio))
    $newHeight = [Math]::Max(1, [int][Math]::Round($height * $ratio))

    $bitmap = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    try {
      $bitmap.SetResolution($image.HorizontalResolution, $image.VerticalResolution)
      $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
      try {
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.DrawImage($image, 0, 0, $newWidth, $newHeight)
      } finally {
        $graphics.Dispose()
      }

      $tempPath = "{0}.{1}.tmp{2}" -f $File.FullName, ([guid]::NewGuid().ToString("N")), $File.Extension

      if ($extension -in @(".jpg", ".jpeg")) {
        Save-Jpeg -Bitmap $bitmap -Path $tempPath -Quality $JpegQuality
      } elseif ($extension -eq ".png") {
        $bitmap.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
      } else {
        return $null
      }
    } finally {
      $bitmap.Dispose()
    }
  } finally {
    $image.Dispose()
  }

  if (-not $tempPath) {
    return $null
  }

  $beforeBytes = $File.Length
  [System.IO.File]::Copy($tempPath, $File.FullName, $true)
  try {
    Remove-Item -LiteralPath $tempPath -Force
  } catch {
  }
  $afterBytes = (Get-Item -LiteralPath $File.FullName).Length

  return [PSCustomObject]@{
    File = $File.FullName
    WidthBefore = $width
    HeightBefore = $height
    WidthAfter = $newWidth
    HeightAfter = $newHeight
    BeforeMB = [math]::Round($beforeBytes / 1MB, 2)
    AfterMB = [math]::Round($afterBytes / 1MB, 2)
    SavedMB = [math]::Round(($beforeBytes - $afterBytes) / 1MB, 2)
  }
}

$targets = @(
  @{ Path = (Join-Path $Root "pandorus"); MaxDimension = 1400; Quality = 82 },
  @{ Path = (Join-Path $Root "creatures"); MaxDimension = 1400; Quality = 82 },
  @{ Path = (Join-Path $Root "cartes"); MaxDimension = 1800; Quality = 84 }
)

$results = @()

foreach ($target in $targets) {
  if (-not (Test-Path -LiteralPath $target.Path)) {
    continue
  }

  Get-ChildItem -LiteralPath $target.Path -File | ForEach-Object {
    $result = Resize-ImageFile -File $_ -MaxDimension $target.MaxDimension -JpegQuality $target.Quality
    if ($null -ne $result) {
      $results += $result
    }
  }
}

if (-not $results.Count) {
  Write-Output "No oversized images needed resizing."
  exit 0
}

$results | Sort-Object SavedMB -Descending | Format-Table -AutoSize
$totalSaved = ($results | Measure-Object -Property SavedMB -Sum).Sum
Write-Output ""
Write-Output ("Optimized {0} files. Total saved: {1} MB" -f $results.Count, [math]::Round($totalSaved, 2))
