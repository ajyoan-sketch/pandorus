function getLocationImage(buildMediaPath, slug) {
  const locationHeroImage = buildMediaPath("lieux", "Photo de Garde.jpg");
  const locationImageMap = {
    passage: buildMediaPath("lieux", "Le Passage.jpg"),
    passar: buildMediaPath("lieux", "Passar.jpg"),
    "bidonville-du-passar": buildMediaPath("lieux", "Bidonville du Passar.jpg"),
    veyrine: buildMediaPath("lieux", "Veyrine.jpg"),
    "la-veyron": buildMediaPath("lieux", "Veyrine.jpg"),
    bassai: buildMediaPath("lieux", "Bassaï.jpg"),
    vrax: buildMediaPath("lieux", "Le Vrax.jpg"),
    "coeur-du-vrax": buildMediaPath("lieux", "Coeur Du Vrax.jpg"),
    "fleuve-sylvae": buildMediaPath("lieux", "Sylvae.jpg"),
    "mer-du-sphinx-pandorien": buildMediaPath("lieux", "Mer du Sphinx Pandorien.jpg"),
    "village-des-renards": buildMediaPath("lieux", "Village des Renards.jpg"),
    "embouchure-du-sombrail": buildMediaPath("lieux", "Embouchure du Sombrail.jpg"),
    "taverne-du-sombrail": buildMediaPath("lieux", "Taverne du Sombrail.jpg"),
    "fleuve-arkains": locationHeroImage,
    "terre-des-insectes": locationHeroImage,
    "source-pandorielle": locationHeroImage,
    "verdanor-sud": locationHeroImage,
    creux: locationHeroImage,
    vert: buildMediaPath("lieux", "Le Vert.png"),
    "ruines-du-vert": buildMediaPath("lieux", "Les Ruines du Vert.png")
  };
  return locationImageMap[slug] || locationHeroImage;
}
export function createLocationFiches(buildMediaPath) {
  return [
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
    slug: "la-veyron",
    name: "La Veyron",
    tone: "river",
    category: "Terre d'origine",
    intro: "La Veyron est une région vivante bordée par le Veyrine, pleine d'eaux claires, de hautes herbes et d'insectes au travail. Elle révèle l'origine sensible d'Insé avant qu'il ne devienne Insect Master.",
    meta: [
      { label: "Atmosphère", value: "Abondance, observation, médecine du vivant" },
      { label: "Fonction", value: "Origine d'Insé et de sa lecture des insectes" },
      { label: "Présences", value: "Insé, sa mère, Lady Pink, insectes de La Veyron" }
    ],
    biography: [
      "La Veyron n'apparaît pas comme une terre de guerre, mais comme un monde qui respire partout à la fois. Fleuve, cultures, arbres, insectes et nuits douces y forment une abondance discrète, presque maternelle.",
      "C'est là qu'Insé apprend à voir ce que les autres négligent. Les papillons lumineux attirent les regards, mais lui suit les fourmis, les abeilles, les coccinelles et les scarabées qui maintiennent la vie par des gestes minuscules.",
      "Lorsque sa mère tombe malade, La Veyron devient aussi le lieu de sa première grande bascule. Les papillons ne suffisent pas, tandis que les insectes apportent feuilles, miel et poudres capables de faire naître un vrai remède.",
      "Des années plus tard, Lady Pink descend dans cette même région pour reconnaître en Insé une écoute rare du monde. La Veyron devient alors le seuil intime entre le médecin des insectes et le futur créateur de la Terre des Insectes."
    ],
    summary: [
      "La Veyron donne à Insect Master une origine humaine, douce et blessée.",
      "Elle explique pourquoi les insectes deviennent pour Insé une vérité plus concrète que l'éclat des papillons."
    ],
    profile: [
      { title: "Texture du lieu", text: "Fleuve clair, herbes hautes, ateliers de soin, insectes partout et lumière rose lointaine." },
      { title: "Rôle narratif", text: "Révéler la source intime d'une conviction qui deviendra plus tard dangereuse." },
      { title: "Point de tension", text: "La beauté du lieu porte déjà une question: pourquoi admire-t-on ce qui brille plus que ce qui sauve en silence ?" }
    ],
    contextLinks: [
      { href: "#fiches-insect-master", label: "Voir Insect Master" },
      { href: "#chronologie", label: "Lire l'origine d'Insé" },
      { href: "#lieux-terre-des-insectes", label: "Voir la Terre des Insectes" }
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
      "La taverne devient surtout un passage de mémoire: Brad entraîne le groupe dans le souvenir des Briscards, d'Elrick jeune, de Mitra Séssé, de Papy Perquis et de Padre Souf, jusqu'à l'origine du ciel assombri et des étoiles comme traces de l'ancien combat.",
      "Même quand la Communauté quitte le lieu pour le Vert, la taverne ne cesse pas d'agir. C'est depuis elle que Syne repart avec sa boîte, et c'est depuis elle que l'ouest continue de peser sur la suite jusqu'à la Sombra."
    ],
    summary: [
      "La taverne du Sombrail transforme la quête en enquête de mémoire.",
      "Elle révèle que le monde actuel ne commence pas seulement à se dérégler: il suit à nouveau une ligne déjà vécue autrefois."
    ],
    profile: [
      { title: "Texture du lieu", text: "Tables marquées, lanternes tremblantes, chaleur dense et silence qui écoute." },
      { title: "Rôle narratif", text: "Relier la Communauté des Papillons aux survivants, aux Briscards et à l'origine ancienne du déséquilibre." },
      { title: "Point de tension", text: "Syne et sa boîte introduisent une présence retenue qui ne reste pas derrière : elle suit plus tard le groupe jusque dans la Sombra." }
    ],
    contextLinks: [
      { href: "#fiches-brad-et-bradlette", label: "Voir Brad et Bradlette" },
      { href: "#fiches-abyoubi", label: "Voir Ab'Youbi" },
      { href: "#fiches-syne", label: "Voir Syne" },
      { href: "#chronologie", label: "Lire la révélation de la taverne" }
    ]
  },
  {
    slug: "fleuve-arkains",
    name: "Fleuve Arkains",
    tone: "threshold",
    category: "Origine intime",
    intro: "Le fleuve Arkains n'entre pas par la guerre mais par l'enfance. Il devient le premier bord du monde de Syne, le lieu où une douceur de départ rencontre déjà une présence rejetée dans les bois.",
    meta: [
      { label: "Atmosphère", value: "Eaux tranquilles, lisière boisée, paix ancienne troublée" },
      { label: "Fonction", value: "Origine de Syne et de Jacob" },
      { label: "Présences", value: "Syne, Jacob, village oublié" }
    ],
    biography: [
      "Avant la taverne, la Sombra et la Terre des Insectes, l'Arkains désigne un monde encore simple: un village, un fleuve, des bois proches et une enfance qui semble pouvoir rester douce.",
      "C'est pourtant là que Syne aperçoit Jacob, garçon sauvage tenu hors du regard des autres. Le lieu devient alors moins un décor paisible qu'un point de fracture intime entre la peur collective et un attachement que rien ne parvient à faire céder.",
      "L'Arkains garde ainsi la première vérité de Syne: elle n'entre pas dans la dureté par goût du froid, mais à partir d'un lien qu'elle refuse d'abandonner quand le monde ordinaire se retire."
    ],
    summary: [
      "Le fleuve Arkains ouvre le passé de Syne avant toute logique de mission ou de réseau.",
      "Il transforme sa dureté présente en prolongement d'une fidélité très ancienne."
    ],
    profile: [
      { title: "Texture du lieu", text: "Berges calmes, bois voisins, lumière douce fissurée par une présence cachée." },
      { title: "Rôle narratif", text: "Donner à Syne et à Jacob une origine humaine et affective, avant l'altération et l'exil." },
      { title: "Point de tension", text: "Sous sa paix apparente, l'Arkains est déjà le lieu où le rejet du monde commence." }
    ],
    contextLinks: [
      { href: "#fiches-syne", label: "Voir Syne" },
      { href: "#fiches-bulldozer-jacob", label: "Voir Bulldozer Jacob" },
      { href: "#chronologie", label: "Lire l'origine à l'Arkains" }
    ]
  },
  {
    slug: "terre-des-insectes",
    name: "Terre des Insectes",
    tone: "memory",
    category: "Réseau hostile",
    intro: "La Terre des Insectes n'est plus seulement un nom au loin. La Communauté en atteint enfin la rive nord, après un territoire déjà rongé, surveillé et parcouru de vibrations qui donnent l'impression que le sol respire sous les pas.",
    meta: [
      { label: "Atmosphère", value: "Silence, vibrations, surveillance, effondrement organique" },
      { label: "Fonction", value: "Refuge d'exil, matrice hostile, piège et champ d'épreuves" },
      { label: "Présences", value: "Insect Master, Lady Pink, l'Alien, Syne, Jacob, Elennya, Mathéo, Cendr'oïde, Bouldouger, Kuji" }
    ],
    biography: [
      "Avant de devenir un territoire oppressant, la Terre des Insectes fut le foyer choisi pour Insé. Lady Pink le mena jusqu'à la Source Pandorielle, la Terre le reconnut, et le médecin de La Veyron devint Insect Master, créateur capable d'inventer des espèces qui soignent, purifient et protègent.",
      "L'arrivée de l'Alien déplace pourtant cette harmonie. En admirant les insectes d'Insé et en grattant sa vieille blessure contre les papillons, il l'amène peu à peu à voir l'équilibre comme une faiblesse et le monde vivant comme une matière à corriger.",
      "La lumière rose enfouie n'est plus seulement une présence anonyme: elle est Lady Pink, enfermée sous le territoire par celui qu'elle avait choisi. La Terre des Insectes devient alors une prison organique autant qu'un royaume, un lieu où l'amour ancien se change en geôle.",
      "Kuji, Mathéo, Elennya, Bouldouger, Syne, Jacob et Cendr'oïde s'y lisent comme les maillons d'une organisation construite autour de cette rupture. La Terre des Insectes devient moins un décor qu'une fabrique de missions, de parasites, de pressions lentes et de retours calculés vers l'ouest.",
      "La route qui y mène confirme cette nature. Avant même la rive nord, les arbres sont rongés, les galeries se multiplient, les toiles barrent le passage et les créatures ne surgissent pas au hasard: les Mouchards écoutent le sol, les Dardaignées et les Poux-Religieux frappent comme un avertissement collectif.",
      "L'arrivée par la Source Pandorielle donne au lieu une gravité plus ancienne encore. Après l'eau lumineuse et les ombres immenses sous les radeaux, la rive de la Terre des Insectes oppose un silence sans vent, sans chant, presque entier.",
      "Plus loin, le territoire se révèle comme un organisme de séparation. Il montre ses nids, ses alvéoles, ses cocons, ses galeries et cette lumière rose enfouie qui ne ressemble pas au réseau insecte. Lorsque la lumière tente de remonter, la Terre des Insectes réagit comme si elle étouffait une présence prisonnière.",
      "Les épreuves qui suivent ne sont pas distribuées au hasard: Shan et Shaushana dans la forêt blanche, O'Sama et Bella dans les structures mécaniques, Balak'Oss et Franklin dans un ancien campement, Tsune, Lévy et Ab'Youbi dans un canyon de ruches noires, Ezze dans le sanctuaire arachnéen. Le territoire choisit les blessures à rouvrir.",
      "Quand la lumière rose traverse enfin toute la terre, les structures insectes s'effondrent et laissent place à une plaine nue. Ce n'est pas une victoire: c'est le moment où Insect Master se montre enfin, face à des survivants déjà changés."
    ],
    summary: [
      "La Terre des Insectes donne un vrai point d'origine au camp de Syne et à la logique des parasites.",
      "Elle devient aussi un territoire concrètement traversé, puis un piège vivant qui sépare, éprouve et révèle les forces les plus enfouies du groupe."
    ],
    profile: [
      { title: "Texture du lieu", text: "Silence tendu, galeries, vibrations basses, toiles, ruches noires, ruines englouties et lumière rose sous les racines." },
      { title: "Rôle narratif", text: "Transformer le camp adverse en territoire actif, capable de lire les groupes, de les séparer et d'orchestrer des affrontements presque personnels." },
      { title: "Point de tension", text: "Ce lieu semble appartenir aux insectes, mais la lumière rose révèle qu'une autre présence y lutte encore sous la surface." }
    ],
    contextLinks: [
      { href: "#fiches-syne", label: "Voir Syne" },
      { href: "#fiches-insect-master", label: "Voir Insect Master" },
      { href: "#lieux-source-pandorielle", label: "Voir la Source Pandorielle" },
      { href: "#creatures-fiche-mouchard", label: "Voir le Mouchard" },
      { href: "#chronologie", label: "Lire l'entrée en territoire insecte" }
    ]
  },
  {
    slug: "verdanor-sud",
    name: "Verdanor Sud",
    tone: "river",
    category: "Fleuve-frontière",
    intro: "Le Verdanor Sud apparaît comme une frontière vivante entre la Sombra et le Creux. Immense, sombre et traversé de lueurs vertes, bleues et argentées, il ne se traverse pas seulement : il juge le passage.",
    meta: [
      { label: "Atmosphère", value: "Eaux profondes, brume bleutée, lueurs sous-marines" },
      { label: "Fonction", value: "Frontière protectrice du Creux et de la Sombra" },
      { label: "Présences", value: "Carpélions, communauté des Papillons" }
    ],
    biography: [
      "Après avoir quitté la Sombra au lever du jour, le groupe entend d'abord le Verdanor Sud comme un grondement immense, presque une respiration du monde. L'air se charge d'eau, la brume devient bleutée et les arbres s'ouvrent sur un fleuve plus vaste que tout ce qu'ils ont connu.",
      "Sous sa surface sombre circulent des lueurs vivantes. Lorsque les Carpélions apparaissent, le fleuve cesse d'être un simple obstacle: il devient un seuil gardé par des créatures anciennes qui lisent le groupe avant de l'autoriser à traverser.",
      "Le Verdanor Sud protège le Creux depuis longtemps. Sa puissance n'est pas brutale, mais ancienne, calme et souveraine, comme si le monde avait placé là une frontière capable de reconnaître ceux qui viennent avec une intention juste."
    ],
    summary: [
      "Le Verdanor Sud est le grand fleuve-frontière entre la Sombra et le Creux.",
      "Sa traversée marque l'entrée dans une phase plus profonde, plus humide et plus ancienne du monde."
    ],
    profile: [
      { title: "Texture du lieu", text: "Eaux noires lumineuses, brume, courant profond et silence presque sacré." },
      { title: "Rôle narratif", text: "Faire passer le groupe d'une Sombra réparée vers un Creux encore protégé." },
      { title: "Point de tension", text: "Le fleuve laisse passer parce que les Carpélions l'acceptent; un autre groupe aurait pu y être arrêté." }
    ],
    contextLinks: [
      { href: "#creatures-fiche-carpelion", label: "Voir le Carpélion" },
      { href: "#lieux-creux", label: "Voir le Creux" },
      { href: "#chronologie", label: "Lire la traversée" }
    ]
  },
  {
    slug: "creux",
    name: "Le Creux",
    tone: "threshold",
    category: "Refuge profond",
    intro: "Le Creux est une région enfouie sous une forêt gigantesque, protégée par sa profondeur, ses créatures et un village qui a fait du vivant une loi commune. On y descend comme dans une mémoire encore respirante.",
    meta: [
      { label: "Atmosphère", value: "Forêt immense, lanternes, brume, chants de Corbec" },
      { label: "Fonction", value: "Refuge, relais et zone de veille avant la Terre des Insectes" },
      { label: "Présences", value: "O'Sama, Bella, Balak'Oss, Corbec, Oursarune, Renardou Roux, Eléphantaupes" }
    ],
    biography: [
      "Le Creux apparaît d'abord comme une destination stratégique, mais le voyage lui donne enfin son corps: une forêt qui descend, des arbres si hauts qu'ils masquent le ciel, des racines immenses, une humidité profonde et des chants de Corbec qui circulent d'arbre en arbre.",
      "Le lieu n'est pas oppressant malgré sa profondeur. Les Oursarune y choisissent leur roi dans une brutalité sans haine, les Renardou Roux approchent le groupe avec douceur, et les Eléphantaupes appartiennent depuis longtemps à la reconstruction du village.",
      "Au fond du Creux, le groupe trouve un village de lanternes, de maisons de bois et de passerelles, organisé autour d'O'Sama et Bella. Ce refuge n'est pas une fuite du monde: il a survécu à l'ancienne guerre, puis s'est mis à observer les dérèglements avant que le reste de Pandorus n'en comprenne l'ampleur.",
      "Avec l'arrivée de la Communauté des Papillons, le Creux devient le prochain vrai relais du récit. Il accueille la fatigue du groupe, nourrit une nuit de réparation et permet à chacun de reprendre souffle avant la route.",
      "Lorsque le départ vient, le refuge ne se referme pas derrière eux: O'Sama, Bella et Balak'Oss quittent le village avec la Communauté, transformant le Creux en point de passage vivant vers la Source Pandorielle et la Terre des Insectes."
    ],
    summary: [
      "Le Creux est un refuge vivant, profond et habité, où humains et créatures coexistent plus naturellement qu'ailleurs.",
      "Il relie la parole de Bichette, les nouveaux alliés, la réparation du groupe et le départ vers la Terre des Insectes."
    ],
    profile: [
      { title: "Texture du lieu", text: "Forêt descendante, lanternes chaudes, chants d'oiseaux, racines immenses et village au fond du monde." },
      { title: "Rôle narratif", text: "Faire le lien entre la Sombra et la Terre des Insectes par une étape de refuge, de mémoire et de reconnaissance plus fine." },
      { title: "Point de tension", text: "Le Creux reste préservé, mais O'Sama et Balak'Oss savent déjà que cette protection ne durera pas seule." }
    ],
    contextLinks: [
      { href: "#fiches-o-sama", label: "Voir O'Sama" },
      { href: "#fiches-bella", label: "Voir Bella" },
      { href: "#fiches-balak-oss", label: "Voir Balak'Oss" },
      { href: "#chronologie", label: "Lire la route vers le Creux" }
    ]
  },
  {
    slug: "source-pandorielle",
    name: "Source Pandorielle",
    tone: "river",
    category: "Seuil d'eau vivante",
    intro: "La Source Pandorielle est une eau de passage et de profondeur. Lumineuse, brumeuse, habitée par des silhouettes immenses, elle porte la Communauté jusqu'à la rive de la Terre des Insectes sans jamais devenir une simple route.",
    meta: [
      { label: "Atmosphère", value: "Eau lumineuse, brume, courants bleus, silence ancien" },
      { label: "Fonction", value: "Seuil vers la Terre des Insectes" },
      { label: "Présences", value: "Communauté des Papillons, O'Sama, Bella, Balak'Oss, silhouettes sous-marines" }
    ],
    biography: [
      "La Source Pandorielle apparaît après la traversée des territoires déjà marqués par les insectes. Au lieu d'une simple rivière, le groupe découvre une eau qui semble émettre sa propre lumière, avec des courants bleus sous la surface et une brume qui rend les distances incertaines.",
      "Ezze comprend que les courants peuvent porter les radeaux si le groupe reste dans leur ligne. O'Sama coupe les troncs, Balak'Oss les tire, Bella prépare les liens et même les gestes les plus simples deviennent une manière d'entrer dans un seuil plus grand que soi.",
      "Sous l'eau, des formes gigantesques passent sans se montrer vraiment. La Source ne rassure pas; elle autorise. Elle donne le passage, mais rappelle que Pandorus garde encore des profondeurs que personne ne maîtrise.",
      "Lorsque les radeaux quittent la rive avant l'aube, la Source conduit la Communauté vers une terre sans chant et sans vent. Elle devient ainsi le dernier souffle vivant avant la pression muette de la Terre des Insectes."
    ],
    summary: [
      "La Source Pandorielle est le grand seuil aquatique avant la Terre des Insectes.",
      "Elle donne à la route une beauté inquiète, entre protection, profondeur et passage vers un territoire beaucoup moins accueillant."
    ],
    profile: [
      { title: "Texture du lieu", text: "Lumière sous l'eau, brume épaisse, courants lisibles et silhouettes énormes sous les radeaux." },
      { title: "Rôle narratif", text: "Faire passer le groupe d'une marche terrestre hostile à une entrée presque rituelle vers la Terre des Insectes." },
      { title: "Point de tension", text: "La Source porte, mais elle ne se laisse pas comprendre entièrement; ce qui vit sous elle reste immense et silencieux." }
    ],
    contextLinks: [
      { href: "#lieux-terre-des-insectes", label: "Voir la Terre des Insectes" },
      { href: "#fiches-ezze", label: "Voir Ezze" },
      { href: "#chronologie", label: "Lire la traversée" }
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
      "Le Vert devient alors le théâtre d'une bascule majeure : Shan y retrouve Eben, comprend autrement ce qui a fondé sa violence, puis transforme leur affrontement en reconnaissance réciproque plutôt qu'en simple destruction.",
      "Mais le lieu ne se réduit pas à cette réconciliation sauvage. Plus loin, il garde aussi les ruines où le Capitaine est libéré, puis enterré, preuve que le Vert reste à la fois un royaume encore vivant et une terre déjà traversée par le retrait du monde."
    ],
    summary: [
      "Le Vert est le lieu où le vivant résiste encore par sa propre souveraineté.",
      "Il relie la quête du Capitaine, la blessure de Shan, le deuil du groupe et une autre forme de puissance du monde, moins humaine, mais pleinement consciente."
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
      "C'est là que Franklin reconnaît enfin le Capitaine, maintenu vivant mais brisé, transformant une disparition lointaine en présence retrouvée et ouvrant une nouvelle urgence pour le groupe.",
      "Les ruines deviennent ensuite un lieu de bataille contre Nogard et Bouldouger, puis un lieu de mort et de sépulture. La parole du Capitaine, son sacrifice et son enterrement y laissent une mémoire plus dense encore que leur vide initial."
    ],
    summary: [
      "Les ruines du Vert convertissent la rumeur en preuve.",
      "Elles montrent que le dérèglement du monde n'enlève pas seulement la vie : il retient, use, infecte et transforme même la délivrance en champ de guerre."
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
    category: "Seuil occidental vivant",
    intro: "La Sombra cesse d'être une simple direction et devient un seuil réellement franchi, terre d'observation, de lecture et de confrontation liée à Bichette, à Zaïnob et à leurs gardiennes.",
    meta: [
      { label: "Atmosphère", value: "Ouest lointain, veille blanche, clairière de lecture et tension contenue" },
      { label: "Fonction", value: "Seuil occidental de compréhension et de confrontation" },
      { label: "Présences", value: "Will le Tigre Bois, Bichette, Zaïnob, Luna Queen, Méli Mélo, Syne, Jacob, Ab'Youbi" }
    ],
    biography: [
      "Brad et Bradlette nomment d'abord la Sombra comme une direction plutôt que comme une promesse de salut. Ce n'est pas un refuge évident, mais un lieu où certaines figures peuvent lire ce qui vient avant qu'il ne s'impose pleinement au monde.",
      "Après la mort du Capitaine, la route s'ouvre enfin. Le groupe traverse les approches de l'ouest sous la veille du KingKoala, puis rencontre Will le Tigre Bois, gardien de seuil qui mesure leur passage avant de les laisser entrer.",
      "À l'intérieur de la Sombra, Luna Queen et Méli Mélo cessent d'être de simples noms. Elles deviennent les premières présences concrètes d'un territoire déjà habité par une lecture plus blanche du monde, juste avant l'approche de Bichette et de Zaïnob.",
      "Bichette y lit le groupe, nomme les dérèglements comme autre chose qu'une simple destruction et révèle à la fois un lien du sang entre elle et Ab'Youbi, et une limite nette de sa propre lecture devant Shaushana.",
      "La scène bascule lorsque Syne surgit à son tour avec sa boîte, des Verdeflors et des Lions-Garouh. Le parasite réagit dans la poche de Shaushana, les papillons s'altèrent, puis Ab'Youbi éteint leurs flammes anormales d'un seul regard.",
      "Au terme de cette montée, Jacob jaillit de la boîte et la bataille emporte toute la clairière. Zaïnob se déchaîne, Méli Mélo est gravement blessée, Luna Queen veut tuer Syne, puis Bichette arrête le massacre avant que Jacob n'emporte Syne hors du lieu.",
      "Trois jours plus tard, la Sombra devient aussi un lieu de réparation et de révélation. Bichette y purifie le Parasite, affirme que l'ouest seul est déjà touché, maintient le lien avec le Vrax et renvoie désormais le groupe vers le Creux puis vers la Terre des Insectes."
    ],
    summary: [
      "La Sombra ouvre réellement l'ouest du récit.",
      "Elle devient à la fois champ de bataille, lieu de guérison et centre de réorientation majeure contre ce qui tord le vivant."
    ],
    profile: [
      { title: "Texture du lieu", text: "Horizon occidental, lumière tenue, gardiens de seuil, clairières de lecture et tension de rupture." },
      { title: "Rôle narratif", text: "Déplacer la quête de la survie immédiate vers une recherche plus fine de compréhension, puis la confronter à une vraie bataille et à une relance stratégique plus vaste." },
      { title: "Point de tension", text: "La Sombra soigne et révèle, mais elle prouve aussi que le conflit a déjà changé d'échelle et de profondeur." }
    ],
    contextLinks: [
      { href: "#fiches-bichette", label: "Voir Bichette" },
      { href: "#fiches-zainob", label: "Voir Zaïnob" },
      { href: "#fiches-will-le-tigre-bois", label: "Voir Will le Tigre Bois" },
      { href: "#fiches-luna-queen", label: "Voir Luna Queen" },
      { href: "#fiches-meli-melo", label: "Voir Méli Mélo" }
    ]
  }
  ].map((fiche) => ({
    ...fiche,
    image: getLocationImage(buildMediaPath, fiche.slug)
  }));
}
