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
  "nonstiti": [
    { href: "#lieux-vert", label: "Lire le Vert" },
    { href: "#chronologie", label: "Voir l'entrée dans le Vert" }
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

const locationFiches = [
  {
    slug: "passage",
    name: "Le Passage",
    tone: "threshold",
    category: "Seuil d'entree",
    intro: "Le Passage est le premier lieu où Pandorus cesse d'être seulement un décor pour devenir une présence. Tout y semble annoncer une naissance, une écoute et une première reconnaissance du monde.",
    meta: [
      { label: "Atmosphère", value: "Éveil, seuil, perception naissante" },
      { label: "Fonction", value: "Point d'ouverture du récit" },
      { label: "Présences", value: "Shaushana, Franklin, premières créatures" }
    ],
    biography: [
      "Le Passage agit comme une membrane entre l'errance et l'entrée véritable dans Pandorus. Ce n'est pas encore un territoire organisé comme le Vrax ni un foyer comme le Passar, mais déjà un lieu qui répond, qui filtre et qui oriente.",
      "C'est là que le récit prend son premier souffle sensible. Le vivant y est encore diffus, presque flottant, mais déjà assez fort pour signaler que la suite du voyage ne sera pas seulement géographique."
    ],
    summary: [
      "Le Passage est le lieu où la lecture du monde commence.",
      "Il donne à Shaushana et à Franklin une première expérience d'un univers qui observe, met à l'épreuve et attire vers plus grand que lui."
    ],
    profile: [
      { title: "Texture du lieu", text: "Ouverture, frisson, lumière encore indéterminée et signaux fins du vivant." },
      { title: "Rôle narratif", text: "Il met les héros en route sans encore tout leur révéler." },
      { title: "Lien contextuel", text: "Il prépare aussi les figures, créatures et fleuves qui seront compris plus tard." }
    ],
    contextLinks: [
      { href: "#fiches-shaushana", label: "Voir Shaushana" },
      { href: "#chronologie", label: "Lire le debut du récit" },
      { href: "#cartes", label: "Voir la carte du monde" }
    ]
  },
  {
    slug: "passar",
    name: "Passar",
    tone: "river",
    category: "Fleuve habite",
    intro: "Le Passar est à la fois une rive, un rythme et un refuge. C'est le premier lieu où Pandorus prend une forme communautaire, humaine, fragile, mais tenace.",
    meta: [
      { label: "Atmosphère", value: "Rive, précarité, fraternité" },
      { label: "Fonction", value: "Premier ancrage humain du récit" },
      { label: "Présences", value: "Franklin, Gerom, Mike, mémoire du Capitaine" }
    ],
    biography: [
      "Le Passar accueille sans jamais rassurer totalement. On y sent la vie partagée, les solidarités, les manques et la conscience que l'équilibre reste toujours précaire.",
      "C'est autour de lui que Franklin existe d'abord, que Mike est protégé, et que la disparition du Capitaine continue de laisser une marque ouverte."
    ],
    summary: [
      "Le Passar donne au récit sa première épaisseur sociale.",
      "Il devient vite un point de comparaison avec d'autres lieux, notamment quand le vivant commence à se dérégler."
    ],
    profile: [
      { title: "Texture du lieu", text: "Eau, bois, précarité, solidarité et respiration de bord de fleuve." },
      { title: "Rôle narratif", text: "Ancrer l'histoire dans des vies concrètes avant l'ouverture vers des forces plus anciennes." },
      { title: "Point de tension", text: "Le fleuve reste aussi un lieu d'inquiétude, de manque et de disparition." }
    ],
    contextLinks: [
      { href: "#fiches-franklin", label: "Voir Franklin" },
      { href: "#relations", label: "Voir les liens du Passar" },
      { href: "#mysteres", label: "Ouvrir le mystère du Capitaine" }
    ]
  },
  {
    slug: "bidonville-du-passar",
    name: "Bidonville du Passar",
    tone: "settlement",
    category: "Foyer fragile",
    intro: "Le bidonville du Passar concentre la survie quotidienne, la tendresse rude et l'effort de tenir ensemble au bord du fleuve.",
    meta: [
      { label: "Atmosphère", value: "Abri, improvisation, chaleur humaine" },
      { label: "Fonction", value: "Foyer narratif et zone de veille" },
      { label: "Présences", value: "Mike, Gerom, Franklin, habitants du bord" }
    ],
    biography: [
      "Le bidonville n'a rien d'un lieu noble au sens classique, et pourtant il donne au récit une force très concrète. C'est là que se mesurent la faim, la protection, l'absence et l'attachement.",
      "Il est le lieu de ceux qui tiennent sans grandeur affichée, mais avec une dignité réelle. Son existence rappelle que Pandorus n'est pas seulement fait de grandes révélations, mais aussi de vies modestes qui résistent."
    ],
    summary: [
      "Le bidonville est un foyer de survie autant qu'un lieu de mémoire sociale.",
      "Il rend sensible ce que les grandes forces du monde mettent en danger jusque dans le quotidien."
    ],
    profile: [
      { title: "Texture du lieu", text: "Assemblages fragiles, proximité humaine, veille continue." },
      { title: "Rôle narratif", text: "Donner une chair sociale au récit avant les zones plus sacrées ou anciennes." },
      { title: "Point de tension", text: "Ce qui manque ici se ressent immédiatement, humainement et sans filtre." }
    ],
    contextLinks: [
      { href: "#fiches-mike", label: "Voir Mike" },
      { href: "#fiches-gerom", label: "Voir Gérôm" },
      { href: "#chronologie", label: "Lire les événements liés" }
    ]
  },
  {
    slug: "veyrine",
    name: "Veyrine",
    tone: "memory",
    category: "Fleuve de comparaison",
    intro: "Le Veyrine est un lieu d'observation et d'alerte. On y lit mieux qu'ailleurs que quelque chose du vivant ne suit plus sa course ordinaire.",
    meta: [
      { label: "Atmosphère", value: "Observation, doute, disparition" },
      { label: "Fonction", value: "Lieu d'enquête sur le déséquilibre" },
      { label: "Présences", value: "Le Capitaine, Franklin, expédition interrompue" }
    ],
    biography: [
      "Le Veyrine n'est pas seulement important pour ce qu'on y voit, mais pour ce qu'il permet de mesurer. C'est par écart, par comparaison, qu'il fait sentir que le monde n'est plus tout à fait dans son ordre.",
      "La disparition du Capitaine y gagne une densité particulière. Le lieu garde quelque chose de ce qui a été pressenti sans être rapporté."
    ],
    summary: [
      "Le Veyrine agit comme une rive de lecture du déséquilibre.",
      "Il est aussi un foyer de mémoire troublée autour du Capitaine."
    ],
    profile: [
      { title: "Texture du lieu", text: "Silence, écart, courant inquiet et mémoire inachevée." },
      { title: "Rôle narratif", text: "Donner une preuve indirecte mais forte du dérèglement du vivant." },
      { title: "Point de tension", text: "Il concentre l'une des absences les plus lourdes du récit." }
    ],
    contextLinks: [
      { href: "#fiches-capitaine", label: "Voir le Capitaine" },
      { href: "#mysteres", label: "Ouvrir les mystères" },
      { href: "#chronologie", label: "Lire les bascules" }
    ]
  },
  {
    slug: "bassai",
    name: "Bassaï",
    tone: "river",
    category: "Fleuve d'épreuve",
    intro: "Le Bassaï est moins un simple lieu à franchir qu'une épreuve fluide. Il met à l'écoute, use, teste et fait sentir que certains passages doivent être mérités.",
    meta: [
      { label: "Atmosphère", value: "Passage, profondeur, épreuve" },
      { label: "Fonction", value: "Seuil vers des territoires plus anciens" },
      { label: "Présences", value: "Shaushana, Shan, Franklin, Elrick, créatures du fleuve" }
    ],
    biography: [
      "Le Bassaï concentre la sensation que Pandorus choisit parfois la façon dont on le traverse. Rien n'y est neutre : les formes du vivant, les rythmes du fleuve et les rencontres y composent une épreuve de lecture autant que de survie.",
      "C'est un lieu de tension fertile, où les héros comprennent que le monde répond à leur avance et ne se laisse pas seulement parcourir."
    ],
    summary: [
      "Le Bassaï marque le passage de la simple route à l'expérience du monde conscient.",
      "Il annonce déjà les logiques plus organisées du Vrax."
    ],
    profile: [
      { title: "Texture du lieu", text: "Eau dense, créatures de passage, profondeur attentive." },
      { title: "Rôle narratif", text: "Durcir le voyage et élever la lecture du monde." },
      { title: "Point de tension", text: "Le lieu juge presque autant qu'il laisse passer." }
    ],
    contextLinks: [
      { href: "#fiches-elrick", label: "Voir Elrick" },
      { href: "#creatures", label: "Voir les créatures liées" },
      { href: "#chronologie", label: "Lire les traverses" }
    ]
  },
  {
    slug: "vrax",
    name: "Vrax",
    tone: "vrax",
    category: "Territoire conscient",
    intro: "Le Vrax est une veille organisée. Plus qu'un lieu, il fonctionne comme une intelligence territoriale capable d'évaluer, de protéger, d'opposer et de reconnaître.",
    meta: [
      { label: "Atmosphère", value: "Veille, défense, intelligence du vivant" },
      { label: "Fonction", value: "Centre de protection et de réponse" },
      { label: "Présences", value: "Harry PY, Gardien Isma, Wingard, Lévy, créatrices" }
    ],
    biography: [
      "Entrer dans le Vrax, c'est cesser de croire que le territoire n'est qu'un cadre. Tout y est fonction, lecture, réponse et mémoire organisée. Le monde y prend une forme presque politique, sacrée et collective.",
      "Les protecteurs, les flux et les gardiennes n'y apparaissent pas comme des exceptions isolées, mais comme les organes d'une même logique de défense du vivant."
    ],
    summary: [
      "Le Vrax donne à Pandorus sa forme la plus consciente et la plus structurée.",
      "Il transforme la lecture du récit : l'univers n'est plus seulement vivant, il sait aussi se répondre à lui-même."
    ],
    profile: [
      { title: "Texture du lieu", text: "Densité, ordre ancien, lecture territoriale et tension sacrée." },
      { title: "Rôle narratif", text: "Révéler un niveau supérieur d'organisation du monde." },
      { title: "Point de tension", text: "Ce qui y est reconnu peut être protégé autant que mis à l'épreuve." }
    ],
    contextLinks: [
      { href: "#relations", label: "Voir les figures du Vrax" },
      { href: "#cartes", label: "Voir la carte vivante" },
      { href: "#chronologie", label: "Lire les révélations" }
    ]
  },
  {
    slug: "coeur-du-vrax",
    name: "Cœur du Vrax",
    tone: "vrax",
    category: "Noyau du territoire",
    intro: "Le cœur du Vrax est un lieu de révélation plus que de repos. On y atteint un centre de vérité, mais un centre blessé, où le vivant montre autant sa puissance que son atteinte.",
    meta: [
      { label: "Atmosphère", value: "Révélation, gravité, blessure du vivant" },
      { label: "Fonction", value: "Noyau de lecture du déséquilibre" },
      { label: "Présences", value: "Ossah Lyla, Nastaz, Franklin, Shan, Shaushana, Lévy" }
    ],
    biography: [
      "Au cœur du Vrax, tout se condense. Les affrontements contre les Guéplynx, la capture de Franklin, l'intervention des créatrices et la révélation sur les papillons font de ce lieu un point de bascule majeur.",
      "Ce n'est pas seulement le centre d'un territoire ; c'est aussi un centre de lecture du mal qui traverse Pandorus. On y comprend que l'altération n'est plus abstraite, mais déjà visible dans la trame la plus fine du vivant."
    ],
    summary: [
      "Le cœur du Vrax est l'un des lieux les plus révélateurs du récit à ce stade.",
      "Il fait converger l'intime, le sacré, la défense du monde et le signe très concret de son atteinte."
    ],
    profile: [
      { title: "Texture du lieu", text: "Centre dense, presque rituel, où les signes deviennent explicites." },
      { title: "Rôle narratif", text: "Faire passer le récit de la perception du déséquilibre à sa reconnaissance claire." },
      { title: "Point de tension", text: "Ce qui est vu ici oblige à repartir autrement." }
    ],
    contextLinks: [
      { href: "#fiches-franklin", label: "Voir Franklin" },
      { href: "#fiches-ossah-lyla", label: "Voir Ossah Lyla" },
      { href: "#chronologie", label: "Lire la révélation" }
    ]
  },
  {
    slug: "fleuve-sylvae",
    name: "Fleuve Sylvae",
    tone: "river",
    category: "Piste du sud",
    intro: "Le fleuve Sylvae n'est pas encore pleinement traversé, mais il entre déjà dans le récit comme une direction lourde de promesse et d'inquiétude.",
    meta: [
      { label: "Atmosphère", value: "Appel lointain, piste, décomposition observée" },
      { label: "Fonction", value: "Nouvelle direction du récit" },
      { label: "Présences", value: "Harry PY, zone de décomposition du vivant" }
    ],
    biography: [
      "Le fleuve Sylvae apparaît d'abord comme une destination, mais une destination déjà chargée. Harry PY s'y trouve au sud pour observer une zone où le vivant semble se décomposer autrement.",
      "À ce stade, il agit comme une ouverture narrative : le lieu n'est pas encore donné pleinement, mais il attire déjà l'histoire vers sa prochaine épreuve."
    ],
    summary: [
      "Le fleuve Sylvae lance la prochaine grande direction du voyage.",
      "Il annonce que l'altération du vivant dépasse de loin le seul Vrax."
    ],
    profile: [
      { title: "Texture du lieu", text: "Distance, appel, courant encore hors champ mais déjà menaçant." },
      { title: "Rôle narratif", text: "Ouvrir l'étape suivante sans casser le poids du cœur du Vrax." },
      { title: "Point de tension", text: "Le sud n'est pas une sortie : c'est une aggravation du mystère." }
    ],
    contextLinks: [
      { href: "#fiches-harry-py", label: "Voir Harry PY" },
      { href: "#chronologie", label: "Lire la nouvelle direction" },
      { href: "#mysteres", label: "Ouvrir les mystères" }
    ]
  },
  {
    slug: "mer-du-sphinx-pandorien",
    name: "Mer du Sphinx pandorien",
    tone: "memory",
    category: "Horizon du sud",
    intro: "La mer du Sphinx pandorien n'est encore qu'une ligne de destination, mais une ligne très chargée, presque mythique, vers laquelle le récit oriente maintenant ses forces.",
    meta: [
      { label: "Atmosphère", value: "Lointain, mystère, pression du sud" },
      { label: "Fonction", value: "Horizon narratif en formation" },
      { label: "Présences", value: "Piste future pour Shaushana, Shan, Franklin et Lévy" }
    ],
    biography: [
      "Comme certains lieux encore peu vus mais déjà puissants, la mer du Sphinx pandorien existe d'abord par son nom, sa direction et le poids qu'on lui donne. Elle élargit brusquement l'échelle du monde.",
      "Elle annonce une géographie plus vaste encore, où les rivages, les fleuves et les territoires conscients ne suffiront peut-être plus à contenir ce qui remonte."
    ],
    summary: [
      "La mer du Sphinx pandorien agit comme horizon et menace encore abstraite.",
      "Elle participe à la sensation que Pandorus s'ouvre à une étape plus ample."
    ],
    profile: [
      { title: "Texture du lieu", text: "Horizon, appel, mystère méridional." },
      { title: "Rôle narratif", text: "Étendre le monde au-delà des lieux déjà traversés." },
      { title: "Point de tension", text: "Ce qui attend au sud semble dépasser le simple déplacement." }
    ],
    contextLinks: [
      { href: "#lieux-fleuve-sylvae", label: "Voir le fleuve Sylvae" },
      { href: "#chronologie", label: "Lire la direction vers le sud" },
      { href: "#cartes", label: "Voir le monde" }
    ]
  },
  {
    slug: "village-des-renards",
    name: "Village des Renards",
    tone: "memory",
    category: "Communauté frappée",
    intro: "Le village des Renards apparaît comme un lieu encore debout, mais déjà frappé dans sa matière, ses corps et ses silences. Il porte à la fois la trace d'une attaque organisée et la naissance d'une réponse collective.",
    meta: [
      { label: "Atmosphère", value: "Deuil, veille animale, mémoire vive" },
      { label: "Fonction", value: "Front sud du récit" },
      { label: "Présences", value: "Tsune, Hez, Javier, Harry PY, Lévy" }
    ],
    biography: [
      "Après le cœur du Vrax, le groupe traverse une zone où les papillons se vident, où un Renastar meurt entre les mains de Shaushana et où l'altération ne touche plus seulement les flux, mais la création elle-même.",
      "Le village des Renards apparaît ensuite comme une communauté déjà atteinte. Les renards vivants veillent leurs morts, les habitations tiennent encore sans être saines, et le silence y porte davantage de poids que la destruction visible.",
      "C'est là que Tsune, Hez et Javier deviennent des figures majeures, que Kuji et Elennya se révèlent comme volontés hostiles, et que la Communauté des Papillons prend forme comme réponse partagée."
    ],
    summary: [
      "Le village des Renards montre que le dérèglement du vivant s'est transformé en agression organisée contre des communautés entières.",
      "Il devient aussi le lieu de naissance d'un nouveau front humain et vivant contre ce qui cherche à remplacer Pandorus."
    ],
    profile: [
      { title: "Texture du lieu", text: "Bois blessé, deuil tenu, renards en veille et mémoire déjà rituelle." },
      { title: "Rôle narratif", text: "Faire passer le récit d'un constat d'altération à une réponse collective née de la perte." },
      { title: "Point de tension", text: "Ce qui frappe ici ne veut pas seulement tuer : cela veut imposer un autre ordre du vivant." }
    ],
    contextLinks: [
      { href: "#fiches-tsune", label: "Voir Tsune" },
      { href: "#fiches-kuji", label: "Voir Kuji" },
      { href: "#chronologie", label: "Lire le basculement du village" }
    ]
  },
  {
    slug: "embouchure-du-sombrail",
    name: "Embouchure du Sombrail",
    tone: "threshold",
    category: "Seuil atteint",
    intro: "L'embouchure du Sombrail devient un vrai point de passage: une terre où le fleuve rejoint la mer pandorienne, où le dérèglement se fait sentir et où une taverne ancienne tient encore debout.",
    meta: [
      { label: "Atmosphère", value: "Horizon, survivance, mémoire marine" },
      { label: "Fonction", value: "Seuil de mémoire et d'orientation" },
      { label: "Présences", value: "Taverne ancienne, Brad, Bradlette, Ab'Youbi, Syne" }
    ],
    biography: [
      "Tsune désigne l'embouchure du Sombrail comme un lieu tenu par des figures que beaucoup croient disparues, des survivants d'une époque où le monde a déjà vacillé autrement.",
      "En l'atteignant, la Communauté des Papillons traverse un paysage déjà fragilisé: papillons vidés, créatures mortes sans blessure, vent froid et zones qui semblent perdre leur cohérence.",
      "Le Sombrail n'est donc plus une simple destination annoncée. Il devient le seuil où le présent rencontre une mémoire active, capable d'expliquer l'origine du déséquilibre et d'ouvrir la route vers ce qui voit plus loin."
    ],
    summary: [
      "L'embouchure du Sombrail accueille la première halte majeure de la Communauté des Papillons après le village des Renards.",
      "Elle relie le chemin présent à une mémoire ancienne encore vivante, gardée dans une taverne qui résiste au monde qui se déforme."
    ],
    profile: [
      { title: "Texture du lieu", text: "Eaux mêlées, seuil maritime, rumeur de savoir ancien." },
      { title: "Rôle narratif", text: "Projeter le récit vers une strate plus large de mémoire et de stratégie." },
      { title: "Point de tension", text: "Ce qui attend au Sombrail reconnaît déjà ce que le groupe porte, mais ne révèle pas tout." }
    ],
    contextLinks: [
      { href: "#chronologie", label: "Voir la nouvelle destination" },
      { href: "#mysteres", label: "Ouvrir les nouveaux mystères" },
      { href: "#cartes", label: "Voir le monde" }
    ]
  },
  {
    slug: "taverne-du-sombrail",
    name: "Taverne du Sombrail",
    tone: "memory",
    category: "Archive habitée",
    intro: "La taverne du Sombrail est un refuge de bois ancien, de chaleur retenue et de regards prudents. Elle ne protège pas du monde: elle conserve ce que le monde risque d'oublier.",
    meta: [
      { label: "Atmosphère", value: "Bois sombre, lanternes, mémoire, tension contenue" },
      { label: "Fonction", value: "Lieu de révélation et de passage" },
      { label: "Présences", value: "Brad, Bradlette, Ab'Youbi, Syne, Ezze, Gil, Filston" }
    ],
    biography: [
      "La Communauté des Papillons y entre après une traversée lourde d'anomalies, guidée par la piste ouverte par Tsune. Le lieu n'est ni accueillant ni hostile: il impose son rythme et reconnaît ceux qui n'arrivent pas par hasard.",
      "Brad et Bradlette y maintiennent un équilibre fragile, tandis qu'Ab'Youbi observe ce que les autres ne voient pas. Au fond de la salle, Syne garde une boîte dont la présence ne semble pas inerte.",
      "La taverne devient surtout un passage de mémoire: Brad entraîne le groupe dans le souvenir des Briscards, d'Elrick jeune, de Mitra Séssé, de Papy Perquis et de Padre Souf, jusqu'à l'origine du ciel assombri et des étoiles comme traces de l'ancien combat."
    ],
    summary: [
      "La taverne du Sombrail transforme la quête en enquête de mémoire.",
      "Elle révèle que le monde actuel ne commence pas seulement à se dérégler: il suit à nouveau une ligne déjà vécue autrefois."
    ],
    profile: [
      { title: "Texture du lieu", text: "Tables marquées, lanternes tremblantes, chaleur dense et silence qui écoute." },
      { title: "Rôle narratif", text: "Relier la Communauté des Papillons aux survivants, aux Briscards et à l'origine ancienne du déséquilibre." },
      { title: "Point de tension", text: "Syne et sa boîte introduisent une présence retenue qui ne doit pas encore être vue." }
    ],
    contextLinks: [
      { href: "#fiches-brad-et-bradlette", label: "Voir Brad et Bradlette" },
      { href: "#fiches-abyoubi", label: "Voir Ab'Youbi" },
      { href: "#fiches-syne", label: "Voir Syne" },
      { href: "#chronologie", label: "Lire la révélation de la taverne" }
    ]
  },
  {
    slug: "vert",
    name: "Le Vert",
    tone: "vrax",
    category: "Royaume vivant",
    intro: "Le Vert est une profondeur du monde où la vie déborde encore, dense, observatrice, parfois blessée mais pas soumise. On n'y entre pas comme dans une forêt : on y est lu, jugé, puis éventuellement accepté.",
    meta: [
      { label: "Atmosphère", value: "Canopée dense, souffle humide, royauté animale" },
      { label: "Fonction", value: "Lieu de reconnaissance, de duel et de rééquilibrage" },
      { label: "Présences", value: "Eben, Macagardiens, Gorillanges, Nonstitis, Serpensouffres" }
    ],
    biography: [
      "Le Vert s'impose d'abord comme une zone encore très vivante, où le dérèglement existe sans avoir totalement gagné. Les sons, l'humidité, la densité des arbres et la multiplicité des espèces y donnent l'impression d'une vie plus ancienne que les routes humaines.",
      "En s'y enfonçant, le groupe découvre une hiérarchie animale et territoriale plus subtile qu'une simple hostilité : Serpensouffres dans la hauteur, peuples singes en veille, puis Eben comme centre d'équilibre reconnu par le lieu.",
      "Le Vert devient alors le théâtre d'une bascule majeure : Shan y retrouve Eben, comprend autrement ce qui a fondé sa violence, puis transforme leur affrontement en reconnaissance réciproque plutôt qu'en simple destruction."
    ],
    summary: [
      "Le Vert est le lieu où le vivant résiste encore par sa propre souveraineté.",
      "Il relie la quête du Capitaine, la blessure de Shan et une autre forme de puissance du monde, moins humaine, mais pleinement consciente."
    ],
    profile: [
      { title: "Texture du lieu", text: "Feuillages épais, sol respirant, vie animale organisée et pression ancienne." },
      { title: "Rôle narratif", text: "Faire passer le récit d'une quête de réponse à une épreuve de reconnaissance, de duel et de rééquilibrage." },
      { title: "Point de tension", text: "Le Vert protège encore ses formes de vie, mais ses ruines intérieures montrent que le vide y a déjà pénétré." }
    ],
    contextLinks: [
      { href: "#fiches-eben", label: "Voir Eben" },
      { href: "#fiches-capitaine", label: "Voir le Capitaine" },
      { href: "#chronologie", label: "Lire le passage dans le Vert" }
    ]
  },
  {
    slug: "ruines-du-vert",
    name: "Ruines du Vert",
    tone: "memory",
    category: "Captivité révélée",
    intro: "Au milieu d'une zone étrangement vidée, les ruines du Vert gardent un silence plus lourd que le reste de la forêt. Ici, le monde ne paraît pas mort : il paraît retiré.",
    meta: [
      { label: "Atmosphère", value: "Pierres brisées, vie retirée, souffle captif" },
      { label: "Fonction", value: "Lieu de révélation humaine et de reprise de quête" },
      { label: "Présences", value: "Capitaine, groupe de Shaushana, rumeur devenue preuve" }
    ],
    biography: [
      "Les ruines apparaissent après le duel entre Shan et Eben, comme si le groupe devait d'abord rééquilibrer un lien ancien avant d'accéder à cette vérité-là. Le silence y est plus inquiétant que la violence directe.",
      "Les murs brisés, le sol desséché et l'absence anormale de vie y signalent une autre forme d'atteinte du monde : non plus l'agression frontale, mais le retrait, l'assèchement, la captivité.",
      "C'est là que Franklin reconnaît enfin le Capitaine, maintenu vivant mais brisé, transformant une disparition lointaine en présence retrouvée et ouvrant une nouvelle urgence pour le groupe."
    ],
    summary: [
      "Les ruines du Vert convertissent la rumeur en preuve.",
      "Elles montrent que le dérèglement du monde n'enlève pas seulement la vie : il retient, use et suspend certaines présences au bord de l'effacement."
    ],
    profile: [
      { title: "Texture du lieu", text: "Ruines ouvertes, sol sec, silence comprimé et gémissement retenu." },
      { title: "Rôle narratif", text: "Réintroduire le Capitaine dans le présent du récit et réorienter la quête après le duel d'Eben." },
      { title: "Point de tension", text: "Ce lieu prouve que le groupe n'a fait qu'effleurer la logique qui vide, retient et altère Pandorus." }
    ],
    contextLinks: [
      { href: "#fiches-capitaine", label: "Voir le Capitaine" },
      { href: "#mysteres", label: "Relire les mystères" },
      { href: "#chronologie", label: "Lire la découverte des ruines" }
    ]
  },
  {
    slug: "sombra",
    name: "Sombra",
    tone: "threshold",
    category: "Direction de l'ouest",
    intro: "La Sombra n'est pas encore traversée, mais elle entre dans le récit comme une terre d'observation et de lecture, liée à Bichette, Reine du Blanc, et à ses gardiennes.",
    meta: [
      { label: "Atmosphère", value: "Ouest lointain, veille blanche, compréhension en réserve" },
      { label: "Fonction", value: "Prochaine orientation stratégique" },
      { label: "Présences", value: "Bichette, Luna Queen, Méli Mélo" }
    ],
    biography: [
      "Brad et Bradlette nomment la Sombra comme une direction plutôt que comme une promesse de salut. Ce n'est pas un refuge évident, mais un lieu où certaines figures peuvent encore lire ce qui vient avant qu'il ne s'impose pleinement au monde.",
      "Bichette, Reine du Blanc, y est évoquée avec Luna Queen et Méli Mélo comme une triade de veille, de perception et d'équilibre plus fin que la seule force de combat.",
      "Même si le groupe choisit d'abord de passer par le Vert à cause du Capitaine et d'Eben, la Sombra reste inscrite comme l'une des prochaines étapes majeures de la route."
    ],
    summary: [
      "La Sombra ouvre l'ouest du récit.",
      "Elle promet moins une bataille qu'une compréhension, et pourrait devenir le lieu où les lignes du monde se lisent avant de se rompre."
    ],
    profile: [
      { title: "Texture du lieu", text: "Horizon occidental, lumière tenue, présence blanche et lecture du monde." },
      { title: "Rôle narratif", text: "Déplacer la quête de la survie immédiate vers une recherche plus fine de compréhension." },
      { title: "Point de tension", text: "Le groupe sait désormais qu'il devra y aller, mais le monde l'oblige d'abord à passer par d'autres nœuds plus urgents." }
    ],
    contextLinks: [
      { href: "#fiches-bichette", label: "Voir Bichette" },
      { href: "#fiches-luna-queen", label: "Voir Luna Queen" },
      { href: "#fiches-meli-melo", label: "Voir Méli Mélo" }
    ]
  }
].map((fiche) => ({
  ...fiche,
  image: getLocationImage(fiche.slug)
}));

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
    role: "Guide absent du Passar",
    links: [
      { target: "Franklin", type: "Expédition", description: "Le Capitaine emmene Franklin jusqu'au Veyrine pour verifier si le déséquilibre du Passar touche aussi d'autres eaux." },
      { target: "Passar", type: "Responsabilité", description: "Sa lecture du fleuve et du vivant fait de lui l'un des premiers adultes a prendre la corruption du monde au serieux." },
      { target: "Veyrine", type: "Quête de réponse", description: "Le voyage vers le Veyrine marque son dernier grand geste connu avant sa disparition." },
      { target: "Déséquilibre du vivant", type: "Pressentiment", description: "Le Capitaine semble percevoir une présence invisible avant d'ordonner a Franklin de rentrer et de disparaitre seul." },
      { target: "Ruines du Vert", type: "Captivité", description: "La rumeur du Vert se révèle juste : le Capitaine est retrouvé vivant mais retenu dans une zone vidée, au centre de ruines anciennes." }
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
      { target: "Aligaroi", type: "Autorité reconnue", description: "Au bord du Sombrail, Ab'Youbi fait céder l'Aligaroi sans combat, comme si une ancienneté commune se reconnaissait entre eux." }
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
      { target: "Sombra", type: "Ancrage", description: "Bichette est nommée comme la grande présence de la Sombra, lieu de lecture et de veille plus que de domination." },
      { target: "Luna Queen", type: "Gardienne liée", description: "Luna Queen fait partie des figures qui prolongent ou accompagnent son équilibre." },
      { target: "Méli Mélo", type: "Gardienne liée", description: "Méli Mélo complète autour d'elle une forme de veille plus fine que la seule force." }
    ]
  },
  {
    name: "Luna Queen",
    role: "Gardienne de la Sombra",
    links: [
      { target: "Bichette", type: "Veille partagée", description: "Luna Queen est évoquée comme l'une des gardiennes liées à Bichette dans la Sombra." },
      { target: "Méli Mélo", type: "Complément", description: "Avec Méli Mélo, elle forme une présence secondaire mais stratégique autour de la Reine du Blanc." },
      { target: "Sombra", type: "Territoire", description: "Sa présence appartient aux terres de l'ouest vers lesquelles Brad réoriente le groupe." }
    ]
  },
  {
    name: "Méli Mélo",
    role: "Gardienne de la Sombra",
    links: [
      { target: "Bichette", type: "Veille partagée", description: "Méli Mélo est nommée comme une gardienne liée à Bichette et à la lecture de la Sombra." },
      { target: "Luna Queen", type: "Complément", description: "Elle prolonge avec Luna Queen une même ligne de présence autour de l'ouest." },
      { target: "Sombra", type: "Territoire", description: "Sa place se dessine dans la prochaine grande direction du récit, encore hors champ mais déjà décisive." }
    ]
  }
];

function buildMediaPath(folder, fileName) {
  const safeFileName = encodeURIComponent(fileName).replace(/'/g, "%27");
  return `./media/${folder}/${safeFileName}`;
}

function getLocationImage(slug) {
  const locationHeroImage = buildMediaPath("lieux", "Photo de Garde.jpg");
  const locationImageMap = {
    passage: buildMediaPath("lieux", "Le Passage.jpg"),
    passar: buildMediaPath("lieux", "Passar.jpg"),
    "bidonville-du-passar": buildMediaPath("lieux", "Bidonville du Passar.jpg"),
    veyrine: buildMediaPath("lieux", "Veyrine.jpg"),
    bassai: buildMediaPath("lieux", "Bassaï.jpg"),
    vrax: buildMediaPath("lieux", "Le Vrax.jpg"),
    "coeur-du-vrax": buildMediaPath("lieux", "Coeur Du Vrax.jpg"),
    "fleuve-sylvae": buildMediaPath("lieux", "Sylvae.jpg"),
    "mer-du-sphinx-pandorien": buildMediaPath("lieux", "Mer du Sphinx Pandorien.jpg"),
    "village-des-renards": buildMediaPath("lieux", "Village des Renards.jpg"),
    "embouchure-du-sombrail": buildMediaPath("lieux", "Embouchure du Sombrail.jpg"),
    "taverne-du-sombrail": buildMediaPath("lieux", "Taverne du Sombrail.jpg"),
    vert: buildMediaPath("lieux", "Le Vert.png"),
    "ruines-du-vert": buildMediaPath("lieux", "Les Ruines du Vert.png")
  };

  return locationImageMap[slug] || locationHeroImage;
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

const additionalCharacterFiches = [
  {
    slug: "harry-py",
    hash: "#fiches-harry-py",
    name: "Harry PY",
    image: buildMediaPath("pandorus", "Harry PY.png"),
    category: "Protecteur du Vrax",
    intro: "Premier enfant-reponse du Vrax, Harry PY percoit, lit et structure les flux du monde mieux que quiconque dans sa generation.",
    meta: [
      { label: "Statut", value: "Premier protecteur cree par le Vrax" },
      { label: "Specialite", value: "Perception, lecture et structuration du vivant" },
      { label: "Lien majeur", value: "Noyau des protecteurs du Vrax" }
    ],
    biography: [
      "Harry PY apparait il y a neuf ans, lorsque le Vrax detecte une variation anormale dans son equilibre. Sa naissance n'est pas presentee comme un hasard, mais comme une réponse precise du monde a une nécessité plus ancienne et plus grave.",
      "En grandissant, Harry PY ne decouvre pas le Vrax comme un enfant ordinaire: il s'y accorde. Il ressent les flux, les absences et les alterations, et devient peu a peu celui qui lit ce que les autres ne font encore qu'encaisser.",
      "Il apparait comme le centre discret du groupe du Vrax. Gardien Isma, Wingard et Lévy s'organisent autour de lui, et sa simple présence donne une structure a leurs roles respectifs.",
      "Lorsque l'alteration gagne encore du terrain, Harry PY n'est plus seulement un lecteur du coeur du Vrax: il est déjà envoye plus au sud, vers une zone de decomposition du vivant, pour comprendre ce qui s'y passe avant les autres."
    ],
    summary: [
      "Harry PY incarne l'intelligence sensible du Vrax. Il ne domine pas les autres par la force, mais par la lecture du monde et la capacité a percevoir les failles avant qu'elles ne deviennent des ruptures.",
      "Il devient une figure essentielle du nouvel equilibre du Vrax et de la réponse du monde face au retour du déséquilibre."
    ],
    profile: [
      { title: "Caractere", text: "Observe, concentre et déjà grave, meme dans un corps d'enfant." },
      { title: "Forces", text: "Percoit les flux, les absences et les variations du vivant avec une precision unique." },
      { title: "Faiblesses", text: "Porte de plus en plus directement la fatigue d'un monde qu'il tente de comprendre et de contenir." }
    ],
    relations: [
      { title: "Gardien Isma", text: "Gardien se place instinctivement entre Harry PY et le danger, comme si sa fonction etait nee avec lui." },
      { title: "Wingard", text: "Wingard déséquilibre souvent l'espace, mais Harry demeure le centre vers lequel son chaos revient." },
      { title: "Lévy", text: "Lévy complete ce que Harry ne peut plus lire seul, notamment face aux zones de vide du Vrax." }
    ],
    timeline: [
      { era: "Il y a 9 ans", title: "Naissance de Harry PY", summary: "Le Vrax cree Harry PY comme première réponse consciente a une variation anormale et a une urgence encore invisible." },
      { era: "Il y a 6 a 3 ans", title: "Centre du groupe protecteur", summary: "Les naissances suivantes s'organisent autour de lui et le Vrax commence a fonctionner en generation de réponse." },
      { era: "Jour 5", title: "Perception du groupe de Shaushana", summary: "Harry PY fait partie des protecteurs qui reagissent a l'intrusion du groupe dans le Vrax." },
      { era: "Jour 6", title: "Veille au sud", summary: "Les creatrices révèlent qu'Harry PY observe déjà une autre zone touchee par l'alteration, vers le fleuve Sylvae et la mer du Sphinx pandorien." }
    ]
  },
  {
    slug: "gardien-isma",
    hash: "#fiches-gardien-isma",
    name: "Gardien Isma",
    image: buildMediaPath("pandorus", "Gardien Isma.png"),
    category: "Protecteur du Vrax",
    intro: "Force d'ancrage et de protection du Vrax, Gardien Isma est cree pour tenir, encaisser et se placer la ou le monde a besoin d'une barriere vivante.",
    meta: [
      { label: "Statut", value: "Protecteur du Vrax" },
      { label: "Specialite", value: "Protection, impact, maintien de ligne" },
      { label: "Lien majeur", value: "Bouclier instinctif de Harry PY" }
    ],
    biography: [
      "Gardien Isma apparait six ans avant le present du récit, lorsque le Vrax comprend qu'une simple perception ne suffira plus a faire face a ce qui approche.",
      "Sa naissance est plus dense, plus brutale, plus immediatement physique que celle de Harry PY. Il apprend le monde par l'appui, l'impact et la resistance, jusqu'a ce que la terre elle-meme reponde avec lui.",
      "Il devient la ligne de defense evidente du groupe. C'est lui qui saisit Franklin au moment de l'attaque, non par cruaute gratuite, mais comme execution d'une réponse precise du Vrax."
    ],
    summary: [
      "Gardien Isma est la force de maintien du Vrax. Il ne lit pas le monde comme Harry et ne le module pas comme Lévy: il le tient.",
      "Sa fonction prend tout son sens lorsque le groupe de Shaushana entre dans le territoire et force les protecteurs a agir."
    ],
    profile: [
      { title: "Caractere", text: "Direct, stable, peu demonstratif et entierement tourne vers sa fonction." },
      { title: "Forces", text: "Ancrage, precision physique, reaction immediate, protection instinctive." },
      { title: "Faiblesses", text: "Comprend moins que Harry ou Lévy les causes profondes de ce qu'il doit contenir." }
    ],
    relations: [
      { title: "Harry PY", text: "Il se place naturellement entre Harry et toute menace potentielle." },
      { title: "Wingard", text: "Wingard ouvre et destabilise; Gardien passe ensuite pour fixer ou saisir." },
      { title: "Franklin", text: "Franklin devient sa cible lors de l'interception, parce qu'il semble porter quelque chose de particulier." }
    ],
    timeline: [
      { era: "Il y a 6 ans", title: "Naissance de Gardien Isma", summary: "Le Vrax cree Gardien Isma comme réponse plus dense et plus physique au déséquilibre grandissant." },
      { era: "Il y a 6 a 3 ans", title: "Mise en place du role de protecteur", summary: "Il devient le point fixe et l'appui principal du groupe ne autour de Harry PY." },
      { era: "Jour 5", title: "Capture de Franklin", summary: "Gardien Isma traverse le chaos et saisit Franklin au moment le plus critique de l'interception." }
    ]
  },
  {
    slug: "wingard",
    hash: "#fiches-wingard",
    name: "Wingard",
    image: buildMediaPath("pandorus", "Wingard.png"),
    category: "Protecteur du Vrax",
    intro: "Troisieme réponse du Vrax, Wingard introduit le mouvement, le vent et l'instabilite necessaire dans un monde qui ne peut plus seulement se maintenir par la force.",
    meta: [
      { label: "Statut", value: "Protecteur du Vrax" },
      { label: "Specialite", value: "Vent, vitesse, perturbation" },
      { label: "Lien majeur", value: "Chaos utile au service du Vrax" }
    ],
    biography: [
      "Wingard nait il y a quatre ans, au moment ou le Vrax ne repond plus seulement par la structure, mais doit integrer un principe de mouvement capable de s'ajuster vite a l'instabilite.",
      "Sa naissance est la plus chaotique des premières creations: le vent le deborde lui-meme, les branches cedent, les appuis glissent, et son existence semble d'abord être une perturbation vivante avant de devenir une fonction.",
      "Dans le present du récit, Wingard reste le plus imprevisible du groupe, mais sa vitesse et sa maîtrise grandissante du vent en font un acteur cle de la neutralisation de Shan, Shaushana et Franklin."
    ],
    summary: [
      "Wingard est le protecteur du mouvement et de la perturbation. Il n'arrete pas le monde: il le desaxe assez pour le rendre a nouveau saisissable.",
      "Il n'est plus seulement un enfant du vent, mais un element tactique a part entiere du Vrax."
    ],
    profile: [
      { title: "Caractere", text: "Vif, instable, joueur en apparence, mais de plus en plus capable de se recentrer." },
      { title: "Forces", text: "Controle du vent, vitesse d'action, capacité a casser les appuis et les trajectoires." },
      { title: "Faiblesses", text: "Reste le plus sujet au debordement et a la turbulence parmi les protecteurs." }
    ],
    relations: [
      { title: "Harry PY", text: "Harry PY lui offre un centre vers lequel son chaos peut revenir." },
      { title: "Gardien Isma", text: "Wingard ouvre et destabilise; Gardien passe ensuite pour fixer ou saisir." },
      { title: "Shaushana et Shan", text: "Le vent qu'il deploie brise leur synchronisation et leur lecture immediate de l'attaque." }
    ],
    timeline: [
      { era: "Il y a 4 ans", title: "Naissance de Wingard", summary: "Le Vrax cree Wingard quand une simple tenue de ligne ne suffit plus a repondre a l'instabilite croissante." },
      { era: "Il y a 4 a 3 ans", title: "Apprentissage du chaos", summary: "Son energie devient progressivement moins destructrice et plus dirigee." },
      { era: "Jour 5", title: "Encerclement du groupe", summary: "Wingard ferme l'espace, casse les appuis et empeche toute réponse immediate a la prise de Franklin." }
    ]
  },
  {
    slug: "levy",
    hash: "#fiches-levy",
    name: "Lévy",
    image: buildMediaPath("pandorus", "Lévy.png"),
    category: "Protecteur du Vrax",
    intro: "Lévy apparait quand le Vrax rencontre non plus un exces, mais un vide. Il devient le lien capable d'ajuster ce qui ne repond plus.",
    meta: [
      { label: "Statut", value: "Protecteur du Vrax" },
      { label: "Specialite", value: "Ajustement, lien, lecture de l'absence" },
      { label: "Lien majeur", value: "Reponse aux zones de rupture" }
    ],
    biography: [
      "Lévy nait il y a trois ans, lorsque le Vrax rencontre une absence brutale dans ses flux, quelque chose que ni la force de Gardien, ni la lecture de Harry, ni le chaos de Wingard ne peuvent resoudre seuls.",
      "Plus fin, plus discret, Lévy n'impose pas. Il ajuste. Il dialogue avec la matiere, deplace, reequilibre, corrige ce qui cede, meme si la cicatrice du monde ne disparait jamais totalement.",
      "Il joue un role determinant pendant l'interception du groupe. Il fixe le sol, ralentit les appuis et sent en Franklin quelque chose de different avant de laisser la nécessité l'emporter.",
      "Apres l'intervention d'Ossah Lyla et de Nastaz, c'est pourtant lui que les creatrices choisissent pour quitter le coeur du Vrax et accompagner Shaushana, Shan et Franklin vers le sud, preuve qu'il n'est pas seulement une defense du territoire mais déjà un passeur."
    ],
    summary: [
      "Lévy est le protecteur du lien et de la reparation partielle. Il intervient la ou le monde n'est plus seulement agresse, mais rompu.",
      "Sa présence fait entrer le récit dans une logique plus fine: celle d'un Vrax qui ne reagit plus seulement par la force, mais aussi par l'ajustement."
    ],
    profile: [
      { title: "Caractere", text: "Silencieux, precis, presque absorbe par ce qu'il percoit sous la surface visible." },
      { title: "Forces", text: "Sent les absences, reajuste la matiere et impose des limites invisibles mais efficaces." },
      { title: "Faiblesses", text: "Affronte le déséquilibre le plus abstrait et en porte une charge mentale plus difficile a partager." }
    ],
    relations: [
      { title: "Harry PY", text: "Lévy complete ce que Harry ne peut plus lire seul lorsque les flux cessent simplement de repondre." },
      { title: "Gardien Isma", text: "Lévy ne retient pas par la force; il prepare le terrain pour que Gardien puisse tenir." },
      { title: "Franklin", text: "Il ressent chez Franklin une singularité avant meme que le groupe du Vrax n'agisse totalement." }
    ],
    timeline: [
      { era: "Il y a 3 ans", title: "Naissance de Lévy", summary: "Le Vrax cree Lévy face a une absence dans ses flux, une fracture que les autres réponses ne peuvent absorber seules." },
      { era: "Il y a 3 ans", title: "Formation du groupe complet", summary: "Avec Lévy, la generation des protecteurs du Vrax atteint une forme d'equilibre fonctionnel." },
      { era: "Jour 5", title: "Fixation du terrain", summary: "Lévy perturbe les appuis du groupe de Shaushana et participe directement a la prise de Franklin." },
      { era: "Jour 6", title: "Depart avec le groupe", summary: "Au matin, Lévy quitte le coeur du Vrax pour accompagner le groupe vers la nouvelle zone de rupture du vivant." }
    ]
  },
  {
    slug: "ossah-lyla",
    hash: "#fiches-ossah-lyla",
    name: "Ossah Lyla",
    image: buildMediaPath("pandorus", "Ossah Lyla.png"),
    category: "Figure du Vrax",
    intro: "Ossah Lyla est la forme diurne de la perception du Vrax: douce, attentive, completement accordee a la respiration du monde.",
    meta: [
      { label: "Statut", value: "Figure diurne du Vrax" },
      { label: "Specialite", value: "Perception du vivant, accompagnement, lecture des cycles" },
      { label: "Lien majeur", value: "Protectrice du Vrax et des naissances" }
    ],
    biography: [
      "Ossah Lyla apparait comme l'une des consciences les plus fines du Vrax. Le jour, elle ressent les variations du monde avant qu'elles ne deviennent visibles et accompagne le vivant dans son rythme profond.",
      "Elle ne commande pas par la contrainte. Sa présence révèle, intensifie et apaise. C'est sous son regard que l'equilibre du Vrax est d'abord mesure, puis que les premières inquietudes deviennent assez fortes pour appeler une réponse.",
      "Au fil des naissances de Harry PY, Gardien Isma, Wingard et Lévy, Ossah Lyla apparait comme une figure de veille et de douceur, mais traversee par une inquietude de plus en plus concrete.",
      "Lorsque Shaushana, Shan et Franklin atteignent enfin le coeur du Vrax, elle se révèle aussi comme l'une des deux creatrices du lieu, liee a la vegetation du jour et a l'essence des papillons dont depend une part de l'equilibre de Pandorus."
    ],
    summary: [
      "Ossah Lyla represente le versant lumineux, accompagne et presque sacre du Vrax. Elle est moins une combattante qu'une lectrice profonde du vivant.",
      "Son importance grandit encore a mesure que l'on comprend que les protecteurs naissent aussi pour protèger les creatrices du Vrax, et que l'extinction des papillons touche directement ce qu'elle maintient."
    ],
    profile: [
      { title: "Caractere", text: "Douce, attentive, profonde et infiniment sensible aux variations du vivant." },
      { title: "Forces", text: "Percoit les dissonances avant qu'elles ne se materialisent et apaise partiellement les déséquilibres." },
      { title: "Faiblesses", text: "Ne repond pas par la force brute a ce qui demande une defense immediate." }
    ],
    relations: [
      { title: "Nastaz", text: "Nastaz n'est pas son contraire, mais son prolongement nocturne, plus tranchant et analytique." },
      { title: "Protecteurs du Vrax", text: "Les enfants-creations du Vrax existent aussi pour protèger ce qu'Ossah Lyla incarne dans l'equilibre du monde." },
      { title: "Wingard", text: "Sa seule présence parvient a ralentir et restructurer le chaos declenche par Wingard a sa naissance." }
    ],
    timeline: [
      { era: "Avant le récit", title: "Veille diurne du Vrax", summary: "Ossah Lyla lit le Vrax au jour et detecte les premières dissonances qui menacent son equilibre." },
      { era: "Il y a 9 a 3 ans", title: "Temoin des naissances", summary: "Elle accompagne la formation progressive de la generation des protecteurs du Vrax." },
      { era: "Jour 5", title: "Intervention des creatrices", summary: "Ossah Lyla interrompt l'escalade entre le groupe et les protecteurs, puis révèle la logique profonde du Vrax." },
      { era: "Jour 5", title: "Révélation des papillons", summary: "Elle montre le cimetière silencieux des papillons et explique que leur essence est indispensable a l'equilibre du monde." }
    ]
  },
  {
    slug: "nastaz",
    hash: "#fiches-nastaz",
    name: "Nastaz",
    image: buildMediaPath("pandorus", "Nastaz.png"),
    category: "Figure du Vrax",
    intro: "Nastaz est la forme nocturne, lucide et tranchante de la vigilance du Vrax. La nuit, elle analyse ce qu'Ossah Lyla ressent le jour.",
    meta: [
      { label: "Statut", value: "Figure nocturne du Vrax" },
      { label: "Specialite", value: "Analyse, decision, lecture froide de l'alteration" },
      { label: "Lien majeur", value: "Comprend la nécessité de creer les protecteurs" }
    ],
    biography: [
      "Nastaz apparait comme le versant nocturne du meme principe que celui d'Ossah Lyla. La ou l'une accompagne, Nastaz tranche, verifie, decide et accepte plus vite la nécessité d'une réponse.",
      "C'est elle qui constate l'alteration du Vrax avec le plus de froideur et qui comprend que les naissances successives ne sont pas des miracles isoles, mais des adaptations imposees par un déséquilibre reel.",
      "Sa présence lie le Vrax a une idee plus vaste: le monde ne subit pas passivement, il observe, calcule et repond.",
      "Lorsque le groupe atteint le coeur du Vrax, Nastaz apparait comme l'autre creatrice du lieu, associee a la vegetation de nuit, a la lucidite froide et a la decision de faire sortir la quete hors du territoire."
    ],
    summary: [
      "Nastaz incarne la conscience analytique et nocturne du Vrax. Elle voit au-dela de l'emotion immediate et reconnait plus vite que les autres la logique de preparation du monde.",
      "Avec elle, la réponse du Vrax prend une intelligence plus froide et plus strategique."
    ],
    profile: [
      { title: "Caractere", text: "Froide en apparence, precise, jamais distraite par l'hesitation." },
      { title: "Forces", text: "Analyse les alterations, comprend les besoins du Vrax et assume les decisions necessaires." },
      { title: "Faiblesses", text: "Peut sembler inhumaine tant sa lecture du danger passe avant tout le reste." }
    ],
    relations: [
      { title: "Ossah Lyla", text: "Elle prolonge Ossah Lyla dans une version plus dure, plus nette et plus orientee vers l'action." },
      { title: "Harry PY", text: "Elle comprend très tot qu'Harry n'est pas un enfant ordinaire, mais une réponse consciente du Vrax." },
      { title: "Generation des protecteurs", text: "Nastaz saisit avant tous les autres que ces naissances constituent une preparation, et non une suite d'accidents." }
    ],
    timeline: [
      { era: "Avant le récit", title: "Veille nocturne du Vrax", summary: "La nuit, Nastaz analyse le vivant et mesure l'ampleur exacte des alterations a venir." },
      { era: "Il y a 9 a 3 ans", title: "Comprehension des naissances", summary: "Elle identifie chaque nouvelle creation comme une réponse complementaire du Vrax face au déséquilibre." },
      { era: "Jour 5", title: "Intervention nocturne", summary: "Nastaz se révèle aux cotes d'Ossah Lyla et impose une lecture plus froide, plus nette et plus strategique de la crise." },
      { era: "Jour 6", title: "Orientation de la quête", summary: "Elle confirme que la suite ne se trouve plus dans le seul Vrax et oriente le groupe vers la zone alteree du sud." }
    ]
  },
  {
    slug: "tsune",
    hash: "#fiches-tsune",
    name: "Tsune",
    image: buildMediaPath("pandorus", "Tsune.jpg"),
    category: "Gardien du village des Renards",
    intro: "Tsune apparaît comme une figure de défense immédiate, vive et tenue, dont la violence n'est jamais gratuite mais toujours liée à la protection d'un lieu déjà frappé.",
    meta: [
      { label: "Statut", value: "Gardien du village des Renards" },
      { label: "Spécialité", value: "Vitesse, hache, lecture du danger" },
      { label: "Lien majeur", value: "Membre naissant de la Communauté des Papillons" }
    ],
    biography: [
      "Tsune se dresse d'abord comme une méfiance incarnée entre le groupe et le cœur du village. Son apparence de renard-humain, sa lecture instantanée et sa hache tenue comme une extension naturelle de lui-même en font une figure de seuil plus qu'un simple habitant.",
      "Très vite pourtant, il comprend que Shaushana, Shan, Franklin et Lévy ne sont pas des intrus ordinaires. Son regard change sans perdre sa vigilance, et cette nuance suffit à ouvrir le village au groupe sans jamais effacer la tension du lieu.",
      "Après la mort de Hez et la révélation de Kuji, Tsune cesse d'être seulement le défenseur d'un foyer. Il devient l'un de ceux qui acceptent qu'aucune réponse locale ne suffira plus, et rejoint ainsi la Communauté des Papillons dans une logique de route autant que de deuil."
    ],
    summary: [
      "Tsune passe du rôle de gardien méfiant à celui de membre essentiel d'une réponse collective nouvelle.",
      "Sa trajectoire se construit autour de Hez, du village des Renards et de la direction ouverte contre Kuji."
    ],
    profile: [
      { title: "Caractère", text: "Vif, tendu, loyal et beaucoup plus fin dans sa lecture qu'il ne le montre d'abord." },
      { title: "Forces", text: "Grande vitesse, sens de l'interception, lecture instinctive du danger et engagement total." },
      { title: "Faiblesses", text: "Le deuil de Hez le traverse directement et risque de transformer sa direction en obsession pure." }
    ],
    relations: [
      { title: "Hez", text: "Hez est la perte qui transforme Tsune et fait basculer sa défense locale en engagement plus vaste." },
      { title: "Javier", text: "Javier complète sa protection du village par une veille plus silencieuse, plus sensible et plus lointaine." },
      { title: "Shaushana", text: "Tsune reconnaît rapidement en elle un centre d'équilibre fiable au milieu du chaos du village." },
      { title: "Kuji", text: "Kuji devient pour Tsune une cible de direction, la preuve que le mal agit avec pensée, méthode et volonté." }
    ],
    timeline: [
      { era: "Jour 7", title: "Seuil du village", summary: "Tsune intercepte le groupe à l'entrée du village des Renards, d'abord par méfiance puis par lecture." },
      { era: "Jour 7", title: "Défense contre l'assaut", summary: "Il combat les vagues de créatures puis se heurte directement à Kuji dans la bulle du village." },
      { era: "Jour 7", title: "Mort de Hez", summary: "La perte de Hez scelle chez Tsune un point de non-retour dans sa manière de porter la lutte." },
      { era: "Jour 8", title: "Communauté des Papillons", summary: "Tsune accepte de ne plus défendre seulement un lieu, mais une réponse plus large à ce qui cherche à remplacer le vivant." }
    ]
  },
  {
    slug: "hez",
    hash: "#fiches-hez",
    name: "Hez",
    image: buildMediaPath("pandorus", "Hez.jpg"),
    category: "Pilier du village des Renards",
    intro: "Hez incarne la stabilité calme du village, la tenue silencieuse et la dignité de ceux qui protègent sans chercher à se raconter.",
    meta: [
      { label: "Statut", value: "Protecteur du village" },
      { label: "Spécialité", value: "Tenue de ligne, ancrage, rituel" },
      { label: "Lien majeur", value: "Perte centrale des chapitres du village" }
    ],
    biography: [
      "Lorsque le groupe entre dans le village, Hez apparaît déjà au milieu d'un geste de deuil, les mains dans la terre, comme si sa manière d'exister passait d'abord par l'accompagnement de ce qui tombe.",
      "Pendant l'assaut suivant, il devient l'un des trois axes de défense avec Tsune et Javier. Sa force n'est pas spectaculaire: elle consiste à tenir, à protéger les structures et à offrir au combat un centre humain, lourd et stable.",
      "Sa mort face à Kuji fait basculer tout le village. Après elle, le récit ne parle plus seulement d'attaque ou d'altération, mais d'une volonté qui tue pour imposer une autre logique au monde. Le rituel qui suit transforme Hez en mémoire partagée autant qu'en perte."
    ],
    summary: [
      "Hez est le pilier silencieux dont la mort devient le cœur moral du basculement au sud.",
      "Il reste lié au village même après sa disparition, jusque dans la naissance de la Communauté des Papillons."
    ],
    profile: [
      { title: "Caractère", text: "Calme, solide, peu bavard, entièrement défini par ce qu'il tient et protège." },
      { title: "Forces", text: "Ancrage, endurance, tenue de ligne, capacité à faire face sans éclat inutile." },
      { title: "Faiblesses", text: "Sa force est locale, frontale, et ne peut suffire seule face à une volonté comme celle de Kuji." }
    ],
    relations: [
      { title: "Tsune", text: "Hez est l'une des attaches majeures de Tsune au village, et sa mort donne à ce lien une profondeur irréversible." },
      { title: "Javier", text: "Tous deux tiennent le village selon des formes différentes: l'un par le sol, l'autre par la veille." },
      { title: "Kuji", text: "Kuji choisit Hez comme point de rupture, et cette mise à mort devient la preuve claire d'une volonté hostile." }
    ],
    timeline: [
      { era: "Jour 7", title: "Veille du village", summary: "Hez apparaît déjà au cœur des gestes de terre, de soin et de continuité du village frappé." },
      { era: "Jour 7", title: "Défense contre Kuji", summary: "Il tient la ligne au centre du combat quand Tsune et Javier ouvrent les autres angles de réponse." },
      { era: "Jour 7", title: "Mort de Hez", summary: "Sa mort impose un point de non-retour au groupe comme au village entier." },
      { era: "Jour 8", title: "Rituel commun", summary: "Le deuil de Hez et des renards devient l'un des fondements affectifs de la Communauté des Papillons." }
    ]
  },
  {
    slug: "javier",
    hash: "#fiches-javier",
    name: "Javier",
    image: buildMediaPath("pandorus", "Javier.png"),
    category: "Veilleur du village des Renards",
    intro: "Archer à l'arc blanc et à la perception singulière, Javier veille sans chercher à dominer l'espace; il le sent, le lit et le couvre.",
    meta: [
      { label: "Statut", value: "Veilleur du village" },
      { label: "Spécialité", value: "Perception, tir, surveillance" },
      { label: "Lien majeur", value: "Point de veille qui demeure au sud" }
    ],
    biography: [
      "Javier apparaît d'abord comme une silhouette blanche en hauteur, marquée par une cicatrice et par des yeux qui ne lisent pas le monde de manière ordinaire. Sa présence donne immédiatement au village une profondeur de perception différente.",
      "Pendant l'assaut, il couvre le combat par un tir d'une précision troublante, comme s'il sentait les trajectoires plus qu'il ne les voyait. Elennya brise pourtant son appui, montrant que les adversaires nouveaux savent répondre même à cette veille-là.",
      "Après la nuit de deuil et la naissance de la Communauté des Papillons, Javier reste lié au village comme point de continuité. Là où d'autres repartent, il demeure comme une veille indispensable du sud frappé."
    ],
    summary: [
      "Javier est la forme sensible et silencieuse de la défense du village.",
      "Il devient aussi l'un de ceux qui restent pour tenir le lieu pendant que la quête s'ouvre plus loin."
    ],
    profile: [
      { title: "Caractère", text: "Silencieux, concentré, presque impassible, mais jamais absent de ce qu'il perçoit." },
      { title: "Forces", text: "Lecture fine de l'espace, précision du tir, présence calme au cœur du danger." },
      { title: "Faiblesses", text: "Son corps est touché pendant l'assaut et sa défense dépend d'une stabilité de terrain qu'Elennya peut altérer." }
    ],
    relations: [
      { title: "Tsune", text: "Javier prolonge la protection de Tsune par une veille plus lointaine et plus patiente." },
      { title: "Hez", text: "Avec Hez, il constitue l'un des appuis qui empêchent encore le village de céder entièrement." },
      { title: "Harry PY", text: "Harry Py comprend vite que Javier restera l'un des relais de perception du village après son retour vers le Vrax." }
    ],
    timeline: [
      { era: "Jour 7", title: "Veille blanche", summary: "Javier couvre l'entrée du groupe dans le village par une lecture silencieuse de l'espace." },
      { era: "Jour 7", title: "Assaut du village", summary: "Ses tirs stoppent plusieurs trajectoires avant qu'Elennya ne brise son appui et son élan." },
      { era: "Jour 8", title: "Présence au rituel", summary: "Blessé mais debout, Javier participe à la nouvelle manière de porter la perte." },
      { era: "Jour 8", title: "Veille maintenue", summary: "Alors que le groupe s'oriente vers la suite, Javier reste lié au village comme point de garde durable." }
    ]
  },
  {
    slug: "kuji",
    hash: "#fiches-kuji",
    name: "Kuji",
    image: buildMediaPath("pandorus", "Kuji.png"),
    category: "Figure hostile",
    intro: "Kuji fait entrer le récit dans une hostilité consciente, calme et idéologique. Il n'attaque pas comme une créature déréglée: il agit comme quelqu'un qui croit corriger le monde.",
    meta: [
      { label: "Statut", value: "Adversaire conscient" },
      { label: "Spécialité", value: "Combat direct, domination, rupture" },
      { label: "Lien majeur", value: "Volonté de remplacement du vivant" }
    ],
    biography: [
      "Kuji apparaît à la limite du village avec une assurance qui tranche avec toutes les menaces précédentes. Son corps, sa maîtrise et sa parole montrent immédiatement qu'il n'est ni une simple créature ni un simple bandit du monde altéré.",
      "Dans le combat, il encaisse, contrôle et décide. Il ne cherche pas seulement à vaincre: il montre qu'il appartient déjà à une logique supérieure de domination, appuyée par Elennya et par une lecture du vivant comme matière à corriger.",
      "Ses mots rendent la menace plus nette encore. Pour lui, le monde libre, instable et foisonnant de Pandorus n'est pas une richesse, mais un système trop lâche à remplacer par autre chose. En tuant Hez, il transforme cette idée en preuve irréversible."
    ],
    summary: [
      "Kuji est la première grande figure hostile qui pense, parle et assume clairement une vision du monde opposée à celle des héros.",
      "Il révèle que l'altération n'est plus seulement un symptôme: elle est portée par des agents, une méthode et un objectif."
    ],
    profile: [
      { title: "Caractère", text: "Calme, sûr de lui, dérangeant dans la facilité avec laquelle il impose sa vision." },
      { title: "Forces", text: "Maîtrise du combat, pression physique, stabilité terrifiante et autorité idéologique." },
      { title: "Faiblesses", text: "Se révèle par sa propre parole et laisse derrière lui une direction trop nette pour rester abstrait." }
    ],
    relations: [
      { title: "Elennya", text: "Elennya complète Kuji en déformant l'espace et en rendant son avantage encore plus total." },
      { title: "Hez", text: "La mise à mort de Hez devient le centre concret de ce que Kuji veut imposer au monde." },
      { title: "Tsune", text: "Kuji fait de Tsune un ennemi de direction, pas seulement de réaction." },
      { title: "Shaushana", text: "Face à elle, Kuji oppose une vision où la vie doit être contrainte, réglée et remplacée." }
    ],
    timeline: [
      { era: "Jour 7", title: "Révélation au village", summary: "Kuji se montre au groupe comme une présence calme, consciente et déjà sûre de sa propre logique." },
      { era: "Jour 7", title: "Combat du village", summary: "Il domine le combat central, résiste à Tsune et Hez, puis impose une rupture totale dans le rapport de force." },
      { era: "Jour 7", title: "Mort de Hez", summary: "En tuant Hez, Kuji transforme l'attaque en point de non-retour moral et narratif." },
      { era: "Jour 8", title: "Volonté reconnue", summary: "À travers lui, le groupe comprend que la menace cherche à remplacer le monde plutôt qu'à le blesser seulement." }
    ]
  },
  {
    slug: "elennya",
    hash: "#fiches-elennya",
    name: "Elennya",
    image: buildMediaPath("pandorus", "Elennya.png"),
    category: "Figure hostile",
    intro: "Elennya n'impose pas la brutalité de Kuji; elle impose un glissement plus froid, plus déformant, où l'espace lui-même semble renoncer à sa cohérence première.",
    meta: [
      { label: "Statut", value: "Présence hostile de soutien" },
      { label: "Spécialité", value: "Entrave, projection, déformation" },
      { label: "Lien majeur", value: "Complément stratégique de Kuji" }
    ],
    biography: [
      "Elennya apparaît au côté de Kuji comme une présence presque douce en surface, mais profondément étrangère dans son effet sur la matière, les appuis et l'air lui-même.",
      "Là où Kuji rompt frontalement, Elennya ralentit, enferme, dévie et casse les possibilités d'action. Elle ne se contente pas d'aider: elle restructure le champ du combat pour rendre la résistance plus difficile, plus tardive et plus coûteuse.",
      "Sa présence confirme que l'adversité nouvelle n'agit pas seulement par force, mais par manipulation du terrain, des trajectoires et des conditions mêmes de la lutte."
    ],
    summary: [
      "Elennya donne à la menace un versant plus froid, plus technique et plus insidieux que la simple violence de Kuji.",
      "Avec elle, le récit comprend que l'hostilité sait aussi remodeler les conditions du vivant et du combat."
    ],
    profile: [
      { title: "Caractère", text: "Calme, lisse, presque apaisante en surface, mais profondément dérangeante dans son effet." },
      { title: "Forces", text: "Déforme l'espace, entrave les corps, brise les appuis et accompagne l'avantage de Kuji." },
      { title: "Faiblesses", text: "Reste encore partiellement énigmatique, ce qui laisse deviner qu'elle n'a pas tout montré." }
    ],
    relations: [
      { title: "Kuji", text: "Elennya ne suit pas seulement Kuji: elle rend sa domination possible et plus nette encore." },
      { title: "Tsune", text: "Elle retient Tsune au moment décisif et l'empêche d'intervenir à temps." },
      { title: "Javier", text: "Elle casse la ligne de tir et les appuis qui permettaient à Javier de tenir le combat à distance." },
      { title: "Shan", text: "Shan comprend par elle que certains adversaires cassent l'action avant même le choc frontal." }
    ],
    timeline: [
      { era: "Jour 7", title: "Apparition au village", summary: "Elennya se révèle aux côtés de Kuji comme une force d'accompagnement et de déformation." },
      { era: "Jour 7", title: "Entrave du combat", summary: "Elle ralentit Tsune, brise la précision de Javier et rend le terrain du combat hostile jusque dans sa matière." },
      { era: "Jour 7", title: "Retrait après la rupture", summary: "Avec Kuji, elle quitte le village sans fuite réelle, comme si rien n'avait pu la menacer." }
    ]
  },
  {
    slug: "ezze",
    hash: "#fiches-ezze",
    name: "Ezze",
    image: buildMediaPath("pandorus", "Ezze.png"),
    category: "Voyageur instinctif",
    intro: "Ezze est une présence vive, rapide et insaisissable, incapable de rester immobile longtemps, mais capable de lire les anomalies du monde avant même de les comprendre.",
    meta: [
      { label: "Statut", value: "Voyageur pandorien lié à la taverne" },
      { label: "Spécialité", value: "Vitesse, instinct, lecture des moments" },
      { label: "Lien majeur", value: "Gil, Filston et la Communauté des Papillons" }
    ],
    biography: [
      "Ezze part jeune, non par fuite, mais parce que l'immobilité lui donne l'impression de perdre quelque chose. Son rapport au monde passe par le mouvement: avancer, observer, éviter, réagir avant que les autres n'aient fini de comprendre.",
      "Au fil de ses routes, il perçoit des zones où le monde ne répond plus correctement. Il ne sait pas encore nommer le déséquilibre, mais il le lit dans les silences, les sols fragiles et les variations invisibles.",
      "Sa rencontre avec Gil et Filston l'oblige à ralentir intérieurement. Leur manière de voir Pandorus comme un monde qui n'est peut-être pas fermé ouvre en lui une question plus vaste que sa propre course.",
      "À la taverne du Sombrail, Ezze retrouve Gil et Filston, puis aperçoit la Communauté des Papillons. Pour une fois, il ne passe pas: il reste, comme si toutes les trajectoires qu'il avait suivies convergeaient enfin."
    ],
    summary: [
      "Ezze incarne la vitesse, l'intuition et la lecture instinctive d'un monde qui se dérègle.",
      "Son arrivée à la taverne le place au contact direct de la Communauté des Papillons et d'une mémoire plus grande que sa propre route."
    ],
    profile: [
      { title: "Caractère", text: "Vif, provocateur, curieux, difficile à fixer, mais plus sensible au monde qu'il ne le montre." },
      { title: "Forces", text: "Réaction rapide, lecture des anomalies, adaptation immédiate, capacité à éviter les zones instables." },
      { title: "Faiblesses", text: "Tendance à fuir l'immobilité, à masquer ses questions par l'ironie et le mouvement." }
    ],
    relations: [
      { title: "Gil et Filston", text: "Leur rencontre lui donne une autre manière de comprendre le monde, moins instinctive et plus vertigineuse." },
      { title: "Communauté des Papillons", text: "Il la reconnaît comme une anomalie majeure de la taverne, avant même de connaître son nom ou son rôle." },
      { title: "Taverne du Sombrail", text: "Le premier lieu où son mouvement naturel se suspend assez longtemps pour devenir une vraie présence." }
    ],
    timeline: [
      { era: "Avant la taverne", title: "Départ et routes solitaires", summary: "Ezze traverse Pandorus en suivant son instinct, sa vitesse et les signes faibles du terrain." },
      { era: "Jour 9", title: "Rencontre avec Gil et Filston", summary: "Leur regard décalé sur le monde ouvre chez lui une question qu'il ne peut plus ignorer." },
      { era: "Jour 10", title: "Arrivée à la taverne", summary: "Ezze rejoint Gil et Filston au Sombrail et choisit de rester face à la Communauté des Papillons." },
      { era: "Jour 10", title: "Rumeur du Vert", summary: "À la taverne, Ezze relie ses propres observations à la rumeur d'un homme retenu au coeur du Vert et contribue à réorienter la quête." },
      { era: "Jour 11", title: "Guide du fleuve", summary: "Sur les berges du Sombrail, Ezze lit le terrain, choisit les appuis et devient naturellement celui qui ouvre le passage." },
      { era: "Nuit du Jour 11", title: "Pause sans fuite", summary: "Au camp, pour la première fois, Ezze ne cherche pas seulement à repartir : il reste avec le groupe et commence à accepter d'en faire réellement partie." },
      { era: "Jour 12", title: "Entrée dans la forêt vivante", summary: "Le lendemain, Ezze guide encore le groupe jusqu'au Vert, évite les attaques, protège Filston et assiste au face-à-face avec Eben sans chercher à reprendre le contrôle." },
      { era: "Jour 12", title: "Vers le Capitaine", summary: "Après le duel entre Shan et Eben, Ezze poursuit la marche avec les autres jusqu'aux ruines où la rumeur sur le Capitaine devient enfin une preuve." }
    ]
  },
  {
    slug: "gil-et-filston",
    hash: "#fiches-gil-et-filston",
    name: "Gil et Filston",
    image: buildMediaPath("pandorus", "Gil et Filston.jpg"),
    category: "Duo d'ailleurs",
    intro: "Gil et Filston portent une manière étrange de regarder Pandorus, comme si ce monde leur était à la fois réel, impossible et encore à vérifier.",
    meta: [
      { label: "Statut", value: "Duo rencontré par Ezze" },
      { label: "Spécialité", value: "Observation, questionnement, perception du décalage" },
      { label: "Lien majeur", value: "Ezze et la taverne du Sombrail" }
    ],
    biography: [
      "Gil parle beaucoup, mais pas pour occuper le silence: ses mots cherchent à vérifier la réalité même de ce qu'il voit. Il affirme venir d'un endroit où Pandorus n'existe pas, ce qui déstabilise Ezze plus profondément qu'une provocation ordinaire.",
      "Filston observe avec une curiosité directe, presque pure. Ses questions touchent des points que les autres évitent, notamment cette impression que le monde va parfois trop vite, trop lentement, ou qu'il décale sans prévenir.",
      "Avec Ezze, ils traversent une zone instable où le sol se vide sous les pas de Filston. Ezze le sauve par instinct, et leur lien se fixe dans cette expérience du danger.",
      "À la taverne du Sombrail, leurs routes rejoignent celle d'Ezze et croisent la Communauté des Papillons, comme si leur regard extérieur devait entrer dans le même réseau d'événements."
    ],
    summary: [
      "Gil et Filston ouvrent une autre lecture de Pandorus: celle d'un monde peut-être relié à d'autres réalités.",
      "Leur présence rend Ezze plus attentif à ce qu'il traverse et prépare son arrêt à la taverne."
    ],
    profile: [
      { title: "Gil", text: "Verbal, posé, presque scientifique dans sa manière de vérifier le réel." },
      { title: "Filston", text: "Curieux, direct, sensible aux détails que d'autres ne formulent pas." },
      { title: "Rôle narratif", text: "Introduire une étrangeté plus vaste autour de Pandorus et de ses frontières." }
    ],
    relations: [
      { title: "Ezze", text: "Ils l'obligent à rester face à une question plus grande que son instinct de fuite." },
      { title: "Taverne du Sombrail", text: "Le lieu où leur trajectoire rejoint celle de la Communauté des Papillons." },
      { title: "Pandorus", text: "Ils suggèrent que le monde pourrait être plus ouvert, plus troublant et plus poreux qu'il ne paraît." }
    ],
    timeline: [
      { era: "Jour 9", title: "Rencontre avec Ezze", summary: "Gil et Filston troublent Ezze par leur regard différent sur la réalité de Pandorus." },
      { era: "Jour 9", title: "Sol vidé", summary: "Filston manque d'être pris par une anomalie du terrain avant qu'Ezze ne l'arrache au danger." },
      { era: "Jour 10", title: "Arrivée commune", summary: "Ils rejoignent Ezze à la taverne et entrent dans le même lieu que la Communauté des Papillons." },
      { era: "Jour 10", title: "Ouverture du réel", summary: "Dans la taverne, leurs paroles sur d'autres mondes cessent d'être de simples étrangetés et élargissent réellement la lecture du groupe." },
      { era: "Jour 11", title: "Traversée avec le groupe", summary: "Sur la route du Sombrail, Gil observe tout comme un système à comprendre, tandis que Filston reste traversé d'émerveillement malgré le danger." },
      { era: "Nuit du Jour 11", title: "Après les attaques", summary: "La nuit venue, Gil veille sur Filston et tous deux commencent à mesurer que ce qu'ils observent n'est plus un simple décalage de réalité, mais une crise du vivant." },
      { era: "Jour 12", title: "Témoins du duel", summary: "Dans le Vert, ils assistent à l'attaque des Serpensouffres, à l'apparition d'Eben et au combat de Shan, en comprenant que certaines vérités ne s'expliquent qu'en étant traversées." },
      { era: "Jour 12", title: "Preuve finale du chapitre", summary: "Ils suivent le groupe jusqu'aux ruines et voient la rumeur prendre corps avec la découverte du Capitaine captif." }
    ]
  },
  {
    slug: "brad-et-bradlette",
    hash: "#fiches-brad-et-bradlette",
    name: "Brad et Bradlette",
    image: buildMediaPath("pandorus", "Brad et Bradlette.jpg"),
    category: "Gardiens de taverne",
    intro: "Brad et Bradlette maintiennent la taverne du Sombrail comme un lieu d'équilibre, de mémoire et de reconnaissance silencieuse.",
    meta: [
      { label: "Statut", value: "Tenanciers et survivants de mémoire" },
      { label: "Spécialité", value: "Accueil prudent, lecture des présences, passage de souvenir" },
      { label: "Lien majeur", value: "Elrick, les Briscards, la Communauté des Papillons" }
    ],
    biography: [
      "Brad tient le comptoir avec une stabilité presque rituelle. Chaque geste semble maintenir le lieu debout contre ce qui déforme le monde autour.",
      "Bradlette circule entre les tables avec une légèreté maîtrisée, mais son regard revient sans cesse vers ceux qui décalent l'équilibre de la salle. Elle reconnaît les présences qui ne viennent pas par hasard.",
      "En évoquant Elrick et les anciens signes du déséquilibre, Brad ouvre un passage de mémoire. Il entraîne la Communauté des Papillons dans un souvenir vivant des Briscards et de l'origine de la nuit chargée d'étoiles."
    ],
    summary: [
      "Brad et Bradlette ne sont pas de simples aubergistes: ils gardent un seuil entre le présent et une mémoire ancienne.",
      "Leur taverne devient le lieu où la quête comprend que le mal actuel suit une ligne déjà ouverte autrefois."
    ],
    profile: [
      { title: "Brad", text: "Solide, calme, capable d'ouvrir des souvenirs comme des passages." },
      { title: "Bradlette", text: "Fluide, attentive, gardienne de l'équilibre social et émotionnel du lieu." },
      { title: "Rôle narratif", text: "Faire entrer la Communauté des Papillons dans une mémoire active du monde." }
    ],
    relations: [
      { title: "Elrick", text: "Son nom suffit à ouvrir une reconnaissance ancienne et à relier la taverne à la guerre passée." },
      { title: "Ab'Youbi", text: "Il partage avec eux une veille discrète sur ce qui traverse le lieu." },
      { title: "Syne", text: "Ils connaissent la limite à ne pas franchir autour d'elle et de sa boîte." }
    ],
    timeline: [
      { era: "Jour 10", title: "Accueil de la Communauté", summary: "Brad et Bradlette reconnaissent le décalage du groupe dès son entrée dans la taverne." },
      { era: "Jour 10", title: "Souvenir des Briscards", summary: "Brad ouvre un passage de mémoire vers l'origine ancienne du déséquilibre." },
      { era: "Jour 10", title: "Nouvelle direction", summary: "Ils orientent la quête vers une créatrice capable de voir avant que le monde ne bascule." },
      { era: "Jour 10", title: "Priorité du Vert", summary: "Avec Ezze et Franklin, ils aident à faire passer la recherche du Capitaine avant la route de la Sombra, sans effacer cette dernière." },
      { era: "Fin du Jour 10", title: "Parole laissée en veille", summary: "Une fois le groupe parti, leur mémoire et leur orientation continuent d'agir comme une boussole vers le Vert puis vers la Sombra." }
    ]
  },
  {
    slug: "abyoubi",
    hash: "#fiches-abyoubi",
    name: "Ab'Youbi",
    image: buildMediaPath("pandorus", "AbYoubi.png"),
    category: "Veilleur sombre",
    intro: "Ab'Youbi est une présence immobile et profonde, capable de percevoir les traces invisibles qui suivent les voyageurs.",
    meta: [
      { label: "Statut", value: "Veilleur de la taverne" },
      { label: "Spécialité", value: "Perception des désalignements et des traces" },
      { label: "Lien majeur", value: "Syne, Brad, Bradlette, mémoire ancienne" }
    ],
    biography: [
      "Dans l'ombre de la taverne, Ab'Youbi observe moins les corps que ce qui les entoure. Ses yeux rouges semblent lire les variations, les traces et les désalignements laissés par ce que le groupe a traversé.",
      "Il reconnaît silencieusement la gravité de la Communauté des Papillons, puis valide la mémoire ouverte par Brad comme une réalité encore active plutôt qu'un simple récit.",
      "Face à Syne et à la boîte, son attitude change à peine, mais cette retenue suffit: il sait que certaines forces ne doivent pas être provoquées pour être comprises."
    ],
    summary: [
      "Ab'Youbi apporte à la taverne une veille plus obscure, plus ancienne et plus perceptive.",
      "Il confirme que ce qui revient n'a jamais vraiment disparu, mais s'est transformé et dispersé."
    ],
    profile: [
      { title: "Caractère", text: "Silencieux, profond, extrêmement attentif, sans besoin de démonstration." },
      { title: "Forces", text: "Lecture des traces invisibles, perception de l'altération, reconnaissance des limites." },
      { title: "Mystère", text: "Son origine et l'étendue réelle de sa perception restent ouvertes." }
    ],
    relations: [
      { title: "Brad et Bradlette", text: "Ils maintiennent avec lui une veille tacite sur l'équilibre de la taverne." },
      { title: "Syne", text: "Il reconnaît le danger contenu autour d'elle sans chercher à l'affronter." },
      { title: "Communauté des Papillons", text: "Il lit dans le groupe une trace plus vaste que leur simple présence physique." }
    ],
    timeline: [
      { era: "Jour 10", title: "Veille dans l'ombre", summary: "Ab'Youbi reconnaît ce que le groupe porte avant même que les mots ne soient posés." },
      { era: "Jour 10", title: "Lecture de l'ancien déséquilibre", summary: "Il nomme une altération qui modifie le monde jusqu'à lui faire perdre son point d'équilibre." },
      { era: "Jour 10", title: "Reconnaissance de Syne", summary: "Il comprend que la boîte de Syne contient une présence qu'il ne faut pas forcer." },
      { era: "Jour 11", title: "Suivi à distance", summary: "Ab'Youbi quitte la taverne derrière le groupe, maintenant sa distance comme s'il suivait moins leurs pas que leur trajectoire." },
      { era: "Jour 11", title: "Retrait de l'Aligaroi", summary: "Au bord du fleuve, il fait céder l'Aligaroi sans combat et révèle une autorité plus ancienne que la simple puissance." },
      { era: "Nuit du Jour 11", title: "Veille silencieuse", summary: "La nuit, Ab'Youbi reste à distance du camp sans jamais disparaître, comme une présence qui protège sans rejoindre." },
      { era: "Jour 12", title: "Présence dans le territoire ancien", summary: "Le lendemain, il entre dans le Vert comme dans un lieu déjà connu et observe sans intervenir l'approche d'Eben et le duel de Shan." },
      { era: "Jour 12", title: "Parole d'équilibre", summary: "Quand Shan veut prolonger la violence, Ab'Youbi l'arrête et rappelle qu'Eben n'était pas la cause première du drame ancien." }
    ]
  },
  {
    slug: "syne",
    hash: "#fiches-syne",
    name: "Syne",
    image: buildMediaPath("pandorus", "Syne.jpg"),
    category: "Gardienne de la boîte",
    intro: "Syne est la femme blonde de la taverne, calme et presque hors du lieu, gardant une boîte dont la présence retenue commence à s'éveiller.",
    meta: [
      { label: "Statut", value: "Présence énigmatique de la taverne" },
      { label: "Spécialité", value: "Contrôle, retenue, seuil du visible" },
      { label: "Objet majeur", value: "La boîte fermée" }
    ],
    biography: [
      "Syne reste assise au fond de la taverne, droite, immobile, entourée d'un espace que les autres évitent sans avoir besoin d'en parler. Sa présence ne cherche pas à dominer, mais elle déplace l'équilibre du lieu.",
      "Devant elle repose une boîte fermée, silencieuse, trop importante pour être un simple objet. Lorsqu'un frottement se fait entendre à l'intérieur, toute la taverne comprend que ce qu'elle garde n'est pas inerte.",
      "Syne ne menace personne. Elle affirme seulement qu'il n'y a rien à craindre tant que personne ne cherche à voir ce qui n'est pas encore destiné à être vu, imposant une limite calme et absolue."
    ],
    summary: [
      "Syne introduit un mystère nouveau: une présence contenue, retenue au seuil de l'existence visible.",
      "Elle n'est pas encore une adversaire ni une alliée claire, mais elle devient immédiatement impossible à ignorer."
    ],
    profile: [
      { title: "Caractère", text: "Calme, stable, presque détachée, avec une maîtrise froide du moment." },
      { title: "Forces", text: "Contrôle de la tension, autorité silencieuse, capacité à maintenir ce qui est contenu." },
      { title: "Mystère", text: "La nature exacte de sa boîte et de ce qui s'y éveille reste inconnue." }
    ],
    relations: [
      { title: "Ab'Youbi", text: "Il reconnaît autour d'elle une force ou une limite qui ne doit pas être forcée." },
      { title: "Brad et Bradlette", text: "Ils adaptent toute la taverne à sa présence sans jamais la nommer directement." },
      { title: "Communauté des Papillons", text: "Son existence ajoute à leur route un mystère qui dépasse leur objectif immédiat." }
    ],
    timeline: [
      { era: "Jour 10", title: "Présence au fond de la taverne", summary: "Syne apparaît comme une figure silencieuse gardant une boîte fermée." },
      { era: "Jour 10", title: "Premier frémissement", summary: "Un mouvement étouffé se fait entendre dans la boîte, révélant que ce qu'elle contient n'est pas inerte." },
      { era: "Jour 10", title: "Limite posée", summary: "Syne rappelle que certaines choses ne doivent pas encore être vues." },
      { era: "Fin du Jour 10", title: "Départ discret", summary: "Au moment où le groupe quitte la taverne, Syne et sa boîte disparaissent déjà du lieu, comme si leur propre route suivait une logique séparée." }
    ]
  },
  {
    slug: "mitra-sesse",
    hash: "#fiches-mitra-sesse",
    name: "Mitra Séssé",
    image: buildMediaPath("pandorus", "Mitra Séssé.jpg"),
    category: "Briscard",
    intro: "Mitra Séssé appartient à la mémoire des Briscards, ces figures anciennes qui ont tenu lorsque le monde commençait déjà à se décaler.",
    meta: [
      { label: "Statut", value: "Figure de la guerre ancienne" },
      { label: "Groupe", value: "Les Briscards" },
      { label: "Lien majeur", value: "Elrick jeune et la mémoire ouverte par Brad" }
    ],
    biography: [
      "Mitra Séssé apparaît dans le souvenir vivant ouvert à la taverne du Sombrail. Il n'est pas présenté comme un simple nom du passé, mais comme une présence encore entière, debout dans un monde sur le point de basculer.",
      "Avec les Briscards, il participe à la première grande résistance contre le déséquilibre, non par domination, mais par maintien, lecture et coordination face à une présence obscure diffuse.",
      "Son retour par la mémoire donne au présent une profondeur nouvelle: ceux qui avancent aujourd'hui ne sont pas les premiers à tenir face à ce qui déforme Pandorus."
    ],
    summary: [
      "Mitra Séssé renforce la mémoire des Briscards et l'idée d'une résistance ancienne encore active.",
      "Sa fiche relie la taverne, Elrick jeune et l'origine du combat contre l'obscurité dispersée."
    ],
    profile: [
      { title: "Nature", text: "Ancien résistant du monde, ancré dans la mémoire des Briscards." },
      { title: "Rôle", text: "Participer à la stabilisation du vivant lors du premier grand dérèglement." },
      { title: "Mystère", text: "Son histoire personnelle reste encore à ouvrir au-delà du souvenir collectif." }
    ],
    relations: [
      { title: "Les Briscards", text: "Mitra Séssé en est l'une des figures visibles dans la mémoire de Brad." },
      { title: "Elrick jeune", text: "Il partage avec lui le moment où le monde commence à perdre son équilibre." },
      { title: "Brad", text: "Brad transmet sa présence par un souvenir vivant plutôt que par une simple histoire." }
    ],
    timeline: [
      { era: "Ancien temps", title: "Résistance des Briscards", summary: "Mitra Séssé apparaît parmi ceux qui tiennent lorsque le déséquilibre ancien s'installe." },
      { era: "Jour 10", title: "Retour par la mémoire", summary: "La taverne permet à la Communauté des Papillons de le voir comme une présence réelle du passé." },
      { era: "Fin du Jour 10", title: "Mémoire active", summary: "Une fois la route relancée vers le Vert, Mitra Séssé cesse d'être un simple souvenir : il devient un précédent concret pour ceux qui avancent à leur tour." }
    ]
  },
  {
    slug: "papy-perquis",
    hash: "#fiches-papy-perquis",
    name: "Papy Perquis",
    image: buildMediaPath("pandorus", "Papy Perquis.jpg"),
    category: "Briscard analyste",
    intro: "Papy Perquis, appelé autrefois Gamin Perquis, incarne dans le souvenir une intelligence d'analyse face aux premiers signes du déséquilibre.",
    meta: [
      { label: "Statut", value: "Figure ancienne des Briscards" },
      { label: "Ancien nom", value: "Gamin Perquis" },
      { label: "Spécialité", value: "Analyse, lecture des signes, mémoire stratégique" }
    ],
    biography: [
      "Dans le souvenir ouvert par Brad, Papy Perquis apparaît sous une forme plus jeune, alors appelé Gamin Perquis. Sa présence rappelle que certaines figures âgées du présent furent autrefois des points vifs de l'action.",
      "Son rôle se dessine autour de l'analyse: comprendre les phénomènes, lire ce qui change et aider les Briscards à ne pas réagir seulement par force.",
      "À travers lui, le site garde une trace claire de la continuité entre la guerre ancienne et les décisions actuelles de la Communauté des Papillons."
    ],
    summary: [
      "Papy Perquis relie la mémoire ancienne à une lecture stratégique du déséquilibre.",
      "Son ancien nom, Gamin Perquis, donne au passé une chair plus vivante et moins figée."
    ],
    profile: [
      { title: "Nature", text: "Ancien Briscard devenu mémoire d'analyse." },
      { title: "Rôle", text: "Observer, comprendre et poser des mots sur les signes du monde." },
      { title: "Lien au présent", text: "Son souvenir éclaire les zones sensibles que la Communauté devra comprendre." }
    ],
    relations: [
      { title: "Brad", text: "Brad fait revenir sa présence dans un souvenir transmis au groupe." },
      { title: "Mitra Séssé", text: "Ils appartiennent à la même mémoire de résistance ancienne." },
      { title: "Padre Souf", text: "Leurs anciens noms rappellent que les figures du passé ont elles aussi connu une jeunesse de lutte." }
    ],
    timeline: [
      { era: "Ancien temps", title: "Gamin Perquis", summary: "Il participe à la lecture des premiers signes du déséquilibre parmi les Briscards." },
      { era: "Jour 10", title: "Mémoire réactivée", summary: "Son rôle revient dans le souvenir partagé à la taverne." },
      { era: "Fin du Jour 10", title: "Analyse léguée", summary: "Quand le groupe choisit le Vert avant la Sombra, la mémoire de Papy Perquis reste comme une invitation à lire avant de frapper." }
    ]
  },
  {
    slug: "padre-souf",
    hash: "#fiches-padre-souf",
    name: "Padre Souf",
    image: buildMediaPath("pandorus", "Padre Souf.png"),
    category: "Briscard ancien",
    intro: "Padre Souf, appelé autrefois Filston Souf, apparaît dans la mémoire des Briscards comme une présence de l'ancienne résistance.",
    meta: [
      { label: "Statut", value: "Figure ancienne des Briscards" },
      { label: "Ancien nom", value: "Filston Souf" },
      { label: "Lien majeur", value: "Mémoire de la guerre ancienne" }
    ],
    biography: [
      "Dans le souvenir de Brad, Padre Souf apparaît sous son ancien nom, Filston Souf. Cette nuance donne à la mémoire ancienne une continuité humaine: les survivants d'aujourd'hui furent eux aussi des présences jeunes, engagées, prises dans le basculement du monde.",
      "Sa présence aux côtés des Briscards montre que la première résistance contre l'obscurité dispersée ne tenait pas à un héros unique, mais à un ensemble de points d'ancrage.",
      "Il devient ainsi une trace importante pour comprendre que la Communauté des Papillons s'inscrit dans une histoire déjà commencée bien avant elle."
    ],
    summary: [
      "Padre Souf relie la taverne et la mémoire des Briscards à une ancienne lutte collective.",
      "Son ancien nom, Filston Souf, ajoute une profondeur générationnelle au récit."
    ],
    profile: [
      { title: "Nature", text: "Ancien membre ou compagnon de la mémoire des Briscards." },
      { title: "Rôle", text: "Participer à la tenue collective du monde lorsque l'obscurité gagne du terrain." },
      { title: "Mystère", text: "Son parcours complet reste encore à développer au-delà du souvenir." }
    ],
    relations: [
      { title: "Papy Perquis", text: "Ils partagent la mémoire d'une génération ancienne vue dans sa jeunesse." },
      { title: "Mitra Séssé", text: "Ils appartiennent à la même strate de résistance transmise par Brad." },
      { title: "Elrick jeune", text: "Ils apparaissent dans le même souvenir fondateur autour du monde qui commence à basculer." }
    ],
    timeline: [
      { era: "Ancien temps", title: "Filston Souf", summary: "Il apparaît dans la mémoire ancienne parmi ceux qui tiennent face au premier grand dérèglement." },
      { era: "Jour 10", title: "Retour du nom", summary: "La taverne rend visible son ancien nom et sa place dans la continuité des Briscards." },
      { era: "Fin du Jour 10", title: "Continuité de veille", summary: "Son souvenir accompagne le départ du groupe comme la preuve qu'une ancienne résistance peut encore nourrir la route présente." }
    ]
  },
  {
    slug: "eben",
    hash: "#fiches-eben",
    name: "Eben",
    image: buildMediaPath("pandorus", "Eben.jpg"),
    category: "Présence sauvage",
    intro: "Eben n'apparait plus comme une simple creature de chasse, mais comme un roi du Vert, presence animale souveraine devant laquelle la violence ordinaire perd tout son sens.",
    meta: [
      { label: "Statut", value: "Roi du Vert et figure sauvage majeure du récit" },
      { label: "Specialite", value: "Lecture du combat, puissance animale, autorité territoriale" },
      { label: "Lien majeur", value: "Traumatisme fondateur puis duel d'équilibre avec Shan" }
    ],
    biography: [
      "Eben nait au coeur du Vert et s'y impose non par brutalité aveugle, mais par justesse. Là où les autres dominent par force, il lit, attend, dévie, puis répond exactement. C'est ainsi qu'il renverse l'ancien chef des singes et devient une figure acceptée par le lieu lui-même.",
      "Lorsque les parents de Shan viennent le chercher, Eben ne se comporte pas comme une proie. Il affronte une volonté humaine déjà dévorée par l'obsession, les tue, puis épargne l'enfant, comme s'il reconnaissait qu'autre chose se construisait encore en lui.",
      "Des années plus tard, Shan le retrouve au coeur du Vert. Leur duel ne répète pas seulement le traumatisme initial : il le transforme. Eben oblige Shan à cesser de frapper contre sa propre rage, puis lui laisse la possibilité d'un équilibre retrouvé. Après le combat, il lui remet une pierre du Vert, signe de reconnaissance plus que de défaite."
    ],
    summary: [
      "Eben est la créature autour de laquelle s'organisent à la fois le drame originel de Shan et son rééquilibrage adulte.",
      "Sa présence donne au récit une vérité plus haute : sur Pandorus, certaines forces du vivant ne sont ni des monstres ni des cibles, mais des souverainetés à lire avant de prétendre les vaincre."
    ],
    profile: [
      { title: "Caractere", text: "Stable, souverain, silencieux, mais jamais aveuglément brutal." },
      { title: "Forces", text: "Lecture parfaite des appuis, puissance animale immense, autorité reconnue par le Vert." },
      { title: "Faiblesses", text: "Sa place reste liée au Vert : il agit moins comme un conquérant que comme un centre territorial." }
    ],
    relations: [
      { title: "Shan", text: "Eben fonde d'abord sa blessure, puis devient celui qui l'oblige enfin à combattre autrement au coeur du Vert." },
      { title: "Peuples du Vert", text: "Macagardiens, Gorillanges et Nonstitis le reconnaissent comme un roi davantage que comme un simple dominant." },
      { title: "Ab'Youbi", text: "Tous deux appartiennent à des présences anciennes que le groupe ne comprend pas encore totalement, chacune liée à un territoire vivant." }
    ],
    timeline: [
      { era: "Ancien temps du Vert", title: "Accession à la royauté", summary: "Eben renverse l'ancien chef des singes et devient une autorité reconnue par le Vert." },
      { era: "Avant le récit", title: "Confrontation fatale", summary: "Les parents de Shan meurent en l'affrontant, tandis que l'enfant est épargné." },
      { era: "Jour 12", title: "Duel avec Shan", summary: "Au coeur du Vert, Eben affronte Shan jusqu'à transformer leur lien en reconnaissance plutôt qu'en pure vengeance." },
      { era: "Jour 12", title: "Pierre du Vert", summary: "Avant d'être entouré par les siens, Eben laisse à Shan une pierre marquée du Vert, signe que le combat a produit une reconnaissance plus qu'une défaite." }
    ]
  },
  {
    slug: "capitaine",
    hash: "#fiches-capitaine",
    name: "Capitaine",
    image: buildMediaPath("pandorus", "Capitaine.png"),
    category: "Guide du Passar",
    intro: "Figure adulte du Passar, le Capitaine est l'un des premiers à prendre au sérieux l'altération du vivant, puis la preuve humaine que le monde peut retenir quelqu'un longtemps hors de vue.",
    meta: [
      { label: "Statut", value: "Éclaireur du Passar, puis captif retrouvé" },
      { label: "Specialite", value: "Lecture du fleuve, expedition, decision" },
      { label: "Lien majeur", value: "Franklin et la première quête des causes" }
    ],
    biography: [
      "Avant meme que le groupe principal ne prenne la route du Vrax, le Capitaine comprend que ce qui atteint le Passar ne ressemble pas a une simple crise locale. Il lie le sort du fleuve a quelque chose de plus profond qui traverse déjà le vivant.",
      "Avec Franklin, il part jusqu'au Veyrine pour comparer, verifier et chercher une origine a cette alteration. Cette expedition fait de lui l'un des premiers personnages a sortir du cadre immediat de la survie pour entrer dans une logique d'enquete du monde.",
      "Au cours du voyage, le Capitaine percoit brusquement une présence invisible, ordonne a Franklin de rentrer, puis disparait seul. Son absence laisse derriere elle une inquietude durable et donne a la quete du groupe une profondeur plus ancienne.",
      "Au terme des chapitres du Vert, la rumeur portée par Ezze devient preuve: le groupe retrouve le Capitaine vivant, attaché au coeur de ruines vidées. Sa survie transforme son absence en urgence nouvelle."
    ],
    summary: [
      "Le Capitaine représente la première tentative consciente de comprendre le déséquilibre du vivant plutôt que d'en subir seulement les effets.",
      "Sa disparition ouvrait une quête; sa réapparition captive la relance sur un plan plus grave encore."
    ],
    profile: [
      { title: "Caractere", text: "Calme, concret, responsable, avec une lecture serieuse des signes faibles du terrain." },
      { title: "Forces", text: "Experience du fleuve, sang-froid, capacité a prendre une decision rapide face a l'invisible." },
      { title: "Faiblesses", text: "Longtemps absent du récit, il revient au moment où son corps porte déjà la trace d'une captivité prolongée." }
    ],
    relations: [
      { title: "Franklin", text: "Franklin garde de lui l'image d'un guide qui a vu avant les autres qu'il fallait chercher plus loin." },
      { title: "Passar", text: "Le Capitaine est intimement relie au fleuve et a la responsabilite de comprendre ce qui le menace." },
      { title: "Veyrine", text: "Le voyage vers le Veyrine marque sa dernière grande initiative libre avant sa disparition." },
      { title: "Ruines du Vert", text: "Le lieu où sa disparition cesse d'être une hypothèse pour devenir une réalité retrouvée." }
    ],
    timeline: [
      { era: "Avant le récit", title: "Lecture du déséquilibre", summary: "Le Capitaine comprend que l'etat du Passar traduit une alteration plus vaste du vivant." },
      { era: "Avant le récit", title: "Expedition vers le Veyrine", summary: "Avec Franklin, il part comparer les fleuves pour trouver une logique a la crise qui gagne le monde." },
      { era: "Avant le récit", title: "Disparition", summary: "Apres avoir percu une présence invisible, il renvoie Franklin au Passar et disparait seul, laissant une question ouverte." },
      { era: "Jour 12", title: "Retrouvé captif", summary: "Au centre de ruines vidées dans le Vert, le groupe retrouve enfin le Capitaine vivant mais retenu." }
    ]
  },
  {
    slug: "bichette",
    hash: "#fiches-bichette",
    name: "Bichette",
    image: buildMediaPath("pandorus", "Bichette.png"),
    category: "Reine du Blanc",
    intro: "Bichette est une présence encore lointaine du récit, mais déjà centrale dans la direction ouverte par Brad : une figure de lecture, de veille et d'équilibre installée dans la Sombra.",
    meta: [
      { label: "Statut", value: "Créatrice évoquée à l'ouest" },
      { label: "Titre", value: "Reine du Blanc" },
      { label: "Lien majeur", value: "Sombra, Luna Queen et Méli Mélo" }
    ],
    biography: [
      "Brad et Bradlette nomment Bichette sans emphase, comme on nomme quelqu'un de réel, pas une légende. Sa force ne semble pas tenir à l'affrontement direct, mais à une capacité de voir, de comprendre et de lire ce qui revient dans le monde.",
      "La Sombra devient ainsi le territoire associé à sa présence, un ouest encore hors champ où la lecture du dérèglement pourrait être plus fine que dans les lieux déjà traversés.",
      "Même sans être encore rencontrée, Bichette modifie déjà la trajectoire du groupe : elle donne un horizon stratégique nouveau, au-delà du seul réflexe de survie."
    ],
    summary: [
      "Bichette est la prochaine grande figure annoncée du récit.",
      "Elle promet moins une guerre qu'une compréhension plus aiguë de ce qui revient altérer Pandorus."
    ],
    profile: [
      { title: "Nature", text: "Présence de lecture, de veille et d'équilibre occidental." },
      { title: "Rôle", text: "Ouvrir la prochaine grande étape après le Sombrail et le Vert." },
      { title: "Mystère", text: "On sait qu'elle voit beaucoup, mais pas encore jusqu'où ni à quel prix." }
    ],
    relations: [
      { title: "Sombra", text: "La Sombra est le territoire auquel son nom est désormais lié." },
      { title: "Luna Queen", text: "Luna Queen fait partie des gardiennes ou présences associées à Bichette." },
      { title: "Méli Mélo", text: "Méli Mélo complète autour d'elle une ligne de veille plus discrète." }
    ],
    timeline: [
      { era: "Jour 10", title: "Nom donné par Brad", summary: "Bichette est évoquée comme la créatrice à l'ouest capable d'offrir une lecture plus fine du basculement." },
      { era: "Jour 10", title: "Horizon maintenu", summary: "Même lorsque le groupe choisit d'abord le Vert à cause du Capitaine, Bichette reste la grande direction stratégique laissée en veille." },
      { era: "Après le Jour 12", title: "Après le Vert", summary: "La traversée du Vert renforce encore le poids de son nom : plus le monde se révèle complexe, plus la route vers la Sombra paraît nécessaire." }
    ]
  },
  {
    slug: "luna-queen",
    hash: "#fiches-luna-queen",
    name: "Luna Queen",
    image: buildMediaPath("pandorus", "Luna Queen.png"),
    category: "Gardienne de la Sombra",
    intro: "Luna Queen est liée à Bichette et à la Sombra comme une présence de veille encore hors champ, mais déjà intégrée à la prochaine direction du groupe.",
    meta: [
      { label: "Statut", value: "Figure liée à Bichette" },
      { label: "Ancrage", value: "Sombra" },
      { label: "Lien majeur", value: "Bichette et Méli Mélo" }
    ],
    biography: [
      "Luna Queen n'est pas encore rencontrée directement, mais son nom entre dans le récit avec celui de Bichette comme une présence déjà reconnue par Brad et Bradlette.",
      "Elle participe à dessiner une triade de veille autour de la Sombra, moins tournée vers la guerre frontale que vers la lecture, la compréhension et l'équilibre.",
      "Son importance est donc narrative avant d'être événementielle : elle prépare le groupe à un autre type de rencontre et de savoir."
    ],
    summary: [
      "Luna Queen élargit la Sombra en véritable réseau de présences, pas en simple destination unique.",
      "Elle annonce une strate plus fine du récit, où l'ouest comptera autant par ce qu'il lit que par ce qu'il protège."
    ],
    profile: [
      { title: "Nature", text: "Présence de veille liée à la Sombra." },
      { title: "Rôle", text: "Compléter l'horizon ouvert par Bichette." },
      { title: "Mystère", text: "Sa fonction exacte reste encore entièrement à révéler." }
    ],
    relations: [
      { title: "Bichette", text: "Luna Queen est liée à la Reine du Blanc dans la même direction occidentale." },
      { title: "Méli Mélo", text: "Toutes deux sont nommées comme des présences complémentaires autour de la Sombra." }
    ],
    timeline: [
      { era: "Jour 10", title: "Évoquée à la taverne", summary: "Son nom entre dans le récit par la parole de Brad et Bradlette, avec la Sombra comme horizon." },
      { era: "Jour 10", title: "Présence gardée en réserve", summary: "Luna Queen demeure hors champ, mais son nom suffit déjà à faire comprendre que l'ouest n'est pas vide : il est organisé." },
      { era: "Après le Jour 12", title: "Nécessité croissante", summary: "À mesure que le Vert révèle ses propres souverainetés, la perspective d'une rencontre avec Luna Queen gagne en importance pour la suite." }
    ]
  },
  {
    slug: "meli-melo",
    hash: "#fiches-meli-melo",
    name: "Méli Mélo",
    image: buildMediaPath("pandorus", "Méli Mélo.png"),
    category: "Gardienne de la Sombra",
    intro: "Méli Mélo est l'autre nom associé à Bichette dans l'ouverture vers la Sombra, présence encore lointaine mais déjà intégrée à la prochaine logique du récit.",
    meta: [
      { label: "Statut", value: "Figure liée à Bichette" },
      { label: "Ancrage", value: "Sombra" },
      { label: "Lien majeur", value: "Bichette et Luna Queen" }
    ],
    biography: [
      "Comme Luna Queen, Méli Mélo n'est pas encore rencontrée directement. Son importance vient du fait qu'elle n'est pas citée comme un décor lointain, mais comme une présence réelle de la prochaine étape.",
      "Elle participe à transformer la Sombra en territoire organisé, habité par des figures capables d'une lecture du monde différente de celle des routes déjà traversées.",
      "Son apparition dans le récit reste donc discrète, mais structurante : elle annonce que l'ouest ne sera pas un simple détour, mais une strate entière du monde."
    ],
    summary: [
      "Méli Mélo renforce l'idée que la Sombra abrite plusieurs points d'équilibre.",
      "Elle prépare une étape du récit où la compréhension pourrait compter autant que le combat."
    ],
    profile: [
      { title: "Nature", text: "Présence de veille encore hors champ, liée à la Sombra." },
      { title: "Rôle", text: "Compléter la ligne ouverte par Bichette et Luna Queen." },
      { title: "Mystère", text: "On ignore encore sa forme d'action, mais non sa place future dans la trajectoire du groupe." }
    ],
    relations: [
      { title: "Bichette", text: "Méli Mélo est liée à la Reine du Blanc dans la direction ouverte à l'ouest." },
      { title: "Luna Queen", text: "Elles sont évoquées ensemble comme des présences complémentaires de la Sombra." }
    ],
    timeline: [
      { era: "Jour 10", title: "Évoquée à la taverne", summary: "Son nom rejoint ceux de Bichette et Luna Queen comme nouvelle direction stratégique du récit." },
      { era: "Jour 10", title: "Troisième point d'équilibre", summary: "Sa mention confirme que la Sombra repose sur plusieurs présences complémentaires et non sur une seule figure isolée." },
      { era: "Après le Jour 12", title: "Attente de l'ouest", summary: "Après la priorité donnée au Vert, Méli Mélo reste l'un des noms qui continuent d'ouvrir l'étape suivante de la route." }
    ]
  }
];

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

const creatureFiches = [
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
let ficheUiInitialized = false;
let creatureFichesInitialized = false;
let locationFichesInitialized = false;

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
  }
];

const timelineEvents = [
  {
    era: "Origines",
    title: "Naissance du souffle primordial",
    summary: "Avant toute forme stable, une pulsation et une lumiere originelles donnent naissance au monde de Pandorus."
  },
  {
    era: "Origines",
    title: "Formation des terres, des eaux et des plans du monde",
    summary: "La matiere, la terre, l'eau et les differentes strates du monde se structurent peu a peu autour du battement initial."
  },
  {
    era: "Ancien temps",
    title: "Grande guerre contre l'homme sombre",
    summary: "Une guerre ancienne ravage le monde, corrompt les terres et oppose les peuples a une force obscure menee par l'homme sombre."
  },
  {
    era: "Ancien temps",
    title: "Victoire inachevee et apparition des etoiles",
    summary: "Le mal est brise sans être totalement detruit, les frontieres sont effacees et un monde reunifie emerge sous un ciel marque par les etoiles."
  },
  {
    era: "Avant le récit",
    title: "Enfance de Shan",
    summary: "Shan grandit dans un apprentissage brutal de la survie et du combat, forme par ses parents chasseurs."
  },
  {
    era: "Avant le récit",
    title: "Mort des parents de Shan face a Eben",
    summary: "L'affrontement contre Eben brise l'equilibre de l'enfance de Shan et l'entraine vers une vie solitaire."
  },
  {
    era: "Avant le récit",
    title: "Retrait d'Elrick pres de sa cabane",
    summary: "Ancien combattant de la grande guerre, Elrick choisit une vie simple au contact du vivant, tout en percevant les signes d'un nouveau déséquilibre."
  },
  {
    era: "Avant le récit",
    title: "Expedition du Capitaine vers le Veyrine",
    summary: "Le Capitaine et Franklin quittent le Passar pour comparer les fleuves et verifier si le déséquilibre du vivant depasse leur territoire."
  },
  {
    era: "Avant le récit",
    title: "Disparition du Capitaine",
    summary: "Apres avoir percu une présence invisible durant l'expedition, le Capitaine renvoie Franklin et disparait seul, laissant une inquietude sans réponse."
  },
  {
    era: "Il y a 9 ans",
    title: "Naissance de Harry PY",
    summary: "Le Vrax cree Harry PY comme première réponse consciente a une variation anormale et a une urgence encore invisible."
  },
  {
    era: "Il y a 6 ans",
    title: "Naissance de Gardien Isma",
    summary: "Une seconde creation apparait pour completer Harry PY par la force, l'ancrage et la protection physique."
  },
  {
    era: "Il y a 4 ans",
    title: "Naissance de Wingard",
    summary: "Le Vrax repond cette fois par le vent, le mouvement et une perturbation vivante encore difficile a contenir."
  },
  {
    era: "Il y a 3 ans",
    title: "Naissance de Lévy",
    summary: "Face a un vide dans les flux du monde, Lévy nait pour reajuster ce que ni la force ni le chaos ne peuvent restaurer seuls."
  },
  {
    era: "Il y a 3 ans",
    title: "Formation des protecteurs du Vrax",
    summary: "Harry PY, Gardien Isma, Wingard et Lévy deviennent une generation de réponse du Vrax chargee de protèger son equilibre et ses gardiennes."
  },
  {
    era: "Jour 1",
    title: "Reveil de Shaushana dans Le Passage",
    summary: "Shaushana ouvre les yeux dans un monde déjà vivant et ressent immediatement le souffle profond qui le traverse."
  },
  {
    era: "Jour 1",
    title: "Attaque du Felou et rencontre avec Franklin",
    summary: "Shaushana sauve Franklin d'un Felou, decouvre ses propres capacités et accepte de le suivre vers le bidonville du Passar."
  },
  {
    era: "Jour 1",
    title: "Route vers le Passar",
    summary: "Shaushana et Franklin traversent plusieurs zones du monde, rencontrent creatures et papillons, puis approchent du bidonville."
  },
  {
    era: "Jour 1",
    title: "Premiere apparition de Shan",
    summary: "Shan observe puis rejoint progressivement le duo, intrigue par Shaushana et attire par sa force singuliere."
  },
  {
    era: "Jour 1",
    title: "Retour de Franklin chez les siens",
    summary: "Franklin retrouve Mike, Gerom et la vie du bidonville, refuge fragile construit autour du fleuve Passar et des creatures recueillies."
  },
  {
    era: "Jour 1",
    title: "Constat du déséquilibre du vivant",
    summary: "Le groupe observe des animaux agressifs, des plantes affaiblies et des signes croissants d'une corruption du vivant."
  },
  {
    era: "Jour 1",
    title: "Affrontement entre Shan et Shaushana",
    summary: "Shan provoque Shaushana, leur combat révèle leur puissance respective et scelle un nouveau lien entre eux."
  },
  {
    era: "Jour 2",
    title: "Attaque des Felous, Verdeflor et du Felours",
    summary: "Le bidonville subit une attaque majeure de creatures anormalement coordonnees, et Mike est grievement blesse."
  },
  {
    era: "Jour 2",
    title: "Decision de partir vers le Vrax",
    summary: "Pour comprendre l'origine du mal, Franklin, Shaushana et Shan quittent le bidonville et prennent la route du Vrax."
  },
  {
    era: "Jour 3",
    title: "Rencontre avec Elrick",
    summary: "Le groupe trouve refuge chez Elrick, qui révèle l'existence de l'ancienne guerre et le retour possible d'un peril enfoui."
  },
  {
    era: "Jour 4",
    title: "Depart de chez Elrick",
    summary: "Mieux prepares et lourdement marques par les révélations d'Elrick, les voyageurs reprennent leur route vers le Bassaï puis le Vrax."
  },
  {
    era: "Jour 4",
    title: "Traversée du fleuve Bassaï",
    summary: "La traversee met le groupe a l'epreuve, entre papillons d'eau, creatures du fleuve et manifestations d'un monde conscient."
  },
  {
    era: "Jour 5",
    title: "Entree dans le Vrax",
    summary: "Le territoire du Vrax se révèle comme un espace vivant, dense et attentif, ou les regles habituelles cessent de suffire."
  },
  {
    era: "Jour 5",
    title: "Veille d'Ossah Lyla et de Nastaz",
    summary: "Ossah Lyla le jour puis Nastaz la nuit mesurent l'alteration du Vrax et donnent une profondeur plus consciente a la réponse du territoire."
  },
  {
    era: "Jour 5",
    title: "Les protecteurs du Vrax sentent l'intrusion",
    summary: "Pendant leur propre affrontement, Lévy, Gardien Isma et Wingard percoivent l'arrivee du groupe de Shaushana comme une nouvelle variable dans un equilibre déjà fragile."
  },
  {
    era: "Jour 5",
    title: "Capture de Franklin",
    summary: "Lévy fixe le terrain, Wingard referme l'espace et Gardien Isma saisit Franklin, qui semble porter quelque chose de singulier pour le Vrax."
  },
  {
    era: "Jour 5",
    title: "Franklin reconnu comme héritier d'une ancienne lignée du Vrax",
    summary: "Au coeur du territoire, les protecteurs comprennent que Franklin porte la trace d'une ancienne generation liee au Vrax, ce qui explique sa capture et l'attention qu'il suscite."
  },
  {
    era: "Jour 5",
    title: "Affrontement contre les Guéplynx et progression vers le coeur du Vrax",
    summary: "Shan et Shaushana franchissent une nouvelle profondeur du Vrax, affrontent des Guéplynx coordonnes et comprennent que le territoire les guide vers un centre plus ancien."
  },
  {
    era: "Jour 5",
    title: "Intervention d'Ossah Lyla et de Nastaz",
    summary: "Les deux creatrices interrompent l'escalade entre le groupe de Shaushana et les protecteurs du Vrax, puis imposent un autre niveau de lecture du monde."
  },
  {
    era: "Jour 5",
    title: "Révélation des papillons et du cimetière silencieux",
    summary: "Les creatrices expliquent que les papillons portent une essence vitale pour Pandorus, puis montrent un lieu ou ils s'eteignent sans cause visible, preuve concrete d'une alteration plus profonde."
  },
  {
    era: "Jour 6",
    title: "Éveil du lien de Franklin avec le Vrax",
    summary: "Au contact du coeur du Vrax, Franklin commence a repondre autrement au territoire et sent naitre en lui un lien qui ne releve plus seulement de la survie."
  },
  {
    era: "Jour 6",
    title: "Nouvelle direction vers le sud",
    summary: "Les creatrices orientent le groupe vers le fleuve Sylvae et la pointe de la mer du Sphinx pandorien, ou Harry PY observe déjà une zone de decomposition du vivant."
  },
  {
    era: "Jour 6",
    title: "Départ avec Lévy",
    summary: "Au matin, Lévy quitte le coeur du Vrax pour accompagner Shaushana, Shan et Franklin vers cette nouvelle etape du récit."
  },
  {
    era: "Jour 7",
    title: "Traversée de la zone altérée au sud du Vrax",
    summary: "En quittant le Vrax, le groupe découvre une terre qui tient encore debout sans tenir vraiment, où le vivant persiste sans sa cohérence première."
  },
  {
    era: "Jour 7",
    title: "Papillons vidés et Renastar touché",
    summary: "Les papillons morts puis le Renastar qui s'éteint entre les mains de Shaushana révèlent que ce n'est plus seulement la vie qui meurt, mais la création elle-même qui est atteinte."
  },
  {
    era: "Jour 7",
    title: "Découverte du village des Renards",
    summary: "Le groupe atteint un village déjà frappé, où les renards veillent leurs morts et où Tsune, Hez et Javier tiennent encore une communauté blessée."
  },
  {
    era: "Jour 7",
    title: "Retrouvailles avec Harry PY",
    summary: "Au coeur du village meurtri, Harry PY retrouve Lévy et comprend que l'attaque du sud confirme une altération plus vaste encore que celle du Vrax."
  },
  {
    era: "Jour 7",
    title: "Assaut du village et révélation de Kuji et Elennya",
    summary: "Poiscailles et Chauve-Souloups ouvrent une attaque multi-axes avant que Kuji et Elennya n'imposent leur volonté hostile et leur vision d'un monde à remplacer."
  },
  {
    era: "Jour 7",
    title: "Mort de Hez",
    summary: "Hez tombe face à Kuji, faisant du village des Renards un lieu de deuil irréversible et donnant au groupe une preuve concrète de la gravité du conflit."
  },
  {
    era: "Jour 8",
    title: "Rituel du village et veille des renards",
    summary: "Le village enterre Hez et les renards morts dans un rituel de fidélité silencieuse qui transforme la perte en mémoire portée collectivement."
  },
  {
    era: "Jour 8",
    title: "Naissance de la Communauté des Papillons",
    summary: "Autour de Shaushana, Shan, Franklin, Lévy, Tsune et des survivants du village, une nouvelle réponse collective prend forme contre ce qui cherche à effacer le vivant."
  },
  {
    era: "Jour 8",
    title: "Retour d'Harry PY vers le Vrax",
    summary: "Harry PY repart transmettre aux créatrices ce qu'il a compris du sud, pendant que Javier reste veiller le village blessé."
  },
  {
    era: "Jour 8",
    title: "Nouvelle direction vers l'embouchure du Sombrail",
    summary: "Tsune oriente le groupe vers une taverne tenue par d'anciens survivants à l'embouchure du Sombrail, prochaine étape d'une quête devenue plus vaste et plus consciente."
  },
  {
    era: "Jour 9",
    title: "Route vers la taverne du Sombrail",
    summary: "La Communauté des Papillons quitte le village des Renards et traverse des zones où le vivant perd encore sa cohérence, confirmant que le dérèglement s'étend."
  },
  {
    era: "Jour 9",
    title: "Papillon vidé et créature sans présence",
    summary: "Le groupe retrouve de nouveaux signes d'arrachement du vivant: papillon vidé, terre instable et corps de créature intact mais déjà absent."
  },
  {
    era: "Jour 10",
    title: "Entrée dans la taverne du Sombrail",
    summary: "Shaushana, Shan, Franklin, Lévy et Tsune atteignent la taverne, un lieu de bois ancien où chaque regard semble peser la raison de leur venue."
  },
  {
    era: "Jour 10",
    title: "Rencontre avec Brad, Bradlette et Ab'Youbi",
    summary: "Les gardiens de la taverne reconnaissent le décalage du groupe et commencent à relier leur route à la mémoire d'Elrick et des Briscards."
  },
  {
    era: "Jour 10",
    title: "Souvenir des Briscards et origine des étoiles",
    summary: "Brad ouvre un passage de mémoire où apparaissent Elrick jeune, Mitra Séssé, Papy Perquis et Padre Souf, au moment où l'homme sombre est contenu puis dispersé dans une nuit devenue porteuse d'étoiles."
  },
  {
    era: "Jour 10",
    title: "Syne et la boîte éveillée",
    summary: "Au fond de la taverne, Syne impose une limite calme autour d'une boîte qui frémit, révélant une présence retenue qui ne doit pas encore être vue."
  },
  {
    era: "Jour 10",
    title: "Brad évoque une créatrice à l'ouest",
    summary: "Après la mémoire ancienne, Brad et Bradlette orientent la Communauté vers une présence capable de voir avant que le monde ne bascule."
  },
  {
    era: "Jour 10",
    title: "Arrivée d'Ezze, Gil et Filston",
    summary: "Ezze retrouve Gil et Filston à la taverne, observe la Communauté des Papillons et choisit de rester, comme si sa route venait enfin de rejoindre un point plus vaste."
  },
  {
    era: "Jour 10",
    title: "Rumeur du Vert et nouvelle route vers le Capitaine",
    summary: "À la taverne, Ezze partage la rumeur d'un homme retenu au coeur du Vert, et la quête bascule : retrouver le Capitaine devient une priorité commune."
  },
  {
    era: "Jour 10",
    title: "Bichette, Luna Queen et Méli Mélo nommées à l'ouest",
    summary: "Brad et Bradlette orientent le groupe vers la Sombra, où Bichette, Reine du Blanc, ainsi que Luna Queen et Méli Mélo pourraient lire le déséquilibre autrement."
  },
  {
    era: "Jour 11",
    title: "Départ de la taverne et suivi d'Ab'Youbi",
    summary: "Le groupe quitte le Sombrail, suivi à distance par Ab'Youbi, tandis que Syne et sa boîte disparaissent déjà hors de la taverne."
  },
  {
    era: "Jour 11",
    title: "Lumineaux et attaque des Aligaphoques",
    summary: "Au-dessus du Sombrail, les Lumineaux suspendent brièvement la tension avant qu'un Aligaphoque puis tout un groupe ne surgissent du fleuve."
  },
  {
    era: "Jour 11",
    title: "Ab'Youbi fait céder l'Aligaroi",
    summary: "L'Aligaroi émerge comme une autorité du fleuve, puis recule sans combat lorsque Ab'Youbi vient poser sur lui une puissance plus ancienne."
  },
  {
    era: "Jour 12",
    title: "Entrée dans le Vert",
    summary: "Le groupe quitte le Sombrail et entre dans une forêt encore très vivante, dense, blessée mais résistante, où chaque présence semble lire son passage."
  },
  {
    era: "Jour 12",
    title: "Attaque des Serpensouffres",
    summary: "Depuis la canopée du Vert, les Serpensouffres frappent par plongeon et souffle brûlant, obligeant le groupe à tenir sans se disperser."
  },
  {
    era: "Jour 12",
    title: "Reconnaissance par les peuples du Vert",
    summary: "Macagardiens, Gorillanges et Nonstitis apparaissent comme les témoins organisés d'un territoire vivant, juste avant l'arrivée d'Eben."
  },
  {
    era: "Jour 12",
    title: "Duel de Shan et Eben",
    summary: "Au coeur du Vert, Shan affronte enfin Eben, transforme sa rage en lecture du combat, puis obtient une reconnaissance plutôt qu'une simple victoire."
  },
  {
    era: "Jour 12",
    title: "Pierre d'Eben et nouveau Shan",
    summary: "Après le duel, Eben remet à Shan une pierre du Vert, marquant moins une défaite qu'un équilibre enfin retrouvé entre eux."
  },
  {
    era: "Jour 12",
    title: "Découverte du Capitaine captif",
    summary: "Plus loin, dans des ruines vidées, Franklin reconnaît enfin le Capitaine vivant mais retenu, ouvrant une nouvelle urgence au centre du récit."
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

function renderRelations() {
  const grid = document.getElementById("relations-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const filteredNodes = relationNodes.filter((nodeData) => {
    const matchesLetter = matchesLetterFilter(nodeData.name, currentRelationLetter);
    const matchesSearch = !currentRelationSearch || normalizeForLetter(nodeData.name).includes(normalizeForLetter(currentRelationSearch));
    return matchesLetter && matchesSearch;
  });

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
    const portraitMap = {
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
    const portrait = portraitMap[nodeData.name];
    const portraitThumb = portrait
      ? `<div class="relation-thumb"><img src="${portrait}" alt="${nodeData.name}" loading="lazy" decoding="async"></div>`
      : "";

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
        <h4>${nodeData.name}</h4>
        <p class="relation-role">${nodeData.role}</p>
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

function showSectionFromHash() {
  const home = document.getElementById("home");
  const fiches = document.getElementById("fiches");
  const relations = document.getElementById("relations");
  const chronologie = document.getElementById("chronologie");
  const chapitres = document.getElementById("chapitres");
  const personnages = document.getElementById("personnages");
  const lieux = document.getElementById("lieux");
  const creatures = document.getElementById("creatures");
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
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = true;
    renderCreatureImages();

    if (isCreatureFicheHash && typeof window.activateCreaturePanel === "function") {
      const targetSlug = currentHash.replace("#creatures-fiche-", "");
      const targetFiche = creatureFiches.find((item) => item.slug === targetSlug);
      if (targetFiche) {
        currentCreatureLetter = getFirstLetter(targetFiche.name) || "all";
        initCreatureAlphabetFilter();
        syncCreatureFicheFilter();
      }
      window.activateCreaturePanel(`creature-panel-${targetSlug}`);
      const targetSection = document.getElementById("creatures-fiches");
      if (targetSection) {
        window.requestAnimationFrame(() => {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    } else {
      initCreatureAlphabetFilter();
      syncCreatureFicheFilter();
    }
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
  if (mysteres) mysteres.hidden = true;
  if (cartes) cartes.hidden = true;
  refreshLoreLinks();
}

window.addEventListener("hashchange", showSectionFromHash);
renderLandingMarquee();
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



