import { createAdditionalCharacterFiches } from "./assets/data/characters.js";
import { timelineEvents } from "./assets/data/timeline.js";
import { createLocationFiches } from "./assets/data/locations.js";
import { createCreatureFiches } from "./assets/data/creatures.js";
import { createPandorusTestData } from "./assets/data/test.js";

const maps = [
  "./media/cartes/Constellations.jpg",
  "./media/cartes/Monde%20Sous%20Marin.jpg",
  "./media/cartes/Pandorus%20Universe.jpg",
  "./media/cartes/Plan%C3%A8tes%20Alien.jpg",
  "./media/cartes/Terre%20Pandorienne.jpg"
];

const constellationCards = [
  {
    title: "Les Constellations Jumelles : Myrmex",
    kicker: "De gauche à droite",
    text: "Deux formes se répondent dans le ciel : la fourmi et la fourmi volante. Elles donnent au premier ensemble un élan de lien, de travail et de mouvement collectif."
  },
  {
    title: "Mantiska",
    kicker: "Constellation",
    text: "La constellation de la mante religieuse, tendue, précise, presque suspendue dans une attente sacrée."
  },
  {
    title: "Hornax",
    kicker: "Constellation",
    text: "La constellation du frelon, nerveuse et tranchante, comme une présence qui garde son aiguillon jusque dans la nuit."
  },
  {
    title: "Vermis",
    kicker: "Constellation",
    text: "La constellation du ver, plus discrète, plus profonde, rappel d'un vivant qui travaille loin sous la surface."
  },
  {
    title: "Arachnys",
    kicker: "Constellation",
    text: "La constellation de l'araignée, tisseuse de structure et de patience, dont la forme semble retenir l'espace entre ses lignes."
  },
  {
    title: "Lumina",
    kicker: "Constellation",
    text: "La constellation de la coccinelle, éclat plus doux dans l'ensemble, presque lumineuse dans sa respiration."
  },
  {
    title: "Scarax",
    kicker: "Constellation",
    text: "La constellation du scarabée, dense et ancienne, comme un noyau de force grave dans la voûte céleste."
  },
  {
    title: "Vespara",
    kicker: "Constellation",
    text: "La constellation de la guêpe, vive et tendue, qui ferme la lecture du ciel sur une note de vigilance."
  }
];

const planetCards = [
  {
    title: "Dravok",
    kicker: "En haut à gauche",
    text: "Planète chaude, volcanique et très riche en ressources, Dravok donne l'impression d'un monde forgé dans la pression, le feu et la matière brute."
  },
  {
    title: "Nerithis",
    kicker: "En bas à gauche",
    text: "Planète bleue du système, Nerithis est un monde d'eau et de circulation, où les flux semblent couler avec une abondance presque inépuisable."
  },
  {
    title: "Sylvae",
    kicker: "En haut à droite",
    text: "La plus proche de la Terre Pandorienne, Sylvae évoque un équilibre familier, vivant, stable en apparence et profondément habitable."
  },
  {
    title: "Pyraxis",
    kicker: "En bas à droite",
    text: "Planète solaire possédant son propre soleil, Pyraxis rayonne comme un monde autonome, incandescent et presque souverain dans sa lumière."
  },
  {
    title: "Asterion Pandoris",
    kicker: "Au centre",
    text: "Planète royale du peuple de l'espace, Asterion Pandoris occupe le cœur de l'ensemble comme un centre politique, symbolique et cosmique."
  }
];

const livingMapRegions = [
  {
    slug: "passage",
    name: "Le Passage",
    kicker: "Seuil du monde",
    mood: "Naissance, éveil, premier contact",
    text: "Lieu d'ouverture et de sensation brute, Le Passage agit comme une frontière vivante entre l'inconnu et la conscience du monde. C'est là que la perception s'ouvre, que le souffle de Pandorus se fait entendre pour la première fois et que tout commence à vibrer autrement.",
    paths: [
      {
        title: "Fonction",
        text: "Zone de bascule entre l'errance et l'entrée véritable dans l'histoire."
      },
      {
        title: "Présences liées",
        text: "Shaushana, Franklin, les premières créatures et les signes du vivant."
      }
    ]
  },
  {
    slug: "passar",
    name: "Passar",
    kicker: "Fleuve habité",
    mood: "Refuge fragile, survie, fraternité",
    text: "Le Passar porte une vie plus humaine, plus précaire, mais aussi plus fraternelle. Le bidonville s'y accroche comme une respiration incertaine au bord du fleuve, dans un équilibre fragile entre accueil, pauvreté, protection et menace constante.",
    paths: [
      {
        title: "Fonction",
        text: "Premier ancrage social du récit et lieu de communauté."
      },
      {
        title: "Présences liées",
        text: "Franklin, Mike, Gérôm, le Capitaine et les créatures proches du fleuve."
      }
    ]
  },
  {
    slug: "veyirne",
    name: "Veyrine",
    kicker: "Fleuve de comparaison",
    mood: "Observation, doute, disparition",
    text: "Le Veyrine existe comme un repère de mesure autant que comme un lieu d'inquiétude. C'est en le comparant au Passar que le déséquilibre du vivant devient plus net, et c'est autour de lui que l'ombre de la disparition du Capitaine prend corps.",
    paths: [
      {
        title: "Fonction",
        text: "Lieu d'enquête sur l'altération du vivant."
      },
      {
        title: "Présences liées",
        text: "Franklin, le Capitaine et la mémoire d'une expédition inachevée."
      }
    ]
  },
  {
    slug: "bassai",
    name: "Bassaï",
    kicker: "Épreuve du fleuve",
    mood: "Passage, profondeur, monde conscient",
    text: "Le Bassaï n'est pas seulement un cours d'eau à traverser. Il agit comme une épreuve fluide, attentive, presque rituelle, où les voyageurs comprennent que Pandorus ne se laisse pas parcourir sans répondre, observer ou éprouver ceux qui avancent.",
    paths: [
      {
        title: "Fonction",
        text: "Seuil exigeant avant l'accès aux territoires plus anciens."
      },
      {
        title: "Présences liées",
        text: "Shaushana, Shan, Franklin, papillons d'eau et créatures du fleuve."
      }
    ]
  },
  {
    slug: "vrax",
    name: "Vrax",
    kicker: "Territoire ancien",
    mood: "Veille, intelligence, défense sacrée",
    text: "Le Vrax est l'un des territoires les plus conscients de Pandorus. Tout y semble organisé selon une logique plus ancienne que les héros eux-mêmes : gardiennes, protecteurs, flux et présences y composent une réponse collective à toute altération ou intrusion.",
    paths: [
      {
        title: "Fonction",
        text: "Centre de veille, de protection et de réponse du vivant."
      },
      {
        title: "Présences liées",
        text: "Harry PY, Gardien Isma, Wingard, Lévy, Ossah Lyla et Nastaz."
      }
    ]
  },
  {
    slug: "terre-pandorienne",
    name: "Terre Pandorienne",
    kicker: "Trame globale",
    mood: "Mémoire, diversité, équilibre instable",
    text: "La Terre Pandorienne rassemble des zones très différentes mais reliées par un même souffle. On y sent à la fois la beauté vaste du monde, les traces d'une guerre ancienne et le retour progressif de tensions qui réveillent les territoires les uns après les autres.",
    paths: [
      {
        title: "Fonction",
        text: "Vue d'ensemble du monde vécu, habité et traversé par le récit."
      },
      {
        title: "Présences liées",
        text: "L'ensemble des foyers, fleuves, routes et mémoires de Pandorus."
      }
    ]
  },
  {
    slug: "village-renards",
    name: "Village des Renards",
    kicker: "Village meurtri",
    mood: "Deuil, veille, réponse naissante",
    text: "Au sud du Vrax, le village des Renards apparaît comme le premier lieu où l'altération devient une violence organisée contre une communauté entière. Entre renards en veille, structures frappées et silence de deuil, il devient aussi le lieu de naissance d'une réponse collective nouvelle.",
    paths: [
      {
        title: "Fonction",
        text: "Transformer le récit en front communautaire face à une volonté hostile consciente."
      },
      {
        title: "Présences liées",
        text: "Tsune, Hez, Javier, Harry PY, Lévy, Kuji et Elennya."
      }
    ]
  },
  {
    slug: "sombrail",
    name: "Embouchure du Sombrail",
    kicker: "Seuil atteint",
    mood: "Horizon, mémoire, réponses anciennes",
    text: "L'embouchure du Sombrail est désormais atteinte. Entre fleuve et mer pandorienne, elle expose un territoire déjà fragilisé, mais aussi un lieu où la mémoire ancienne résiste encore à ce qui cherche à remplacer le vivant.",
    paths: [
      {
        title: "Fonction",
        text: "Faire passer la quête d'une direction annoncée à une révélation vécue."
      },
      {
        title: "Présences liées",
        text: "Shaushana, Shan, Franklin, Lévy, Tsune, Brad, Bradlette, Ab'Youbi, Syne, Ezze, Gil et Filston."
      }
    ]
  },
  {
    slug: "taverne-sombrail",
    name: "Taverne du Sombrail",
    kicker: "Archive habitée",
    mood: "Bois ancien, mémoire, silence tendu",
    text: "La taverne du Sombrail tient comme une archive vivante. On y entre pour s'abriter, mais on y découvre surtout des survivants, des souvenirs capables d'absorber le présent, et une boîte que Syne garde au seuil du visible.",
    paths: [
      {
        title: "Fonction",
        text: "Relier la Communauté des Papillons aux Briscards, à Elrick jeune et à l'origine ancienne du déséquilibre."
      },
      {
        title: "Présences liées",
        text: "Brad, Bradlette, Ab'Youbi, Syne, Ezze, Gil, Filston, Mitra Séssé, Papy Perquis et Padre Souf."
      }
    ]
  },
  {
    slug: "vert",
    name: "Le Vert",
    kicker: "Royaume vivant",
    mood: "Densité, royauté animale, résistance ancienne",
    text: "Le Vert n'est pas une simple forêt. C'est un espace où la vie reste dense malgré le dérèglement, où les peuples animaux lisent encore le monde, et où Eben tient une forme d'autorité reconnue par le lieu lui-même.",
    paths: [
      {
        title: "Fonction",
        text: "Faire converger la quête du Capitaine, la blessure de Shan et une autre lecture du vivant souverain."
      },
      {
        title: "Présences liées",
        text: "Eben, Macagardiens, Gorillanges, Nonstitis, Serpensouffres, Shan, Shaushana, Franklin, Ezze et Ab'Youbi."
      }
    ]
  },
  {
    slug: "ruines-vert",
    name: "Ruines du Vert",
    kicker: "Lieu vidé",
    mood: "Absence, captivité, souffle retenu",
    text: "Au cœur d'une zone que la vie semble avoir désertée, les ruines du Vert abritent un vide actif, des pierres brisées et une vérité longtemps tenue hors champ : le Capitaine y est retrouvé vivant mais captif.",
    paths: [
      {
        title: "Fonction",
        text: "Transformer la rumeur en preuve et relancer la quête humaine au centre d'un territoire déjà rééquilibré par le duel de Shan et Eben."
      },
      {
        title: "Présences liées",
        text: "Capitaine, Franklin, Shan, Shaushana, Lévy, Tsune, Ezze, Gil, Filston."
      }
    ]
  },
  {
    slug: "sombra",
    name: "Sombra",
    kicker: "Direction de l'ouest",
    mood: "Veille blanche, lecture, créatrices en retrait",
    text: "La Sombra n'est pas encore atteinte, mais elle devient une direction majeure du récit : le lieu où Bichette, Reine du Blanc, ainsi que Luna Queen et Méli Mélo pourraient offrir une lecture plus fine du dérèglement qui revient.",
    paths: [
      {
        title: "Fonction",
        text: "Ouvrir la prochaine grande étape stratégique au-delà du Vert et du Sombrail."
      },
      {
        title: "Présences liées",
        text: "Bichette, Luna Queen, Méli Mélo, Brad, Bradlette, la Communauté des Papillons."
      }
    ]
  }
];

const characterRouteMap = {
  shan: "#fiches",
  shaushana: "#fiches-shaushana",
  franklin: "#fiches-franklin",
  mike: "#fiches-mike",
  gerom: "#fiches-gerom",
  "gerom": "#fiches-gerom",
  elrick: "#fiches-elrick",
  "elrick-jeune": "#fiches-elrick",
  eben: "#fiches-eben",
  capitaine: "#fiches-capitaine",
  "harry-py": "#fiches-harry-py",
  "pandorus-games-harry-py": "#fiches-harry-py",
  "gardien-isma": "#fiches-gardien-isma",
  wingard: "#fiches-wingard",
  "games-wingard": "#fiches-wingard",
  levy: "#fiches-levy",
  "ossah-lyla": "#fiches-ossah-lyla",
  nastaz: "#fiches-nastaz",
  tsune: "#fiches-tsune",
  hez: "#fiches-hez",
  javier: "#fiches-javier",
  kuji: "#fiches-kuji",
  elennya: "#fiches-elennya",
  ezze: "#fiches-ezze",
  "gil-et-filston": "#fiches-gil-et-filston",
  gil: "#fiches-gil-et-filston",
  filston: "#fiches-gil-et-filston",
  "brad-et-bradlette": "#fiches-brad-et-bradlette",
  brad: "#fiches-brad-et-bradlette",
  bradlette: "#fiches-brad-et-bradlette",
  abyoubi: "#fiches-abyoubi",
  "ab-youbi": "#fiches-abyoubi",
  syne: "#fiches-syne",
  "mitra-sesse": "#fiches-mitra-sesse",
  "mitra-séssé": "#fiches-mitra-sesse",
  "papy-perquis": "#fiches-papy-perquis",
  "padre-souf": "#fiches-padre-souf",
  bichette: "#fiches-bichette",
  "luna-queen": "#fiches-luna-queen",
  "meli-melo": "#fiches-meli-melo",
  "méli-mélo": "#fiches-meli-melo"
};

const characterPrimaryLocationMap = {
  shan: "#lieux-vrax",
  shaushana: "#lieux-passage",
  franklin: "#lieux-passar",
  mike: "#lieux-bidonville-du-passar",
  gerom: "#lieux-passar",
  elrick: "#lieux-bassai",
  eben: "#lieux-vert",
  capitaine: "#lieux-ruines-du-vert",
  "harry-py": "#lieux-fleuve-sylvae",
  "gardien-isma": "#lieux-vrax",
  wingard: "#lieux-vrax",
  levy: "#lieux-coeur-du-vrax",
  "ossah-lyla": "#lieux-coeur-du-vrax",
  nastaz: "#lieux-coeur-du-vrax",
  tsune: "#lieux-village-renards",
  hez: "#lieux-village-renards",
  javier: "#lieux-village-renards",
  kuji: "#lieux-village-renards",
  elennya: "#lieux-village-renards",
  ezze: "#lieux-taverne-du-sombrail",
  "gil-et-filston": "#lieux-taverne-du-sombrail",
  gil: "#lieux-taverne-du-sombrail",
  filston: "#lieux-taverne-du-sombrail",
  "brad-et-bradlette": "#lieux-taverne-du-sombrail",
  brad: "#lieux-taverne-du-sombrail",
  bradlette: "#lieux-taverne-du-sombrail",
  abyoubi: "#lieux-taverne-du-sombrail",
  "ab-youbi": "#lieux-taverne-du-sombrail",
  syne: "#lieux-taverne-du-sombrail",
  "mitra-sesse": "#lieux-taverne-du-sombrail",
  "papy-perquis": "#lieux-taverne-du-sombrail",
  "padre-souf": "#lieux-taverne-du-sombrail",
  bichette: "#lieux-sombra",
  "luna-queen": "#lieux-sombra",
  "meli-melo": "#lieux-sombra",
  "méli-mélo": "#lieux-sombra",
  "le-vert": "#lieux-vert",
  vert: "#lieux-vert",
  "ruines-du-vert": "#lieux-ruines-du-vert",
  sombra: "#lieux-sombra",
  "taverne-du-sombrail": "#lieux-taverne-du-sombrail"
};

const staticFicheContextMap = {
  "shan-panel": [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#chronologie", label: "Suivre son parcours" },
    { href: "#lieux-vrax", label: "Lire le Vrax" }
  ],
  "shaushana-panel": [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#chronologie", label: "Suivre ses bascules" },
    { href: "#lieux-passage", label: "Relire Le Passage" }
  ],
  "franklin-panel": [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#chronologie", label: "Suivre son éveil" },
    { href: "#lieux-passar", label: "Relire le Passar" }
  ],
  "mike-panel": [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#chronologie", label: "Lire les événements" },
    { href: "#lieux-bidonville-du-passar", label: "Voir le bidonville" }
  ],
  "gerom-panel": [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#chronologie", label: "Lire les événements" },
    { href: "#lieux-passar", label: "Relire le Passar" }
  ],
  "elrick-panel": [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#chronologie", label: "Voir sa place dans l'histoire" },
    { href: "#lieux-bassai", label: "Lire le Bassaï" }
  ]
};

const additionalFicheContextMap = {
  "harry-py": [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#chronologie", label: "Suivre la piste au sud" },
    { href: "#lieux-fleuve-sylvae", label: "Lire le fleuve Sylvae" }
  ],
  "gardien-isma": [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#chronologie", label: "Voir le cœur du conflit" },
    { href: "#lieux-vrax", label: "Relire le Vrax" }
  ],
  wingard: [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#chronologie", label: "Voir les affrontements" },
    { href: "#lieux-vrax", label: "Relire le Vrax" }
  ],
  levy: [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#chronologie", label: "Suivre son départ" },
    { href: "#lieux-coeur-du-vrax", label: "Lire le cœur du Vrax" }
  ],
  "ossah-lyla": [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#chronologie", label: "Voir la révélation" },
    { href: "#lieux-coeur-du-vrax", label: "Lire le cœur du Vrax" }
  ],
  nastaz: [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#chronologie", label: "Voir la révélation" },
    { href: "#lieux-coeur-du-vrax", label: "Lire le cœur du Vrax" }
  ],
  eben: [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#chronologie", label: "Lire son empreinte" },
    { href: "#lieux-vert", label: "Lire le Vert" }
  ],
  capitaine: [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#mysteres", label: "Ouvrir le mystère" },
    { href: "#lieux-ruines-du-vert", label: "Lire les ruines du Vert" }
  ],
  tsune: [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#lieux-village-renards", label: "Lire le village des Renards" },
    { href: "#chronologie", label: "Voir la Communauté des Papillons" }
  ],
  hez: [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#lieux-village-renards", label: "Lire le village des Renards" },
    { href: "#chronologie", label: "Voir le basculement du sud" }
  ],
  javier: [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#lieux-village-renards", label: "Lire le village des Renards" },
    { href: "#chronologie", label: "Voir la veille du village" }
  ],
  kuji: [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#mysteres", label: "Ouvrir les nouveaux mystères" },
    { href: "#lieux-village-renards", label: "Lire le village frappé" }
  ],
  elennya: [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#mysteres", label: "Ouvrir les nouveaux mystères" },
    { href: "#lieux-embouchure-du-sombrail", label: "Voir la prochaine direction" }
  ],
  ezze: [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#lieux-vert", label: "Suivre la route du Vert" },
    { href: "#chronologie", label: "Suivre son parcours" }
  ],
  "gil-et-filston": [
    { href: "#relations", label: "Voir leurs liens" },
    { href: "#lieux-taverne-du-sombrail", label: "Lire la taverne" },
    { href: "#mysteres", label: "Ouvrir la frontière du réel" }
  ],
  "brad-et-bradlette": [
    { href: "#relations", label: "Voir leurs liens" },
    { href: "#lieux-taverne-du-sombrail", label: "Lire leur taverne" },
    { href: "#chronologie", label: "Voir le souvenir des Briscards" }
  ],
  abyoubi: [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#lieux-vert", label: "Voir son passage dans le Vert" },
    { href: "#mysteres", label: "Ouvrir les mystères" }
  ],
  syne: [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#lieux-taverne-du-sombrail", label: "Lire la taverne" },
    { href: "#mysteres", label: "Lire le mystère de la boîte" }
  ],
  "mitra-sesse": [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#mysteres", label: "Lire les Briscards" },
    { href: "#chronologie", label: "Voir la guerre ancienne" }
  ],
  "papy-perquis": [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#mysteres", label: "Lire les Briscards" },
    { href: "#chronologie", label: "Voir la mémoire ancienne" }
  ],
  "padre-souf": [
    { href: "#relations", label: "Voir ses liens" },
    { href: "#mysteres", label: "Lire les Briscards" },
    { href: "#chronologie", label: "Voir la mémoire ancienne" }
  ],
  bichette: [
    { href: "#lieux-sombra", label: "Voir la Sombra" },
    { href: "#mysteres", label: "Lire la nouvelle direction" },
    { href: "#relations", label: "Voir ses liens" }
  ],
  "luna-queen": [
    { href: "#lieux-sombra", label: "Voir la Sombra" },
    { href: "#mysteres", label: "Lire la nouvelle direction" },
    { href: "#relations", label: "Voir ses liens" }
  ],
  "meli-melo": [
    { href: "#lieux-sombra", label: "Voir la Sombra" },
    { href: "#mysteres", label: "Lire la nouvelle direction" },
    { href: "#relations", label: "Voir ses liens" }
  ]
};

const creatureContextMap = {
  "aligaphoque": [
    { href: "#lieux-embouchure-du-sombrail", label: "Lire le Sombrail" },
    { href: "#chronologie", label: "Voir l'attaque du fleuve" }
  ],
  "aligaroi": [
    { href: "#lieux-embouchure-du-sombrail", label: "Lire le Sombrail" },
    { href: "#fiches-abyoubi", label: "Voir Ab'Youbi" }
  ],
  "bouldouger": [
    { href: "#lieux-ruines-du-vert", label: "Lire les ruines du Vert" },
    { href: "#chronologie", label: "Voir la guerre des ruines" }
  ],
  "canidaigle": [
    { href: "#lieux-vert", label: "Lire le Vert" },
    { href: "#chronologie", label: "Voir le deuil du Capitaine" }
  ],
  "croconha": [
    { href: "#lieux-bassai", label: "Voir le Bassaï" },
    { href: "#chronologie", label: "Lire les traverses" }
  ],
  "felou": [
    { href: "#fiches-shaushana", label: "Voir Shaushana" },
    { href: "#chronologie", label: "Lire le premier basculement" }
  ],
  "felours": [
    { href: "#lieux-passar", label: "Lire le Passar" },
    { href: "#chronologie", label: "Voir les tensions du vivant" }
  ],
  "gorillange": [
    { href: "#lieux-vert", label: "Lire le Vert" },
    { href: "#fiches-eben", label: "Voir Eben" }
  ],
  "gueplynx": [
    { href: "#lieux-coeur-du-vrax", label: "Lire le coeur du Vrax" },
    { href: "#chronologie", label: "Voir l'affrontement" }
  ],
  "kingkoala": [
    { href: "#lieux-sombra", label: "Voir la Sombra" },
    { href: "#chronologie", label: "Lire la route de l'ouest" }
  ],
  "luminael": [
    { href: "#lieux-passage", label: "Relire Le Passage" },
    { href: "#cartes", label: "Voir les cartes" }
  ],
  "lumineau": [
    { href: "#lieux-embouchure-du-sombrail", label: "Lire le Sombrail" },
    { href: "#chronologie", label: "Voir les Lumineaux" }
  ],
  "macagardien": [
    { href: "#lieux-vert", label: "Lire le Vert" },
    { href: "#fiches-eben", label: "Voir Eben" }
  ],
  "nignoble": [
    { href: "#mysteres", label: "Voir les mystères" },
    { href: "#chronologie", label: "Lire les signes d'altération" }
  ],
  "nogard": [
    { href: "#lieux-ruines-du-vert", label: "Lire les ruines du Vert" },
    { href: "#chronologie", label: "Voir la chute de Nogard" }
  ],
  "nonstiti": [
    { href: "#lieux-vert", label: "Lire le Vert" },
    { href: "#chronologie", label: "Voir l'entrée dans le Vert" }
  ],
  "parasite": [
    { href: "#fiches-capitaine", label: "Voir le Capitaine" },
    { href: "#chronologie", label: "Lire la transmission" }
  ],
  "renastar": [
    { href: "#lieux-passage", label: "Relire Le Passage" },
    { href: "#chronologie", label: "Voir les premières traversées" }
  ],
  "reptidile": [
    { href: "#lieux-bassai", label: "Voir le Bassaï" },
    { href: "#chronologie", label: "Lire les traverses" }
  ],
  "scarabeast": [
    { href: "#lieux-vrax", label: "Voir le Vrax" },
    { href: "#chronologie", label: "Voir les tensions du vivant" }
  ],
  "serpensouffre": [
    { href: "#lieux-vert", label: "Lire le Vert" },
    { href: "#chronologie", label: "Voir l'attaque depuis la canopée" }
  ],
  "serpours": [
    { href: "#lieux-passar", label: "Relire le Passar" },
    { href: "#chronologie", label: "Lire les épreuves" }
  ],
  "verdeflor": [
    { href: "#lieux-passage", label: "Relire Le Passage" },
    { href: "#mysteres", label: "Voir les mystères" }
  ],
  "poiscaille": [
    { href: "#lieux-village-des-renards", label: "Lire le village des Renards" },
    { href: "#chronologie", label: "Voir l'assaut du village" }
  ],
  "chauve-souloup": [
    { href: "#lieux-village-des-renards", label: "Lire le village des Renards" },
    { href: "#chronologie", label: "Voir l'assaut du village" }
  ]
};

const locationFiches = createLocationFiches(buildMediaPath);

const locationHashPanelMap = Object.fromEntries(
  locationFiches.map((fiche) => [`#lieux-${fiche.slug}`, `lieu-panel-${fiche.slug}`])
);

let loreLinkEntriesCache = null;
let loreLinkRegexCache = null;

const sectionWhispers = {
  home: "Entrer dans l'archive vivante de Pandorus.",
  fiches: "Les visages qui portent, blessent ou transforment le monde.",
  relations: "Ce qui lie, protège, transmet ou oppose.",
  chronologie: "Le temps où Pandorus se révèle, se fracture et répond.",
  chapitres: "Les portes du récit, ouvertes une à une.",
  personnages: "Les présences du monde, vues dans leur ensemble.",
  lieux: "Les territoires, fleuves et seuils qui donnent sa respiration au récit.",
  creatures: "Le vivant dans sa beauté, sa peur et son instinct.",
  test: "Un miroir pandorien fait de choix, de seuils et d'affinités.",
  mysteres: "Ce qui résiste encore à une lecture pleine.",
  cartes: "Les formes du monde, des cieux et des territoires conscients."
};

const landingOracleEntries = [
  {
    kicker: "Mise en lumière",
    title: "Shaushana",
    text: "Figure d'éveil et de lien profond au vivant, Shaushana semble avancer dans le monde comme si celui-ci la reconnaissait déjà.",
    href: "#fiches-shaushana",
    label: "Lire la fiche"
  },
  {
    kicker: "Territoire",
    title: "Le Vrax",
    text: "Plus qu'un lieu, le Vrax agit comme une intelligence territoriale : il veille, mesure, réagit et organise sa propre défense.",
    href: "#cartes",
    label: "Voir les cartes"
  },
  {
    kicker: "Créature",
    title: "Renastar",
    text: "Le Renastar porte la part la plus vive et la plus gracieuse du bestiaire, entre élégance, vitesse et instinct de survie.",
    href: "#creatures",
    label: "Explorer le bestiaire"
  },
  {
    kicker: "Mystère",
    title: "La disparition du Capitaine",
    text: "Son absence continue de peser dans le monde comme une question ouverte, jamais tout à fait apaisée.",
    href: "#mysteres",
    label: "Ouvrir les mystères"
  }
];

const pandorusImageFiles = [
  "Abou.jpg",
  "Aboudakar.jpg",
  "AbYoubi.png",
  "Balade.jpg",
  "Balak'Oss.jpg",
  "Barbo.png",
  "Bella.jpg",
  "Bichette.png",
  "Boubou.jpg",
  "Bouldouger.png",
  "Brad et Bradlette.jpg",
  "Bridge.png",
  "Bulldozer Jacob.jpg",
  "Capitaine.png",
  "Cendr'oïde.png",
  "Cheeto.png",
  "Christinha.jpg",
  "Dakab.png",
  "Dakka.png",
  "Dakman.png",
  "Damiaxmax.png",
  "Datcho.png",
  "Davbo.png",
  "Eben.jpg",
  "El Kahi.png",
  "Elennya.png",
  "Elna.png",
  "Elrick Jeune.png",
  "Elrick.png",
  "Ezze.png",
  "Fadoo.png",
  "Filsrus.jpg",
  "Franklin.png",
  "Wingard.png",
  "Gardien Isma.png",
  "Gérôm.png",
  "Gigi'.png",
  "Gil et Filston.jpg",
  "Hamno et Elna.png",
  "Hamno.png",
  "Hez.jpg",
  "Insect Master.png",
  "Jada du Moulin Ado.png",
  "Jada du Moulin enfant.png",
  "Javier.png",
  "Jess.png",
  "Karinsha.jpg",
  "Kensha.png",
  "Kippz.png",
  "Kuji 2.png",
  "Kuji.png",
  "La Gardienne Rabiaz.png",
  "Lady Pink.png",
  "L'alien.png",
  "Le roi de l'eau.png",
  "L'éclair.png",
  "Lévy.png",
  "Luna Queen.png",
  "Lyssah.jpg",
  "Malha.jpg",
  "Master Geek Mikhaïl.png",
  "Mathéo.png",
  "Méli Mélo.png",
  "Mike.png",
  "Mitra Séssé.jpg",
  "Mugniweh.png",
  "Nanah.jpg",
  "Nastaz.png",
  "Nogard.jpg",
  "O'Sama.jpg",
  "Ossah Lyla.png",
  "Padre Souf.png",
  "Harry PY.png",
  "Papy Perquis.jpg",
  "Shan.jpg",
  "Shaushana.jpg",
  "Sibbeer.jpg",
  "Sunpriz.jpg",
  "Syne.jpg",
  "Trio des soeurs.png",
  "Tsune.jpg",
  "Valade.jpg",
  "Virlo.jpg",
  "Will le Tigre Bois.jpg",
  "Zaïnob.jpg",
  "Zeeru.png"
];

const pandorusImages = pandorusImageFiles.map((fileName) => {
  const safeFileName = encodeURIComponent(fileName).replace(/'/g, "%27");
  return `./media/pandorus/${safeFileName}`;
});

const creatureImageFiles = [
  "Aligaphoque.png",
  "Aligaroi.png",
  "Croconha.png",
  "Félou.png",
  "Felours.png",
  "Gorillange.png",
  "Gueplynx.png",
  "Luminaël.png",
  "Lumineau.png",
  "Macagardien.png",
  "Nignoble.png",
  "Nonstiti.png",
  "Renastar.png",
  "Reptidile.png",
  "Scarabeast.png",
  "Serpensouffre.png",
  "Serpours.png",
  "Verdeflor.png"
];

const creatureImages = creatureImageFiles.map((fileName) => {
  const safeFileName = encodeURIComponent(fileName).replace(/'/g, "%27");
  return `./media/creatures/${safeFileName}`;
});

function shuffleArray(values) {
  const copy = [...values];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function renderLandingMarquee() {
  const track = document.getElementById("landing-marquee-track");
  if (!track) return;

  const items = [
    ...pandorusImageFiles.map((fileName) => ({
      name: fileName.replace(/\.(png|jpg|jpeg|webp)$/i, ""),
      src: buildMediaPath("pandorus", fileName),
      type: "character"
    })),
    ...creatureImageFiles.map((fileName) => ({
      name: fileName.replace(/\.(png|jpg|jpeg|webp)$/i, ""),
      src: buildMediaPath("creatures", fileName),
      type: "creature"
    }))
  ];

  const shuffledItems = shuffleArray(items);
  const marqueeItems = [...shuffledItems, ...shuffledItems];
  track.innerHTML = "";
  track.style.animationDuration = `${Math.max(70, shuffledItems.length * 1.4)}s`;

  marqueeItems.forEach((item) => {
    const card = document.createElement("a");
    const targetLink = item.type === "creature"
      ? getCreatureImageLink(item.name)
      : getPandorusImageLink(item.src, item.name);

    card.className = `landing-marquee-card${item.type === "creature" ? " creature" : ""}`;
    card.href = targetLink.startsWith("./media/")
      ? (item.type === "creature" ? "#creatures" : "#personnages")
      : targetLink;
    card.innerHTML = `
      <img src="${item.src}" alt="${item.name}" loading="lazy" decoding="async">
      <figcaption>${item.name}</figcaption>
    `;
    track.appendChild(card);
  });
}

const relationNodes = [
  {
    name: "Shaushana",
    role: "Force centrale du récit",
    links: [
      { target: "Shan", type: "Alliance naissante", description: "Leur lien commence par l'affrontement, puis evolue vers le respect, l'attirance et un veritable tandem de route." },
      { target: "Franklin", type: "Protection et confiance", description: "Shaushana sauve Franklin, puis accepte de suivre son monde et de marcher a ses cotes." },
      { target: "Elrick", type: "Transmission", description: "Elrick reconnait en elle une figure cle et lui transmet une part de la mémoire ancienne du monde." },
      { target: "Mike", type: "Allie indirect", description: "Elle protège le groupe dont Mike fait partie et devient liee au destin de sa communaute." },
      { target: "Gérôm", type: "Respect prudent", description: "Leur lien passe par la confiance progressive au sein du Passar et face au danger commun." },
      { target: "Gardien Isma", type: "Affrontement", description: "Dans le Vrax, Shaushana se heurte a une force d'interception qui agit comme un organe du territoire plus que comme un simple adversaire." },
      { target: "Wingard", type: "Desorientation", description: "Le vent de Wingard casse ses appuis et l'oblige a combattre sans la maîtrise instinctive qu'elle garde d'ordinaire." },
      { target: "Ossah Lyla", type: "Reconnaissance", description: "Au coeur du Vrax, Ossah Lyla lit chez Shaushana une présence déjà reliee aux papillons, au vivant et a une ancienne nécessité du monde." },
      { target: "Nastaz", type: "Lecture lucide", description: "Nastaz ne la traite pas comme une simple intruse: elle voit en Shaushana une figure impliquee dans ce qui vient, et non un danger ordinaire." },
      { target: "Tsune", type: "Alliance nouvelle", description: "Au village des renards, Tsune reconnait en Shaushana un point d'equilibre fiable et rejoint naturellement la direction qu'elle contribue a tenir." },
      { target: "Kuji", type: "Opposition idéologique", description: "Face a Kuji, Shaushana perçoit une volonté qui ne veut pas seulement corrompre le vivant, mais le remplacer par un ordre controle." }
    ]
  },
  {
    name: "Shan",
    role: "Combattant solitaire devenu allié",
    links: [
      { target: "Shaushana", type: "Attraction et rivalité", description: "Shan est d'abord provoque par sa force, puis attire par ce qu'elle révèle du monde et de lui-meme." },
      { target: "Franklin", type: "Compagnon de route", description: "Leur lien se construit dans l'action, le voyage et la nécessité de protèger le meme groupe." },
      { target: "Elrick", type: "Reconnaissance tacite", description: "Elrick comprend rapidement ce que Shan porte comme violence, survie et fatigue interieure." },
      { target: "Eben", type: "Traumatisme fondateur", description: "Eben est la creature liee a la mort de ses parents et a la fracture decisive de son enfance." },
      { target: "Wingard", type: "Contrepoint de combat", description: "Wingard le met en echec par la vitesse, la pression du vent et une lecture du terrain que Shan ne peut pas imposer." },
      { target: "Gardien Isma", type: "Force d'opposition", description: "Gardien Isma incarne face a lui une puissance plus stable, plus dense et presque impossible a deborder frontalement." },
      { target: "Ossah Lyla", type: "Apaisement forcé", description: "L'intervention d'Ossah Lyla casse la logique du duel pur et oblige Shan a comprendre que tout ne peut pas se regler par la seule frappe." },
      { target: "Tsune", type: "Respect guerrier", description: "Shan reconnait chez Tsune une violence tenue, precise, nee de la protection d'un lieu deja frappe." },
      { target: "Kuji", type: "Cible nouvelle", description: "La mort de Hez et la froideur de Kuji donnent a Shan une direction plus nette que la simple rage: il veut retrouver celui qui incarne cette volonté de remplacement." }
    ]
  },
  {
    name: "Franklin",
    role: "Lien humain du groupe",
    links: [
      { target: "Shaushana", type: "Confiance immédiate", description: "Franklin fait entrer Shaushana dans le monde du Passar et devient son premier repere humain." },
      { target: "Shan", type: "Camaraderie de terrain", description: "Ils avancent ensemble vers le Vrax et se soudent au milieu du danger." },
      { target: "Mike", type: "Fraternité", description: "Mike fait partie de son noyau affectif et communautaire au bidonville." },
      { target: "Gérôm", type: "Fraternité", description: "Gérôm est l'un de ses appuis les plus stables dans la vie du Passar." },
      { target: "Elrick", type: "Recherche d'aide", description: "Franklin accepte l'autorite tranquille d'Elrick pour comprendre ce qui atteint le vivant." },
      { target: "Capitaine", type: "Memoire de guide", description: "L'expedition menee avec le Capitaine vers le Veyrine structure sa lecture du déséquilibre et son besoin de trouver des réponses." },
      { target: "Lévy", type: "Singularite percue", description: "Lévy sent en Franklin quelque chose de distinct, comme un lien que le Vrax reconnait avant de l'expliquer." },
      { target: "Gardien Isma", type: "Capture", description: "Gardien Isma devient celui qui le saisit au moment de l'interception dans le Vrax." },
      { target: "Ossah Lyla", type: "Révélation", description: "Ossah Lyla confirme que Franklin porte la trace d'une ancienne lignee du Vrax et qu'il n'est pas la par accident." },
      { target: "Nastaz", type: "Mise en garde", description: "Nastaz comprend que son lien peut l'aider autant que le destabiliser si Franklin avance sans saisir ce que le Vrax réveille en lui." },
      { target: "Tsune", type: "Convergence", description: "Au village des renards, Franklin comprend avec Tsune que leur réponse ne peut plus rester locale ou séparée." },
      { target: "Kuji", type: "Menace consciente", description: "Kuji fait comprendre a Franklin que ce qu'ils affrontent n'est plus un dérèglement aveugle, mais une volonté organisee." }
    ]
  },
  {
    name: "Mike",
    role: "Frère blessé du Passar",
    links: [
      { target: "Franklin", type: "Fraternité directe", description: "Leur lien est affectif, vital et au coeur de la dimension humaine du bidonville." },
      { target: "Gérôm", type: "Protection fraternelle", description: "Gérôm veille sur lui dans les moments de crise et lors de sa blessure." },
      { target: "Shaushana", type: "Alliance de survie", description: "Mike fait partie du groupe sauve et defendu par l'arrivee de Shaushana." }
    ]
  },
  {
    name: "Gérôm",
    role: "Pilier calme du Passar",
    links: [
      { target: "Franklin", type: "Fraternité solide", description: "Ils forment ensemble un appui humain central dans la vie du Passar." },
      { target: "Mike", type: "Veille protectrice", description: "Gérôm agit comme une présence stable et protectrice aupres de Mike." },
      { target: "Shaushana", type: "Confiance progressive", description: "Il l'accueille avec prudence puis la reconnait comme alliee du groupe." },
      { target: "Shan", type: "Observation prudente", description: "Il observe Shan avec reserve, sans lui offrir d'emblee une confiance totale." }
    ]
  },
  {
    name: "Elrick",
    role: "Gardien de mémoire",
    links: [
      { target: "Shaushana", type: "Transmission du passé", description: "Il voit en elle une force liee a l'equilibre plus profond du monde et lui transmet une mémoire ancienne." },
      { target: "Shan", type: "Lecture intime", description: "Elrick reconnait chez Shan le poids de la survie et d'une histoire brisee." },
      { target: "Franklin", type: "Guide provisoire", description: "Il aide Franklin et le groupe a comprendre l'ampleur du déséquilibre qui les depasse." },
      { target: "Ancienne guerre", type: "Héritage", description: "Elrick demeure relie a la grande guerre contre l'ombre, qui structure encore sa vision du monde." }
    ]
  },
  {
    name: "Eben",
    role: "Présence sauvage fondatrice",
    links: [
      { target: "Shan", type: "Traumatisme puis rééquilibrage", description: "Eben tue les parents de Shan, épargne l'enfant, puis retrouve l'adulte au coeur du Vert dans un duel qui transforme enfin leur lien." },
      { target: "Parents de Shan", type: "Affrontement fatal", description: "Les parents de Shan veulent vaincre Eben comme une cible absolue et meurent face à une présence qu'ils lisent trop mal." },
      { target: "Le Vert", type: "Royauté", description: "Eben n'apparait plus comme une simple bête, mais comme un roi accepté par le Vert et par les peuples animaux qui y vivent." }
    ]
  },
  {
    name: "Capitaine",
    role: "Guide retrouvé puis sacrifié",
    links: [
      { target: "Franklin", type: "Expédition", description: "Le Capitaine emmene Franklin jusqu'au Veyrine pour verifier si le déséquilibre du Passar touche aussi d'autres eaux." },
      { target: "Passar", type: "Responsabilité", description: "Sa lecture du fleuve et du vivant fait de lui l'un des premiers adultes a prendre la corruption du monde au serieux." },
      { target: "Veyrine", type: "Quête de réponse", description: "Le voyage vers le Veyrine marque son dernier grand geste connu avant sa disparition." },
      { target: "Déséquilibre du vivant", type: "Pressentiment", description: "Le Capitaine semble percevoir une présence invisible avant d'ordonner a Franklin de rentrer et de disparaitre seul." },
      { target: "Ruines du Vert", type: "Captivité", description: "La rumeur du Vert se révèle juste : le Capitaine est retrouvé vivant mais retenu dans une zone vidée, au centre de ruines anciennes." },
      { target: "Nogard et Bouldouger", type: "Transmission finale", description: "Avant de mourir, le Capitaine donne enfin un nom clair aux forces qui ont tenu sa captivité et relancé la guerre." }
    ]
  },
  {
    name: "Harry PY",
    role: "Premier protecteur du Vrax",
    links: [
      { target: "Gardien Isma", type: "Noyau protecteur", description: "Gardien Isma se place instinctivement autour de lui comme une defense nee de sa simple existence." },
      { target: "Wingard", type: "Centre de gravité", description: "Wingard revient toujours a l'axe que Harry impose au groupe, meme quand son energie deborde." },
      { target: "Lévy", type: "Lecture complétée", description: "Lévy complete ce que Harry ne peut plus porter seul face aux zones de vide du Vrax." },
      { target: "Ossah Lyla", type: "Veille diurne", description: "Ossah Lyla accompagne sa naissance et reconnait en lui une réponse necessaire du monde." },
      { target: "Nastaz", type: "Lucidité", description: "Nastaz comprend tout de suite qu'Harry PY n'est pas une anomalie, mais le debut d'une preparation." },
      { target: "Tsune", type: "Relais de terrain", description: "Au village des renards, Harry PY reconnait en Tsune un point d'appui local capable de tenir pendant que lui retourne transmettre au Vrax." },
      { target: "Javier", type: "Veille partagée", description: "Harry PY comprend que Javier restera un relais de perception et de defense pour le village apres son depart." }
    ]
  },
  {
    name: "Gardien Isma",
    role: "Force d'ancrage du Vrax",
    links: [
      { target: "Harry PY", type: "Protection instinctive", description: "Il se place naturellement entre Harry PY et toute menace potentielle." },
      { target: "Wingard", type: "Complément tactique", description: "Wingard ouvre, Gardien fixe, et leur combinaison donne au Vrax une interception brutale mais precise." },
      { target: "Lévy", type: "Coordination", description: "Lévy prepare le terrain et Gardien impose ensuite la force decisive qui manque au groupe." },
      { target: "Franklin", type: "Prise", description: "C'est lui qui saisit Franklin au coeur du chaos, comme s'il executait une nécessité plus vaste que lui." },
      { target: "Shan", type: "Opposition frontale", description: "Face a Shan, il incarne une puissance plus stable et plus dense que la seule violence du combat." }
    ]
  },
  {
    name: "Wingard",
    role: "Perturbation vive du Vrax",
    links: [
      { target: "Harry PY", type: "Recentrage", description: "Harry PY lui offre un centre vers lequel son chaos peut revenir." },
      { target: "Gardien Isma", type: "Appui croisé", description: "Le vent de Wingard desaxe les corps avant que Gardien ne puisse verrouiller l'espace." },
      { target: "Lévy", type: "Interception coordonnée", description: "Lévy agit sous le visible pendant que Wingard travaille l'air et la vitesse du combat." },
      { target: "Shan", type: "Déséquilibre", description: "Wingard neutralise la lecture habituelle du combat de Shan par la vitesse et par une pression invisible." },
      { target: "Franklin", type: "Encerclement", description: "Au moment critique, il referme l'espace autour de Franklin et empeche toute réponse immediate." },
      { target: "Shaushana", type: "Brisure de rythme", description: "Son vent casse les appuis et la synchronisation de Shaushana dans le Vrax." }
    ]
  },
  {
    name: "Lévy",
    role: "Ajustement discret du Vrax",
    links: [
      { target: "Harry PY", type: "Complément", description: "Lévy prolonge la lecture de Harry PY la ou les flux cessent simplement de repondre." },
      { target: "Gardien Isma", type: "Préparation du terrain", description: "Il modifie la matiere et les appuis afin que Gardien puisse ensuite imposer la capture." },
      { target: "Wingard", type: "Interception commune", description: "Lévy agit sous le visible pendant que Wingard travaille l'air et la vitesse du combat." },
      { target: "Franklin", type: "Singularité", description: "Avant les autres, il sent chez Franklin une présence ou un lien que le Vrax reconnait." },
      { target: "Shaushana", type: "Entrave", description: "Ses interventions cassent les prises, ralentissent le terrain et empechent une reaction simple du groupe." },
      { target: "Shan", type: "Compagnon de route", description: "Apres la révélation des creatrices, Lévy est choisi pour quitter le coeur du Vrax et accompagner Shan vers le sud." },
      { target: "Harry PY", type: "Retrouvailles", description: "Au village des renards, Lévy retrouve Harry PY et leur lien redevient un axe discret au milieu du deuil et des décisions." },
      { target: "Tsune", type: "Convergence locale", description: "Lévy reconnaît chez Tsune une ligne de defense viable et s'accorde rapidement a la logique du village meurtri." }
    ]
  },
  {
    name: "Ossah Lyla",
    role: "Conscience diurne du Vrax",
    links: [
      { target: "Nastaz", type: "Continuité", description: "Nastaz prolonge Ossah Lyla dans une lecture plus froide, plus nette et plus nocturne du meme monde." },
      { target: "Harry PY", type: "Accompagnement", description: "Elle assiste la naissance de Harry PY et mesure la nécessité de cette première réponse du Vrax." },
      { target: "Protecteurs du Vrax", type: "Protection indirecte", description: "Les protecteurs existent aussi pour defendre ce qu'elle incarne dans l'equilibre du Vrax." },
      { target: "Wingard", type: "Apaisement", description: "Sa simple présence ralentit et restructure le chaos qui accompagne la naissance de Wingard." },
      { target: "Papillons", type: "Essence vitale", description: "Ossah Lyla explique que les papillons portent une energie indispensable a l'equilibre de Pandorus et ressent leur extinction comme une blessure directe du monde." }
    ]
  },
  {
    name: "Nastaz",
    role: "Conscience nocturne du Vrax",
    links: [
      { target: "Ossah Lyla", type: "Prolongement", description: "Elle n'est pas l'inverse d'Ossah Lyla, mais son prolongement nocturne et analytique." },
      { target: "Harry PY", type: "Lucidité immédiate", description: "Nastaz comprend des la première naissance que le Vrax repond a une alteration reelle et durable." },
      { target: "Protecteurs du Vrax", type: "Compréhension", description: "Elle identifie la logique commune des naissances et la preparation qu'elles representent." },
      { target: "Déséquilibre du vivant", type: "Analyse", description: "La nuit, Nastaz mesure froidement ce que le jour révèle déjà: un monde qui s'altere et doit apprendre a se defendre." },
      { target: "Franklin", type: "Vigilance", description: "Nastaz reconnait que l'eveil du lien de Franklin avec le Vrax peut devenir aussi dangereux que precieux s'il n'est pas compris." }
    ]
  },
  {
    name: "Tsune",
    role: "Gardien renard du village",
    links: [
      { target: "Hez", type: "Perte fondatrice", description: "La mort de Hez devient le point de rupture qui transforme la defense locale de Tsune en engagement plus large." },
      { target: "Javier", type: "Veille commune", description: "Tsune et Javier tiennent le village par des formes de vigilance complementaires, l'une mobile, l'autre perceptive." },
      { target: "Harry PY", type: "Reconnaissance", description: "Harry PY identifie en Tsune une force de terrain deja capable de porter une part de la reponse hors du Vrax." },
      { target: "Shaushana", type: "Confiance neuve", description: "Tsune accepte rapidement l'equilibre que Shaushana apporte au groupe et s'y associe sans besoin de longues paroles." },
      { target: "Kuji", type: "Ennemi direct", description: "Tsune affronte Kuji au coeur meme de son village et ne transforme plus ensuite sa douleur qu'en direction." }
    ]
  },
  {
    name: "Hez",
    role: "Pilier du village meurtri",
    links: [
      { target: "Tsune", type: "Ancrage", description: "Hez agit comme une force de stabilite et de continuite pour Tsune et pour le village." },
      { target: "Javier", type: "Defense du village", description: "Avec Javier et Tsune, il forme une ligne de protection sobre mais efficace autour de la communaute." },
      { target: "Kuji", type: "Sacrifice", description: "Hez tient jusqu'au bout face a Kuji et sa mort devient le centre du basculement moral des chapitres du village." },
      { target: "Renards", type: "Fidelité", description: "Hez est enseveli au milieu des renards qu'il a proteges, dans un geste qui montre a quel point leur lien dépasse l'utilitaire." }
    ]
  },
  {
    name: "Javier",
    role: "Archer de veille blanche",
    links: [
      { target: "Tsune", type: "Surveillance croisée", description: "Javier couvre le village d'une veille precise pendant que Tsune agit au plus pres du choc." },
      { target: "Hez", type: "Defense partagée", description: "Tous deux font partie des points fixes qui maintiennent encore le village debout apres l'assaut." },
      { target: "Harry PY", type: "Compréhension silencieuse", description: "Javier reconnait sans mots chez Harry PY une lecture plus vaste de ce qui frappe leur territoire." },
      { target: "Kuji", type: "Témoin", description: "Face a Kuji, Javier comprend qu'ils n'affrontent plus un chaos aveugle mais une presence qui pense et choisit." }
    ]
  },
  {
    name: "Kuji",
    role: "Force hostile de remplacement",
    links: [
      { target: "Elennya", type: "Alliance trouble", description: "Kuji agit avec Elennya dans une logique commune: pousser le vivant vers une autre forme, plus contrôlée, plus dure." },
      { target: "Hez", type: "Mise a mort", description: "En tuant Hez au centre du combat, Kuji impose un point de non-retour au village et au groupe." },
      { target: "Tsune", type: "Opposition intime", description: "Tsune voit en Kuji la source directe de la perte qui frappe son village et de la direction qu'il doit désormais suivre." },
      { target: "Shaushana", type: "Opposition de principe", description: "Face a Shaushana, Kuji porte une lecture du monde qui nie la respiration libre du vivant au profit d'un ordre impose." },
      { target: "Harry PY", type: "Preuve du dessein", description: "Pour Harry PY, Kuji confirme qu'une volonté organisée dirige les attaques et les altérations du monde." }
    ]
  },
  {
    name: "Elennya",
    role: "Présence étrangère et calculatrice",
    links: [
      { target: "Kuji", type: "Complément", description: "Elennya complete Kuji par une puissance plus insidieuse, plus froide et plus deformante." },
      { target: "Tsune", type: "Entrave", description: "Elle ralentit, enferme et empêche Tsune d'intervenir a temps lorsque le combat bascule." },
      { target: "Javier", type: "Contre-veillée", description: "Les déformations qu'elle impose a l'espace brisent même la precision de Javier." },
      { target: "Shan", type: "Menace nouvelle", description: "Shan comprend avec Elennya qu'il existe des puissances qui cassent l'action avant meme le choc frontal." }
    ]
  },
  {
    name: "Ezze",
    role: "Voyageur instinctif",
    links: [
      { target: "Gil et Filston", type: "Rencontre décisive", description: "Gil et Filston obligent Ezze à rester face à une question plus grande que sa vitesse habituelle." },
      { target: "Taverne du Sombrail", type: "Point d'arrêt", description: "La taverne devient le premier lieu où Ezze choisit vraiment de rester." },
      { target: "Shaushana", type: "Reconnaissance silencieuse", description: "En entrant dans la taverne, Ezze repère la Communauté des Papillons comme une anomalie majeure et sent que Shaushana y tient une place centrale." }
    ]
  },
  {
    name: "Gil et Filston",
    role: "Duo d'ailleurs",
    links: [
      { target: "Ezze", type: "Question ouverte", description: "Leur regard sur la réalité de Pandorus fissure l'assurance d'Ezze et transforme sa manière de lire le monde." },
      { target: "Taverne du Sombrail", type: "Convergence", description: "Ils rejoignent Ezze à la taverne au moment où plusieurs trajectoires importantes se rassemblent." },
      { target: "Franklin", type: "Écho de décalage", description: "Comme Franklin avec le Vrax, ils portent une sensibilité à ce qui ne correspond pas tout à fait aux règles visibles du monde." }
    ]
  },
  {
    name: "Brad et Bradlette",
    role: "Gardiens de la taverne",
    links: [
      { target: "Elrick", type: "Mémoire ancienne", description: "Le nom d'Elrick ouvre chez eux un passage vers les Briscards et l'origine du premier grand déséquilibre." },
      { target: "Ab'Youbi", type: "Veille commune", description: "Ils partagent avec Ab'Youbi une vigilance silencieuse sur la taverne et ceux qui y entrent." },
      { target: "Syne", type: "Limite respectée", description: "Ils savent qu'il existe autour de Syne et de sa boîte une frontière à ne pas forcer." }
    ]
  },
  {
    name: "Ab'Youbi",
    role: "Veilleur de l'invisible",
    links: [
      { target: "Brad et Bradlette", type: "Équilibre du lieu", description: "Avec eux, Ab'Youbi participe à la tenue profonde de la taverne du Sombrail." },
      { target: "Syne", type: "Reconnaissance", description: "Il reconnaît la force contenue autour de Syne sans chercher à la provoquer." },
      { target: "Communauté des Papillons", type: "Lecture des traces", description: "Il perçoit ce que le groupe porte, ce qui le suit et ce qui se désaligne autour de lui." },
      { target: "Aligaroi", type: "Autorité reconnue", description: "Au bord du Sombrail, Ab'Youbi fait céder l'Aligaroi sans combat, comme si une ancienneté commune se reconnaissait entre eux." },
      { target: "Bichette", type: "Route rouverte", description: "Près de la tombe du Capitaine, Ab'Youbi rouvre explicitement la direction de Bichette et de la Sombra." }
    ]
  },
  {
    name: "Syne",
    role: "Gardienne de la boîte",
    links: [
      { target: "Ab'Youbi", type: "Respect de seuil", description: "Ab'Youbi comprend que la présence retenue par Syne appartient à une limite qu'il faut reconnaître." },
      { target: "Brad et Bradlette", type: "Présence acceptée", description: "La taverne adapte son rythme à Syne sans avoir besoin de la nommer." },
      { target: "Taverne du Sombrail", type: "Mystère central", description: "Syne transforme la taverne en lieu d'attente, de retenue et de menace contenue." }
    ]
  },
  {
    name: "Mitra Séssé",
    role: "Briscard de mémoire",
    links: [
      { target: "Elrick", type: "Ancien combat", description: "Mitra Séssé apparaît dans le même souvenir fondateur qu'Elrick jeune." },
      { target: "Papy Perquis", type: "Briscards", description: "Ils appartiennent à la même mémoire de résistance contre le premier déséquilibre." },
      { target: "Brad et Bradlette", type: "Souvenir transmis", description: "Brad rend sa présence perceptible à travers un passage de mémoire." }
    ]
  },
  {
    name: "Papy Perquis",
    role: "Mémoire analytique des Briscards",
    links: [
      { target: "Mitra Séssé", type: "Compagnon ancien", description: "Tous deux apparaissent dans la mémoire des Briscards, au moment où le monde commence à céder." },
      { target: "Padre Souf", type: "Génération ancienne", description: "Leurs anciens noms rappellent que les figures de mémoire ont aussi été des acteurs jeunes du basculement." },
      { target: "Ab'Youbi", type: "Lecture du déséquilibre", description: "Leurs rôles se répondent dans l'analyse de ce qui altère le monde." }
    ]
  },
  {
    name: "Padre Souf",
    role: "Ancien Briscard",
    links: [
      { target: "Papy Perquis", type: "Mémoire partagée", description: "Ils appartiennent à la même strate ancienne révélée par la taverne." },
      { target: "Mitra Séssé", type: "Résistance ancienne", description: "Avec les Briscards, il participe à la tenue du monde face à l'obscurité dispersée." },
      { target: "Elrick", type: "Souvenir fondateur", description: "Il apparaît dans le même moment ancien où Elrick est déjà un point d'équilibre." }
    ]
  },
  {
    name: "Bichette",
    role: "Reine du Blanc",
    links: [
      { target: "Sombra", type: "Ancrage", description: "Bichette n'est plus seulement promise à la Sombra : le groupe en atteint désormais réellement le seuil." },
      { target: "Luna Queen", type: "Gardienne liée", description: "Luna Queen fait partie des figures concrètement rencontrées qui prolongent ou accompagnent son équilibre." },
      { target: "Méli Mélo", type: "Gardienne liée", description: "Méli Mélo complète autour d'elle une forme de veille plus fine que la seule force." }
    ]
  },
  {
    name: "Luna Queen",
    role: "Gardienne de la Sombra",
    links: [
      { target: "Bichette", type: "Veille partagée", description: "Luna Queen est désormais rencontrée comme l'une des gardiennes liées à Bichette dans la Sombra." },
      { target: "Méli Mélo", type: "Complément", description: "Avec Méli Mélo, elle forme une présence secondaire mais stratégique autour de la Reine du Blanc." },
      { target: "Sombra", type: "Territoire", description: "Sa présence appartient aux terres de l'ouest que le groupe traverse enfin après le Vert." }
    ]
  },
  {
    name: "Méli Mélo",
    role: "Gardienne de la Sombra",
    links: [
      { target: "Bichette", type: "Veille partagée", description: "Méli Mélo est désormais rencontrée comme une gardienne liée à Bichette et à la lecture de la Sombra." },
      { target: "Luna Queen", type: "Complément", description: "Elle prolonge avec Luna Queen une même ligne de présence autour de l'ouest." },
      { target: "Sombra", type: "Territoire", description: "Sa place se lit maintenant dans une Sombra réellement atteinte par le groupe." }
    ]
  }
];

function buildMediaPath(folder, fileName) {
  const safeFileName = encodeURIComponent(fileName).replace(/'/g, "%27");
  return `./media/${folder}/${safeFileName}`;
}

function stripAccents(value) {
  return (value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildLoreLinkEntries() {
  const rawEntries = [];

  Object.entries(characterRouteMap).forEach(([slug, href]) => {
    const matchingAdditional = additionalCharacterFiches.find((fiche) => fiche.slug === slug);
    const displayName = matchingAdditional?.name
      || Object.keys(staticFicheContextMap).find((panelId) => panelId.includes(slug))?.replace("-panel", "")
      || null;

    if (displayName) {
      rawEntries.push({ label: displayName, href });
    }
  });

  [
    ["Shan", "#fiches"],
    ["Shaushana", "#fiches-shaushana"],
    ["Franklin", "#fiches-franklin"],
    ["Mike", "#fiches-mike"],
    ["Gérôm", "#fiches-gerom"],
    ["Gerom", "#fiches-gerom"],
    ["Elrick", "#fiches-elrick"],
    ["Eben", "#fiches-eben"],
    ["Capitaine", "#fiches-capitaine"],
    ["Harry PY", "#fiches-harry-py"],
    ["Gardien Isma", "#fiches-gardien-isma"],
    ["Wingard", "#fiches-wingard"],
    ["Lévy", "#fiches-levy"],
    ["Levy", "#fiches-levy"],
    ["Ossah Lyla", "#fiches-ossah-lyla"],
    ["Nastaz", "#fiches-nastaz"]
  ].forEach(([label, href]) => rawEntries.push({ label, href }));

  creatureFiches.forEach((fiche) => {
    rawEntries.push({ label: fiche.name, href: `#creatures-fiche-${fiche.slug}` });
  });

  locationFiches.forEach((fiche) => {
    rawEntries.push({ label: fiche.name, href: `#lieux-${fiche.slug}` });
  });

  [
    ["Le Vrax", "#lieux-vrax"],
    ["Vrax", "#lieux-vrax"],
    ["Le Passage", "#lieux-passage"],
    ["Passar", "#lieux-passar"],
    ["Bidonville du Passar", "#lieux-bidonville-du-passar"],
    ["Veyrine", "#lieux-veyrine"],
    ["Bassaï", "#lieux-bassai"],
    ["Bassai", "#lieux-bassai"],
    ["Cœur du Vrax", "#lieux-coeur-du-vrax"],
    ["Coeur du Vrax", "#lieux-coeur-du-vrax"],
    ["Fleuve Sylvae", "#lieux-fleuve-sylvae"],
    ["Mer du Sphinx pandorien", "#lieux-mer-du-sphinx-pandorien"],
    ["Village des Renards", "#lieux-village-des-renards"],
    ["Embouchure du Sombrail", "#lieux-embouchure-du-sombrail"],
    ["Sombrail", "#lieux-embouchure-du-sombrail"],
    ["Taverne du Sombrail", "#lieux-taverne-du-sombrail"],
    ["Le Vert", "#lieux-vert"],
    ["Vert", "#lieux-vert"],
    ["Ruines du Vert", "#lieux-ruines-du-vert"],
    ["Sombra", "#lieux-sombra"],
    ["la taverne", "#lieux-taverne-du-sombrail"],
    ["taverne", "#lieux-taverne-du-sombrail"],
    ["Briscards", "#mysteres"],
    ["Communauté des Papillons", "#mysteres"],
    ["Capitaine", "#fiches-capitaine"],
    ["Lumineaux", "#creatures-fiche-lumineau"],
    ["Aligaphoques", "#creatures-fiche-aligaphoque"],
    ["Gorillanges", "#creatures-fiche-gorillange"],
    ["Macagardiens", "#creatures-fiche-macagardien"],
    ["Nonstitis", "#creatures-fiche-nonstiti"],
    ["Serpensouffres", "#creatures-fiche-serpensouffre"]
  ].forEach(([label, href]) => rawEntries.push({ label, href }));

  const deduped = [];
  const seen = new Set();

  rawEntries.forEach((entry) => {
    const variants = Array.from(new Set([entry.label, stripAccents(entry.label)]))
      .filter(Boolean);

    variants.forEach((variant) => {
      const key = `${normalizeForLetter(variant)}|${entry.href}`;
      if (!seen.has(key)) {
        seen.add(key);
        deduped.push({ label: variant, href: entry.href });
      }
    });
  });

  return deduped.sort((a, b) => b.label.length - a.label.length);
}

function buildLoreLinkRegex(entries) {
  const labels = entries.map((entry) => escapeRegex(entry.label));
  return new RegExp(`(^|[^\\p{L}\\p{M}])(${labels.join("|")})(?=$|[^\\p{L}\\p{M}])`, "giu");
}

function getLoreLinkEntries() {
  if (!loreLinkEntriesCache) {
    loreLinkEntriesCache = buildLoreLinkEntries();
  }

  return loreLinkEntriesCache;
}

function getLoreLinkRegex() {
  if (!loreLinkRegexCache) {
    loreLinkRegexCache = buildLoreLinkRegex(getLoreLinkEntries());
  }

  return loreLinkRegexCache;
}

function buildContextLinksMarkup(links, title = "Liens contextuels") {
  if (!links?.length) return "";

  return `
    <section class="section context-links-section">
      <div class="section-heading">
        <h3>${title}</h3>
      </div>
      <div class="context-links">
        ${links.map((link) => `
          <a class="button tiny secondary context-link" href="${link.href}">${link.label}</a>
        `).join("")}
      </div>
    </section>
  `;
}

function inferLocationFromName(name) {
  return characterPrimaryLocationMap[slugifyValue(name)] || "#lieux";
}

function isLoreLinkEligibleElement(element) {
  if (!element) return false;
  if (element.closest("a, button, h1, h2, h3, h4, h5, h6")) return false;
  if (element.closest(".section-heading, .eyebrow, .timeline-era, .timeline-badge, .entry-card-kicker, .pathway-kicker, .landing-panel-kicker, .landing-kicker, .landing-aura, .mystery-kicker, .social-link-copy, .location-portrait-card, .fiche-meta")) return false;
  return true;
}

function replaceLoreLinksInElement(element) {
  if (!element || element.dataset.loreLinked === "true") return;
  if (!isLoreLinkEligibleElement(element)) return;

  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest("a, button, h1, h2, h3, h4, h5, h6")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const textNodes = [];
  let currentNode = walker.nextNode();
  while (currentNode) {
    textNodes.push(currentNode);
    currentNode = walker.nextNode();
  }

  textNodes.forEach((textNode) => {
    const originalText = textNode.nodeValue || "";
    const loreLinkRegex = getLoreLinkRegex();
    const loreLinkEntries = getLoreLinkEntries();
    loreLinkRegex.lastIndex = 0;
    const matches = Array.from(originalText.matchAll(loreLinkRegex));
    if (!matches.length) return;

    const fragment = document.createDocumentFragment();
    let lastIndex = 0;

    matches.forEach((match) => {
      const leading = match[1] || "";
      const matchedLabel = match[2];
      const matchIndex = match.index ?? 0;
      const actualStart = matchIndex + leading.length;

      if (actualStart > lastIndex) {
        fragment.appendChild(document.createTextNode(originalText.slice(lastIndex, actualStart)));
      }

      const targetEntry = loreLinkEntries.find((entry) => normalizeForLetter(entry.label) === normalizeForLetter(matchedLabel));
      if (targetEntry) {
        const link = document.createElement("a");
        link.className = "lore-link";
        link.href = targetEntry.href;
        link.textContent = matchedLabel;
        fragment.appendChild(link);
      } else {
        fragment.appendChild(document.createTextNode(matchedLabel));
      }

      lastIndex = actualStart + matchedLabel.length;
    });

    if (lastIndex < originalText.length) {
      fragment.appendChild(document.createTextNode(originalText.slice(lastIndex)));
    }

    textNode.parentNode?.replaceChild(fragment, textNode);
  });

  element.dataset.loreLinked = "true";
}

function refreshLoreLinks() {
  const targets = document.querySelectorAll("main p, main li");
  targets.forEach((element) => replaceLoreLinksInElement(element));
}

const additionalCharacterFiches = createAdditionalCharacterFiches(buildMediaPath);

const ficheHashPanelMap = {
  "#fiches": "shan-panel",
  "#fiches-shaushana": "shaushana-panel",
  "#fiches-franklin": "franklin-panel",
  "#fiches-mike": "mike-panel",
  "#fiches-gerom": "gerom-panel",
  "#fiches-elrick": "elrick-panel",
  "#fiches-eben": "eben-panel",
  "#fiches-capitaine": "capitaine-panel",
  "#fiches-harry-py": "harry-py-panel",
  "#fiches-gardien-isma": "gardien-isma-panel",
  "#fiches-wingard": "wingard-panel",
  "#fiches-levy": "levy-panel",
  "#fiches-ossah-lyla": "ossah-lyla-panel",
  "#fiches-nastaz": "nastaz-panel",
  "#fiches-tsune": "tsune-panel",
  "#fiches-hez": "hez-panel",
  "#fiches-javier": "javier-panel",
  "#fiches-kuji": "kuji-panel",
  "#fiches-elennya": "elennya-panel",
  "#fiches-ezze": "ezze-panel",
  "#fiches-gil-et-filston": "gil-et-filston-panel",
  "#fiches-brad-et-bradlette": "brad-et-bradlette-panel",
  "#fiches-abyoubi": "abyoubi-panel",
  "#fiches-syne": "syne-panel",
  "#fiches-mitra-sesse": "mitra-sesse-panel",
  "#fiches-papy-perquis": "papy-perquis-panel",
  "#fiches-padre-souf": "padre-souf-panel",
  "#fiches-bichette": "bichette-panel",
  "#fiches-luna-queen": "luna-queen-panel",
  "#fiches-meli-melo": "meli-melo-panel"
};

const creatureFiches = createCreatureFiches(buildMediaPath);
const pandorusTest = createPandorusTestData(buildMediaPath);

/* Legacy inlined creature data kept temporarily for safety during refactor.
const __legacyCreatureFiches = [
  {
    slug: "aligaphoque",
    name: "Aligaphoque",
    image: buildMediaPath("creatures", "Aligaphoque.png"),
    family: "Prédateur du Sombrail",
    status: "Créature clairement présente dans le récit",
    habitat: "Fleuve du Sombrail, remous lourds et berges humides",
    summary: "Prédateur aquatique du Sombrail, l'Aligaphoque surgit avec une violence brutale et rappelle que même les moments de grâce peuvent être happés en une seconde.",
    biography: [
      "Les Aligaphoques apparaissent au moment où les Lumineaux semblent rendre au Sombrail une beauté presque intacte. Leur attaque transforme aussitôt ce tableau en embuscade, comme si le fleuve contenait sous sa surface un autre rythme, plus lourd et plus prédateur.",
      "Ils ne frappent pas comme des animaux isolés. Leur sortie groupée donne l'impression d'une pression coordonnée du milieu lui-même, poussant le groupe à se défendre dans un espace où l'eau reste toujours plus forte qu'eux."
    ],
    profile: [
      { title: "Nature", text: "Créature de fleuve massive, faite pour l'embuscade, la morsure et le surgissement." },
      { title: "Niveau de menace", text: "Très élevé près de l'eau, surtout lorsqu'ils émergent en groupe." },
      { title: "Dans le récit", text: "Ils font du Sombrail un lieu de bascule entre beauté vivante et danger immédiat." }
    ],
    timeline: [
      { era: "Jour 11", title: "Lumineau happé", summary: "Un Aligaphoque surgit du Sombrail et brise le moment de grâce créé par les Lumineaux." },
      { era: "Jour 11", title: "Assaut du fleuve", summary: "Plusieurs Aligaphoques encerclent ensuite le groupe depuis les berges et les remous." }
    ]
  },
  {
    slug: "aligaroi",
    name: "Aligaroi",
    image: buildMediaPath("creatures", "Aligaroi.png"),
    family: "Souverain du Sombrail",
    status: "Créature clairement présente dans le récit",
    habitat: "Profondeurs du Sombrail et berges de grande puissance",
    summary: "Plus ancien et plus imposant que les Aligaphoques, l'Aligaroi surgit comme une autorité du fleuve plutôt que comme une simple bête.",
    biography: [
      "Après l'assaut des Aligaphoques, l'Aligaroi émerge comme une présence d'un autre ordre. Sa masse, sa lenteur maîtrisée et la manière dont le groupe cesse presque de penser le combat devant lui en font une figure de souveraineté aquatique.",
      "Le fait qu'Ab'Youbi le fasse céder sans affrontement révèle qu'il n'est pas seulement question de force. L'Aligaroi appartient à une logique ancienne du territoire, capable de reconnaître une autorité plus vieille que la violence immédiate."
    ],
    profile: [
      { title: "Nature", text: "Créature majeure du fleuve, plus stable, plus consciente et plus ancienne que les formes d'attaque ordinaires." },
      { title: "Niveau de menace", text: "Extrême, au point d'interrompre tout réflexe de combat simple." },
      { title: "Dans le récit", text: "L'Aligaroi ouvre une lecture du Sombrail comme territoire vivant doté de hiérarchies propres." }
    ],
    timeline: [
      { era: "Jour 11", title: "Émergence majeure", summary: "L'Aligaroi se montre après les Aligaphoques et impose un arrêt net au groupe." },
      { era: "Jour 11", title: "Retrait devant Ab'Youbi", summary: "Ab'Youbi le fait reculer sans combat, révélant une autre forme d'autorité dans le monde." }
    ]
  },
  {
    slug: "croconha",
    name: "Croconha",
    image: buildMediaPath("creatures", "Croconha.png"),
    family: "Predateur reptilien",
    status: "Espece visible dans le bestiaire",
    habitat: "Zones humides et berges sauvages",
    summary: "Creature a l'allure reptilienne, rattachee a la faune dangereuse des marges de Pandorus.",
    biography: [
      "Croconha n'a pas encore de scene detaillee aussi forte que le Felou ou le Felours. Sa présence dans le bestiaire montre cependant que Pandorus abrite une faune de predateurs varies, adaptes a des milieux plus rudes et plus humides.",
      "Par son apparence et par la logique du monde raconte, Croconha s'inscrit dans un ecosysteme ou les creatures ne sont jamais de simples monstres. Elles prolongent plutot la diversite du vivant, avec une part de puissance, de territoire et de danger."
    ],
    profile: [
      { title: "Nature", text: "Predateur massif, probablement lie aux bords d'eau, aux marais ou aux terrains glissants." },
      { title: "Niveau de menace", text: "Moyen a eleve selon l'etat du milieu et le déséquilibre du vivant." },
      { title: "Dans le récit", text: "Pas encore au centre d'une scene, mais coherent avec la faune sauvage evoquee par les voyages." }
    ],
    timeline: [
      { era: "Bestiaire", title: "Presence dans la faune de Pandorus", summary: "Croconha participe a l'idee d'un monde riche en creatures specialisees et territoriales." },
      { era: "Lecture du monde", title: "Menace potentielle", summary: "Sa simple présence renforce l'impression que chaque zone de Pandorus peut cacher sa propre forme de danger vivant." }
    ]
  },
  {
    slug: "felou",
    name: "Felou",
    image: buildMediaPath("creatures", "Félou.png"),
    family: "Predateur terrestre",
    status: "Creature clairement presente dans le récit",
    habitat: "Zones de passage, abords sauvages, territoires de chasse",
    summary: "Predateur rapide et agressif, le Felou est l'une des premières creatures a faire basculer le récit dans le danger concret.",
    biography: [
      "Le Felou marque l'une des premières grandes confrontations du récit. C'est en sauvant Franklin d'un Felou que Shaushana révèle sa force et entre vraiment dans le monde de Pandorus. La creature devient donc un seuil narratif: avant elle, il y a l'eveil; apres elle, il y a le danger, le lien et la route.",
      "Plus tard, les Felous reapparaissent lors de l'attaque du Passar. Leur agressivite ne semble plus relever d'un simple instinct de predation, mais d'un déséquilibre plus large du vivant. A ce moment-la, ils deviennent le signe concret qu'une corruption touche le monde."
    ],
    profile: [
      { title: "Nature", text: "Chasseur nerveux, rapide et direct, capable de frapper très vite." },
      { title: "Niveau de menace", text: "Eleve pour les voyageurs isoles et très eleve lorsqu'il agit dans un contexte de corruption du vivant." },
      { title: "Role narratif", text: "Premiere menace majeure affrontee par Shaushana et indice central du dereglement du monde." }
    ],
    timeline: [
      { era: "Jour 1", title: "Attaque de Franklin", summary: "Un Felou menace Franklin, et Shaushana intervient pour le sauver." },
      { era: "Jour 2", title: "Assaut du Passar", summary: "Les Felous participent a l'attaque coordonnee contre le bidonville, preuve que la faune devient anormalement agressive." },
      { era: "Lecture d'ensemble", title: "Premier signal du déséquilibre", summary: "Le Felou apparait comme l'une des premières manifestations visibles d'un mal plus profond que le Vrax tente déjà de contenir autrement." }
    ]
  },
  {
    slug: "felours",
    name: "Felours",
    image: buildMediaPath("creatures", "Felours.png"),
    family: "Brute predatrice",
    status: "Creature clairement presente dans le récit",
    habitat: "Terrains sauvages et zones de confrontation",
    summary: "Creature plus lourde et plus brutale que le Felou, le Felours incarne la force de percussion du bestiaire hostile.",
    biography: [
      "Le Felours apparait comme l'une des formes les plus dangereuses de l'attaque contre le Passar. Sa présence donne a l'assaut une dimension beaucoup plus lourde: on ne parle plus seulement de chasse ou de peur, mais d'une force capable de briser un fragile refuge humain.",
      "Le Felours accentue ainsi l'idee que certaines creatures de Pandorus deviennent plus violentes, plus coordonnees et plus destructrices qu'elles ne devraient l'etre. Il participe directement au sentiment d'urgence qui pousse le groupe a se mettre en route."
    ],
    profile: [
      { title: "Nature", text: "Creature massive, faite pour l'impact, l'ecrasement et la pression physique." },
      { title: "Niveau de menace", text: "Tres eleve dans un espace habite ou serre comme le bidonville." },
      { title: "Role narratif", text: "Figure de l'assaut brutal qui fait comprendre que le danger depasse l'incident isole." }
    ],
    timeline: [
      { era: "Jour 2", title: "Attaque du bidonville", summary: "Le Felours fait partie des creatures qui frappent le Passar avec une violence anormale." },
      { era: "Jour 2", title: "Declencheur du depart", summary: "Son intervention contribue a convaincre le groupe que le mal touche des creatures de plus en plus redoutables." },
      { era: "Lecture d'ensemble", title: "Violence en amont du Vrax", summary: "Ces attaques precedaient déjà la reaction organisee du Vrax et faisaient partie d'un déséquilibre plus large du vivant." }
    ]
  },
  {
    slug: "gorillange",
    name: "Gorillange",
    image: buildMediaPath("creatures", "Gorillange.png"),
    family: "Peuple du Vert",
    status: "Créature clairement présente dans le récit",
    habitat: "Profondeurs du Vert, zones d'autorité animale",
    summary: "Le Gorillange appartient aux peuples du Vert qui ne se présentent pas comme une horde sauvage, mais comme une société animale organisée autour d'Eben.",
    biography: [
      "Les Gorillanges apparaissent avec les Macagardiens et les Nonstitis au moment où le groupe entre plus profondément dans le Vert. Leur simple présence suffit à montrer que ce territoire ne relève pas d'une forêt ordinaire, mais d'un ordre animal structuré.",
      "Autour d'Eben, ils n'attaquent pas d'emblée. Ils observent, reconnaissent et accompagnent, comme si leur rôle était autant politique que physique dans l'équilibre du lieu."
    ],
    profile: [
      { title: "Nature", text: "Grand primate du Vert, puissant mais intégré à une logique collective et territoriale." },
      { title: "Niveau de menace", text: "Très élevé si le Vert est rompu, mais contenu lorsqu'un équilibre est encore possible." },
      { title: "Dans le récit", text: "Le Gorillange fait comprendre qu'Eben règne sur un peuple, pas seulement sur une meute." }
    ],
    timeline: [
      { era: "Jour 12", title: "Reconnaissance dans le Vert", summary: "Les Gorillanges apparaissent comme une présence organisée autour d'Eben." }
    ]
  },
  {
    slug: "gueplynx",
    name: "Gueplynx",
    image: buildMediaPath("creatures", "Gueplynx.png"),
    family: "Predateur coordonné du Vrax",
    status: "Creature clairement presente dans le récit",
    habitat: "Profondeurs du Vrax, zones de traque et de defense",
    summary: "Predateur collectif du Vrax, le Guéplynx n'attaque pas dans la confusion mais dans une logique de meute precise, presque tactique.",
    biography: [
      "Les Guéplynx apparaissent lorsque Shan et Shaushana progressent plus profondement dans le Vrax pour retrouver Franklin. Leur attaque change tout de suite la nature du danger: il ne s'agit plus d'une agression animale brute, mais d'une meute capable de lire, d'encadrer et d'exploiter les erreurs de rythme.",
      "Leur manière d'agir montre que le Vrax ne contient pas seulement des gardiens humanoides ou des forces abstraites. Il dispose aussi d'une faune de defense adaptee a ses zones les plus sensibles, capable de tester et d'affaiblir ceux qui y penetrent trop violemment."
    ],
    profile: [
      { title: "Nature", text: "Predateur de meute, rapide, ancre et plus intelligent tactiquement qu'une simple bete de chasse." },
      { title: "Niveau de menace", text: "Tres eleve face a des intrus isoles ou des combattants qui refusent encore de lire le terrain du Vrax." },
      { title: "Role narratif", text: "Le Guéplynx force Shan et Shaushana a comprendre que le coeur du Vrax se traverse par adaptation, pas seulement par puissance." }
    ],
    timeline: [
      { era: "Jour 5", title: "Traque dans le Vrax", summary: "Les Guéplynx surgissent pendant la progression de Shan et Shaushana vers le coeur du territoire." },
      { era: "Jour 5", title: "Combat de meute", summary: "Leur coordination oblige le duo a modifier son style de combat et a entrer dans une lecture plus fine du Vrax." }
    ]
  },
  {
    slug: "luminael",
    name: "Luminael",
    image: buildMediaPath("creatures", "Luminaël.png"),
    family: "Creature lumineuse",
    status: "Espece visible dans le bestiaire",
    habitat: "Zones calmes, espaces nocturnes ou milieux sensibles a la lumiere",
    summary: "Creature associee a une présence lumineuse et plus paisible du vivant, encore peu detaillee dans les chapitres.",
    biography: [
      "Luminael n'a pas encore de grande scene dediee. Son existence dans le bestiaire s'accorde toutefois avec l'autre versant de Pandorus: un monde traverse non seulement par le danger, mais aussi par des formes de vie plus fines, plus lumineuses et plus fragiles.",
      "Dans l'economie generale du récit, Luminael peut être compris comme l'un des signes que le vivant de Pandorus ne se resume pas a la predation. Le monde est aussi fait de grace, d'eclat et d'equilibres discrets."
    ],
    profile: [
      { title: "Nature", text: "Creature probablement liee a la lumiere, a l'orientation ou a des zones de calme." },
      { title: "Niveau de menace", text: "Faible a inconnu a ce stade du récit." },
      { title: "Dans le récit", text: "Pas encore detaillee, mais elle enrichit la dimension poetique et vivante du bestiaire." }
    ],
    timeline: [
      { era: "Bestiaire", title: "Presence visuelle", summary: "Luminael participe a la variete sensible du monde de Pandorus." },
      { era: "Lecture du monde", title: "Contrepoids au chaos", summary: "Sa simple existence rappelle que le vivant porte aussi de la lumiere et non seulement de l'agression." }
    ]
  },
  {
    slug: "lumineau",
    name: "Lumineau",
    image: buildMediaPath("creatures", "Lumineau.png"),
    family: "Créature lumineuse du Sombrail",
    status: "Créature clairement présente dans le récit",
    habitat: "Cieux bas et reflets du Sombrail",
    summary: "Créature lumineuse du Sombrail, le Lumineau traverse le ciel comme une pensée vivante et rend au fleuve un instant de grâce avant l'embuscade.",
    biography: [
      "Au bord du Sombrail, les Lumineaux apparaissent au-dessus de l'eau dans une harmonie presque irréelle. Leur lumière glisse sur le fleuve et suspend brièvement la tension du groupe comme si le vivant montrait encore sa part intacte.",
      "La violence avec laquelle l'un d'eux est happé par un Aligaphoque rend leur rôle encore plus fort dans le récit : ils ne sont pas décoratifs, ils mesurent ce qui reste de beauté vulnérable au sein d'un monde déjà attaqué."
    ],
    profile: [
      { title: "Nature", text: "Créature aérienne et lumineuse, liée aux reflets, aux courants et à une grâce fragile du monde." },
      { title: "Niveau de menace", text: "Faible par elle-même, mais très exposée à la brutalité du milieu." },
      { title: "Dans le récit", text: "Le Lumineau fait du Sombrail un lieu de beauté réelle, pas seulement de menace." }
    ],
    timeline: [
      { era: "Jour 11", title: "Apparition au-dessus du Sombrail", summary: "Les Lumineaux suspendent brièvement la tension du groupe par leur lumière et leur grâce." },
      { era: "Jour 11", title: "Beauté brisée", summary: "L'un d'eux est happé par un Aligaphoque, révélant combien le vivant reste vulnérable même dans sa splendeur." }
    ]
  },
  {
    slug: "macagardien",
    name: "Macagardien",
    image: buildMediaPath("creatures", "Macagardien.png"),
    family: "Veilleur du Vert",
    status: "Créature clairement présente dans le récit",
    habitat: "Canopée, troncs et hauteurs du Vert",
    summary: "Le Macagardien observe avant d'agir et donne au Vert une forme de surveillance intelligente, presque sentinelle.",
    biography: [
      "Les Macagardiens apparaissent après l'attaque des Serpensouffres, lorsqu'il devient clair que le Vert ne réagit pas seulement par instinct. Leur présence en hauteur transforme la forêt en système de veille.",
      "Ils n'assaillent pas le groupe à l'aveugle. Ils observent, pèsent, puis entourent Eben comme des gardiens d'un ordre vivant plutôt que comme de simples singes agressifs."
    ],
    profile: [
      { title: "Nature", text: "Créature arboricole vive, liée à l'observation, à la hauteur et à la garde du territoire." },
      { title: "Niveau de menace", text: "Élevé dans la canopée et les espaces de passage contraints." },
      { title: "Dans le récit", text: "Le Macagardien fait du Vert un lieu de jugement autant que d'affrontement." }
    ],
    timeline: [
      { era: "Jour 12", title: "Veille du Vert", summary: "Les Macagardiens apparaissent comme des observateurs organisés autour du passage du groupe." }
    ]
  },
  {
    slug: "nignoble",
    name: "Nignoble",
    image: buildMediaPath("creatures", "Nignoble.png"),
    family: "Creature hostile",
    status: "Espece visible dans le bestiaire",
    habitat: "Zones troubles, marges du vivant, regions potentiellement corrompues",
    summary: "Creature au profil plus inquietant, coherent avec les formes du vivant qui paraissent déjà touches par une ombre ou un déséquilibre.",
    biography: [
      "Nignoble n'est pas encore decrit longuement, mais il s'insere naturellement dans la part la plus sombre du bestiaire. Son existence accompagne bien la tonalite des passages ou la corruption du vivant devient de plus en plus lisible.",
      "A ce stade, Nignoble fonctionne surtout comme une promesse d'hostilite a venir: la preuve que Pandorus ne contient pas seulement des predateurs naturels, mais aussi des creatures dont l'apparence meme semble déjà marquer un glissement vers quelque chose de plus noir."
    ],
    profile: [
      { title: "Nature", text: "Creature a l'allure inquietante, possiblement liee a des zones degradees ou hostiles." },
      { title: "Niveau de menace", text: "Potentiellement eleve, mais pas encore mesure par une scene directe." },
      { title: "Dans le récit", text: "Figure anticipatrice des formes de vie que le dereglement pourrait rendre plus dangereuses." }
    ],
    timeline: [
      { era: "Bestiaire", title: "Presence latente", summary: "Nignoble elargit le versant le plus sombre de la faune de Pandorus." },
      { era: "Lecture du monde", title: "Signe d'un vivant trouble", summary: "Sa place visuelle rejoint les themes de corruption et de bascule developpes dans le récit." }
    ]
  },
  {
    slug: "nonstiti",
    name: "Nonstiti",
    image: buildMediaPath("creatures", "Nonstiti.png"),
    family: "Éclaireur du Vert",
    status: "Créature clairement présente dans le récit",
    habitat: "Branches basses, lisières intérieures et mouvements rapides du Vert",
    summary: "Petit peuple nerveux du Vert, le Nonstiti complète la lecture collective du territoire par sa vitesse et sa vigilance continue.",
    biography: [
      "Les Nonstitis sont moins massifs que les Gorillanges et moins statiques que les Macagardiens, mais leur importance est immédiate : ils donnent au Vert une mobilité de regard constante.",
      "Leur manière d'entourer le groupe sans l'attaquer frontalement montre que le territoire ne répond pas en bloc. Il déploie différents niveaux d'observation, d'essai et de reconnaissance."
    ],
    profile: [
      { title: "Nature", text: "Créature rapide, vive, faite pour le repérage et la circulation nerveuse du territoire." },
      { title: "Niveau de menace", text: "Moyen à élevé selon le nombre et le contexte d'encerclement." },
      { title: "Dans le récit", text: "Le Nonstiti rend visible l'intelligence collective du Vert." }
    ],
    timeline: [
      { era: "Jour 12", title: "Présence autour d'Eben", summary: "Les Nonstitis apparaissent avec les autres peuples du Vert lors de la reconnaissance du groupe." }
    ]
  },
  {
    slug: "renastar",
    name: "Renastar",
    image: buildMediaPath("creatures", "Renastar.png"),
    family: "Creature agile",
    status: "Espece visible dans le bestiaire",
    habitat: "Landes, plaines ou zones de course",
    summary: "Creature plus vive et plus elegante, qui rappelle que le bestiaire de Pandorus ne se limite pas aux formes de violence les plus lourdes.",
    biography: [
      "Renastar n'a pas encore de rencontre marquante. Son profil enrichit toutefois l'idee d'un monde ou les creatures peuvent être rapides, fuyantes, presque nobles, et non seulement brutales.",
      "Renastar participe a la respiration du bestiaire. Il ouvre la possibilite d'une faune faite aussi de mouvement, d'instinct et de beauté sauvage dans les espaces traverses par les heros."
    ],
    profile: [
      { title: "Nature", text: "Creature vraisemblablement rapide, mobile et adaptee aux grands espaces." },
      { title: "Niveau de menace", text: "Inconnu a ce stade, probablement variable selon le contexte." },
      { title: "Dans le récit", text: "Pas encore detaille, mais utile pour montrer la diversite du vivant pandorien." }
    ],
    timeline: [
      { era: "Bestiaire", title: "Figure de la faune libre", summary: "Renastar prolonge l'image d'un monde ou chaque terrain accueille sa propre creature." },
      { era: "Lecture du monde", title: "Diversite du vivant", summary: "Sa présence nuance l'idee d'un bestiaire uniquement hostile." }
    ]
  },
  {
    slug: "reptidile",
    name: "Reptidile",
    image: buildMediaPath("creatures", "Reptidile.png"),
    family: "Creature reptilienne",
    status: "Espece visible dans le bestiaire",
    habitat: "Sols chauds, falaises, zones minerales ou broussailleuses",
    summary: "Creature reptilienne qui renforce la dimension primitive et territoriale de certaines zones du monde.",
    biography: [
      "Reptidile n'a pas encore de scene developpee. Il complete toutefois la lecture de Pandorus comme un monde d'anciennes lignes de force, ou certaines creatures semblent issues d'une couche plus archaïque du vivant.",
      "Par sa seule présence, Reptidile suggere une faune capable de survivre dans des espaces plus rudes, plus secs ou plus mineraux, loin des refuges humains et des passages plus hospitaliers."
    ],
    profile: [
      { title: "Nature", text: "Creature reptilienne, probablement territoriale et resistante." },
      { title: "Niveau de menace", text: "Moyen a eleve selon l'intrusion et le terrain." },
      { title: "Dans le récit", text: "Pas encore detaillee directement, mais très coherente avec les marges sauvages du monde." }
    ],
    timeline: [
      { era: "Bestiaire", title: "Faune ancienne", summary: "Reptidile ajoute au bestiaire une ligne plus primitive et plus ancree dans la survie." },
      { era: "Lecture du monde", title: "Territoires rudes", summary: "Il prolonge l'idee que certaines regions de Pandorus suivent encore des lois presque primordiales." }
    ]
  },
  {
    slug: "scarabeast",
    name: "Scarabeast",
    image: buildMediaPath("creatures", "Scarabeast.png"),
    family: "Creature cuirassee",
    status: "Espece visible dans le bestiaire",
    habitat: "Sols epais, territoires creuses ou zones de defense",
    summary: "Creature a l'allure carapacee, symbole d'une faune capable de defense, d'endurance et de resistance.",
    biography: [
      "Scarabeast n'est pas encore nomme dans une scene forte. Son image s'accorde cependant très bien avec l'univers de Pandorus, ou la vie semble souvent se protèger, se blinder ou se transformer pour survivre a des milieux parfois hostiles.",
      "Cette creature rappelle que la menace du monde ne passe pas seulement par la vitesse ou la morsure, mais aussi par des formes de resistance lourde, d'approche lente et d'endurance."
    ],
    profile: [
      { title: "Nature", text: "Creature cuirassee, probablement lente mais difficile a neutraliser." },
      { title: "Niveau de menace", text: "Moyen a eleve selon la taille et le terrain." },
      { title: "Dans le récit", text: "Pas encore detaillee en scene, mais très lisible dans la logique du bestiaire pandorien." }
    ],
    timeline: [
      { era: "Bestiaire", title: "Figure de defense", summary: "Scarabeast enrichit le bestiaire par une logique de carapace et de resistance." },
      { era: "Lecture du monde", title: "Survie par l'endurance", summary: "Il renforce l'idee que beaucoup de creatures de Pandorus ont evolue pour tenir face a un monde exigeant." }
    ]
  },
  {
    slug: "serpensouffre",
    name: "Serpensouffre",
    image: buildMediaPath("creatures", "Serpensouffre.png"),
    family: "Prédateur de canopée",
    status: "Créature clairement présente dans le récit",
    habitat: "Canopée du Vert, branches hautes et attaques plongeantes",
    summary: "Le Serpensouffre attaque depuis le haut avec un souffle chaud et corrosif, rendant la forêt elle-même hostile et verticale.",
    biography: [
      "Les Serpensouffres plongent du haut des arbres au moment où le groupe entre plus profondément dans le Vert. Ils ne se montrent que par fragments, frappant vite, soufflant puis disparaissant dans la canopée.",
      "Leur rôle est essentiel dans la lecture du territoire : ils prouvent que le danger du Vert n'est pas seulement au sol ou dans la masse, mais aussi dans ce qui domine l'espace depuis le dessus."
    ],
    profile: [
      { title: "Nature", text: "Créature serpentiforme de hauteur, liée au plongeon et au souffle brûlant." },
      { title: "Niveau de menace", text: "Très élevé lorsque la visibilité est faible ou que la canopée les couvre." },
      { title: "Dans le récit", text: "Le Serpensouffre transforme l'entrée dans le Vert en épreuve de lecture totale du terrain." }
    ],
    timeline: [
      { era: "Jour 12", title: "Attaque verticale", summary: "Les Serpensouffres tombent de la canopée et forcent le groupe à tenir plutôt qu'à poursuivre." }
    ]
  },
  {
    slug: "serpours",
    name: "Serpours",
    image: buildMediaPath("creatures", "Serpours.png"),
    family: "Creature hybride",
    status: "Espece visible dans le bestiaire",
    habitat: "Zones forestieres, broussailleuses ou proches de l'eau",
    summary: "Creature hybride dont le nom meme evoque un melange de souplesse et de puissance, typique du vivant de Pandorus.",
    biography: [
      "Serpours n'a pas encore de moment central. Il illustre cependant très bien l'imaginaire biologique de Pandorus: un monde ou les creatures semblent parfois hybrides, surprenantes et issues d'equilibres propres a ce monde.",
      "Son profil suggere une creature a la fois souple, territoriale et capable de puissance, ce qui convient bien aux espaces sauvages et imprévisibles traverses par les heros."
    ],
    profile: [
      { title: "Nature", text: "Creature hybride, possiblement a la fois rampante, puissante et defensive." },
      { title: "Niveau de menace", text: "Potentiellement eleve si elle defend un territoire." },
      { title: "Dans le récit", text: "Pas encore detaillee, mais très representative de la singularité du bestiaire pandorien." }
    ],
    timeline: [
      { era: "Bestiaire", title: "Hybridation du vivant", summary: "Serpours montre que les creatures de Pandorus peuvent brouiller les frontieres habituelles entre formes animales." },
      { era: "Lecture du monde", title: "Menace imprevisible", summary: "Sa silhouette suggere un danger moins frontal, plus sinueux et plus territorial." }
    ]
  },
  {
    slug: "verdeflor",
    name: "Verdeflor",
    image: buildMediaPath("creatures", "Verdeflor.png"),
    family: "Creature vegetale",
    status: "Creature clairement presente dans le récit",
    habitat: "Zones vegetales, lisières, milieux ou le vivant est dense",
    summary: "Forme de vie vegetale rendue hostile par le déséquilibre du monde, Verdeflor montre que meme la croissance peut devenir une menace.",
    biography: [
      "Verdeflor intervient lors de l'attaque contre le Passar, aux cotes des Felous et du Felours. Sa présence est importante car elle elargit la crise du vivant: ce ne sont pas seulement des predateurs qui se dereglent, mais aussi des formes liees a la vegetation elle-meme.",
      "Avec Verdeflor, on comprend que la corruption touche des couches differentes de la vie pandorienne. La menace n'est plus seulement animale; elle atteint aussi ce qui pousse, s'etend et devrait normalement participer a l'equilibre du monde."
    ],
    profile: [
      { title: "Nature", text: "Creature vegetale offensive, liee a la propagation, a l'emprise ou a l'envahissement." },
      { title: "Niveau de menace", text: "Eleve lorsqu'elle agit dans un espace habite ou déjà fragilise." },
      { title: "Role narratif", text: "Preuve que le dereglement du vivant touche aussi les formes de vie vegetales." }
    ],
    timeline: [
      { era: "Jour 2", title: "Assaut du Passar", summary: "Verdeflor participe a l'attaque coordonnee contre le bidonville." },
      { era: "Jour 2", title: "Signe d'une corruption plus profonde", summary: "Son apparition montre que le mal agit au-dela des seuls predateurs et atteint la trame meme du vivant." },
      { era: "Lecture d'ensemble", title: "Le vivant se deregle avant la réponse du Vrax", summary: "Verdeflor se lit comme un symptome de corruption touchant les couches les plus profondes du monde." }
    ]
  },
  {
    slug: "poiscaille",
    name: "Poiscaille",
    image: buildMediaPath("creatures", "Poiscaille.png"),
    family: "Créature aquatique agressive",
    status: "Créature clairement présente dans le récit",
    habitat: "Eaux basses, rivages et zones humides proches du village",
    summary: "Forme aquatique d'assaut du sud, le Poiscaille surgit de l'eau dans une logique de pression coordonnée plutôt que de simple faim.",
    biography: [
      "Les Poiscailles apparaissent lors de l'assaut du village des Renards. Leur arrivée rapide depuis les zones humides confirme que les attaques ne procèdent plus par hasard, mais selon un enchaînement pensé et convergent.",
      "Ils ne sont pas seulement dangereux par leur morsure ou leur vitesse. Ils font partie d'un système de saturation, destiné à user le lieu, à briser les lignes de défense et à préparer l'arrivée de présences plus conscientes comme Kuji."
    ],
    profile: [
      { title: "Nature", text: "Créature de rivage agressive, nerveuse et adaptée aux surgissements depuis l'eau." },
      { title: "Niveau de menace", text: "Élevé en groupe, surtout lorsqu'il est intégré à une attaque guidée." },
      { title: "Rôle narratif", text: "Montrer que la faune du sud est désormais mobilisée dans une logique d'assaut organisée." }
    ],
    timeline: [
      { era: "Jour 7", title: "Assaut du village des Renards", summary: "Les Poiscailles surgissent des zones humides et ouvrent l'une des premières vagues de l'attaque." },
      { era: "Lecture du sud", title: "Créature utilisée", summary: "Leur présence fait comprendre que des formes de vie sont désormais poussées, orientées et utilisées contre les communautés." }
    ]
  },
  {
    slug: "chauve-souloup",
    name: "Chauve-Souloup",
    image: buildMediaPath("creatures", "Chauve-Souloup.png"),
    family: "Créature aérienne de harcèlement",
    status: "Créature clairement présente dans le récit",
    habitat: "Cieux bas, toitures, approches du village et zones de plongeon",
    summary: "Créature volante du sud, la Chauve-Souloup frappe par les hauteurs dans une logique de dispersion, d'usure et de désorientation.",
    biography: [
      "Les Chauve-Souloups descendent sur le village presque en même temps que les Poiscailles, ajoutant une deuxième pression, venue du ciel cette fois, à l'assaut contre la communauté.",
      "Leur rôle dans le récit est moins de tuer directement que de casser les lignes de lecture et de défense. Ils obligent Javier à répondre vers le haut, fragmentent l'attention et montrent que l'attaque pense en plusieurs axes."
    ],
    profile: [
      { title: "Nature", text: "Créature volante agressive, faite pour la plongée, le trouble et l'usure des lignes défensives." },
      { title: "Niveau de menace", text: "Élevé lorsqu'elle agit en coordination avec d'autres vagues d'assaut." },
      { title: "Rôle narratif", text: "Installer une guerre de saturation du village, par le ciel autant que par le sol." }
    ],
    timeline: [
      { era: "Jour 7", title: "Plongeon sur le village", summary: "Les Chauve-Souloups frappent depuis les hauteurs et compliquent immédiatement la défense du village." },
      { era: "Lecture du sud", title: "Attaque multi-axes", summary: "Avec elles, le groupe comprend que les offensives du sud sont pensées pour saturer l'espace et épuiser les protecteurs." }
    ]
  }
];
*/

let currentMapIndex = 0;
let pinnedMapInfoIndex = null;
let mapsCarouselInitialized = false;
let mapsCarouselInterval = null;
let currentLivingMapRegion = "terre-pandorienne";
let landingOracleIndex = 0;
let landingOracleInterval = null;
let currentCharacterLetter = "all";
let currentCreatureLetter = "all";
let currentFicheLetter = "all";
let currentLocationLetter = "all";
let currentCreatureFiche = creatureFiches[0]?.slug || "";
let currentRelationLetter = "all";
let currentRelationSearch = "";
let currentLocationSearch = "";
let currentTestQuestionIndex = 0;
let pandorusTestAnswers = [];
let currentTestMode = null;
let ficheUiInitialized = false;
let creatureFichesInitialized = false;
let locationFichesInitialized = false;
let pandorusTestInitialized = false;

const chapters = [
  {
    path: "./media/chapitres/Chapitre%201%20-%20La%20Gen%C3%A8se.pdf",
    summary: "La naissance de Pandorus se dessine dans un souffle primordial, entre lumiere, matiere vivante et apparition des premiers equilibres du monde.",
    accessKey: "ChapPando1"
  },
  {
    path: "./media/chapitres/Chapitre%202%20-%20Premier%20Regard.pdf",
    summary: "Shaushana decouvre le monde, sauve Franklin d'un Felou et laisse pour la première fois une trace concrete dans cet univers vivant.",
    accessKey: "ChapPando2"
  },
  {
    path: "./media/chapitres/Chapitre%203%20-%20Le%20souffle%20du%20chemin.pdf",
    summary: "Shaushana et Franklin traversent un monde instable, affrontent plusieurs creatures et atteignent finalement le bidonville du Passar.",
    accessKey: "ChapPando3"
  },
  {
    path: "./media/chapitres/Chapitre%204%20-%20Shan.pdf",
    summary: "Le passe de Shan se révèle, de son enfance rude a sa survie solitaire, jusqu'a sa rencontre decisive avec Shaushana.",
    accessKey: "ChapPando4"
  },
  {
    path: "./media/chapitres/Chapitre%205%20-%20Franklin.pdf",
    summary: "Au bidonville, Franklin montre son monde, ses liens et les premiers signes clairs du déséquilibre qui frappe le vivant autour du Passar.",
    accessKey: "ChapPando5"
  },
  {
    path: "./media/chapitres/Chapitre%206%20-%20Le%20souffle%20troubl%C3%A9%20du%20vivant.pdf",
    summary: "Le bidonville est attaque par des creatures anormalement agresives, poussant le groupe a partir vers le Vrax pour comprendre l'origine du mal.",
    accessKey: "ChapPando6"
  },
  {
    path: "./media/chapitres/Chapitre%207%20-%20Elrick.pdf",
    summary: "Elrick accueille le groupe, partage la mémoire d'une ancienne guerre et les prepare a poursuivre leur route vers le Vrax.",
    accessKey: "ChapPando7"
  },
  {
    path: "./media/chapitres/Chapitre%208%20-%20Du%20Bassa%C3%AF%20au%20Vrax.pdf",
    summary: "La traversee du Bassai et l'entree dans le Vrax confrontent le groupe a de nouvelles forces, jusqu'a l'enlevement brutal de Franklin.",
    accessKey: "ChapPando8"
  },
  {
    path: "./media/chapitres/Chapitre%209%20-%20Les%20Gamins%20du%20Vrax.pdf",
    summary: "Le chapitre révèle la naissance et le role des jeunes protecteurs du Vrax, jusqu'a leur interception du groupe et a la capture brutale de Franklin.",
    accessKey: "ChapPando9"
  },
  {
    path: "./media/chapitres/Chapitre%2010%20-%20Le%20coeur%20du%20Vrax.pdf",
    summary: "Au coeur du Vrax, Franklin est confronte a sa lignee ancienne tandis que Shan et Shaushana affrontent les protecteurs avant l'intervention d'Ossah Lyla et de Nastaz.",
    accessKey: "ChapPando10"
  },
  {
    path: "./media/chapitres/Chapitre%2011%20-%20Les%20Cr%C3%A9atrice.pdf",
    summary: "Les creatrices révèlent l'origine des Gamins du Vrax, le role vital des papillons, l'alteration du monde et orientent le groupe vers une nouvelle piste au sud avec Lévy.",
    accessKey: "ChapPando11"
  },
  {
    path: "./media/chapitres/Chapitre%2012%20-%20Un%20voyage%20particulier.pdf",
    summary: "Le groupe quitte le Vrax, découvre une zone vidée de sa cohérence, des papillons morts, un Renastar touché dans sa création même, puis atteint un village des Renards déjà frappé au sud.",
    accessKey: "ChapPando12"
  },
  {
    path: "./media/chapitres/Chapitre%2013%20-%20Kuji.pdf",
    summary: "Au village des Renards, Tsune, Hez et Javier croisent le groupe, l'assaut reprend, puis Kuji et Elennya se révèlent comme des volontés hostiles conscientes qui imposent la mort de Hez.",
    accessKey: "ChapPando13"
  },
  {
    path: "./media/chapitres/Chapitre%2014%20-%20La%20communaut%C3%A9%20des%20Papillons.pdf",
    summary: "Le deuil de Hez et des renards fait naître la Communauté des Papillons, tandis qu'Harry PY retourne au Vrax et que Tsune ouvre la prochaine direction vers l'embouchure du Sombrail.",
    accessKey: "ChapPando14"
  },
  {
    path: "./media/chapitres/Chapitre%2015%20-%20Vers%20la%20taverne.pdf",
    summary: "La Communauté des Papillons quitte le village des Renards, traverse des zones où le vivant se vide encore, puis atteint la taverne du Sombrail comme un point de passage chargé de mémoire.",
    accessKey: "ChapPando15"
  },
  {
    path: "./media/chapitres/Chapitre%2016%20-%20La%20Taverne.pdf",
    summary: "Dans la taverne du Sombrail, Brad, Bradlette et Ab'Youbi reconnaissent le groupe, ouvrent la mémoire des Briscards et révèlent une origine ancienne du déséquilibre, tandis que Syne garde une boîte éveillée.",
    accessKey: "ChapPando16"
  },
  {
    path: "./media/chapitres/Chapitre%2017%20-%20Ezze%2C%20Gil%20et%20Filston.pdf",
    summary: "Le parcours d'Ezze, sa rencontre avec Gil et Filston, puis leur arrivée commune à la taverne relient une nouvelle trajectoire vive à la Communauté des Papillons.",
    accessKey: "ChapPando17"
  },
  {
    path: "./media/chapitres/Chapitre%2018%20-%20Rumeurs.pdf",
    summary: "À la taverne, la mémoire ancienne devient direction : Bichette, Luna Queen et Méli Mélo sont évoquées à l'ouest, tandis qu'une rumeur conduit le groupe et Ezze vers le Vert et vers le Capitaine.",
    accessKey: "ChapPando18"
  },
  {
    path: "./media/chapitres/Chapitre%2019%20-%20Le%20Vert.pdf",
    summary: "En route vers le Vert, le groupe traverse le Sombrail, affronte Aligaphoques, Aligaroi et Serpensouffres, voit Ab'Youbi imposer une autre autorité du vivant, puis retrouve Eben au cœur de la forêt.",
    accessKey: "ChapPando19"
  },
  {
    path: "./media/chapitres/Chapitre%2020%20-%20Eben.pdf",
    summary: "Le duel entre Shan et Eben transforme un traumatisme en rééquilibrage, avant que le groupe ne découvre enfin le Capitaine captif au centre de ruines vidées dans le Vert.",
    accessKey: "ChapPando20"
  },
  {
    path: "./media/chapitres/Chapitre%2021%20-%20Le%20Capitaine.pdf",
    summary: "Dans les ruines du Vert, le Capitaine retrouvé révèle sa captivité, nomme Nogard, Bouldouger et le parasite, puis transforme la délivrance en nouvelle urgence de guerre.",
    accessKey: "ChapPando21"
  },
  {
    path: "./media/chapitres/Chapitre%2022%20-%20Bouldouger%2C%20Nogard%20et%20le%20Parasite.pdf",
    summary: "La nuit des ruines explose : Nogard et Bouldouger reviennent, Tsune et Lévy abattent Nogard, le Capitaine se sacrifie et le parasite est arraché aux mains de l'ennemi.",
    accessKey: "ChapPando22"
  },
  {
    path: "./media/chapitres/Chapitre%2023%20-%20La%20Sombra.pdf",
    summary: "Après la sépulture du Capitaine, Ab'Youbi renvoie le groupe vers la Sombra, où KingKoala, Will le Tigre Bois, Luna Queen et Méli Mélo ouvrent enfin l'approche de Bichette.",
    accessKey: "ChapPando23"
  }
];

const mapTemplate = document.getElementById("map-template");
const imageTemplate = document.getElementById("image-template");
const chapterTemplate = document.getElementById("chapter-template");
const timelineTemplate = document.getElementById("timeline-template");

function renderAdditionalCharacterFiches() {
  const ficheSection = document.getElementById("fiches");
  const tabsContainer = ficheSection?.querySelector(".fiche-tabs");
  if (!ficheSection || !tabsContainer) return;

  if (document.getElementById("harry-py-panel")) {
    return;
  }

  additionalCharacterFiches.forEach((fiche) => {
    const tab = document.createElement("button");
    tab.className = "fiche-tab";
    tab.type = "button";
    tab.dataset.ficheTarget = `${fiche.slug}-panel`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", "false");
    tab.textContent = fiche.name;
    tabsContainer.appendChild(tab);

    const meta = fiche.meta.map((item) => `
      <article>
        <strong>${item.label}</strong>
        <span>${item.value}</span>
      </article>
    `).join("");

    const biography = fiche.biography.map((item) => `<p>${item}</p>`).join("");
    const summary = fiche.summary.map((item) => `<p>${item}</p>`).join("");
    const profile = fiche.profile.map((item) => `
      <article class="overview-card">
        <h4>${item.title}</h4>
        <p>${item.text}</p>
      </article>
    `).join("");
    const relations = fiche.relations.map((item) => `
      <article class="overview-card">
        <h4>${item.title}</h4>
        <p>${item.text}</p>
      </article>
    `).join("");
    const timeline = fiche.timeline.map((item) => `
      <article class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="timeline-era">${item.era}</p>
          <h4>${item.title}</h4>
          <p class="timeline-summary">${item.summary}</p>
        </div>
      </article>
    `).join("");

    const panel = document.createElement("div");
    panel.id = `${fiche.slug}-panel`;
    panel.className = "fiche-panel";
    panel.setAttribute("role", "tabpanel");
    panel.hidden = true;
    const contextLinks = buildContextLinksMarkup(additionalFicheContextMap[fiche.slug], "Parcours liés");
    panel.innerHTML = `
      <section class="section">
        <div id="${fiche.hash.replace("#", "")}" class="fiche-grid">
          <div class="fiche-portrait">
            <img src="${fiche.image}" alt="${fiche.name}">
          </div>
          <div class="fiche-content">
            <p class="eyebrow">${fiche.category}</p>
            <h2>${fiche.name}</h2>
            <p class="hero-text">${fiche.intro}</p>
            <div class="fiche-meta">
              ${meta}
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-heading">
          <h3>Biographie</h3>
        </div>
        ${biography}
      </section>
      <section class="section">
        <div class="section-heading">
          <h3>Résumé</h3>
        </div>
        ${summary}
      </section>
      <section class="section">
        <div class="section-heading">
          <h3>Profil</h3>
        </div>
        <div class="fiche-list">
          ${profile}
        </div>
      </section>
      <section class="section">
        <div class="section-heading">
          <h3>Relations connues</h3>
        </div>
        <div class="fiche-list">
          ${relations}
        </div>
      </section>
      ${contextLinks}
      <section class="section">
        <div class="section-heading">
          <h3>Évolution dans l'histoire</h3>
        </div>
        <div class="timeline-list">
          ${timeline}
        </div>
      </section>
    `;

    ficheSection.appendChild(panel);
  });
}

function injectStaticFicheContexts() {
  Object.entries(staticFicheContextMap).forEach(([panelId, links]) => {
    const panel = document.getElementById(panelId);
    if (!panel || panel.querySelector(".context-links-section")) return;

    const relationsSection = Array.from(panel.querySelectorAll(".section")).find((section) => {
      const title = section.querySelector(".section-heading h3");
      return title && normalizeForLetter(title.textContent || "").includes("RELATIONS");
    });

    if (!relationsSection) return;

    relationsSection.insertAdjacentHTML("afterend", buildContextLinksMarkup(links, "Parcours liés"));
  });
}

function renderLocationFiches() {
  const tabsContainer = document.getElementById("lieux-fiches-tabs");
  const panelsContainer = document.getElementById("lieux-fiches-panels");
  if (!tabsContainer || !panelsContainer) return;

  tabsContainer.classList.add("location-fiche-tabs");
  tabsContainer.innerHTML = "";
  panelsContainer.innerHTML = "";

  const filteredLocations = locationFiches.filter((fiche) => {
    const matchesLetter = matchesLetterFilter(fiche.name, currentLocationLetter);
    const matchesSearch = !currentLocationSearch || normalizeForLetter(fiche.name).includes(normalizeForLetter(currentLocationSearch));
    return matchesLetter && matchesSearch;
  });

  if (!filteredLocations.length) {
    panelsContainer.innerHTML = `<div class="empty-state">Aucun lieu ne correspond à cette recherche.</div>`;
    return;
  }

  filteredLocations.forEach((fiche, index) => {
    const tab = document.createElement("button");
    tab.className = `fiche-tab location-tab${index === 0 ? " active" : ""}`;
    tab.type = "button";
    tab.dataset.locationTarget = `lieu-panel-${fiche.slug}`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", index === 0 ? "true" : "false");
    tab.innerHTML = `
      <span class="location-tab-media">
        <img src="${fiche.image}" alt="${fiche.name}">
      </span>
      <span class="location-tab-overlay" aria-hidden="true"></span>
      <span class="location-tab-content">
        <span class="location-tab-kicker">${fiche.category}</span>
        <span class="location-tab-title">${fiche.name}</span>
      </span>
    `;
    tabsContainer.appendChild(tab);

    const panel = document.createElement("div");
    panel.id = `lieu-panel-${fiche.slug}`;
    panel.className = "fiche-panel";
    panel.setAttribute("role", "tabpanel");
    if (index !== 0) panel.hidden = true;

    const meta = fiche.meta.map((item) => `
      <article>
        <strong>${item.label}</strong>
        <span>${item.value}</span>
      </article>
    `).join("");

    const biography = fiche.biography.map((paragraph) => `<p>${paragraph}</p>`).join("");
    const summary = fiche.summary.map((paragraph) => `<p>${paragraph}</p>`).join("");
    const profile = fiche.profile.map((item) => `
      <article class="overview-card">
        <h4>${item.title}</h4>
        <p>${item.text}</p>
      </article>
    `).join("");

    panel.innerHTML = `
      <section class="section">
        <div id="lieux-${fiche.slug}" class="fiche-grid location-fiche-grid">
          <div class="fiche-portrait">
            <article class="location-portrait-card location-tone-${fiche.tone}">
              <img class="location-portrait-image" src="${fiche.image}" alt="${fiche.name}">
              <div class="location-portrait-overlay" aria-hidden="true"></div>
              <div class="location-portrait-copy">
                <p class="location-portrait-kicker">${fiche.category}</p>
                <h3>${fiche.name}</h3>
                <p class="location-portrait-line">${fiche.meta[0].value}</p>
              </div>
            </article>
          </div>
          <div class="fiche-content">
            <p class="eyebrow">Lieu</p>
            <h2>${fiche.name}</h2>
            <p class="hero-text">${fiche.intro}</p>
            <div class="fiche-meta">
              ${meta}
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-heading">
          <h3>Ambiance et mémoire</h3>
        </div>
        ${biography}
      </section>
      <section class="section">
        <div class="section-heading">
          <h3>Lecture du lieu</h3>
        </div>
        ${summary}
      </section>
      <section class="section">
        <div class="section-heading">
          <h3>Repères</h3>
        </div>
        <div class="fiche-list">
          ${profile}
        </div>
      </section>
      ${buildContextLinksMarkup(fiche.contextLinks, "Liens contextuels")}
    `;

    panelsContainer.appendChild(panel);
  });
}

function initLocationFicheTabs() {
  const tabs = Array.from(document.querySelectorAll("#lieux-fiches-tabs .fiche-tab"));
  const panels = Array.from(document.querySelectorAll("#lieux-fiches-panels .fiche-panel"));
  if (!tabs.length || !panels.length) return;

  function activatePanel(panelId) {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.locationTarget === panelId;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    panels.forEach((panel) => {
      panel.hidden = panel.id !== panelId;
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activatePanel(tab.dataset.locationTarget));
  });

  window.activateLocationPanel = activatePanel;
  activatePanel(locationHashPanelMap[window.location.hash] || tabs[0].dataset.locationTarget);
}

function initLocationFilters() {
  const searchInput = document.getElementById("lieux-search");
  const letters = getLettersFromNames(locationFiches.map((fiche) => fiche.name));

  renderAlphabetFilter("lieux-alphabet", letters, currentLocationLetter, (letter) => {
    currentLocationLetter = letter;
    renderLocationFiches();
    initLocationFicheTabs();
    initLocationFilters();
  });

  if (searchInput) {
    searchInput.value = currentLocationSearch;
    searchInput.oninput = (event) => {
      currentLocationSearch = event.target.value;
      renderLocationFiches();
      initLocationFicheTabs();
    };
  }
}

function initFicheTabs() {
  const tabs = Array.from(document.querySelectorAll(".fiche-tab"));
  const panels = Array.from(document.querySelectorAll(".fiche-panel"));
  if (!tabs.length || !panels.length) return;

  function activatePanel(panelId) {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.ficheTarget === panelId;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    panels.forEach((panel) => {
      panel.hidden = panel.id !== panelId;
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activatePanel(tab.dataset.ficheTarget));
  });

  window.activateFichePanel = activatePanel;
  activatePanel(ficheHashPanelMap[window.location.hash] || "shan-panel");
  initFicheAlphabetFilter(tabs, activatePanel);
}

function renderCreatureFiches() {
  const tabsContainer = document.getElementById("creatures-fiches-tabs");
  const panelsContainer = document.getElementById("creatures-fiches-panels");
  if (!tabsContainer || !panelsContainer) return;

  tabsContainer.innerHTML = "";
  panelsContainer.innerHTML = "";

  creatureFiches.forEach((fiche, index) => {
    const tab = document.createElement("button");
    tab.className = `fiche-tab${index === 0 ? " active" : ""}`;
    tab.type = "button";
    tab.dataset.creatureTarget = `creature-panel-${fiche.slug}`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", index === 0 ? "true" : "false");
    tab.textContent = fiche.name;
    tabsContainer.appendChild(tab);

    const panel = document.createElement("div");
    panel.id = `creature-panel-${fiche.slug}`;
    panel.className = "fiche-panel";
    panel.setAttribute("role", "tabpanel");
    if (index !== 0) panel.hidden = true;

    const profileCards = fiche.profile.map((item) => `
      <article class="overview-card">
        <h4>${item.title}</h4>
        <p>${item.text}</p>
      </article>
    `).join("");

    const biography = fiche.biography.map((paragraph) => `<p>${paragraph}</p>`).join("");

    const timeline = fiche.timeline.map((item) => `
      <article class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="timeline-era">${item.era}</p>
          <h4>${item.title}</h4>
          <p class="timeline-summary">${item.summary}</p>
        </div>
      </article>
    `).join("");

    panel.innerHTML = `
      <div id="creatures-fiche-${fiche.slug}" class="fiche-grid creature-fiche-grid">
        <div class="fiche-portrait">
          <img src="${fiche.image}" alt="${fiche.name}">
        </div>
        <div class="fiche-content">
          <p class="eyebrow">Bestiaire</p>
          <h2>${fiche.name}</h2>
          <p class="hero-text">${fiche.summary}</p>
          <div class="fiche-meta">
            <article>
              <strong>Famille</strong>
              <span>${fiche.family}</span>
            </article>
            <article>
              <strong>Statut</strong>
              <span>${fiche.status}</span>
            </article>
            <article>
              <strong>Habitat</strong>
              <span>${fiche.habitat}</span>
            </article>
          </div>
        </div>
      </div>
      <section class="section">
        <div class="section-heading">
          <h3>Biographie</h3>
        </div>
        ${biography}
      </section>
      <section class="section">
        <div class="section-heading">
          <h3>Profil</h3>
        </div>
        <div class="fiche-list">
          ${profileCards}
        </div>
      </section>
      ${buildContextLinksMarkup(creatureContextMap[fiche.slug], "Liens du bestiaire")}
      <section class="section">
        <div class="section-heading">
          <h3>Presence dans l'histoire</h3>
        </div>
        <div class="timeline-list">
          ${timeline}
        </div>
      </section>
    `;

    panelsContainer.appendChild(panel);
  });
}

function initCreatureFicheTabs() {
  const tabs = Array.from(document.querySelectorAll("#creatures-fiches-tabs .fiche-tab"));
  const panels = Array.from(document.querySelectorAll("#creatures-fiches-panels .fiche-panel"));
  if (!tabs.length || !panels.length) return;

  function activatePanel(panelId) {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.creatureTarget === panelId;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    panels.forEach((panel) => {
      panel.hidden = panel.id !== panelId;
    });

    const activeSlug = panelId.replace("creature-panel-", "");
    currentCreatureFiche = activeSlug;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activatePanel(tab.dataset.creatureTarget));
  });

  window.activateCreaturePanel = activatePanel;
  activatePanel(`creature-panel-${currentCreatureFiche}`);
  syncCreatureFicheFilter();
}

function syncCreatureFicheFilter() {
  const tabs = Array.from(document.querySelectorAll("#creatures-fiches-tabs .fiche-tab"));
  if (!tabs.length) return;

  let visibleTabs = tabs.filter((tab) => matchesLetterFilter(tab.textContent || "", currentCreatureLetter));
  if (!visibleTabs.length) {
    visibleTabs = tabs;
  }

  tabs.forEach((tab) => {
    const isVisible = visibleTabs.includes(tab);
    tab.hidden = !isVisible;
    tab.setAttribute("aria-hidden", isVisible ? "false" : "true");
  });

  const activeTarget = `creature-panel-${currentCreatureFiche}`;
  const activeVisibleTab = visibleTabs.find((tab) => tab.dataset.creatureTarget === activeTarget);
  const fallbackTab = visibleTabs[0];

  if (!activeVisibleTab && fallbackTab && typeof window.activateCreaturePanel === "function") {
    window.activateCreaturePanel(fallbackTab.dataset.creatureTarget);
  }
}

function initFicheCarousels() {
  const carousels = Array.from(document.querySelectorAll(".fiche-carousel"));
  if (!carousels.length) return;

  carousels.forEach((carousel) => {
    const carouselId = carousel.dataset.carousel;
    const slides = Array.from(carousel.querySelectorAll(".fiche-carousel-slide"));
    const prevButton = carousel.querySelector(`[data-carousel-prev="${carouselId}"]`);
    const nextButton = carousel.querySelector(`[data-carousel-next="${carouselId}"]`);
    if (!slides.length) return;

    let currentIndex = slides.findIndex((slide) => slide.classList.contains("active"));
    if (currentIndex < 0) currentIndex = 0;

    function renderSlide(index) {
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("active", slideIndex === index);
      });
      currentIndex = index;
    }

    prevButton?.addEventListener("click", () => {
      const nextIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      renderSlide(nextIndex);
    });

    nextButton?.addEventListener("click", () => {
      const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      renderSlide(nextIndex);
    });

    renderSlide(currentIndex);

    if (slides.length > 1) {
      window.setInterval(() => {
        const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        renderSlide(nextIndex);
      }, 2000);
    }
  });
}

function renderTimeline() {
  const list = document.getElementById("timeline-list");
  const overview = document.getElementById("timeline-overview");
  if (!list) return;

  list.innerHTML = "";
  if (overview) {
    overview.innerHTML = "";

    const eraCount = new Set(timelineEvents.map((event) => event.era)).size;
    const activeThreats = timelineEvents.filter((event) => {
      const combined = `${event.title} ${event.summary}`.toLowerCase();
      return combined.includes("attaque")
        || combined.includes("guerre")
        || combined.includes("danger")
        || combined.includes("intrusion")
        || combined.includes("capture")
        || combined.includes("corruption")
        || combined.includes("peril");
    }).length;

    [
      {
        label: "Jalons",
        value: String(timelineEvents.length),
        note: "Moments qui structurent le monde et le récit."
      },
      {
        label: "Temps traverses",
        value: String(eraCount),
        note: "Des origines du souffle jusqu'aux portes du Vrax."
      },
      {
        label: "Lignes de tension",
        value: String(activeThreats),
        note: "Signes d'alteration, d'affrontement et de bascule."
      }
    ].forEach((item) => {
      const card = document.createElement("article");
      card.className = "timeline-overview-card";
      card.innerHTML = `
        <p class="timeline-overview-label">${item.label}</p>
        <p class="timeline-overview-value">${item.value}</p>
        <p class="timeline-overview-note">${item.note}</p>
      `;
      overview.appendChild(card);
    });
  }

  timelineEvents.forEach((event) => {
    const node = timelineTemplate.content.cloneNode(true);
    const article = node.querySelector(".timeline-item");
    const content = node.querySelector(".timeline-content");
    const era = node.querySelector(".timeline-era");
    const title = node.querySelector("h4");
    const summary = node.querySelector(".timeline-summary");
    const combined = `${event.title} ${event.summary}`.toLowerCase();

    let tone = "awakening";
    let badge = "Éveil";

    if (combined.includes("guerre") || combined.includes("affrontement") || combined.includes("attaque")) {
      tone = "conflict";
      badge = "Conflit";
    } else if (combined.includes("mort") || combined.includes("disparition") || combined.includes("blesse")) {
      tone = "loss";
      badge = "Rupture";
    } else if (combined.includes("route") || combined.includes("depart") || combined.includes("traversee") || combined.includes("entree")) {
      tone = "passage";
      badge = "Passage";
    } else if (combined.includes("veille") || combined.includes("percoit") || combined.includes("sentent") || combined.includes("constat")) {
      tone = "watch";
      badge = "Veille";
    } else if (event.era === "Origines" || combined.includes("naissance") || combined.includes("formation")) {
      tone = "origins";
      badge = "Origine";
    }

    article.dataset.tone = tone;
    const badgeNode = document.createElement("span");
    badgeNode.className = "timeline-badge";
    badgeNode.textContent = badge;

    era.textContent = event.era;
    title.textContent = event.title;
    const dayMatch = (event.era || "").match(/(Jour\s+\d+(?:\s*[àa-]\s*\d+)?)/i);
    if (dayMatch) {
      const dayChip = document.createElement("span");
      dayChip.className = "timeline-day-chip";
      dayChip.textContent = dayMatch[1].replace(/\s+/g, " ").trim();
      title.appendChild(dayChip);
    }
    summary.textContent = event.summary;
    content.insertBefore(badgeNode, era);
    const timelineLinks = document.createElement("div");
    timelineLinks.className = "context-links compact timeline-context-links";

    const normalizedEventText = normalizeForLetter(`${event.title} ${event.summary}`);
    const contextCandidates = [];

    if (normalizedEventText.includes("SHAUSHANA")) contextCandidates.push({ href: "#fiches-shaushana", label: "Voir Shaushana" });
    if (normalizedEventText.includes("SHAN")) contextCandidates.push({ href: "#fiches", label: "Voir Shan" });
    if (normalizedEventText.includes("FRANKLIN")) contextCandidates.push({ href: "#fiches-franklin", label: "Voir Franklin" });
    if (normalizedEventText.includes("PASSAR")) contextCandidates.push({ href: "#lieux-passar", label: "Voir le Passar" });
    if (normalizedEventText.includes("BASSAI")) contextCandidates.push({ href: "#lieux-bassai", label: "Voir le Bassaï" });
    if (normalizedEventText.includes("VEYRINE")) contextCandidates.push({ href: "#lieux-veyrine", label: "Voir le Veyrine" });
    if (normalizedEventText.includes("CAPITAINE")) contextCandidates.push({ href: "#fiches-capitaine", label: "Voir le Capitaine" });
    if (normalizedEventText.includes("VRAX")) contextCandidates.push({ href: "#lieux-vrax", label: "Voir le Vrax" });
    if (normalizedEventText.includes("VERT")) contextCandidates.push({ href: "#lieux-vert", label: "Voir le Vert" });
    if (normalizedEventText.includes("CREATRICES") || normalizedEventText.includes("COEUR DU VRAX") || normalizedEventText.includes("PAPILLONS")) {
      contextCandidates.push({ href: "#lieux-coeur-du-vrax", label: "Lire le coeur du Vrax" });
    }
    if (normalizedEventText.includes("SYLVAE") || normalizedEventText.includes("SUD")) {
      contextCandidates.push({ href: "#lieux-fleuve-sylvae", label: "Voir le fleuve Sylvae" });
    }
    if (normalizedEventText.includes("TSUNE")) contextCandidates.push({ href: "#fiches-tsune", label: "Voir Tsune" });
    if (normalizedEventText.includes("HEZ")) contextCandidates.push({ href: "#fiches-hez", label: "Voir Hez" });
    if (normalizedEventText.includes("JAVIER")) contextCandidates.push({ href: "#fiches-javier", label: "Voir Javier" });
    if (normalizedEventText.includes("KUJI")) contextCandidates.push({ href: "#fiches-kuji", label: "Voir Kuji" });
    if (normalizedEventText.includes("ELENNYA")) contextCandidates.push({ href: "#fiches-elennya", label: "Voir Elennya" });
    if (normalizedEventText.includes("VILLAGE")) contextCandidates.push({ href: "#lieux-village-des-renards", label: "Voir le village des Renards" });
    if (normalizedEventText.includes("SOMBRAIL")) contextCandidates.push({ href: "#lieux-embouchure-du-sombrail", label: "Voir l'embouchure du Sombrail" });
    if (normalizedEventText.includes("COMMUNAUTE DES PAPILLONS")) contextCandidates.push({ href: "#mysteres", label: "Voir les nouveaux mystères" });
    if (normalizedEventText.includes("TAVERNE")) contextCandidates.push({ href: "#lieux-taverne-du-sombrail", label: "Voir la taverne du Sombrail" });
    if (normalizedEventText.includes("EZZE")) contextCandidates.push({ href: "#fiches-ezze", label: "Voir Ezze" });
    if (normalizedEventText.includes("GIL") || normalizedEventText.includes("FILSTON")) contextCandidates.push({ href: "#fiches-gil-et-filston", label: "Voir Gil et Filston" });
    if (normalizedEventText.includes("BRAD")) contextCandidates.push({ href: "#fiches-brad-et-bradlette", label: "Voir Brad et Bradlette" });
    if (normalizedEventText.includes("AB'YOUBI") || normalizedEventText.includes("ABYOUBI")) contextCandidates.push({ href: "#fiches-abyoubi", label: "Voir Ab'Youbi" });
    if (normalizedEventText.includes("SYNE")) contextCandidates.push({ href: "#fiches-syne", label: "Voir Syne" });
    if (normalizedEventText.includes("MITRA")) contextCandidates.push({ href: "#fiches-mitra-sesse", label: "Voir Mitra Séssé" });
    if (normalizedEventText.includes("PERQUIS")) contextCandidates.push({ href: "#fiches-papy-perquis", label: "Voir Papy Perquis" });
    if (normalizedEventText.includes("SOUF")) contextCandidates.push({ href: "#fiches-padre-souf", label: "Voir Padre Souf" });
    if (normalizedEventText.includes("BICHETTE")) contextCandidates.push({ href: "#fiches-bichette", label: "Voir Bichette" });
    if (normalizedEventText.includes("LUNA")) contextCandidates.push({ href: "#fiches-luna-queen", label: "Voir Luna Queen" });
    if (normalizedEventText.includes("MELI") || normalizedEventText.includes("MELO")) contextCandidates.push({ href: "#fiches-meli-melo", label: "Voir Méli Mélo" });
    if (normalizedEventText.includes("ALIGAPHOQUE")) contextCandidates.push({ href: "#creatures-fiche-aligaphoque", label: "Voir l'Aligaphoque" });
    if (normalizedEventText.includes("ALIGAROI")) contextCandidates.push({ href: "#creatures-fiche-aligaroi", label: "Voir l'Aligaroi" });
    if (normalizedEventText.includes("SERPENSOUFFRE")) contextCandidates.push({ href: "#creatures-fiche-serpensouffre", label: "Voir le Serpensouffre" });
    if (normalizedEventText.includes("GORILLANGE")) contextCandidates.push({ href: "#creatures-fiche-gorillange", label: "Voir le Gorillange" });
    if (normalizedEventText.includes("MACAGARDIEN")) contextCandidates.push({ href: "#creatures-fiche-macagardien", label: "Voir le Macagardien" });
    if (normalizedEventText.includes("NONSTITI")) contextCandidates.push({ href: "#creatures-fiche-nonstiti", label: "Voir le Nonstiti" });

    const uniqueLinks = [];
    const seenLinks = new Set();
    contextCandidates.forEach((link) => {
      const key = `${link.href}|${link.label}`;
      if (!seenLinks.has(key) && uniqueLinks.length < 3) {
        seenLinks.add(key);
        uniqueLinks.push(link);
      }
    });

    if (uniqueLinks.length) {
      timelineLinks.innerHTML = uniqueLinks.map((link) => `
        <a class="button tiny secondary context-link" href="${link.href}">${link.label}</a>
      `).join("");
      content.appendChild(timelineLinks);
    }

    list.appendChild(node);
  });
}

function getSectionKeyFromHash(hashValue) {
  if (hashValue === "#fiches" || Boolean(ficheHashPanelMap[hashValue])) return "fiches";
  if (hashValue === "#chronologie") return "chronologie";
  if (hashValue === "#chapitres") return "chapitres";
  if (hashValue === "#relations") return "relations";
  if (hashValue === "#personnages") return "personnages";
  if (hashValue === "#lieux" || Boolean(locationHashPanelMap[hashValue])) return "lieux";
  if (hashValue === "#creatures" || hashValue.startsWith("#creatures-fiche-")) return "creatures";
  if (hashValue === "#test") return "test";
  if (hashValue === "#mysteres") return "mysteres";
  if (hashValue === "#cartes") return "cartes";
  return "home";
}

function updateSectionWhisper() {
  const whisper = document.getElementById("section-whisper");
  if (!whisper) return;
  const sectionKey = getSectionKeyFromHash(window.location.hash || "");
  whisper.textContent = sectionWhispers[sectionKey] || sectionWhispers.home;
}

function renderLandingOracle() {
  const oracle = document.getElementById("landing-oracle");
  if (!oracle || !landingOracleEntries.length) return;

  const entry = landingOracleEntries[landingOracleIndex % landingOracleEntries.length];
  oracle.innerHTML = `
    <p class="landing-oracle-kicker">${entry.kicker}</p>
    <h3>${entry.title}</h3>
    <p>${entry.text}</p>
    <a href="${entry.href}">${entry.label}</a>
  `;
}

function startLandingOracleRotation() {
  renderLandingOracle();
  if (landingOracleInterval || landingOracleEntries.length < 2) return;

  landingOracleInterval = window.setInterval(() => {
    landingOracleIndex = (landingOracleIndex + 1) % landingOracleEntries.length;
    renderLandingOracle();
  }, 5200);
}

let introAnimationStarted = false;

function forceDismissIntroOverlay() {
  const overlay = document.getElementById("intro-overlay");
  if (!overlay) return;

  overlay.classList.add("is-hidden");
  document.body.classList.remove("intro-playing");

  window.setTimeout(() => {
    overlay.remove();
  }, 900);
}

function runIntroAnimation() {
  const overlay = document.getElementById("intro-overlay");
  const introLogo = document.getElementById("intro-logo");

  if (!overlay || !introLogo || introAnimationStarted) return;
  introAnimationStarted = true;

  document.body.classList.add("intro-playing");

  window.requestAnimationFrame(() => {
    if (typeof introLogo.animate === "function") {
      introLogo.animate(
        [
          {
            transform: "scale(1.18)",
            opacity: 0
          },
          {
            transform: "scale(1)",
            opacity: 1,
            offset: 0.32
          },
          {
            transform: "scale(1)",
            opacity: 1
          },
          {
            transform: "scale(0.62)",
            opacity: 0
          }
        ],
        {
          duration: 2200,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "forwards"
        }
      );
    }

    window.setTimeout(() => {
      forceDismissIntroOverlay();
    }, 1850);
  });
}

function decodeChapterName(path) {
  const fileName = path.split("/").pop() || "";
  return decodeURIComponent(fileName).replace(/\.(odt|pdf|txt)$/i, "");
}

function openChapterInViewer(path) {
  const viewer = document.getElementById("chapter-viewer");
  const frame = document.getElementById("chapter-viewer-frame");
  const title = document.getElementById("chapter-viewer-title");
  if (!viewer || !frame || !title) return;

  title.textContent = decodeChapterName(path);
  frame.src = path;
  viewer.hidden = false;
  viewer.scrollIntoView({ behavior: "smooth", block: "start" });
}

function initChapterViewer() {
  const closeButton = document.getElementById("chapter-viewer-close");
  const viewer = document.getElementById("chapter-viewer");
  const frame = document.getElementById("chapter-viewer-frame");
  if (!closeButton || !viewer || !frame) return;

  closeButton.addEventListener("click", () => {
    viewer.hidden = true;
    frame.removeAttribute("src");
  });
}

function renderChapters() {
  const list = document.getElementById("chapters-list");
  if (!list) return;

  list.innerHTML = "";

  chapters.forEach((chapter) => {
    const node = chapterTemplate.content.cloneNode(true);
    const openLink = node.querySelector(".card-actions a");
    node.querySelector("h4").textContent = decodeChapterName(chapter.path);
    node.querySelector(".chapter-summary").textContent = chapter.summary;
    openLink.href = chapter.path;
    openLink.addEventListener("click", (event) => {
      event.preventDefault();
      const answer = window.prompt(`Clé d'accès pour ${decodeChapterName(chapter.path)} :`);
      if (answer === null) return;
      if (answer.trim() !== chapter.accessKey) {
        window.alert("Clé incorrecte.");
        return;
      }
      openChapterInViewer(chapter.path);
    });
    list.appendChild(node);
  });
}

function renderMaps() {
  const image = document.getElementById("maps-carousel-image");
  const link = document.getElementById("maps-carousel-link");
  const name = document.getElementById("maps-carousel-name");
  const thumbs = document.getElementById("maps-carousel-thumbs");
  const lockBox = document.getElementById("maps-info-lock");
  const lockText = document.getElementById("maps-info-lock-text");
  const constellationPanel = document.getElementById("constellations-panel");
  const constellationGrid = document.getElementById("constellation-grid");
  const planetsPanel = document.getElementById("planets-panel");
  const planetGrid = document.getElementById("planet-grid");
  const livingMapSeals = document.getElementById("living-map-seals");
  const livingMapFocus = document.getElementById("living-map-focus");
  if (!image || !link || !name || !thumbs || !lockBox || !lockText || !constellationPanel || !constellationGrid || !planetsPanel || !planetGrid || !livingMapSeals || !livingMapFocus || !maps.length) return;

  const path = maps[currentMapIndex];
  const fileName = decodeURIComponent((path.split("/").pop() || "").trim()).replace(/\.(png|jpg|jpeg|webp)$/i, "");
  const infoIndex = pinnedMapInfoIndex ?? currentMapIndex;
  const infoPath = maps[infoIndex];
  const infoFileName = decodeURIComponent((infoPath.split("/").pop() || "").trim()).replace(/\.(png|jpg|jpeg|webp)$/i, "");

  image.src = path;
  image.alt = fileName;
  image.decoding = "async";
  link.href = path;
  name.textContent = fileName;

  thumbs.innerHTML = "";
  maps.forEach((mapPath, index) => {
    const thumbName = decodeURIComponent((mapPath.split("/").pop() || "").trim()).replace(/\.(png|jpg|jpeg|webp)$/i, "");
    const button = document.createElement("button");
    button.className = `map-thumb${index === currentMapIndex ? " active" : ""}${index === pinnedMapInfoIndex ? " pinned" : ""}`;
    button.type = "button";
    button.setAttribute("aria-label", `Afficher la carte ${thumbName}`);
    button.innerHTML = `
      <img src="${mapPath}" alt="${thumbName}" loading="lazy" decoding="async">
      <span>${thumbName}</span>
    `;
    button.addEventListener("click", () => {
      pinnedMapInfoIndex = index;
      setCurrentMapIndex(index);
      restartMapsAutoAdvance();
    });
    thumbs.appendChild(button);
  });

  lockBox.hidden = pinnedMapInfoIndex === null;
  lockText.textContent = pinnedMapInfoIndex === null
    ? ""
    : `Fiche verrouillée sur ${infoFileName} pendant que le carrousel continue.`;

  const isConstellationsMap = infoFileName === "Constellations";
  constellationPanel.hidden = !isConstellationsMap;
  if (isConstellationsMap) {
    constellationGrid.innerHTML = constellationCards.map((item) => `
      <article class="constellation-card">
        <p class="constellation-card-kicker">${item.kicker}</p>
        <h4>${item.title}</h4>
        <p>${item.text}</p>
      </article>
    `).join("");
  } else {
    constellationGrid.innerHTML = "";
  }

  const isPlanetsMap = infoFileName === "Planètes Alien";
  planetsPanel.hidden = !isPlanetsMap;
  if (isPlanetsMap) {
    planetGrid.innerHTML = planetCards.map((item) => `
      <article class="constellation-card${item.title === "Asterion Pandoris" ? " planet-card-central" : ""}">
        <p class="constellation-card-kicker">${item.kicker}</p>
        <h4>${item.title}</h4>
        <p>${item.text}</p>
      </article>
    `).join("");
  } else {
    planetGrid.innerHTML = "";
  }

  const preferredRegionByMap = {
    "Monde Sous Marin": "bassai",
    "Pandorus Universe": "terre-pandorienne",
    "Terre Pandorienne": "terre-pandorienne",
    "Constellations": "vrax",
    "Planètes Alien": "terre-pandorienne"
  };

  if (!livingMapRegions.some((region) => region.slug === currentLivingMapRegion)) {
    currentLivingMapRegion = "terre-pandorienne";
  }

  if (pinnedMapInfoIndex === null && preferredRegionByMap[infoFileName]) {
    currentLivingMapRegion = preferredRegionByMap[infoFileName];
  }

  livingMapSeals.innerHTML = "";
  const regionToLocationSlugMap = {
    passage: "passage",
    passar: "passar",
    veyirne: "veyrine",
    bassai: "bassai",
    vrax: "vrax",
    "terre-pandorienne": "passage"
  };
  livingMapRegions.forEach((region) => {
    const button = document.createElement("button");
    button.className = `living-map-seal${region.slug === currentLivingMapRegion ? " active" : ""}`;
    button.type = "button";
    button.setAttribute("aria-label", `Afficher la zone ${region.name}`);
    button.innerHTML = `
      <strong>${region.name}</strong>
      <span>${region.kicker}</span>
    `;
    button.addEventListener("click", () => {
      currentLivingMapRegion = region.slug;
      renderMaps();
    });
    livingMapSeals.appendChild(button);
  });

  const activeRegion = livingMapRegions.find((region) => region.slug === currentLivingMapRegion) || livingMapRegions[0];
  livingMapFocus.innerHTML = `
    <div class="living-map-main">
      <p class="living-map-kicker">${activeRegion.kicker}</p>
      <h4 class="living-map-title">${activeRegion.name}</h4>
      <p class="living-map-text">${activeRegion.text}</p>
      <div class="context-links compact">
        <a class="button tiny secondary context-link" href="#lieux-${regionToLocationSlugMap[activeRegion.slug] || activeRegion.slug}">Ouvrir la fiche du lieu</a>
        <a class="button tiny secondary context-link" href="#chronologie">Voir la chronologie</a>
      </div>
    </div>
    <div class="living-map-side">
      <div class="living-map-meta">
        <p class="living-map-meta-label">Atmosphère</p>
        <p>${activeRegion.mood}</p>
      </div>
      <div class="living-map-paths">
        ${activeRegion.paths.map((item) => `
          <div class="living-map-path">
            <strong>${item.title}</strong>
            <span>${item.text}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function setCurrentMapIndex(index) {
  currentMapIndex = (index + maps.length) % maps.length;
  renderMaps();
}

function restartMapsAutoAdvance() {
  if (mapsCarouselInterval) {
    window.clearInterval(mapsCarouselInterval);
  }

  mapsCarouselInterval = window.setInterval(() => {
    setCurrentMapIndex(currentMapIndex + 1);
  }, 4000);
}

function initMapsCarousel() {
  if (mapsCarouselInitialized) return;

  const prevButton = document.getElementById("maps-carousel-prev");
  const nextButton = document.getElementById("maps-carousel-next");
  const unlockButton = document.getElementById("maps-info-unlock");
  if (!prevButton || !nextButton || !unlockButton || !maps.length) return;

  prevButton.addEventListener("click", () => {
    setCurrentMapIndex(currentMapIndex - 1);
    restartMapsAutoAdvance();
  });

  nextButton.addEventListener("click", () => {
    setCurrentMapIndex(currentMapIndex + 1);
    restartMapsAutoAdvance();
  });

  unlockButton.addEventListener("click", () => {
    pinnedMapInfoIndex = null;
    renderMaps();
  });

  mapsCarouselInitialized = true;
  restartMapsAutoAdvance();
}

function renderPandorusImages() {
  const grid = document.getElementById("characters-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const visibleImages = pandorusImages.filter((path, index) => {
    const imageName = getPandorusImageName(path, index);
    return matchesLetterFilter(imageName, currentCharacterLetter);
  });

  if (!visibleImages.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = "Aucun personnage pour cette lettre.";
    grid.appendChild(emptyState);
    return;
  }

  visibleImages.forEach((path, index) => {
    const node = imageTemplate.content.cloneNode(true);
    const image = node.querySelector("img");
    const link = node.querySelector(".image-link");
    const name = node.querySelector(".image-name");
    const imageName = getPandorusImageName(path, index);
    const imageLink = getPandorusImageLink(path, imageName);
    image.src = path;
    image.alt = imageName;
    image.loading = "lazy";
    image.decoding = "async";
    link.href = imageLink;
    if (imageLink.startsWith("#")) {
      link.removeAttribute("target");
      link.removeAttribute("rel");
    } else {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    name.textContent = imageName;
    grid.appendChild(node);
  });
}

function renderCreatureImages() {
  const grid = document.getElementById("creatures-grid");
  if (!grid) return;

  grid.innerHTML = "";

  if (!creatureFiches.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = "Aucune créature n'est disponible dans le bestiaire.";
    grid.appendChild(emptyState);
    return;
  }

  creatureFiches.forEach((fiche) => {
    const node = imageTemplate.content.cloneNode(true);
    const image = node.querySelector("img");
    const link = node.querySelector(".image-link");
    const name = node.querySelector(".image-name");
    const imageLink = `#creatures-fiche-${fiche.slug}`;

    image.src = fiche.image;
    image.alt = fiche.name;
    image.loading = "lazy";
    image.decoding = "async";
    link.href = imageLink;
    link.removeAttribute("target");
    link.removeAttribute("rel");
    name.textContent = fiche.name;
    grid.appendChild(node);
  });
}

const relationPortraitMap = {
  Shaushana: buildMediaPath("pandorus", "Shaushana.jpg"),
  Shan: buildMediaPath("pandorus", "Shan.jpg"),
  Franklin: buildMediaPath("pandorus", "Franklin.png"),
  Mike: buildMediaPath("pandorus", "Mike.png"),
  "Gérôm": buildMediaPath("pandorus", "Gérôm.png"),
  Elrick: buildMediaPath("pandorus", "Elrick.png"),
  Eben: buildMediaPath("pandorus", "Eben.jpg"),
  Capitaine: buildMediaPath("pandorus", "Capitaine.png"),
  "Harry PY": buildMediaPath("pandorus", "Harry PY.png"),
  "Gardien Isma": buildMediaPath("pandorus", "Gardien Isma.png"),
  Wingard: buildMediaPath("pandorus", "Wingard.png"),
  "Lévy": buildMediaPath("pandorus", "Lévy.png"),
  "Ossah Lyla": buildMediaPath("pandorus", "Ossah Lyla.png"),
  Nastaz: buildMediaPath("pandorus", "Nastaz.png"),
  Tsune: buildMediaPath("pandorus", "Tsune.jpg"),
  Hez: buildMediaPath("pandorus", "Hez.jpg"),
  Javier: buildMediaPath("pandorus", "Javier.png"),
  Kuji: buildMediaPath("pandorus", "Kuji.png"),
  Elennya: buildMediaPath("pandorus", "Elennya.png"),
  Ezze: buildMediaPath("pandorus", "Ezze.png"),
  "Gil et Filston": buildMediaPath("pandorus", "Gil et Filston.jpg"),
  "Brad et Bradlette": buildMediaPath("pandorus", "Brad et Bradlette.jpg"),
  "Ab'Youbi": buildMediaPath("pandorus", "AbYoubi.png"),
  Syne: buildMediaPath("pandorus", "Syne.jpg"),
  "Mitra Séssé": buildMediaPath("pandorus", "Mitra Séssé.jpg"),
  "Papy Perquis": buildMediaPath("pandorus", "Papy Perquis.jpg"),
  "Padre Souf": buildMediaPath("pandorus", "Padre Souf.png"),
  Bichette: buildMediaPath("pandorus", "Bichette.png"),
  "Luna Queen": buildMediaPath("pandorus", "Luna Queen.png"),
  "Méli Mélo": buildMediaPath("pandorus", "Méli Mélo.png")
};

function renderLandingPulse() {
  const pulse = document.getElementById("landing-pulse");
  if (!pulse) return;

  const latestChapters = chapters.slice(-3).reverse();
  const latestEvents = timelineEvents
    .filter((event) => /Jour\s+\d+/i.test(event.era || "") || /Après le Jour/i.test(event.era || ""))
    .slice(-3)
    .reverse();

  pulse.innerHTML = `
    <article class="landing-pulse-card">
      <p class="landing-pulse-kicker">Dernières portes</p>
      <h3>Chapitres récents</h3>
      <div class="landing-pulse-list">
        ${latestChapters.map((chapter) => `
          <a class="landing-pulse-item" href="#chapitres">
            <strong>${decodeChapterName(chapter.path)}</strong>
            <span>${chapter.summary}</span>
          </a>
        `).join("")}
      </div>
    </article>
    <article class="landing-pulse-card">
      <p class="landing-pulse-kicker">Fronts actifs</p>
      <h3>Ce qui bouge maintenant</h3>
      <div class="landing-pulse-list">
        ${latestEvents.map((event) => `
          <a class="landing-pulse-item" href="#chronologie">
            <strong>${event.era} · ${event.title}</strong>
            <span>${event.summary}</span>
          </a>
        `).join("")}
      </div>
    </article>
  `;
}

function renderRelationsOverview(nodes) {
  const overview = document.getElementById("relations-overview");
  if (!overview) return;

  const totalLinks = nodes.reduce((sum, node) => sum + node.links.length, 0);
  const typeCounts = nodes.reduce((map, node) => {
    node.links.forEach((link) => {
      map[link.type] = (map[link.type] || 0) + 1;
    });
    return map;
  }, {});

  const topTypes = Object.entries(typeCounts).sort((a, b) => b[1] - a[1]).slice(0, 3);
  const hubs = [...nodes].sort((a, b) => b.links.length - a.links.length).slice(0, 3);

  overview.innerHTML = `
    <article class="relations-overview-card">
      <p class="relations-overview-kicker">Cartographie visible</p>
      <h4>${nodes.length} noeuds actifs</h4>
      <p>${totalLinks} liens lisibles dans l'état actuel du récit.</p>
    </article>
    <article class="relations-overview-card">
      <p class="relations-overview-kicker">Forces dominantes</p>
      <div class="relations-overview-tags">
        ${topTypes.map(([label, count]) => `<span>${label} · ${count}</span>`).join("")}
      </div>
    </article>
    <article class="relations-overview-card relations-overview-card-wide">
      <p class="relations-overview-kicker">Centres de gravité</p>
      <div class="relations-hub-list">
        ${hubs.map((node) => {
          const href = characterRouteMap[slugifyValue(node.name)] || "#relations";
          return `<a class="relations-hub" href="${href}"><strong>${node.name}</strong><span>${node.links.length} liens cartographiés</span></a>`;
        }).join("")}
      </div>
    </article>
  `;
}

function renderRelations() {
  const grid = document.getElementById("relations-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const filteredNodes = relationNodes.filter((nodeData) => {
    const matchesLetter = matchesLetterFilter(nodeData.name, currentRelationLetter);
    const matchesSearch = !currentRelationSearch || normalizeForLetter(nodeData.name).includes(normalizeForLetter(currentRelationSearch));
    return matchesLetter && matchesSearch;
  });

  renderRelationsOverview(filteredNodes);

  if (!filteredNodes.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = "Aucun personnage ne correspond à cette recherche.";
    grid.appendChild(emptyState);
    return;
  }

  filteredNodes.forEach((nodeData) => {
    const card = document.createElement("article");
    card.className = "relation-card";
    const portrait = relationPortraitMap[nodeData.name];
    const portraitThumb = portrait
      ? `<div class="relation-thumb"><img src="${portrait}" alt="${nodeData.name}" loading="lazy" decoding="async"></div>`
      : "";
    const relationTypes = [...new Set(nodeData.links.map((link) => link.type))].slice(0, 3);

    if (portrait) {
      card.style.setProperty("--relation-portrait", `url("${portrait}")`);
      card.classList.add("has-portrait");
    }

    const links = nodeData.links.map((link) => `
      <article class="relation-link-card">
        <p class="relation-link-type">${link.type}</p>
        <h4>${link.target}</h4>
        <p>${link.description}</p>
        <div class="context-links compact">
          ${characterRouteMap[slugifyValue(link.target)] ? `<a class="button tiny secondary context-link" href="${characterRouteMap[slugifyValue(link.target)]}">Voir la fiche</a>` : ""}
          ${characterPrimaryLocationMap[slugifyValue(link.target)] ? `<a class="button tiny secondary context-link" href="${characterPrimaryLocationMap[slugifyValue(link.target)]}">Voir le lieu</a>` : ""}
        </div>
      </article>
    `).join("");

    card.innerHTML = `
      <div class="relation-card-header">
        ${portraitThumb}
        <div class="relation-card-heading">
          <h4>${nodeData.name}</h4>
          <p class="relation-role">${nodeData.role}</p>
          <p class="relation-count">${nodeData.links.length} liens cartographiés</p>
        </div>
      </div>
      <div class="relation-type-tags">
        ${relationTypes.map((type) => `<span>${type}</span>`).join("")}
      </div>
      <div class="context-links compact relation-context-links">
        ${characterRouteMap[slugifyValue(nodeData.name)] ? `<a class="button tiny secondary context-link" href="${characterRouteMap[slugifyValue(nodeData.name)]}">Ouvrir la fiche</a>` : ""}
        <a class="button tiny secondary context-link" href="${inferLocationFromName(nodeData.name)}">Voir le lieu lié</a>
        <a class="button tiny secondary context-link" href="#chronologie">Lire la chronologie</a>
      </div>
      <div class="relation-links">
        ${links}
      </div>
    `;

    grid.appendChild(card);
  });
}

function initRelationFilters() {
  const searchInput = document.getElementById("relations-search");
  const letters = getLettersFromNames(relationNodes.map((node) => node.name));

  renderAlphabetFilter("relations-alphabet", letters, currentRelationLetter, (letter) => {
    currentRelationLetter = letter;
    initRelationFilters();
    renderRelations();
  });

  if (searchInput) {
    searchInput.value = currentRelationSearch;
    searchInput.oninput = (event) => {
      currentRelationSearch = event.target.value;
      renderRelations();
    };
  }
}

function getPandorusImageName(path, index) {
  const rawFileName = decodeURIComponent((path.split("/").pop() || "").trim());
  const normalizedName = rawFileName
    .replace(/\.png\.jpg$/i, "")
    .replace(/\.(png|jpg|jpeg|webp)$/i, "")
    .trim();

  const displayNameMap = {
    "Games Wingard": "Wingard",
    "Pandorus Games Harry PY": "Harry PY"
  };

  return displayNameMap[normalizedName] || normalizedName;
}

function getPandorusImageLink(path, imageName) {
  return characterRouteMap[slugifyValue(imageName)] || path;
}

function getCreatureImageLink(imageName) {
  const targetSlug = slugifyValue(imageName);
  const fiche = creatureFiches.find((item) => item.slug === targetSlug);
  return fiche ? `#creatures-fiche-${fiche.slug}` : buildMediaPath("creatures", `${imageName}.png`);
}

function slugifyValue(value) {
  return normalizeForLetter(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeForLetter(value) {
  return (value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
}

function getFirstLetter(value) {
  const normalized = normalizeForLetter(value);
  const match = normalized.match(/[A-Z]/);
  return match ? match[0] : "";
}

function matchesLetterFilter(value, letter) {
  if (letter === "all") return true;
  return getFirstLetter(value) === letter;
}

function getLettersFromNames(names) {
  return Array.from(
    new Set(
      names
        .map((name) => getFirstLetter(name))
        .filter(Boolean)
    )
  ).sort();
}

function renderAlphabetFilter(containerId, letters, activeLetter, onSelect) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  const values = ["all", ...letters];
  values.forEach((value) => {
    const button = document.createElement("button");
    const isActive = value === activeLetter;
    button.type = "button";
    button.className = `alphabet-button${isActive ? " active" : ""}`;
    button.textContent = value === "all" ? "Tous" : value;
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
    button.addEventListener("click", () => onSelect(value));
    container.appendChild(button);
  });
}

function initCharacterAlphabetFilter() {
  const letters = getLettersFromNames(
    pandorusImages.map((path, index) => getPandorusImageName(path, index))
  );

  renderAlphabetFilter("personnages-alphabet", letters, currentCharacterLetter, (letter) => {
    currentCharacterLetter = letter;
    initCharacterAlphabetFilter();
    renderPandorusImages();
  });
}

function initCreatureAlphabetFilter() {
  const letters = getLettersFromNames(creatureFiches.map((fiche) => fiche.name));

  renderAlphabetFilter("creatures-alphabet", letters, currentCreatureLetter, (letter) => {
    currentCreatureLetter = letter;
    initCreatureAlphabetFilter();
    syncCreatureFicheFilter();
  });
}

function initFicheAlphabetFilter(tabs, activatePanel) {
  const letters = getLettersFromNames(tabs.map((tab) => tab.textContent || ""));

  function applyFicheFilter(letter) {
    currentFicheLetter = letter;
    let firstVisibleTab = null;

    tabs.forEach((tab) => {
      const isVisible = matchesLetterFilter(tab.textContent || "", letter);
      tab.hidden = !isVisible;
      if (isVisible && !firstVisibleTab) {
        firstVisibleTab = tab;
      }
    });

    const currentActiveTab = tabs.find((tab) => tab.classList.contains("active") && !tab.hidden);
    if (!currentActiveTab && firstVisibleTab) {
      activatePanel(firstVisibleTab.dataset.ficheTarget);
    }

    renderAlphabetFilter("fiches-alphabet", letters, currentFicheLetter, applyFicheFilter);
  }

  applyFicheFilter(currentFicheLetter);
}

function ensureFicheUiInitialized() {
  if (ficheUiInitialized) return;
  injectStaticFicheContexts();
  renderAdditionalCharacterFiches();
  initFicheTabs();
  initFicheCarousels();
  refreshLoreLinks();
  ficheUiInitialized = true;
}

function ensureCreatureFichesInitialized() {
  if (creatureFichesInitialized) return;
  renderCreatureFiches();
  initCreatureFicheTabs();
  refreshLoreLinks();
  creatureFichesInitialized = true;
}

function ensureLocationFichesInitialized() {
  renderLocationFiches();
  initLocationFicheTabs();
  initLocationFilters();
  refreshLoreLinks();
  locationFichesInitialized = true;
}

function getActivePandorusTestConfig() {
  return pandorusTest[currentTestMode || "character"];
}

function buildTestTraitSummary(traitScores) {
  const activeTest = getActivePandorusTestConfig();
  return Object.entries(traitScores)
    .sort((left, right) => right[1] - left[1])
    .slice(0, 3)
    .filter(([, value]) => value > 0)
    .map(([trait]) => activeTest.traitLabels[trait] || trait);
}

function computePandorusTestResult() {
  const activeTest = getActivePandorusTestConfig();
  const traitScores = {};

  Object.keys(activeTest.traitLabels).forEach((trait) => {
    traitScores[trait] = 0;
  });

  pandorusTestAnswers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null || answerIndex === undefined) return;
    const option = activeTest.questions[questionIndex]?.options[answerIndex];
    if (!option) return;

    Object.entries(option.weights).forEach(([trait, value]) => {
      traitScores[trait] = (traitScores[trait] || 0) + value;
    });
  });

  const rankedResults = activeTest.results
    .map((result) => {
      let score = 0;

      Object.entries(result.traits).forEach(([trait, value]) => {
        score += (traitScores[trait] || 0) * value;
      });

      return {
        ...result,
        score
      };
    })
    .sort((left, right) => right.score - left.score);

  const topScore = rankedResults[0]?.score || 1;
  const topThree = rankedResults.slice(0, 3).map((result, index) => ({
    ...result,
    affinity: Math.max(
      18,
      Math.min(
        100,
        index === 0
          ? 100
          : Math.round((result.score / topScore) * 100)
      )
    )
  }));

  return {
    winner: rankedResults[0],
    topThree,
    traitScores,
    dominantTraits: buildTestTraitSummary(traitScores)
  };
}

function updatePandorusTestProgress() {
  const activeTest = getActivePandorusTestConfig();
  const progressLabel = document.getElementById("test-progress-label");
  const progressBar = document.getElementById("test-progress-bar");
  const nextButton = document.getElementById("test-next");
  const prevButton = document.getElementById("test-prev");
  const questionCount = activeTest.questions.length;
  const isComplete = pandorusTestAnswers.every((answer) => answer !== null && answer !== undefined);
  const isLastQuestion = currentTestQuestionIndex === questionCount - 1;
  const answeredCount = pandorusTestAnswers.filter((answer) => answer !== null && answer !== undefined).length;

  if (progressLabel) {
    progressLabel.textContent = `Question ${currentTestQuestionIndex + 1} sur ${questionCount}`;
  }

  if (progressBar) {
    const progress = ((currentTestQuestionIndex + 1) / questionCount) * 100;
    progressBar.style.width = `${progress}%`;
  }

  if (prevButton) {
    prevButton.disabled = currentTestQuestionIndex === 0;
  }

  if (nextButton) {
    nextButton.textContent = isLastQuestion ? "Voir mon résultat" : "Suivant";
    nextButton.disabled = pandorusTestAnswers[currentTestQuestionIndex] === null || pandorusTestAnswers[currentTestQuestionIndex] === undefined;
    if (isLastQuestion && isComplete && answeredCount === questionCount) {
      nextButton.disabled = false;
    }
  }
}

function renderPandorusTestQuestion() {
  const activeTest = getActivePandorusTestConfig();
  const shell = document.getElementById("test-question-shell");
  const resultNode = document.getElementById("test-result");
  if (!shell) return;

  const question = activeTest.questions[currentTestQuestionIndex];
  if (!question) return;

  shell.innerHTML = "";
  if (resultNode) {
    resultNode.hidden = true;
    resultNode.innerHTML = "";
  }

  const card = document.createElement("article");
  card.className = "test-question-card";

  const kicker = document.createElement("p");
  kicker.className = "eyebrow";
  kicker.textContent = "Question sensible";

  const title = document.createElement("h4");
  title.className = "test-question-title";
  title.textContent = question.prompt;

  const options = document.createElement("div");
  options.className = "test-options";

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `test-option${pandorusTestAnswers[currentTestQuestionIndex] === optionIndex ? " active" : ""}`;
    button.innerHTML = `
      <span class="test-option-index">${optionIndex + 1}</span>
      <span class="test-option-label">${option.label}</span>
    `;
    button.addEventListener("click", () => {
      pandorusTestAnswers[currentTestQuestionIndex] = optionIndex;
      renderPandorusTestQuestion();
      updatePandorusTestProgress();
    });
    options.appendChild(button);
  });

  card.appendChild(kicker);
  card.appendChild(title);
  card.appendChild(options);
  shell.appendChild(card);

  updatePandorusTestProgress();
}

function renderPandorusTestResult() {
  const resultNode = document.getElementById("test-result");
  const shell = document.getElementById("test-question-shell");
  if (!resultNode || !shell) return;

  const result = computePandorusTestResult();
  const winner = result.winner;
  if (!winner) return;

  const affinities = result.topThree
    .map((entry) => `
      <article class="overview-card">
        <h4>${entry.name}</h4>
        <p>${entry.affinity}% d'affinité</p>
      </article>
    `)
    .join("");

  const dominantTraits = result.dominantTraits.length
    ? result.dominantTraits.join(" · ")
    : "Affinité sensible encore mouvante";

  shell.innerHTML = `
    <article class="test-question-card test-question-card-complete">
      <p class="eyebrow">Lecture terminée</p>
      <h4 class="test-question-title">Ton résultat est prêt.</h4>
      <p class="test-result-lead">
        Tes réponses dessinent surtout cette ligne de force : ${dominantTraits}.
      </p>
    </article>
  `;

  resultNode.hidden = false;
  resultNode.innerHTML = `
    <div class="test-result-hero">
      <div class="test-result-portrait">
        <img src="${winner.image}" alt="${winner.name}" loading="lazy" decoding="async">
      </div>
      <div class="test-result-copy">
        <p class="eyebrow">Affinité dominante</p>
        <h3>${winner.name}</h3>
        <p class="hero-text">${winner.intro}</p>
        <div class="context-links">
          <a class="button tiny secondary context-link" href="${winner.href}">Ouvrir la fiche</a>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="section-heading">
        <h3>Affinités proches</h3>
      </div>
      <div class="fiche-list">
        ${affinities}
      </div>
    </section>
  `;

  updatePandorusTestProgress();
}

function initPandorusTest() {
  if (pandorusTestInitialized) return;

  const prevButton = document.getElementById("test-prev");
  const nextButton = document.getElementById("test-next");
  const restartButton = document.getElementById("test-restart");
  const shell = document.getElementById("test-question-shell");
  const resultNode = document.getElementById("test-result");

  function renderModeSelector() {
    currentTestMode = null;
    currentTestQuestionIndex = 0;
    pandorusTestAnswers = [];
    if (resultNode) {
      resultNode.hidden = true;
      resultNode.innerHTML = "";
    }
    if (!shell) return;

    shell.innerHTML = `
      <div class="test-mode-grid">
        <button class="test-mode-card" type="button" data-test-mode="character">
          <span class="eyebrow">Voie humaine</span>
          <h4>Quel personnage de Pandorus es-tu ?</h4>
          <p>25 questions pour lire ta manière de protéger, d'aimer, de choisir, de tenir et d'habiter le monde.</p>
        </button>
        <button class="test-mode-card" type="button" data-test-mode="creature">
          <span class="eyebrow">Voie animale</span>
          <h4>Quelle créature de Pandorus es-tu ?</h4>
          <p>15 questions plus instinctives pour révéler ton territoire, ton surgissement, ta majesté ou ton mystère.</p>
        </button>
      </div>
    `;

    shell.querySelectorAll("[data-test-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        currentTestMode = button.getAttribute("data-test-mode");
        const activeTest = getActivePandorusTestConfig();
        pandorusTestAnswers = Array(activeTest.questions.length).fill(null);
        currentTestQuestionIndex = 0;
        renderPandorusTestQuestion();
      });
    });

    if (prevButton) prevButton.disabled = true;
    if (nextButton) {
      nextButton.textContent = "Suivant";
      nextButton.disabled = true;
    }
  }

  prevButton?.addEventListener("click", () => {
    if (!currentTestMode) return;
    if (currentTestQuestionIndex === 0) return;
    currentTestQuestionIndex -= 1;
    renderPandorusTestQuestion();
  });

  nextButton?.addEventListener("click", () => {
    if (!currentTestMode) return;
    const activeTest = getActivePandorusTestConfig();
    const isLastQuestion = currentTestQuestionIndex === activeTest.questions.length - 1;
    const hasAnswer = pandorusTestAnswers[currentTestQuestionIndex] !== null && pandorusTestAnswers[currentTestQuestionIndex] !== undefined;
    if (!hasAnswer) return;

    if (isLastQuestion) {
      renderPandorusTestResult();
      return;
    }

    currentTestQuestionIndex += 1;
    renderPandorusTestQuestion();
  });

  restartButton?.addEventListener("click", () => {
    renderModeSelector();
  });

  renderModeSelector();
  pandorusTestInitialized = true;
}

function showSectionFromHash() {
  const home = document.getElementById("home");
  const fiches = document.getElementById("fiches");
  const relations = document.getElementById("relations");
  const chronologie = document.getElementById("chronologie");
  const chapitres = document.getElementById("chapitres");
  const personnages = document.getElementById("personnages");
  const lieux = document.getElementById("lieux");
  const creatures = document.getElementById("creatures");
  const test = document.getElementById("test");
  const mysteres = document.getElementById("mysteres");
  const cartes = document.getElementById("cartes");
  const currentHash = window.location.hash;
  const isCreatureFicheHash = currentHash.startsWith("#creatures-fiche-");
  const isLocationHash = currentHash === "#lieux" || Boolean(locationHashPanelMap[currentHash]);

  updateSectionWhisper();

  if (
    currentHash === "#fiches" ||
    Boolean(ficheHashPanelMap[currentHash])
  ) {
    if (Boolean(ficheHashPanelMap[currentHash])) {
      currentFicheLetter = "all";
    }
    ensureFicheUiInitialized();
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = false;
    if (relations) relations.hidden = true;
    if (chronologie) chronologie.hidden = true;
    if (chapitres) chapitres.hidden = true;
    if (personnages) personnages.hidden = true;
    if (lieux) lieux.hidden = true;
    if (creatures) creatures.hidden = true;
    if (test) test.hidden = true;
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = true;
    if (typeof window.activateFichePanel === "function") {
      window.activateFichePanel(ficheHashPanelMap[currentHash] || "shan-panel");
    }
    return;
  }

  if (currentHash === "#chronologie") {
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = true;
    if (relations) relations.hidden = true;
    if (chronologie) chronologie.hidden = false;
    if (chapitres) chapitres.hidden = true;
    if (personnages) personnages.hidden = true;
    if (lieux) lieux.hidden = true;
    if (creatures) creatures.hidden = true;
    if (test) test.hidden = true;
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = true;
    renderTimeline();
    refreshLoreLinks();
    return;
  }

  if (currentHash === "#chapitres") {
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = true;
    if (relations) relations.hidden = true;
    if (chronologie) chronologie.hidden = true;
    if (chapitres) chapitres.hidden = false;
    if (personnages) personnages.hidden = true;
    if (lieux) lieux.hidden = true;
    if (creatures) creatures.hidden = true;
    if (test) test.hidden = true;
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = true;
    renderChapters();
    refreshLoreLinks();
    return;
  }

  if (currentHash === "#relations") {
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = true;
    if (relations) relations.hidden = false;
    if (chronologie) chronologie.hidden = true;
    if (chapitres) chapitres.hidden = true;
    if (personnages) personnages.hidden = true;
    if (lieux) lieux.hidden = true;
    if (creatures) creatures.hidden = true;
    if (test) test.hidden = true;
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = true;
    renderRelations();
    refreshLoreLinks();
    return;
  }

  if (currentHash === "#personnages") {
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = true;
    if (relations) relations.hidden = true;
    if (chronologie) chronologie.hidden = true;
    if (chapitres) chapitres.hidden = true;
    if (personnages) personnages.hidden = false;
    if (lieux) lieux.hidden = true;
    if (creatures) creatures.hidden = true;
    if (test) test.hidden = true;
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = true;
    renderPandorusImages();
    refreshLoreLinks();
    return;
  }

  if (isLocationHash) {
    if (Boolean(locationHashPanelMap[currentHash])) {
      currentLocationLetter = "all";
      currentLocationSearch = "";
    }
    ensureLocationFichesInitialized();
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = true;
    if (relations) relations.hidden = true;
    if (chronologie) chronologie.hidden = true;
    if (chapitres) chapitres.hidden = true;
    if (personnages) personnages.hidden = true;
    if (lieux) lieux.hidden = false;
    if (creatures) creatures.hidden = true;
    if (test) test.hidden = true;
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = true;
    if (typeof window.activateLocationPanel === "function") {
      window.activateLocationPanel(locationHashPanelMap[currentHash] || document.querySelector("#lieux-fiches-tabs .fiche-tab")?.dataset.locationTarget);
    }
    refreshLoreLinks();
    return;
  }

  if (currentHash === "#creatures" || isCreatureFicheHash) {
    ensureCreatureFichesInitialized();
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = true;
    if (relations) relations.hidden = true;
    if (chronologie) chronologie.hidden = true;
    if (chapitres) chapitres.hidden = true;
    if (personnages) personnages.hidden = true;
    if (lieux) lieux.hidden = true;
    if (creatures) creatures.hidden = false;
    if (test) test.hidden = true;
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = true;

    if (isCreatureFicheHash && typeof window.activateCreaturePanel === "function") {
      const targetSlug = currentHash.replace("#creatures-fiche-", "");
      const targetFiche = creatureFiches.find((item) => item.slug === targetSlug);
      if (targetFiche) {
        currentCreatureLetter = getFirstLetter(targetFiche.name) || "all";
        initCreatureAlphabetFilter();
        syncCreatureFicheFilter();
      }
      window.activateCreaturePanel(`creature-panel-${targetSlug}`);
    } else {
      initCreatureAlphabetFilter();
      syncCreatureFicheFilter();
    }
    refreshLoreLinks();
    return;
  }

  if (currentHash === "#test") {
    initPandorusTest();
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = true;
    if (relations) relations.hidden = true;
    if (chronologie) chronologie.hidden = true;
    if (chapitres) chapitres.hidden = true;
    if (personnages) personnages.hidden = true;
    if (lieux) lieux.hidden = true;
    if (creatures) creatures.hidden = true;
    if (test) test.hidden = false;
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = true;
    refreshLoreLinks();
    return;
  }

  if (currentHash === "#mysteres") {
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = true;
    if (relations) relations.hidden = true;
    if (chronologie) chronologie.hidden = true;
    if (chapitres) chapitres.hidden = true;
    if (personnages) personnages.hidden = true;
    if (lieux) lieux.hidden = true;
    if (creatures) creatures.hidden = true;
    if (test) test.hidden = true;
    if (mysteres) mysteres.hidden = false;
    if (cartes) cartes.hidden = true;
    refreshLoreLinks();
    return;
  }

  if (currentHash === "#cartes") {
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = true;
    if (relations) relations.hidden = true;
    if (chronologie) chronologie.hidden = true;
    if (chapitres) chapitres.hidden = true;
    if (personnages) personnages.hidden = true;
    if (lieux) lieux.hidden = true;
    if (creatures) creatures.hidden = true;
    if (test) test.hidden = true;
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = false;
    initMapsCarousel();
    renderMaps();
    refreshLoreLinks();
    return;
  }

  if (home) home.hidden = false;
  if (fiches) fiches.hidden = true;
  if (relations) relations.hidden = true;
  if (chronologie) chronologie.hidden = true;
  if (chapitres) chapitres.hidden = true;
  if (personnages) personnages.hidden = true;
  if (lieux) lieux.hidden = true;
  if (creatures) creatures.hidden = true;
  if (test) test.hidden = true;
  if (mysteres) mysteres.hidden = true;
  if (cartes) cartes.hidden = true;
  refreshLoreLinks();
}

window.addEventListener("hashchange", showSectionFromHash);
renderLandingMarquee();
renderLandingPulse();
startLandingOracleRotation();
initChapterViewer();
initCharacterAlphabetFilter();
initCreatureAlphabetFilter();
initRelationFilters();
showSectionFromHash();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runIntroAnimation, { once: true });
} else {
  runIntroAnimation();
}

window.addEventListener("load", runIntroAnimation, { once: true });
window.setTimeout(forceDismissIntroOverlay, 3200);








