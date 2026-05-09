export function createCreatureFiches(buildMediaPath) {
  return [
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
    slug: "canidaigle",
    name: "Canidaigle",
    image: buildMediaPath("creatures", "Canidaigle.png"),
    family: "Veilleur funèbre",
    status: "Créature clairement présente dans le récit",
    habitat: "Ciels du Vert, lisières hautes et lieux marqués par le deuil",
    summary: "Le Canidaigle n'attaque pas dans ces chapitres : il descend comme une plainte vivante, faisant du ciel lui-même un témoin du sacrifice du Capitaine.",
    biography: [
      "Les Canidaigles apparaissent après la mort du Capitaine, dans un moment où le combat vient à peine de retomber. Leur présence change immédiatement la lecture de la scène : le ciel ne reste pas neutre, il prend part au deuil.",
      "Ils ne se comportent ni comme des charognards ni comme des renforts. Ils donnent au Vert une voix de lamentation, preuve que certaines créatures du monde répondent aussi à la perte et pas seulement à la violence."
    ],
    profile: [
      { title: "Nature", text: "Créature aérienne noble, liée à la hauteur, à la veille et aux bascules du vivant." },
      { title: "Niveau de menace", text: "Faible dans cette apparition précise, mais forte par sa charge symbolique." },
      { title: "Dans le récit", text: "Le Canidaigle transforme la mort du Capitaine en événement reconnu par plus que les seuls humains." }
    ],
    timeline: [
      { era: "Nuit du Jour 12", title: "Descente de deuil", summary: "Des Canidaigles se rassemblent après la mort du Capitaine et donnent au combat une résonance funèbre." },
      { era: "Jour 13", title: "Mémoire du ciel", summary: "Leur passage continue de peser sur la sépulture du Capitaine comme une reconnaissance venue d'en haut." }
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
    slug: "kingkoala",
    name: "KingKoala",
    image: buildMediaPath("creatures", "KingKoala.png"),
    family: "Gardien de passage",
    status: "Créature clairement présente dans le récit",
    habitat: "Approches de la Sombra, arbres de l'ouest et routes de veille",
    summary: "KingKoala impose une protection calme sur la route de la Sombra, comme si l'ouest répondait déjà au groupe avant même son entrée véritable.",
    biography: [
      "Après la sépulture du Capitaine, le groupe reprend la route vers l'ouest et tombe sur KingKoala. Rien dans sa présence ne ressemble à une embuscade : il garde, jauge et accompagne.",
      "Cette apparition prépare la Sombra autrement que par le combat. Avec lui, le récit montre qu'une créature peut tester un passage par sa seule majesté tranquille et faire sentir qu'un autre ordre de veille commence."
    ],
    profile: [
      { title: "Nature", text: "Créature de garde, massive, calme et territoriale, plus protectrice qu'agressive dans ce passage." },
      { title: "Niveau de menace", text: "Élevé si le seuil était rompu, mais contenu tant que le groupe reste lisible pour le territoire." },
      { title: "Dans le récit", text: "KingKoala annonce que la Sombra possède déjà ses propres gardes et sa propre manière de reconnaître les voyageurs." }
    ],
    timeline: [
      { era: "Jour 13", title: "Veille sur la route de l'ouest", summary: "KingKoala accompagne silencieusement la progression du groupe vers la Sombra." },
      { era: "Jour 13", title: "Protection sans heurt", summary: "Sa présence transforme la traversée en seuil gardé plutôt qu'en marche livrée au hasard." }
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
    slug: "nogard",
    name: "Nogard",
    image: buildMediaPath("pandorus", "Nogard.jpg"),
    family: "Agent du dérèglement",
    status: "Créature clairement présente dans le récit",
    habitat: "Ruines vides, abords du Vert et lignes de guerre du vivant corrompu",
    summary: "Nogard agit moins comme une bête que comme un relais conscient du dérèglement, capable de capturer, d'espionner et de revenir au combat avec une méthode froide.",
    biography: [
      "Le Capitaine le reconnaît au coeur de sa captivité. Nogard n'est pas une silhouette secondaire des ruines : il revient, écoute, transporte Bouldouger et prend part à la logique du parasite destinée à infecter plus loin encore.",
      "Quand il réapparaît de nuit, sa présence confirme que le groupe n'affronte plus seulement des créatures poussées à l'agression, mais des agents capables de surveiller, d'organiser et d'insister jusqu'à la mise à mort."
    ],
    profile: [
      { title: "Nature", text: "Présence hostile mobile, plus proche d'un relais tactique du dérèglement que d'un animal ordinaire." },
      { title: "Niveau de menace", text: "Très élevé, surtout lorsqu'il agit avec d'autres forces comme Bouldouger." },
      { title: "Dans le récit", text: "Nogard donne un visage plus net à l'ennemi des ruines et fait le lien entre captivité, parasite et guerre ouverte." }
    ],
    timeline: [
      { era: "Fin du Jour 12", title: "Nom du geôlier", summary: "Le Capitaine désigne Nogard comme l'une des présences revenues autour de sa captivité." },
      { era: "Nuit du Jour 12", title: "Retour au combat", summary: "Nogard revient avec Bouldouger et les créatures d'assaut pour écraser les survivants des ruines." },
      { era: "Nuit du Jour 12", title: "Mort face à Tsune et Lévy", summary: "Tsune et Lévy réussissent à abattre Nogard au coeur du combat, ouvrant une première brèche dans l'assaut." }
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
    slug: "parasite",
    name: "Parasite",
    image: buildMediaPath("creatures", "Parasite.png"),
    family: "Forme d'infection",
    status: "Créature clairement présente dans le récit",
    habitat: "Objet porté, hôte potentiel et zones promises à l'infection du vivant",
    summary: "Le Parasite n'est pas montré comme une bête de plein jour, mais comme une menace de contamination pensée pour prendre un lieu de l'intérieur.",
    biography: [
      "Le mot surgit d'abord dans la bouche du Capitaine à travers ses souvenirs de captivité, puis devient une réalité concrète quand il transmet au groupe l'objet qu'il fallait soustraire aux ruines.",
      "Le Parasite fait basculer le récit vers une peur plus fine : il ne s'agit plus seulement d'être attaqué par des créatures, mais d'être infecté, occupé ou remplacé de l'intérieur, jusqu'à contaminer des lieux entiers comme le Creux.",
      "Dans la Sombra, il devient enfin plus qu'un objet de transmission. Bichette le purifie et révèle qu'il n'était pas mauvais en lui-même, mais tordu par une volonté étrangère qui l'avait retourné contre le vivant."
    ],
    profile: [
      { title: "Nature", text: "Forme d'infection ou de prise interne, plus proche d'une menace de contamination que d'un prédateur direct." },
      { title: "Niveau de menace", text: "Extrême, parce qu'il agit par propagation et non par simple affrontement." },
      { title: "Dans le récit", text: "Le Parasite transforme la mort du Capitaine en transmission vitale et fait comprendre que la guerre vise aussi l'intérieur du vivant." }
    ],
    timeline: [
      { era: "Fin du Jour 12", title: "Nom du danger", summary: "Le Capitaine révèle que le Parasite devait servir à infecter le Creux et d'autres zones du monde." },
      { era: "Nuit du Jour 12", title: "Transmission à sauver", summary: "Avant de mourir, le Capitaine confie le Parasite au groupe pour empêcher son retour aux mains de l'ennemi." },
      { era: "Jour 13", title: "Menace portée en route", summary: "Le Parasite accompagne désormais la route vers la Sombra comme un fardeau de compréhension et de danger." },
      { era: "Jour 18", title: "Purification par Bichette", summary: "Dans la Sombra réparée, Bichette purifie le Parasite et montre qu'il relevait d'une corruption imposée plus que d'une nature mauvaise." }
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
      "Avec Verdeflor, on comprend que la corruption touche des couches differentes de la vie pandorienne. La menace n'est plus seulement animale; elle atteint aussi ce qui pousse, s'etend et devrait normalement participer a l'equilibre du monde.",
      "Le chapitre 26 lui donne une seconde lecture: Verdeflor n'est pas seulement un symptôme ancien du dérèglement, il devient aussi l'un des appuis amenés par Syne jusque dans la Sombra, comme une force de siège végétal au service d'une volonté plus structurée.",
      "Dans la grande bataille de la Sombra, les Verdeflors envahissent le terrain jusqu'à frapper gravement Méli Mélo, preuve qu'ils ne servent plus seulement à ouvrir un front mais à briser les équilibres les plus sensibles du lieu."
    ],
    profile: [
      { title: "Nature", text: "Creature vegetale offensive, liee a la propagation, a l'emprise ou a l'envahissement." },
      { title: "Niveau de menace", text: "Eleve lorsqu'elle agit dans un espace habite ou déjà fragilise." },
      { title: "Role narratif", text: "Preuve que le dereglement du vivant touche aussi les formes de vie vegetales, puis peut être repris comme soutien tactique par le camp de Syne." }
    ],
    timeline: [
      { era: "Jour 2", title: "Assaut du Passar", summary: "Verdeflor participe a l'attaque coordonnee contre le bidonville." },
      { era: "Jour 2", title: "Signe d'une corruption plus profonde", summary: "Son apparition montre que le mal agit au-dela des seuls predateurs et atteint la trame meme du vivant." },
      { era: "Jour 14", title: "Remontée dans la Sombra", summary: "À l'appel de Syne, des Verdeflors émergent du sol de la Sombra et transforment la clairière en zone de pression." },
      { era: "Jour 14", title: "Blessure de Méli Mélo", summary: "Le dernier Verdeflor encore debout frappe gravement Méli Mélo avant d'être abattu par Ezze." },
      { era: "Lecture d'ensemble", title: "Le vivant se deregle avant la réponse du Vrax", summary: "Verdeflor se lit comme un symptome de corruption touchant les couches les plus profondes du monde." }
    ]
  },
  {
    slug: "lion-garouh",
    name: "Lion-Garouh",
    image: buildMediaPath("creatures", "Lion-Garouh.png"),
    family: "Créature sauvage de guerre",
    status: "Créature présente dans le récit",
    habitat: "Approches de la Sombra, fronts de rupture et zones de pression",
    summary: "Le Lion-Garouh n'entre pas comme un simple fauve du bestiaire. Il accompagne Syne dans la Sombra et donne à sa venue une force d'assaut plus directe, plus sauvage et plus organisée.",
    biography: [
      "Le Lion-Garouh apparaît dans la Sombra au moment où Syne revient réclamer le parasite. Sa présence prouve que son avancée ne repose pas seulement sur la boîte ou sur une parole de contrôle, mais aussi sur des forces capables d'imposer physiquement une reprise.",
      "Ce n'est pas un animal isolé lancé au hasard. Dans cette scène, il fait partie d'une arrivée construite, avec Verdeflors et autres présences de pression, comme si Syne avançait déjà avec sa propre ligne d'appui.",
      "Le Lion-Garouh devient ensuite l'un des pôles les plus sauvages de la bataille. Face à lui, Shan et Shaushana trouvent une vraie synergie de combat qui fait de cette créature l'étalon d'une violence désormais structurée."
    ],
    profile: [
      { title: "Nature", text: "Créature féline de guerre, plus sauvage que cérémonielle, faite pour la pression et l'irruption." },
      { title: "Niveau de menace", text: "Très élevé lorsqu'il agit au service d'une volonté plus structurée." },
      { title: "Rôle narratif", text: "Renforcer l'idée que l'arrivée de Syne dans la Sombra n'est pas seulement symbolique, mais déjà soutenue par une force offensive." }
    ],
    timeline: [
      { era: "Jour 14", title: "Arrivée dans la Sombra", summary: "Le Lion-Garouh accompagne l'irruption de Syne dans la Sombra, au moment où le parasite réagit et où la lecture de Bichette est interrompue." },
      { era: "Jour 14", title: "Force d'appui de Syne", summary: "Sa présence confirme que Syne avance avec des créatures capables de soutenir une reprise plus brutale du contrôle." },
      { era: "Jour 14", title: "Affrontement avec Shan et Shaushana", summary: "Dans la clairière de la Sombra, le Lion-Garouh pousse Shan et Shaushana à unir pleinement leur manière de combattre." }
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
  },
  {
    slug: "carpelion",
    name: "Carpélion",
    image: buildMediaPath("creatures", "Carpélion.png"),
    family: "Gardien aquatique",
    status: "Créature clairement présente dans le récit",
    habitat: "Profondeurs lumineuses du Verdanor Sud",
    summary: "Le Carpélion est une créature majestueuse du Verdanor Sud, à la fois carpe immense et lion ancien, gardien silencieux du passage vers le Creux.",
    biography: [
      "Les Carpélions émergent lorsque la Communauté atteint le Verdanor Sud. Leurs silhouettes immenses tournent d'abord sous l'eau, traçant des lueurs vertes, bleues et argentées dans les profondeurs du fleuve.",
      "Leur présence n'est pas agressive. Ils lisent le groupe, reconnaissent quelque chose en lui, puis s'écartent pour autoriser la traversée. Ils apparaissent ainsi comme les gardiens calmes d'une frontière vivante."
    ],
    profile: [
      { title: "Nature", text: "Créature aquatique noble, ancienne, lumineuse et protectrice." },
      { title: "Niveau de menace", text: "Très élevé si le passage est refusé, mais paisible face à une intention reconnue." },
      { title: "Rôle narratif", text: "Transformer le Verdanor Sud en seuil vivant plutôt qu'en simple fleuve." }
    ],
    timeline: [
      { era: "Jour 19", title: "Apparition dans le Verdanor Sud", summary: "Trois Carpélions émergent des profondeurs lumineuses et observent la Communauté des Papillons." },
      { era: "Jour 19", title: "Passage autorisé", summary: "Ils s'écartent du passage principal et laissent le groupe traverser le fleuve." }
    ]
  },
  {
    slug: "corbec",
    name: "Corbec",
    image: buildMediaPath("creatures", "Corbec.png"),
    family: "Oiseau du Creux",
    status: "Créature clairement présente dans le récit",
    habitat: "Hauteurs du Creux, branches immenses et village profond",
    summary: "Le Corbec accompagne le Creux par ses chants mélancoliques, comme une mémoire sonore qui circule entre les arbres géants.",
    biography: [
      "Les Corbec apparaissent lorsque le groupe commence à descendre dans le Creux. Leurs silhouettes noires traversent les hauteurs, leurs becs semblent démesurés et leurs chants résonnent d'arbre en arbre.",
      "Ils appartiennent à la respiration du lieu. Durant l'histoire d'O'Sama, leur retour après la guerre marque aussi le retour progressif du vivant dans un Creux reconstruit."
    ],
    profile: [
      { title: "Nature", text: "Oiseau noir au chant profond, lié à la mémoire et aux hauteurs du Creux." },
      { title: "Niveau de menace", text: "Faible à ce stade, davantage signe du lieu que menace directe." },
      { title: "Rôle narratif", text: "Donner au Creux une voix, une mélancolie et une continuité après les destructions anciennes." }
    ],
    timeline: [
      { era: "Jour 19", title: "Chants dans la descente", summary: "Les Corbec annoncent l'entrée dans le Creux par leurs chants suspendus dans les hauteurs." },
      { era: "Après l'ancienne guerre", title: "Retour au refuge", summary: "Leur retour fait partie des signes que le Creux se reconstruit autour d'O'Sama." }
    ]
  },
  {
    slug: "oursarune",
    name: "Oursarune",
    image: buildMediaPath("creatures", "Oursarune.png"),
    family: "Créature royale du Creux",
    status: "Créature clairement présente dans le récit",
    habitat: "Clairières profondes du Creux",
    summary: "L'Oursarune est une masse vivante marquée de runes lumineuses, capable de violence immense mais liée à une loi naturelle sans haine.",
    biography: [
      "Dans le Creux, la Communauté observe une meute d'Oursarune rassemblée autour d'un combat entre deux mâles. Leurs fourrures portent des lignes lumineuses qui pulsent avec leur respiration.",
      "Le combat est brutal, capable de fendre les arbres, mais il ne contient pas de cruauté. Quand l'un cède, la meute reconnaît le vainqueur, et le groupe comprend que cette violence obéit à une loi du vivant."
    ],
    profile: [
      { title: "Nature", text: "Créature massive, royale, marquée par des runes naturelles lumineuses." },
      { title: "Niveau de menace", text: "Extrême en affrontement, mais réglé par une loi de territoire et de reconnaissance." },
      { title: "Rôle narratif", text: "Montrer que le Creux porte une sauvagerie juste, distincte de la corruption du vivant." }
    ],
    timeline: [
      { era: "Jour 19", title: "Choix du roi", summary: "La meute d'Oursarune choisit son roi dans un combat violent mais sans haine." }
    ]
  },
  {
    slug: "renardou-roux",
    name: "Renardou Roux",
    image: buildMediaPath("creatures", "Renardou Roux.png"),
    family: "Créature douce du Creux",
    status: "Créature clairement présente dans le récit",
    habitat: "Fougères, racines et approches du village du Creux",
    summary: "Le Renardou Roux est une petite présence paisible du Creux, curieuse, douce et naturellement accordée à Tsune.",
    biography: [
      "À l'approche du village du Creux, plusieurs Renardou Roux sortent des fougères et s'approchent du groupe. Leur fourrure rousse prend la lumière du soir, et leur attitude n'a rien d'agressif.",
      "Leur lien avec Tsune se lit presque sans parole. L'un vient frotter sa tête contre sa main, tandis que d'autres entourent le groupe avec confiance, montrant le visage le plus apaisé du Creux."
    ],
    profile: [
      { title: "Nature", text: "Petite créature rousse, curieuse, douce et sensible aux présences calmes." },
      { title: "Niveau de menace", text: "Faible dans la scène connue, surtout liée à l'apaisement du lieu." },
      { title: "Rôle narratif", text: "Faire sentir que le Creux n'est pas seulement profond et sauvage, mais aussi accueillant." }
    ],
    timeline: [
      { era: "Jour 19", title: "Rencontre au soir", summary: "Les Renardou Roux approchent le groupe près du village et se montrent particulièrement confiants avec Tsune." }
    ]
  },
  {
    slug: "elephantaupe",
    name: "Eléphantaupe",
    image: buildMediaPath("creatures", "Eléphantaupe.png"),
    family: "Créature ouvrière du Creux",
    status: "Créature liée au Creux",
    habitat: "Sols profonds, chemins effondrés et zones de reconstruction du Creux",
    summary: "L'Eléphantaupe appartient aux grandes forces utiles du Creux, capable de dégager le terrain, de reconstruire et même de traverser les terres pour ramener Bella vers le refuge.",
    biography: [
      "Les Eléphantaupes apparaissent surtout dans l'histoire d'O'Sama. Elles aident à dégager les portions de terrain après les glissements de terre et reviennent parmi les premières créatures lors de la reconstruction du Creux.",
      "O'Sama les envoie aussi chercher Bella, preuve qu'elles ne sont pas seulement des forces de travail, mais des présences intégrées à la protection collective du village."
    ],
    profile: [
      { title: "Nature", text: "Créature puissante du sol, liée au creusement, au transport et à la reconstruction." },
      { title: "Niveau de menace", text: "Inconnu comme menace; très élevée comme force de terrain." },
      { title: "Rôle narratif", text: "Montrer que le Creux vit avec ses créatures au lieu de simplement les subir." }
    ],
    timeline: [
      { era: "Après l'ancienne guerre", title: "Retour au Creux", summary: "Les Eléphantaupes participent à la reconstruction et reviennent dans le village protégé par O'Sama." },
      { era: "Avant le récit", title: "Bella ramenée au refuge", summary: "O'Sama envoie plusieurs Eléphantaupes chercher Bella et la conduire au Creux." }
    ]
  },
  {
    slug: "poisson-du-verdanor",
    name: "Poisson du Verdanor",
    image: buildMediaPath("creatures", "Poisson du Verdanor.png"),
    family: "Faune aquatique du Verdanor",
    status: "Espèce visible dans le bestiaire",
    habitat: "Eaux du Verdanor Sud",
    summary: "Le Poisson du Verdanor enrichit la vie du grand fleuve, rappelant que ses profondeurs ne sont pas seulement gardées par les Carpélions mais habitées par tout un écosystème.",
    biography: [
      "Le Verdanor Sud apparaît comme un fleuve vivant, traversé de lueurs, de courants et de profondeurs presque sacrées. Le Poisson du Verdanor s'inscrit dans cette respiration aquatique.",
      "Même sans scène centrale encore détaillée, il donne au fleuve une densité de faune et prépare l'idée que ce territoire d'eau possède ses propres équilibres."
    ],
    profile: [
      { title: "Nature", text: "Créature aquatique liée aux courants profonds du Verdanor." },
      { title: "Niveau de menace", text: "Inconnu à ce stade." },
      { title: "Rôle narratif", text: "Élargir le Verdanor Sud en véritable milieu vivant, pas seulement en passage." }
    ],
    timeline: [
      { era: "Bestiaire", title: "Faune du Verdanor", summary: "Le Poisson du Verdanor complète la lecture du fleuve comme écosystème lumineux et profond." }
    ]
  },
  {
    slug: "tortanguille",
    name: "Tortanguille",
    image: buildMediaPath("creatures", "Tortanguille.png"),
    family: "Créature aquatique hybride",
    status: "Espèce visible dans le bestiaire",
    habitat: "Eaux épaisses, berges et zones lentes du Verdanor ou de fleuves profonds",
    summary: "La Tortanguille prolonge le bestiaire aquatique de Pandorus par une forme hybride, à la fois protégée, sinueuse et adaptée aux eaux lourdes.",
    biography: [
      "La Tortanguille n'a pas encore de scène centrale, mais son image s'accorde avec l'ouverture du Verdanor Sud et des milieux aquatiques plus profonds.",
      "Elle ajoute une créature de bord, de carapace et de mouvement sinueux, utile pour donner aux fleuves de Pandorus une faune plus variée et plus étrange."
    ],
    profile: [
      { title: "Nature", text: "Créature hybride entre protection lourde et déplacement sinueux." },
      { title: "Niveau de menace", text: "Inconnu à ce stade." },
      { title: "Rôle narratif", text: "Renforcer la diversité aquatique du monde pandorien." }
    ],
    timeline: [
      { era: "Bestiaire", title: "Faune aquatique hybride", summary: "La Tortanguille ajoute une ligne plus étrange et défensive aux créatures des eaux." }
    ]
  }

  ];
}

