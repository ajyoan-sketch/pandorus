const maps = [
  "./media/cartes/Constellations.png",
  "./media/cartes/Monde%20Sous%20Marin.png",
  "./media/cartes/Pandorus%20Universe.png",
  "./media/cartes/Plan%C3%A8tes%20Alien.png",
  "./media/cartes/Terre%20Pandorienne.png"
];

const constellationCards = [
  {
    title: "Les Constellations Jumelles : Myrmex",
    kicker: "Des gauche a droite",
    text: "Deux formes se repondent dans le ciel : la fourmi et la fourmi volante. Elles donnent au premier ensemble un elan de lien, de travail et de mouvement collectif."
  },
  {
    title: "Mantiska",
    kicker: "Constellation",
    text: "La constellation de la mante religieuse, tendue, precise, presque suspendue dans une attente sacree."
  },
  {
    title: "Hornax",
    kicker: "Constellation",
    text: "La constellation du frelon, nerveuse et tranchante, comme une presence qui garde son aiguillon jusque dans la nuit."
  },
  {
    title: "Vermis",
    kicker: "Constellation",
    text: "La constellation du ver, plus discrete, plus profonde, rappel d'un vivant qui travaille loin sous la surface."
  },
  {
    title: "Arachnys",
    kicker: "Constellation",
    text: "La constellation de l'araignee, tisseuse de structure et de patience, dont la forme semble retenir l'espace entre ses lignes."
  },
  {
    title: "Lumina",
    kicker: "Constellation",
    text: "La constellation de la coccinelle, eclat plus doux dans l'ensemble, presque lumineuse dans sa respiration."
  },
  {
    title: "Scarax",
    kicker: "Constellation",
    text: "La constellation du scarabee, dense et ancienne, comme un noyau de force grave dans la voute celeste."
  },
  {
    title: "Vespara",
    kicker: "Constellation",
    text: "La constellation de la guepe, vive et tendue, qui ferme la lecture du ciel sur une note de vigilance."
  }
];

const planetCards = [
  {
    title: "Dravok",
    kicker: "En haut a gauche",
    text: "Planete chaude, volcanique et tres riche en ressources, Dravok donne l'impression d'un monde forge dans la pression, le feu et la matiere brute."
  },
  {
    title: "Nerithis",
    kicker: "En bas a gauche",
    text: "Planete bleue du systeme, Nerithis est un monde d'eau et de circulation, ou les flux semblent couler avec une abondance presque inepuisable."
  },
  {
    title: "Sylvae",
    kicker: "En haut a droite",
    text: "La plus proche de la Terre Pandorienne, Sylvae evoque un equilibre familier, vivant, stable en apparence et profondement habitable."
  },
  {
    title: "Pyraxis",
    kicker: "En bas a droite",
    text: "Planete solaire possedant son propre soleil, Pyraxis rayonne comme un monde autonome, incandescent et presque souverain dans sa lumiere."
  },
  {
    title: "Asterion Pandoris",
    kicker: "Au centre",
    text: "Planete royale du peuple de l'espace, Asterion Pandoris occupe le coeur de l'ensemble comme un centre politique, symbolique et cosmique."
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
  }
];

const sectionWhispers = {
  home: "Entrer dans l'archive vivante de Pandorus.",
  fiches: "Les visages qui portent, blessent ou transforment le monde.",
  relations: "Ce qui lie, protege, transmet ou oppose.",
  chronologie: "Le temps ou Pandorus se revele, se fracture et repond.",
  chapitres: "Les portes du recit, ouvertes une a une.",
  personnages: "Les presences du monde, vues dans leur ensemble.",
  creatures: "Le vivant dans sa beaute, sa peur et son instinct.",
  mysteres: "Ce qui resiste encore a une lecture pleine.",
  cartes: "Les formes du monde, des cieux et des territoires conscients."
};

const landingOracleEntries = [
  {
    kicker: "Mise en lumiere",
    title: "Shaushana",
    text: "Figure d'eveil et de lien profond au vivant, Shaushana semble avancer dans le monde comme si celui-ci la reconnaissait deja.",
    href: "#fiches-shaushana",
    label: "Lire la fiche"
  },
  {
    kicker: "Territoire",
    title: "Le Vrax",
    text: "Plus qu'un lieu, le Vrax agit comme une intelligence territoriale : il veille, mesure, reagit et organise sa propre defense.",
    href: "#cartes",
    label: "Voir les cartes"
  },
  {
    kicker: "Creature",
    title: "Renastar",
    text: "Le Renastar porte la part la plus vive et la plus gracieuse du bestiaire, entre elegance, vitesse et instinct de survie.",
    href: "#creatures",
    label: "Explorer le bestiaire"
  },
  {
    kicker: "Mystere",
    title: "La disparition du Capitaine",
    text: "Son absence continue de peser dans le monde comme une question ouverte, jamais tout a fait apaisee.",
    href: "#mysteres",
    label: "Ouvrir les mysteres"
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
  "Croconha.png",
  "Félou.png",
  "Felours.png",
  "Luminaël.png",
  "Lumineau.png",
  "Nignoble.png",
  "Renastar.png",
  "Reptidile.png",
  "Scarabeast.png",
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
      { target: "Elrick", type: "Transmission", description: "Elrick reconnait en elle une figure cle et lui transmet une part de la memoire ancienne du monde." },
      { target: "Mike", type: "Allie indirect", description: "Elle protege le groupe dont Mike fait partie et devient liee au destin de sa communaute." },
      { target: "Gérôm", type: "Respect prudent", description: "Leur lien passe par la confiance progressive au sein du Passar et face au danger commun." },
      { target: "Gardien Isma", type: "Affrontement", description: "Dans le Vrax, Shaushana se heurte a une force d'interception qui agit comme un organe du territoire plus que comme un simple adversaire." },
      { target: "Wingard", type: "Desorientation", description: "Le vent de Wingard casse ses appuis et l'oblige a combattre sans la maitrise instinctive qu'elle garde d'ordinaire." }
    ]
  },
  {
    name: "Shan",
    role: "Combattant solitaire devenu allié",
    links: [
      { target: "Shaushana", type: "Attraction et rivalité", description: "Shan est d'abord provoque par sa force, puis attire par ce qu'elle revele du monde et de lui-meme." },
      { target: "Franklin", type: "Compagnon de route", description: "Leur lien se construit dans l'action, le voyage et la necessite de proteger le meme groupe." },
      { target: "Elrick", type: "Reconnaissance tacite", description: "Elrick comprend rapidement ce que Shan porte comme violence, survie et fatigue interieure." },
      { target: "Eben", type: "Traumatisme fondateur", description: "Eben est la creature liee a la mort de ses parents et a la fracture decisive de son enfance." },
      { target: "Wingard", type: "Contrepoint de combat", description: "Wingard le met en echec par la vitesse, la pression du vent et une lecture du terrain que Shan ne peut pas imposer." },
      { target: "Gardien Isma", type: "Force d'opposition", description: "Gardien Isma incarne face a lui une puissance plus stable, plus dense et presque impossible a deborder frontalement." }
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
      { target: "Capitaine", type: "Memoire de guide", description: "L'expedition menee avec le Capitaine vers le Veyrine structure sa lecture du desequilibre et son besoin de trouver des reponses." },
      { target: "Lévy", type: "Singularite percue", description: "Lévy sent en Franklin quelque chose de distinct, comme un lien que le Vrax reconnait avant de l'expliquer." },
      { target: "Gardien Isma", type: "Capture", description: "Gardien Isma devient celui qui le saisit au moment de l'interception dans le Vrax." }
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
      { target: "Mike", type: "Veille protectrice", description: "Gérôm agit comme une presence stable et protectrice aupres de Mike." },
      { target: "Shaushana", type: "Confiance progressive", description: "Il l'accueille avec prudence puis la reconnait comme alliee du groupe." },
      { target: "Shan", type: "Observation prudente", description: "Il observe Shan avec reserve, sans lui offrir d'emblee une confiance totale." }
    ]
  },
  {
    name: "Elrick",
    role: "Gardien de mémoire",
    links: [
      { target: "Shaushana", type: "Transmission du passé", description: "Il voit en elle une force liee a l'equilibre plus profond du monde et lui transmet une memoire ancienne." },
      { target: "Shan", type: "Lecture intime", description: "Elrick reconnait chez Shan le poids de la survie et d'une histoire brisee." },
      { target: "Franklin", type: "Guide provisoire", description: "Il aide Franklin et le groupe a comprendre l'ampleur du desequilibre qui les depasse." },
      { target: "Ancienne guerre", type: "Héritage", description: "Elrick demeure relie a la grande guerre contre l'ombre, qui structure encore sa vision du monde." }
    ]
  },
  {
    name: "Eben",
    role: "Présence sauvage fondatrice",
    links: [
      { target: "Shan", type: "Traumatisme originel", description: "La rencontre avec Eben detruit l'enfance de Shan et fonde sa violence, sa solitude et sa discipline." },
      { target: "Parents de Shan", type: "Affrontement fatal", description: "Les parents de Shan transforment Eben en obsession puis meurent en l'affrontant sans recul." },
      { target: "Monde sauvage", type: "Autorité", description: "Eben n'apparait pas comme une simple bete, mais comme une presence souveraine dans l'ordre du vivant." }
    ]
  },
  {
    name: "Capitaine",
    role: "Guide absent du Passar",
    links: [
      { target: "Franklin", type: "Expédition", description: "Le Capitaine emmene Franklin jusqu'au Veyrine pour verifier si le desequilibre du Passar touche aussi d'autres eaux." },
      { target: "Passar", type: "Responsabilité", description: "Sa lecture du fleuve et du vivant fait de lui l'un des premiers adultes a prendre la corruption du monde au serieux." },
      { target: "Veyrine", type: "Quête de réponse", description: "Le voyage vers le Veyrine marque son dernier grand geste connu avant sa disparition." },
      { target: "Déséquilibre du vivant", type: "Pressentiment", description: "Le Capitaine semble percevoir une presence invisible avant d'ordonner a Franklin de rentrer et de disparaitre seul." }
    ]
  },
  {
    name: "Harry PY",
    role: "Premier protecteur du Vrax",
    links: [
      { target: "Gardien Isma", type: "Noyau protecteur", description: "Gardien Isma se place instinctivement autour de lui comme une defense nee de sa simple existence." },
      { target: "Wingard", type: "Centre de gravité", description: "Wingard revient toujours a l'axe que Harry impose au groupe, meme quand son energie deborde." },
      { target: "Lévy", type: "Lecture complétée", description: "Lévy complete ce que Harry ne peut plus porter seul face aux zones de vide du Vrax." },
      { target: "Ossah Lyla", type: "Veille diurne", description: "Ossah Lyla accompagne sa naissance et reconnait en lui une reponse necessaire du monde." },
      { target: "Nastaz", type: "Lucidité", description: "Nastaz comprend tout de suite qu'Harry PY n'est pas une anomalie, mais le debut d'une preparation." }
    ]
  },
  {
    name: "Gardien Isma",
    role: "Force d'ancrage du Vrax",
    links: [
      { target: "Harry PY", type: "Protection instinctive", description: "Il se place naturellement entre Harry PY et toute menace potentielle." },
      { target: "Wingard", type: "Complément tactique", description: "Wingard ouvre, Gardien fixe, et leur combinaison donne au Vrax une interception brutale mais precise." },
      { target: "Lévy", type: "Coordination", description: "Lévy prepare le terrain et Gardien impose ensuite la force decisive qui manque au groupe." },
      { target: "Franklin", type: "Prise", description: "C'est lui qui saisit Franklin au coeur du chaos, comme s'il executait une necessite plus vaste que lui." },
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
      { target: "Franklin", type: "Encerclement", description: "Au moment critique, il referme l'espace autour de Franklin et empeche toute reponse immediate." },
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
      { target: "Franklin", type: "Singularité", description: "Avant les autres, il sent chez Franklin une presence ou un lien que le Vrax reconnait." },
      { target: "Shaushana", type: "Entrave", description: "Ses interventions cassent les prises, ralentissent le terrain et empechent une reaction simple du groupe." }
    ]
  },
  {
    name: "Ossah Lyla",
    role: "Conscience diurne du Vrax",
    links: [
      { target: "Nastaz", type: "Continuité", description: "Nastaz prolonge Ossah Lyla dans une lecture plus froide, plus nette et plus nocturne du meme monde." },
      { target: "Harry PY", type: "Accompagnement", description: "Elle assiste la naissance de Harry PY et mesure la necessite de cette premiere reponse du Vrax." },
      { target: "Protecteurs du Vrax", type: "Protection indirecte", description: "Les protecteurs existent aussi pour defendre ce qu'elle incarne dans l'equilibre du Vrax." },
      { target: "Wingard", type: "Apaisement", description: "Sa simple presence ralentit et restructure le chaos qui accompagne la naissance de Wingard." }
    ]
  },
  {
    name: "Nastaz",
    role: "Conscience nocturne du Vrax",
    links: [
      { target: "Ossah Lyla", type: "Prolongement", description: "Elle n'est pas l'inverse d'Ossah Lyla, mais son prolongement nocturne et analytique." },
      { target: "Harry PY", type: "Lucidité immédiate", description: "Nastaz comprend des la premiere naissance que le Vrax repond a une alteration reelle et durable." },
      { target: "Protecteurs du Vrax", type: "Compréhension", description: "Elle identifie la logique commune des naissances et la preparation qu'elles representent." },
      { target: "Déséquilibre du vivant", type: "Analyse", description: "La nuit, Nastaz mesure froidement ce que le jour revele deja: un monde qui s'altere et doit apprendre a se defendre." }
    ]
  }
];

function buildMediaPath(folder, fileName) {
  const safeFileName = encodeURIComponent(fileName).replace(/'/g, "%27");
  return `./media/${folder}/${safeFileName}`;
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
      "Harry PY apparait il y a neuf ans, lorsque le Vrax detecte une variation anormale dans son equilibre. Sa naissance n'est pas presentee comme un hasard, mais comme une reponse precise du monde a une necessite plus ancienne et plus grave.",
      "En grandissant, Harry PY ne decouvre pas le Vrax comme un enfant ordinaire: il s'y accorde. Il ressent les flux, les absences et les alterations, et devient peu a peu celui qui lit ce que les autres ne font encore qu'encaisser.",
      "Il apparait comme le centre discret du groupe du Vrax. Gardien Isma, Wingard et Lévy s'organisent autour de lui, et sa simple presence donne une structure a leurs roles respectifs."
    ],
    summary: [
      "Harry PY incarne l'intelligence sensible du Vrax. Il ne domine pas les autres par la force, mais par la lecture du monde et la capacite a percevoir les failles avant qu'elles ne deviennent des ruptures.",
      "Il devient une figure essentielle du nouvel equilibre du Vrax et de la reponse du monde face au retour du desequilibre."
    ],
    profile: [
      { title: "Caractere", text: "Observe, concentre et deja grave, meme dans un corps d'enfant." },
      { title: "Forces", text: "Percoit les flux, les absences et les variations du vivant avec une precision unique." },
      { title: "Faiblesses", text: "Porte de plus en plus directement la fatigue d'un monde qu'il tente de comprendre et de contenir." }
    ],
    relations: [
      { title: "Gardien Isma", text: "Gardien se place instinctivement entre Harry PY et le danger, comme si sa fonction etait nee avec lui." },
      { title: "Wingard", text: "Wingard desequilibre souvent l'espace, mais Harry demeure le centre vers lequel son chaos revient." },
      { title: "Lévy", text: "Lévy complete ce que Harry ne peut plus lire seul, notamment face aux zones de vide du Vrax." }
    ],
    timeline: [
      { era: "Il y a 9 ans", title: "Naissance de Harry PY", summary: "Le Vrax cree Harry PY comme premiere reponse consciente a une variation anormale et a une urgence encore invisible." },
      { era: "Il y a 6 a 3 ans", title: "Centre du groupe protecteur", summary: "Les naissances suivantes s'organisent autour de lui et le Vrax commence a fonctionner en generation de reponse." },
      { era: "Jour 5", title: "Perception du groupe de Shaushana", summary: "Harry PY fait partie des protecteurs qui reagissent a l'intrusion du groupe dans le Vrax." }
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
      "Gardien Isma apparait six ans avant le present du recit, lorsque le Vrax comprend qu'une simple perception ne suffira plus a faire face a ce qui approche.",
      "Sa naissance est plus dense, plus brutale, plus immediatement physique que celle de Harry PY. Il apprend le monde par l'appui, l'impact et la resistance, jusqu'a ce que la terre elle-meme reponde avec lui.",
      "Il devient la ligne de defense evidente du groupe. C'est lui qui saisit Franklin au moment de l'attaque, non par cruaute gratuite, mais comme execution d'une reponse precise du Vrax."
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
      { era: "Il y a 6 ans", title: "Naissance de Gardien Isma", summary: "Le Vrax cree Gardien Isma comme reponse plus dense et plus physique au desequilibre grandissant." },
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
    intro: "Troisieme reponse du Vrax, Wingard introduit le mouvement, le vent et l'instabilite necessaire dans un monde qui ne peut plus seulement se maintenir par la force.",
    meta: [
      { label: "Statut", value: "Protecteur du Vrax" },
      { label: "Specialite", value: "Vent, vitesse, perturbation" },
      { label: "Lien majeur", value: "Chaos utile au service du Vrax" }
    ],
    biography: [
      "Wingard nait il y a quatre ans, au moment ou le Vrax ne repond plus seulement par la structure, mais doit integrer un principe de mouvement capable de s'ajuster vite a l'instabilite.",
      "Sa naissance est la plus chaotique des premieres creations: le vent le deborde lui-meme, les branches cedent, les appuis glissent, et son existence semble d'abord etre une perturbation vivante avant de devenir une fonction.",
      "Dans le present du recit, Wingard reste le plus imprevisible du groupe, mais sa vitesse et sa maitrise grandissante du vent en font un acteur cle de la neutralisation de Shan, Shaushana et Franklin."
    ],
    summary: [
      "Wingard est le protecteur du mouvement et de la perturbation. Il n'arrete pas le monde: il le desaxe assez pour le rendre a nouveau saisissable.",
      "Il n'est plus seulement un enfant du vent, mais un element tactique a part entiere du Vrax."
    ],
    profile: [
      { title: "Caractere", text: "Vif, instable, joueur en apparence, mais de plus en plus capable de se recentrer." },
      { title: "Forces", text: "Controle du vent, vitesse d'action, capacite a casser les appuis et les trajectoires." },
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
      { era: "Jour 5", title: "Encerclement du groupe", summary: "Wingard ferme l'espace, casse les appuis et empeche toute reponse immediate a la prise de Franklin." }
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
      "Il joue un role determinant pendant l'interception du groupe. Il fixe le sol, ralentit les appuis et sent en Franklin quelque chose de different avant de laisser la necessite l'emporter."
    ],
    summary: [
      "Lévy est le protecteur du lien et de la reparation partielle. Il intervient la ou le monde n'est plus seulement agresse, mais rompu.",
      "Sa presence fait entrer le recit dans une logique plus fine: celle d'un Vrax qui ne reagit plus seulement par la force, mais aussi par l'ajustement."
    ],
    profile: [
      { title: "Caractere", text: "Silencieux, precis, presque absorbe par ce qu'il percoit sous la surface visible." },
      { title: "Forces", text: "Sent les absences, reajuste la matiere et impose des limites invisibles mais efficaces." },
      { title: "Faiblesses", text: "Affronte le desequilibre le plus abstrait et en porte une charge mentale plus difficile a partager." }
    ],
    relations: [
      { title: "Harry PY", text: "Lévy complete ce que Harry ne peut plus lire seul lorsque les flux cessent simplement de repondre." },
      { title: "Gardien Isma", text: "Lévy ne retient pas par la force; il prepare le terrain pour que Gardien puisse tenir." },
      { title: "Franklin", text: "Il ressent chez Franklin une singularite avant meme que le groupe du Vrax n'agisse totalement." }
    ],
    timeline: [
      { era: "Il y a 3 ans", title: "Naissance de Lévy", summary: "Le Vrax cree Lévy face a une absence dans ses flux, une fracture que les autres reponses ne peuvent absorber seules." },
      { era: "Il y a 3 ans", title: "Formation du groupe complet", summary: "Avec Lévy, la generation des protecteurs du Vrax atteint une forme d'equilibre fonctionnel." },
      { era: "Jour 5", title: "Fixation du terrain", summary: "Lévy perturbe les appuis du groupe de Shaushana et participe directement a la prise de Franklin." }
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
      "Elle ne commande pas par la contrainte. Sa presence revele, intensifie et apaise. C'est sous son regard que l'equilibre du Vrax est d'abord mesure, puis que les premieres inquietudes deviennent assez fortes pour appeler une reponse.",
      "Au fil des naissances de Harry PY, Gardien Isma, Wingard et Lévy, Ossah Lyla apparait comme une figure de veille et de douceur, mais traversee par une inquietude de plus en plus concrete."
    ],
    summary: [
      "Ossah Lyla represente le versant lumineux, accompagne et presque sacre du Vrax. Elle est moins une combattante qu'une lectrice profonde du vivant.",
      "Son importance grandit encore a mesure que l'on comprend que les protecteurs naissent aussi pour proteger les creatrices ou gardiennes du monde."
    ],
    profile: [
      { title: "Caractere", text: "Douce, attentive, profonde et infiniment sensible aux variations du vivant." },
      { title: "Forces", text: "Percoit les dissonances avant qu'elles ne se materialisent et apaise partiellement les desequilibres." },
      { title: "Faiblesses", text: "Ne repond pas par la force brute a ce qui demande une defense immediate." }
    ],
    relations: [
      { title: "Nastaz", text: "Nastaz n'est pas son contraire, mais son prolongement nocturne, plus tranchant et analytique." },
      { title: "Protecteurs du Vrax", text: "Les enfants-creations du Vrax existent aussi pour proteger ce qu'Ossah Lyla incarne dans l'equilibre du monde." },
      { title: "Wingard", text: "Sa seule presence parvient a ralentir et restructurer le chaos declenche par Wingard a sa naissance." }
    ],
    timeline: [
      { era: "Avant le recit", title: "Veille diurne du Vrax", summary: "Ossah Lyla lit le Vrax au jour et detecte les premieres dissonances qui menacent son equilibre." },
      { era: "Il y a 9 a 3 ans", title: "Temoin des naissances", summary: "Elle accompagne la formation progressive de la generation des protecteurs du Vrax." },
      { era: "Jour 5", title: "Presence indirecte", summary: "Son monde, sa memoire et sa fonction de gardienne expliquent la rigueur de la reponse du Vrax face aux intrus." }
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
      { label: "Lien majeur", value: "Comprend la necessite de creer les protecteurs" }
    ],
    biography: [
      "Nastaz apparait comme le versant nocturne du meme principe que celui d'Ossah Lyla. La ou l'une accompagne, Nastaz tranche, verifie, decide et accepte plus vite la necessite d'une reponse.",
      "C'est elle qui constate l'alteration du Vrax avec le plus de froideur et qui comprend que les naissances successives ne sont pas des miracles isoles, mais des adaptations imposees par un desequilibre reel.",
      "Sa presence lie le Vrax a une idee plus vaste: le monde ne subit pas passivement, il observe, calcule et repond."
    ],
    summary: [
      "Nastaz incarne la conscience analytique et nocturne du Vrax. Elle voit au-dela de l'emotion immediate et reconnait plus vite que les autres la logique de preparation du monde.",
      "Avec elle, la reponse du Vrax prend une intelligence plus froide et plus strategique."
    ],
    profile: [
      { title: "Caractere", text: "Froide en apparence, precise, jamais distraite par l'hesitation." },
      { title: "Forces", text: "Analyse les alterations, comprend les besoins du Vrax et assume les decisions necessaires." },
      { title: "Faiblesses", text: "Peut sembler inhumaine tant sa lecture du danger passe avant tout le reste." }
    ],
    relations: [
      { title: "Ossah Lyla", text: "Elle prolonge Ossah Lyla dans une version plus dure, plus nette et plus orientee vers l'action." },
      { title: "Harry PY", text: "Elle comprend tres tot qu'Harry n'est pas un enfant ordinaire, mais une reponse consciente du Vrax." },
      { title: "Generation des protecteurs", text: "Nastaz saisit avant tous les autres que ces naissances constituent une preparation, et non une suite d'accidents." }
    ],
    timeline: [
      { era: "Avant le recit", title: "Veille nocturne du Vrax", summary: "La nuit, Nastaz analyse le vivant et mesure l'ampleur exacte des alterations a venir." },
      { era: "Il y a 9 a 3 ans", title: "Comprehension des naissances", summary: "Elle identifie chaque nouvelle creation comme une reponse complementaire du Vrax face au desequilibre." },
      { era: "Jour 5", title: "Heritage de vigilance", summary: "L'action des protecteurs prolonge la logique de necessite froide que Nastaz incarne depuis l'origine de leur naissance." }
    ]
  },
  {
    slug: "eben",
    hash: "#fiches-eben",
    name: "Eben",
    image: buildMediaPath("pandorus", "Eben.jpg"),
    category: "Présence sauvage",
    intro: "Eben n'apparait pas comme une simple creature de chasse, mais comme une souverainete animale devant laquelle la violence ordinaire perd tout son sens.",
    meta: [
      { label: "Statut", value: "Figure sauvage majeure du recit" },
      { label: "Specialite", value: "Presence, domination, puissance animale" },
      { label: "Lien majeur", value: "Traumatisme fondateur de Shan" }
    ],
    biography: [
      "Dans l'enfance de Shan, Eben commence comme un nom. Ce n'est d'abord qu'un murmure dans la bouche de ses parents, puis une obsession qui les devore peu a peu, jusqu'a les detourner d'une chasse mesuree vers une recherche de sommet, de verite et de confrontation.",
      "Lorsque la rencontre a finalement lieu, Eben ne se comporte pas comme une bete traquee. Il apparait immense, stable, presque souverain. Les parents de Shan l'attaquent sans recul et meurent face a une puissance qu'ils ne comprenaient pas vraiment.",
      "Shan survit, lui, mais au prix d'une fracture definitive. Eben devient alors moins un ennemi ponctuel qu'une figure matricielle de la peur, de la puissance et du silence sauvage qui hantera toute sa construction."
    ],
    summary: [
      "Eben est la creature autour de laquelle s'organise le drame originel de Shan. Il condense la violence du monde sans se reduire a un simple monstre.",
      "Sa presence donne au recit une verite importante: sur Pandorus, certaines forces ne sont pas faites pour etre attaquees comme on attaque une proie."
    ],
    profile: [
      { title: "Caractere", text: "Immobile en apparence, souverain, presque impassible dans sa propre puissance." },
      { title: "Forces", text: "Domination naturelle, resistance ecrasante et aura de predation qui casse les reflexes ordinaires." },
      { title: "Faiblesses", text: "Reste une presence lointaine du recit, plus fondatrice qu'encore pleinement exploree." }
    ],
    relations: [
      { title: "Shan", text: "Eben est au coeur du traumatisme qui forge la violence, la discipline et la solitude de Shan." },
      { title: "Parents de Shan", text: "Ils transforment Eben en obsession et meurent en le cherchant comme une verite ultime." },
      { title: "Monde sauvage", text: "Eben incarne une loi du vivant plus ancienne et plus haute que le simple rapport de chasse." }
    ],
    timeline: [
      { era: "Avant le recit", title: "Nom devenu obsession", summary: "Chez les parents de Shan, Eben cesse d'etre une rumeur pour devenir une cible absolue." },
      { era: "Avant le recit", title: "Confrontation fatale", summary: "La rencontre avec Eben se solde par la mort des parents de Shan et par la fin brutale de son enfance." },
      { era: "Au fil du recit", title: "Memoire toujours vive", summary: "Le souvenir d'Eben continue de structurer la lecture que Shan fait du danger, de la force et du monde." }
    ]
  },
  {
    slug: "capitaine",
    hash: "#fiches-capitaine",
    name: "Capitaine",
    image: buildMediaPath("pandorus", "Capitaine.png"),
    category: "Guide du Passar",
    intro: "Figure adulte du Passar, le Capitaine est l'un des premiers a prendre au serieux l'alteration du vivant et a chercher sa source au-dela du fleuve familier.",
    meta: [
      { label: "Statut", value: "Eclaireur et referent du Passar" },
      { label: "Specialite", value: "Lecture du fleuve, expedition, decision" },
      { label: "Lien majeur", value: "Premier guide associe a la quete des causes" }
    ],
    biography: [
      "Avant meme que le groupe principal ne prenne la route du Vrax, le Capitaine comprend que ce qui atteint le Passar ne ressemble pas a une simple crise locale. Il lie le sort du fleuve a quelque chose de plus profond qui traverse deja le vivant.",
      "Avec Franklin, il part jusqu'au Veyrine pour comparer, verifier et chercher une origine a cette alteration. Cette expedition fait de lui l'un des premiers personnages a sortir du cadre immediat de la survie pour entrer dans une logique d'enquete du monde.",
      "Au cours du voyage, le Capitaine percoit brusquement une presence invisible, ordonne a Franklin de rentrer, puis disparait seul. Son absence laisse derriere elle une inquietude durable et donne a la quete du groupe une profondeur plus ancienne."
    ],
    summary: [
      "Le Capitaine represente la premiere tentative consciente de comprendre le desequilibre du vivant plutot que d'en subir seulement les effets.",
      "Sa disparition transforme son role en point de bascule discret: il ouvre la voie a la quete sans pouvoir l'accompagner jusqu'au bout."
    ],
    profile: [
      { title: "Caractere", text: "Calme, concret, responsable, avec une lecture serieuse des signes faibles du terrain." },
      { title: "Forces", text: "Experience du fleuve, sang-froid, capacite a prendre une decision rapide face a l'invisible." },
      { title: "Faiblesses", text: "Reste une figure partiellement absente du recit, connue surtout par ce qu'il a amorce puis laisse derriere lui." }
    ],
    relations: [
      { title: "Franklin", text: "Franklin garde de lui l'image d'un guide qui a vu avant les autres qu'il fallait chercher plus loin." },
      { title: "Passar", text: "Le Capitaine est intimement relie au fleuve et a la responsabilite de comprendre ce qui le menace." },
      { title: "Veyrine", text: "Le voyage vers le Veyrine marque sa derniere grande initiative connue avant sa disparition." }
    ],
    timeline: [
      { era: "Avant le recit", title: "Lecture du desequilibre", summary: "Le Capitaine comprend que l'etat du Passar traduit une alteration plus vaste du vivant." },
      { era: "Avant le recit", title: "Expedition vers le Veyrine", summary: "Avec Franklin, il part comparer les fleuves pour trouver une logique a la crise qui gagne le monde." },
      { era: "Avant le recit", title: "Disparition", summary: "Apres avoir percu une presence invisible, il renvoie Franklin au Passar et disparait seul, laissant une question ouverte." }
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
  "#fiches-nastaz": "nastaz-panel"
};

const creatureFiches = [
  {
    slug: "croconha",
    name: "Croconha",
    image: buildMediaPath("creatures", "Croconha.png"),
    family: "Predateur reptilien",
    status: "Espece visible dans le bestiaire",
    habitat: "Zones humides et berges sauvages",
    summary: "Creature a l'allure reptilienne, rattachee a la faune dangereuse des marges de Pandorus.",
    biography: [
      "Croconha n'a pas encore de scene detaillee aussi forte que le Felou ou le Felours. Sa presence dans le bestiaire montre cependant que Pandorus abrite une faune de predateurs varies, adaptes a des milieux plus rudes et plus humides.",
      "Par son apparence et par la logique du monde raconte, Croconha s'inscrit dans un ecosysteme ou les creatures ne sont jamais de simples monstres. Elles prolongent plutot la diversite du vivant, avec une part de puissance, de territoire et de danger."
    ],
    profile: [
      { title: "Nature", text: "Predateur massif, probablement lie aux bords d'eau, aux marais ou aux terrains glissants." },
      { title: "Niveau de menace", text: "Moyen a eleve selon l'etat du milieu et le desequilibre du vivant." },
      { title: "Dans le recit", text: "Pas encore au centre d'une scene, mais coherent avec la faune sauvage evoquee par les voyages." }
    ],
    timeline: [
      { era: "Bestiaire", title: "Presence dans la faune de Pandorus", summary: "Croconha participe a l'idee d'un monde riche en creatures specialisees et territoriales." },
      { era: "Lecture du monde", title: "Menace potentielle", summary: "Sa simple presence renforce l'impression que chaque zone de Pandorus peut cacher sa propre forme de danger vivant." }
    ]
  },
  {
    slug: "felou",
    name: "Felou",
    image: buildMediaPath("creatures", "Félou.png"),
    family: "Predateur terrestre",
    status: "Creature clairement presente dans le recit",
    habitat: "Zones de passage, abords sauvages, territoires de chasse",
    summary: "Predateur rapide et agressif, le Felou est l'une des premieres creatures a faire basculer le recit dans le danger concret.",
    biography: [
      "Le Felou marque l'une des premieres grandes confrontations du recit. C'est en sauvant Franklin d'un Felou que Shaushana revele sa force et entre vraiment dans le monde de Pandorus. La creature devient donc un seuil narratif: avant elle, il y a l'eveil; apres elle, il y a le danger, le lien et la route.",
      "Plus tard, les Felous reapparaissent lors de l'attaque du Passar. Leur agressivite ne semble plus relever d'un simple instinct de predation, mais d'un desequilibre plus large du vivant. A ce moment-la, ils deviennent le signe concret qu'une corruption touche le monde."
    ],
    profile: [
      { title: "Nature", text: "Chasseur nerveux, rapide et direct, capable de frapper tres vite." },
      { title: "Niveau de menace", text: "Eleve pour les voyageurs isoles et tres eleve lorsqu'il agit dans un contexte de corruption du vivant." },
      { title: "Role narratif", text: "Premiere menace majeure affrontee par Shaushana et indice central du dereglement du monde." }
    ],
    timeline: [
      { era: "Jour 1", title: "Attaque de Franklin", summary: "Un Felou menace Franklin, et Shaushana intervient pour le sauver." },
      { era: "Jour 2", title: "Assaut du Passar", summary: "Les Felous participent a l'attaque coordonnee contre le bidonville, preuve que la faune devient anormalement agressive." },
      { era: "Lecture d'ensemble", title: "Premier signal du desequilibre", summary: "Le Felou apparait comme l'une des premieres manifestations visibles d'un mal plus profond que le Vrax tente deja de contenir autrement." }
    ]
  },
  {
    slug: "felours",
    name: "Felours",
    image: buildMediaPath("creatures", "Felours.png"),
    family: "Brute predatrice",
    status: "Creature clairement presente dans le recit",
    habitat: "Terrains sauvages et zones de confrontation",
    summary: "Creature plus lourde et plus brutale que le Felou, le Felours incarne la force de percussion du bestiaire hostile.",
    biography: [
      "Le Felours apparait comme l'une des formes les plus dangereuses de l'attaque contre le Passar. Sa presence donne a l'assaut une dimension beaucoup plus lourde: on ne parle plus seulement de chasse ou de peur, mais d'une force capable de briser un fragile refuge humain.",
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
      { era: "Lecture d'ensemble", title: "Violence en amont du Vrax", summary: "Ces attaques precedaient deja la reaction organisee du Vrax et faisaient partie d'un desequilibre plus large du vivant." }
    ]
  },
  {
    slug: "luminael",
    name: "Luminael",
    image: buildMediaPath("creatures", "Luminaël.png"),
    family: "Creature lumineuse",
    status: "Espece visible dans le bestiaire",
    habitat: "Zones calmes, espaces nocturnes ou milieux sensibles a la lumiere",
    summary: "Creature associee a une presence lumineuse et plus paisible du vivant, encore peu detaillee dans les chapitres.",
    biography: [
      "Luminael n'a pas encore de grande scene dediee. Son existence dans le bestiaire s'accorde toutefois avec l'autre versant de Pandorus: un monde traverse non seulement par le danger, mais aussi par des formes de vie plus fines, plus lumineuses et plus fragiles.",
      "Dans l'economie generale du recit, Luminael peut etre compris comme l'un des signes que le vivant de Pandorus ne se resume pas a la predation. Le monde est aussi fait de grace, d'eclat et d'equilibres discrets."
    ],
    profile: [
      { title: "Nature", text: "Creature probablement liee a la lumiere, a l'orientation ou a des zones de calme." },
      { title: "Niveau de menace", text: "Faible a inconnu a ce stade du recit." },
      { title: "Dans le recit", text: "Pas encore detaillee, mais elle enrichit la dimension poetique et vivante du bestiaire." }
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
    family: "Creature aquatique ou lumineuse",
    status: "Espece visible dans le bestiaire",
    habitat: "Eaux, rives ou zones humides",
    summary: "Creature evoquant les milieux d'eau et de lumiere, en accord avec les traverses sensibles du monde de Pandorus.",
    biography: [
      "Lumineau n'est pas encore au coeur d'une scene precise. Son nom et sa place dans le bestiaire font cependant echo aux passages ou l'eau, les reflets, les fleuves et la vie sensible des milieux traverses occupent une place importante.",
      "Dans le cadre du recit, Lumineau prolonge l'idee que Pandorus est un monde d'ecosystemes specialises. Certaines creatures y semblent liees moins a la guerre qu'au rythme naturel des elements."
    ],
    profile: [
      { title: "Nature", text: "Creature probablement liee a l'eau, a la fluidite et a des zones de transition." },
      { title: "Niveau de menace", text: "Inconnu a ce stade du recit." },
      { title: "Dans le recit", text: "Elle enrichit le bestiaire des zones humides sans etre encore detaillee par une rencontre directe." }
    ],
    timeline: [
      { era: "Bestiaire", title: "Creature de milieu", summary: "Lumineau renforce la coherence des espaces aquatiques de Pandorus." },
      { era: "Lecture du monde", title: "Vie specialisee", summary: "Sa presence rappelle que chaque region du monde semble produire ses propres formes de vie." }
    ]
  },
  {
    slug: "nignoble",
    name: "Nignoble",
    image: buildMediaPath("creatures", "Nignoble.png"),
    family: "Creature hostile",
    status: "Espece visible dans le bestiaire",
    habitat: "Zones troubles, marges du vivant, regions potentiellement corrompues",
    summary: "Creature au profil plus inquietant, coherent avec les formes du vivant qui paraissent deja touches par une ombre ou un desequilibre.",
    biography: [
      "Nignoble n'est pas encore decrit longuement, mais il s'insere naturellement dans la part la plus sombre du bestiaire. Son existence accompagne bien la tonalite des passages ou la corruption du vivant devient de plus en plus lisible.",
      "A ce stade, Nignoble fonctionne surtout comme une promesse d'hostilite a venir: la preuve que Pandorus ne contient pas seulement des predateurs naturels, mais aussi des creatures dont l'apparence meme semble deja marquer un glissement vers quelque chose de plus noir."
    ],
    profile: [
      { title: "Nature", text: "Creature a l'allure inquietante, possiblement liee a des zones degradees ou hostiles." },
      { title: "Niveau de menace", text: "Potentiellement eleve, mais pas encore mesure par une scene directe." },
      { title: "Dans le recit", text: "Figure anticipatrice des formes de vie que le dereglement pourrait rendre plus dangereuses." }
    ],
    timeline: [
      { era: "Bestiaire", title: "Presence latente", summary: "Nignoble elargit le versant le plus sombre de la faune de Pandorus." },
      { era: "Lecture du monde", title: "Signe d'un vivant trouble", summary: "Sa place visuelle rejoint les themes de corruption et de bascule developpes dans le recit." }
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
      "Renastar n'a pas encore de rencontre marquante. Son profil enrichit toutefois l'idee d'un monde ou les creatures peuvent etre rapides, fuyantes, presque nobles, et non seulement brutales.",
      "Renastar participe a la respiration du bestiaire. Il ouvre la possibilite d'une faune faite aussi de mouvement, d'instinct et de beauté sauvage dans les espaces traverses par les heros."
    ],
    profile: [
      { title: "Nature", text: "Creature vraisemblablement rapide, mobile et adaptee aux grands espaces." },
      { title: "Niveau de menace", text: "Inconnu a ce stade, probablement variable selon le contexte." },
      { title: "Dans le recit", text: "Pas encore detaille, mais utile pour montrer la diversite du vivant pandorien." }
    ],
    timeline: [
      { era: "Bestiaire", title: "Figure de la faune libre", summary: "Renastar prolonge l'image d'un monde ou chaque terrain accueille sa propre creature." },
      { era: "Lecture du monde", title: "Diversite du vivant", summary: "Sa presence nuance l'idee d'un bestiaire uniquement hostile." }
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
      "Par sa seule presence, Reptidile suggere une faune capable de survivre dans des espaces plus rudes, plus secs ou plus mineraux, loin des refuges humains et des passages plus hospitaliers."
    ],
    profile: [
      { title: "Nature", text: "Creature reptilienne, probablement territoriale et resistante." },
      { title: "Niveau de menace", text: "Moyen a eleve selon l'intrusion et le terrain." },
      { title: "Dans le recit", text: "Pas encore detaillee directement, mais tres coherente avec les marges sauvages du monde." }
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
      "Scarabeast n'est pas encore nomme dans une scene forte. Son image s'accorde cependant tres bien avec l'univers de Pandorus, ou la vie semble souvent se proteger, se blinder ou se transformer pour survivre a des milieux parfois hostiles.",
      "Cette creature rappelle que la menace du monde ne passe pas seulement par la vitesse ou la morsure, mais aussi par des formes de resistance lourde, d'approche lente et d'endurance."
    ],
    profile: [
      { title: "Nature", text: "Creature cuirassee, probablement lente mais difficile a neutraliser." },
      { title: "Niveau de menace", text: "Moyen a eleve selon la taille et le terrain." },
      { title: "Dans le recit", text: "Pas encore detaillee en scene, mais tres lisible dans la logique du bestiaire pandorien." }
    ],
    timeline: [
      { era: "Bestiaire", title: "Figure de defense", summary: "Scarabeast enrichit le bestiaire par une logique de carapace et de resistance." },
      { era: "Lecture du monde", title: "Survie par l'endurance", summary: "Il renforce l'idee que beaucoup de creatures de Pandorus ont evolue pour tenir face a un monde exigeant." }
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
      "Serpours n'a pas encore de moment central. Il illustre cependant tres bien l'imaginaire biologique de Pandorus: un monde ou les creatures semblent parfois hybrides, surprenantes et issues d'equilibres propres a ce monde.",
      "Son profil suggere une creature a la fois souple, territoriale et capable de puissance, ce qui convient bien aux espaces sauvages et imprévisibles traverses par les heros."
    ],
    profile: [
      { title: "Nature", text: "Creature hybride, possiblement a la fois rampante, puissante et defensive." },
      { title: "Niveau de menace", text: "Potentiellement eleve si elle defend un territoire." },
      { title: "Dans le recit", text: "Pas encore detaillee, mais tres representative de la singularite du bestiaire pandorien." }
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
    status: "Creature clairement presente dans le recit",
    habitat: "Zones vegetales, lisières, milieux ou le vivant est dense",
    summary: "Forme de vie vegetale rendue hostile par le desequilibre du monde, Verdeflor montre que meme la croissance peut devenir une menace.",
    biography: [
      "Verdeflor intervient lors de l'attaque contre le Passar, aux cotes des Felous et du Felours. Sa presence est importante car elle elargit la crise du vivant: ce ne sont pas seulement des predateurs qui se dereglent, mais aussi des formes liees a la vegetation elle-meme.",
      "Avec Verdeflor, on comprend que la corruption touche des couches differentes de la vie pandorienne. La menace n'est plus seulement animale; elle atteint aussi ce qui pousse, s'etend et devrait normalement participer a l'equilibre du monde."
    ],
    profile: [
      { title: "Nature", text: "Creature vegetale offensive, liee a la propagation, a l'emprise ou a l'envahissement." },
      { title: "Niveau de menace", text: "Eleve lorsqu'elle agit dans un espace habite ou deja fragilise." },
      { title: "Role narratif", text: "Preuve que le dereglement du vivant touche aussi les formes de vie vegetales." }
    ],
    timeline: [
      { era: "Jour 2", title: "Assaut du Passar", summary: "Verdeflor participe a l'attaque coordonnee contre le bidonville." },
      { era: "Jour 2", title: "Signe d'une corruption plus profonde", summary: "Son apparition montre que le mal agit au-dela des seuls predateurs et atteint la trame meme du vivant." },
      { era: "Lecture d'ensemble", title: "Le vivant se deregle avant la reponse du Vrax", summary: "Verdeflor se lit comme un symptome de corruption touchant les couches les plus profondes du monde." }
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
let currentCreatureFiche = creatureFiches[0]?.slug || "";
let currentRelationLetter = "all";
let currentRelationSearch = "";
let ficheUiInitialized = false;
let creatureFichesInitialized = false;

const chapters = [
  {
    path: "./media/chapitres/Chapitre%201%20-%20La%20Gen%C3%A8se.pdf",
    summary: "La naissance de Pandorus se dessine dans un souffle primordial, entre lumiere, matiere vivante et apparition des premiers equilibres du monde.",
    accessKey: "ChapPando1"
  },
  {
    path: "./media/chapitres/Chapitre%202%20-%20Premier%20Regard.pdf",
    summary: "Shaushana decouvre le monde, sauve Franklin d'un Felou et laisse pour la premiere fois une trace concrete dans cet univers vivant.",
    accessKey: "ChapPando2"
  },
  {
    path: "./media/chapitres/Chapitre%203%20-%20Le%20souffle%20du%20chemin.pdf",
    summary: "Shaushana et Franklin traversent un monde instable, affrontent plusieurs creatures et atteignent finalement le bidonville du Passar.",
    accessKey: "ChapPando3"
  },
  {
    path: "./media/chapitres/Chapitre%204%20-%20Shan.pdf",
    summary: "Le passe de Shan se revele, de son enfance rude a sa survie solitaire, jusqu'a sa rencontre decisive avec Shaushana.",
    accessKey: "ChapPando4"
  },
  {
    path: "./media/chapitres/Chapitre%205%20-%20Franklin.pdf",
    summary: "Au bidonville, Franklin montre son monde, ses liens et les premiers signes clairs du desequilibre qui frappe le vivant autour du Passar.",
    accessKey: "ChapPando5"
  },
  {
    path: "./media/chapitres/Chapitre%206%20-%20Le%20souffle%20troubl%C3%A9%20du%20vivant.pdf",
    summary: "Le bidonville est attaque par des creatures anormalement agresives, poussant le groupe a partir vers le Vrax pour comprendre l'origine du mal.",
    accessKey: "ChapPando6"
  },
  {
    path: "./media/chapitres/Chapitre%207%20-%20Elrick.pdf",
    summary: "Elrick accueille le groupe, partage la memoire d'une ancienne guerre et les prepare a poursuivre leur route vers le Vrax.",
    accessKey: "ChapPando7"
  },
  {
    path: "./media/chapitres/Chapitre%208%20-%20Du%20Bassa%C3%AF%20au%20Vrax.pdf",
    summary: "La traversee du Bassai et l'entree dans le Vrax confrontent le groupe a de nouvelles forces, jusqu'a l'enlevement brutal de Franklin.",
    accessKey: "ChapPando8"
  },
  {
    path: "./media/chapitres/Chapitre%209%20-%20Les%20Gamins%20du%20Vrax.pdf",
    summary: "Le chapitre revele la naissance et le role des jeunes protecteurs du Vrax, jusqu'a leur interception du groupe et a la capture brutale de Franklin.",
    accessKey: "ChapPando9"
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
    summary: "Le mal est brise sans etre totalement detruit, les frontieres sont effacees et un monde reunifie emerge sous un ciel marque par les etoiles."
  },
  {
    era: "Avant le recit",
    title: "Enfance de Shan",
    summary: "Shan grandit dans un apprentissage brutal de la survie et du combat, forme par ses parents chasseurs."
  },
  {
    era: "Avant le recit",
    title: "Mort des parents de Shan face a Eben",
    summary: "L'affrontement contre Eben brise l'equilibre de l'enfance de Shan et l'entraine vers une vie solitaire."
  },
  {
    era: "Avant le recit",
    title: "Retrait d'Elrick pres de sa cabane",
    summary: "Ancien combattant de la grande guerre, Elrick choisit une vie simple au contact du vivant, tout en percevant les signes d'un nouveau desequilibre."
  },
  {
    era: "Avant le recit",
    title: "Expedition du Capitaine vers le Veyrine",
    summary: "Le Capitaine et Franklin quittent le Passar pour comparer les fleuves et verifier si le desequilibre du vivant depasse leur territoire."
  },
  {
    era: "Avant le recit",
    title: "Disparition du Capitaine",
    summary: "Apres avoir percu une presence invisible durant l'expedition, le Capitaine renvoie Franklin et disparait seul, laissant une inquietude sans reponse."
  },
  {
    era: "Il y a 9 ans",
    title: "Naissance de Harry PY",
    summary: "Le Vrax cree Harry PY comme premiere reponse consciente a une variation anormale et a une urgence encore invisible."
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
    summary: "Harry PY, Gardien Isma, Wingard et Lévy deviennent une generation de reponse du Vrax chargee de proteger son equilibre et ses gardiennes."
  },
  {
    era: "Jour 1",
    title: "Reveil de Shaushana dans Le Passage",
    summary: "Shaushana ouvre les yeux dans un monde deja vivant et ressent immediatement le souffle profond qui le traverse."
  },
  {
    era: "Jour 1",
    title: "Attaque du Felou et rencontre avec Franklin",
    summary: "Shaushana sauve Franklin d'un Felou, decouvre ses propres capacites et accepte de le suivre vers le bidonville du Passar."
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
    title: "Constat du desequilibre du vivant",
    summary: "Le groupe observe des animaux agressifs, des plantes affaiblies et des signes croissants d'une corruption du vivant."
  },
  {
    era: "Jour 1",
    title: "Affrontement entre Shan et Shaushana",
    summary: "Shan provoque Shaushana, leur combat revele leur puissance respective et scelle un nouveau lien entre eux."
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
    summary: "Le groupe trouve refuge chez Elrick, qui revele l'existence de l'ancienne guerre et le retour possible d'un peril enfoui."
  },
  {
    era: "Jour 4",
    title: "Depart de chez Elrick",
    summary: "Mieux prepares et lourdement marques par les revelations d'Elrick, les voyageurs reprennent leur route vers le Bassaï puis le Vrax."
  },
  {
    era: "Jour 4",
    title: "Traversée du fleuve Bassaï",
    summary: "La traversee met le groupe a l'epreuve, entre papillons d'eau, creatures du fleuve et manifestations d'un monde conscient."
  },
  {
    era: "Jour 5",
    title: "Entree dans le Vrax",
    summary: "Le territoire du Vrax se revele comme un espace vivant, dense et attentif, ou les regles habituelles cessent de suffire."
  },
  {
    era: "Jour 5",
    title: "Veille d'Ossah Lyla et de Nastaz",
    summary: "Ossah Lyla le jour puis Nastaz la nuit mesurent l'alteration du Vrax et donnent une profondeur plus consciente a la reponse du territoire."
  },
  {
    era: "Jour 5",
    title: "Les protecteurs du Vrax sentent l'intrusion",
    summary: "Pendant leur propre affrontement, Lévy, Gardien Isma et Wingard percoivent l'arrivee du groupe de Shaushana comme une nouvelle variable dans un equilibre deja fragile."
  },
  {
    era: "Jour 5",
    title: "Capture de Franklin",
    summary: "Lévy fixe le terrain, Wingard referme l'espace et Gardien Isma saisit Franklin, qui semble porter quelque chose de singulier pour le Vrax."
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
          <h3>Resume</h3>
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
      <section class="section">
        <div class="section-heading">
          <h3>Evolution dans l'histoire</h3>
        </div>
        <div class="timeline-list">
          ${timeline}
        </div>
      </section>
    `;

    ficheSection.appendChild(panel);
  });
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
        note: "Moments qui structurent le monde et le recit."
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
    let badge = "Eveil";

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
    summary.textContent = event.summary;
    content.insertBefore(badgeNode, era);
    list.appendChild(node);
  });
}

function getSectionKeyFromHash(hashValue) {
  if (hashValue === "#fiches" || Boolean(ficheHashPanelMap[hashValue])) return "fiches";
  if (hashValue === "#chronologie") return "chronologie";
  if (hashValue === "#chapitres") return "chapitres";
  if (hashValue === "#relations") return "relations";
  if (hashValue === "#personnages") return "personnages";
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

function runIntroAnimation() {
  const overlay = document.getElementById("intro-overlay");
  const introLogo = document.getElementById("intro-logo");

  if (!overlay || !introLogo) return;

  document.body.classList.add("intro-playing");

  window.requestAnimationFrame(() => {
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

    window.setTimeout(() => {
      overlay.classList.add("is-hidden");
      document.body.classList.remove("intro-playing");
    }, 1850);

    window.setTimeout(() => {
      overlay.remove();
    }, 2700);
  });
}

function decodeChapterName(path) {
  const fileName = path.split("/").pop() || "";
  return decodeURIComponent(fileName).replace(/\.(odt|pdf)$/i, "");
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
      const answer = window.prompt(`Cle d'acces pour ${decodeChapterName(chapter.path)} :`);
      if (answer === null) return;
      if (answer.trim() !== chapter.accessKey) {
        window.alert("Cle incorrecte.");
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
    : `Fiche verrouillee sur ${infoFileName} pendant que le carrousel continue.`;

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

  const visibleImages = creatureImages.filter((path) => {
    const imageName = getPandorusImageName(path);
    return matchesLetterFilter(imageName, currentCreatureLetter);
  });

  if (!visibleImages.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = "Aucune créature pour cette lettre.";
    grid.appendChild(emptyState);
    return;
  }

  visibleImages.forEach((path) => {
    const node = imageTemplate.content.cloneNode(true);
    const image = node.querySelector("img");
    const link = node.querySelector(".image-link");
    const name = node.querySelector(".image-name");
    const imageName = getPandorusImageName(path);
    const imageLink = getCreatureImageLink(imageName);

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
      Nastaz: buildMediaPath("pandorus", "Nastaz.png")
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
      </article>
    `).join("");

    card.innerHTML = `
      <div class="relation-card-header">
        ${portraitThumb}
        <h4>${nodeData.name}</h4>
        <p class="relation-role">${nodeData.role}</p>
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
  const ficheLinks = {
    shan: "#fiches",
    shaushana: "#fiches-shaushana",
    franklin: "#fiches-franklin",
    mike: "#fiches-mike",
    gerom: "#fiches-gerom",
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
    nastaz: "#fiches-nastaz"
  };

  return ficheLinks[slugifyValue(imageName)] || path;
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
  const letters = getLettersFromNames(
    creatureImages.map((path) => getPandorusImageName(path))
  );

  renderAlphabetFilter("creatures-alphabet", letters, currentCreatureLetter, (letter) => {
    currentCreatureLetter = letter;
    initCreatureAlphabetFilter();
    renderCreatureImages();
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
  renderAdditionalCharacterFiches();
  initFicheTabs();
  initFicheCarousels();
  ficheUiInitialized = true;
}

function ensureCreatureFichesInitialized() {
  if (creatureFichesInitialized) return;
  renderCreatureFiches();
  initCreatureFicheTabs();
  creatureFichesInitialized = true;
}

function showSectionFromHash() {
  const home = document.getElementById("home");
  const fiches = document.getElementById("fiches");
  const relations = document.getElementById("relations");
  const chronologie = document.getElementById("chronologie");
  const chapitres = document.getElementById("chapitres");
  const personnages = document.getElementById("personnages");
  const creatures = document.getElementById("creatures");
  const mysteres = document.getElementById("mysteres");
  const cartes = document.getElementById("cartes");
  const currentHash = window.location.hash;
  const isCreatureFicheHash = currentHash.startsWith("#creatures-fiche-");

  updateSectionWhisper();

  if (
    currentHash === "#fiches" ||
    Boolean(ficheHashPanelMap[currentHash])
  ) {
    ensureFicheUiInitialized();
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = false;
    if (relations) relations.hidden = true;
    if (chronologie) chronologie.hidden = true;
    if (chapitres) chapitres.hidden = true;
    if (personnages) personnages.hidden = true;
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
    if (creatures) creatures.hidden = true;
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = true;
    renderTimeline();
    return;
  }

  if (currentHash === "#chapitres") {
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = true;
    if (relations) relations.hidden = true;
    if (chronologie) chronologie.hidden = true;
    if (chapitres) chapitres.hidden = false;
    if (personnages) personnages.hidden = true;
    if (creatures) creatures.hidden = true;
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = true;
    renderChapters();
    return;
  }

  if (currentHash === "#relations") {
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = true;
    if (relations) relations.hidden = false;
    if (chronologie) chronologie.hidden = true;
    if (chapitres) chapitres.hidden = true;
    if (personnages) personnages.hidden = true;
    if (creatures) creatures.hidden = true;
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = true;
    renderRelations();
    return;
  }

  if (currentHash === "#personnages") {
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = true;
    if (relations) relations.hidden = true;
    if (chronologie) chronologie.hidden = true;
    if (chapitres) chapitres.hidden = true;
    if (personnages) personnages.hidden = false;
    if (creatures) creatures.hidden = true;
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = true;
    renderPandorusImages();
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
    if (creatures) creatures.hidden = false;
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = true;
    renderCreatureImages();

    if (isCreatureFicheHash && typeof window.activateCreaturePanel === "function") {
      const targetSlug = currentHash.replace("#creatures-fiche-", "");
      window.activateCreaturePanel(`creature-panel-${targetSlug}`);
      const targetSection = document.getElementById("creatures-fiches");
      if (targetSection) {
        window.requestAnimationFrame(() => {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
    return;
  }

  if (currentHash === "#mysteres") {
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = true;
    if (relations) relations.hidden = true;
    if (chronologie) chronologie.hidden = true;
    if (chapitres) chapitres.hidden = true;
    if (personnages) personnages.hidden = true;
    if (creatures) creatures.hidden = true;
    if (mysteres) mysteres.hidden = false;
    if (cartes) cartes.hidden = true;
    return;
  }

  if (currentHash === "#cartes") {
    if (home) home.hidden = true;
    if (fiches) fiches.hidden = true;
    if (relations) relations.hidden = true;
    if (chronologie) chronologie.hidden = true;
    if (chapitres) chapitres.hidden = true;
    if (personnages) personnages.hidden = true;
    if (creatures) creatures.hidden = true;
    if (mysteres) mysteres.hidden = true;
    if (cartes) cartes.hidden = false;
    initMapsCarousel();
    renderMaps();
    return;
  }

  if (home) home.hidden = false;
  if (fiches) fiches.hidden = true;
  if (relations) relations.hidden = true;
  if (chronologie) chronologie.hidden = true;
  if (chapitres) chapitres.hidden = true;
  if (personnages) personnages.hidden = true;
  if (creatures) creatures.hidden = true;
  if (mysteres) mysteres.hidden = true;
  if (cartes) cartes.hidden = true;
}

window.addEventListener("hashchange", showSectionFromHash);
renderLandingMarquee();
startLandingOracleRotation();
initChapterViewer();
initCharacterAlphabetFilter();
initCreatureAlphabetFilter();
initRelationFilters();
showSectionFromHash();
window.addEventListener("load", runIntroAnimation);


