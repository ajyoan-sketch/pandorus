function getLocationImage(buildMediaPath, slug) {
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
      { label: "Présences", value: "Will le Tigre Bois, Bichette, Zaïnob, Luna Queen, Méli Mélo, Syne" }
    ],
    biography: [
      "Brad et Bradlette nomment d'abord la Sombra comme une direction plutôt que comme une promesse de salut. Ce n'est pas un refuge évident, mais un lieu où certaines figures peuvent lire ce qui vient avant qu'il ne s'impose pleinement au monde.",
      "Après la mort du Capitaine, la route s'ouvre enfin. Le groupe traverse les approches de l'ouest sous la veille du KingKoala, puis rencontre Will le Tigre Bois, gardien de seuil qui mesure leur passage avant de les laisser entrer.",
      "À l'intérieur de la Sombra, Luna Queen et Méli Mélo cessent d'être de simples noms. Elles deviennent les premières présences concrètes d'un territoire déjà habité par une lecture plus blanche du monde, juste avant l'approche de Bichette et de Zaïnob.",
      "Bichette y lit le groupe, nomme les dérèglements comme autre chose qu'une simple destruction et révèle à la fois un lien du sang entre Ab'Youbi et Zaïnob, et une limite nette de sa propre lecture devant Shaushana.",
      "La scène bascule lorsque Syne surgit à son tour avec sa boîte, des Verdeflors et des Lions-Garouh. Le parasite réagit dans la poche de Shaushana, les papillons s'altèrent, puis Ab'Youbi éteint leurs flammes anormales d'un seul regard."
    ],
    summary: [
      "La Sombra ouvre réellement l'ouest du récit.",
      "Elle promet moins une bataille simple qu'une compréhension, mais montre aussitôt que toute lecture vraie du monde s'accompagne déjà d'une nouvelle menace."
    ],
    profile: [
      { title: "Texture du lieu", text: "Horizon occidental, lumière tenue, gardiens de seuil, clairières de lecture et tension de rupture." },
      { title: "Rôle narratif", text: "Déplacer la quête de la survie immédiate vers une recherche plus fine de compréhension, puis la confronter aussitôt à Syne et au parasite." },
      { title: "Point de tension", text: "Le groupe y entre enfin, mais avec le parasite, le deuil du Capitaine et la preuve que l'ouest lit déjà plus qu'il ne protège encore." }
    ],
    contextLinks: [
      { href: "#fiches-bichette", label: "Voir Bichette" },
      { href: "#fiches-zainob", label: "Voir Zaïnob" },
      { href: "#fiches-luna-queen", label: "Voir Luna Queen" },
      { href: "#fiches-meli-melo", label: "Voir Méli Mélo" },
      { href: "#chronologie", label: "Lire l'entrée dans la Sombra" }
    ]
  }
  ].map((fiche) => ({
    ...fiche,
    image: getLocationImage(buildMediaPath, fiche.slug)
  }));
}
