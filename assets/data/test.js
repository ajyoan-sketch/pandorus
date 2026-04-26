export function createPandorusTestData(buildMediaPath) {
  const traitLabels = {
    protect: "Protection",
    instinct: "Instinct",
    insight: "Lecture du monde",
    memory: "Mémoire",
    resilience: "Endurance",
    ferocity: "Intensité",
    balance: "Équilibre",
    loyalty: "Loyauté",
    curiosity: "Curiosité",
    mystery: "Mystère",
    leadership: "Direction",
    freedom: "Mouvement",
    compassion: "Compassion"
  };

  const questions = [
    {
      prompt: "Un territoire entier vous met mal à l'aise, comme s'il vous observait. Votre premier réflexe ?",
      options: [
        { label: "Je ralentis, j'écoute et j'essaie de comprendre ce que le lieu attend de moi.", weights: { insight: 2, balance: 2, mystery: 1 } },
        { label: "Je garde les autres derrière moi et je sécurise le passage avant tout.", weights: { protect: 2, leadership: 1, resilience: 1 } },
        { label: "J'avance vite pour ne pas laisser la peur prendre trop de place.", weights: { instinct: 2, freedom: 2 } },
        { label: "Je repère tout de suite les traces anciennes ou anormales pour savoir ce qui s'est joué ici.", weights: { memory: 2, curiosity: 1, insight: 1 } }
      ]
    },
    {
      prompt: "Une créature surgit devant vous alors qu'un enfant est avec vous. Que faites-vous ?",
      options: [
        { label: "Je me place entre les deux sans réfléchir.", weights: { protect: 2, compassion: 1, ferocity: 1 } },
        { label: "Je cherche à calmer ou détourner la créature avant d'en venir au choc.", weights: { balance: 2, insight: 1, compassion: 1 } },
        { label: "Je prends l'enfant et je bouge très vite pour casser la trajectoire.", weights: { freedom: 2, instinct: 2 } },
        { label: "J'évalue si la créature agit par faim, peur ou influence, parce que ça change tout.", weights: { insight: 2, curiosity: 1, mystery: 1 } }
      ]
    },
    {
      prompt: "Dans un groupe nouveau, vous devenez le plus souvent...",
      options: [
        { label: "Le point d'appui qui rassure et protège.", weights: { protect: 2, compassion: 2 } },
        { label: "Celui ou celle qui lit le problème avant les autres.", weights: { insight: 2, memory: 1, mystery: 1 } },
        { label: "L'énergie qui pousse à agir vite.", weights: { instinct: 2, ferocity: 1, freedom: 1 } },
        { label: "La personne qu'on suit quand il faut choisir une direction.", weights: { leadership: 2, resilience: 1, loyalty: 1 } }
      ]
    },
    {
      prompt: "On vous confie un objet fermé, dangereux, qu'il ne faut surtout pas ouvrir. Quelle est votre vraie difficulté ?",
      options: [
        { label: "Le porter sans faillir, quoi qu'il pèse.", weights: { resilience: 2, loyalty: 1, protect: 1 } },
        { label: "Résister à l'envie de comprendre ce qu'il contient.", weights: { curiosity: 2, insight: 1, mystery: 1 } },
        { label: "Supporter qu'un tel danger existe près des autres.", weights: { protect: 2, compassion: 2 } },
        { label: "Garder mon calme devant ce que cet objet réveille en moi.", weights: { balance: 2, mystery: 1, memory: 1 } }
      ]
    },
    {
      prompt: "Quel type de force vous impressionne le plus ?",
      options: [
        { label: "La force qui protège sans se raconter.", weights: { protect: 2, compassion: 1, loyalty: 1 } },
        { label: "La force qui comprend avant d'agir.", weights: { insight: 2, memory: 1, balance: 1 } },
        { label: "La force qui casse tout ce qui l'empêche d'avancer.", weights: { ferocity: 2, instinct: 1, freedom: 1 } },
        { label: "La force qui reste impossible à lire jusqu'au bout.", weights: { mystery: 2, curiosity: 1, insight: 1 } }
      ]
    },
    {
      prompt: "Vous découvrez qu'un proche a changé d'une manière troublante. Que faites-vous d'abord ?",
      options: [
        { label: "Je reste près de lui ou d'elle. On n'abandonne pas quelqu'un dans cet état.", weights: { loyalty: 2, compassion: 2 } },
        { label: "Je teste ce qui relève encore de sa volonté propre.", weights: { insight: 2, balance: 1, mystery: 1 } },
        { label: "Je me prépare à agir vite si le danger éclate.", weights: { instinct: 2, protect: 1, ferocity: 1 } },
        { label: "Je cherche d'où vient le changement avant de juger la personne.", weights: { memory: 1, curiosity: 2, insight: 1 } }
      ]
    },
    {
      prompt: "Quand vous entrez dans un lieu chargé d'histoire, ce qui vous attire d'abord est...",
      options: [
        { label: "Ce qui y a été perdu.", weights: { memory: 2, compassion: 1, mystery: 1 } },
        { label: "Ce qui y reste vivant malgré tout.", weights: { balance: 2, insight: 1, compassion: 1 } },
        { label: "Les issues, les angles et les mouvements possibles.", weights: { instinct: 2, freedom: 2 } },
        { label: "Les signes cachés, les détails qui ne devraient pas être là.", weights: { curiosity: 2, mystery: 1, insight: 1 } }
      ]
    },
    {
      prompt: "Une parole ancienne vous contredit, mais elle vient de quelqu'un que vous respectez. Vous...",
      options: [
        { label: "Écoutez jusqu'au bout avant de répondre.", weights: { memory: 2, balance: 1, compassion: 1 } },
        { label: "Testez la parole contre le réel avant d'y croire.", weights: { insight: 2, curiosity: 1, leadership: 1 } },
        { label: "Acceptez qu'une expérience plus vieille voie plus loin que vous.", weights: { loyalty: 1, memory: 2, mystery: 1 } },
        { label: "Refusez d'obéir si votre instinct dit autre chose.", weights: { instinct: 2, freedom: 1, ferocity: 1 } }
      ]
    },
    {
      prompt: "Quel défaut vous ressemble le plus quand tout devient trop tendu ?",
      options: [
        { label: "Je veux porter trop pour les autres.", weights: { protect: 2, compassion: 2 } },
        { label: "Je me ferme et je garde tout à l'intérieur.", weights: { mystery: 2, resilience: 1, memory: 1 } },
        { label: "Je fonce trop vite et je laisse parler la violence.", weights: { ferocity: 2, instinct: 1, freedom: 1 } },
        { label: "Je cherche encore à comprendre alors qu'il faudrait déjà agir.", weights: { curiosity: 2, insight: 1, balance: 1 } }
      ]
    },
    {
      prompt: "Si vous devez veiller une nuit entière pendant que les autres dorment, vous êtes plutôt...",
      options: [
        { label: "Immobile, attentif, presque invisible.", weights: { mystery: 2, insight: 1, resilience: 1 } },
        { label: "Calme, protecteur, tourné vers ceux qui se reposent.", weights: { protect: 2, compassion: 1, loyalty: 1 } },
        { label: "Tendu, prêt à bondir au moindre bruit.", weights: { instinct: 2, ferocity: 1, resilience: 1 } },
        { label: "Pensif, traversé par ce que tout cela signifie.", weights: { memory: 2, curiosity: 1, balance: 1 } }
      ]
    },
    {
      prompt: "Vous apprenez qu'il faut choisir entre sauver quelqu'un maintenant ou poursuivre une piste qui pourrait sauver davantage de vies plus tard.",
      options: [
        { label: "Je sauve la personne. Le reste se recompose ensuite.", weights: { compassion: 2, protect: 2 } },
        { label: "Je prends la décision la plus juste pour le plus grand nombre, même si elle fait mal.", weights: { leadership: 2, insight: 1, balance: 1 } },
        { label: "Je cherche une troisième voie jusqu'au dernier moment.", weights: { curiosity: 1, protect: 1, resilience: 1, insight: 1 } },
        { label: "Je suis l'élan le plus irrépressible en moi, sans négocier davantage.", weights: { instinct: 2, ferocity: 1, loyalty: 1 } }
      ]
    },
    {
      prompt: "Le monde semble perdre sa cohérence. Ce qui vous trouble le plus, c'est...",
      options: [
        { label: "Que les êtres changent sans comprendre pourquoi.", weights: { compassion: 2, mystery: 1, insight: 1 } },
        { label: "Que les repères anciens cessent de répondre.", weights: { memory: 2, resilience: 1, balance: 1 } },
        { label: "Que plus rien ne puisse être tenu par la seule force.", weights: { ferocity: 2, leadership: 1, resilience: 1 } },
        { label: "Qu'il y ait derrière tout cela une volonté qui pense.", weights: { insight: 2, mystery: 1, curiosity: 1 } }
      ]
    },
    {
      prompt: "Une immense créature ne vous attaque pas, mais vous domine entièrement. Que faites-vous ?",
      options: [
        { label: "Je baisse la violence et j'essaie de lire ce qu'elle reconnaît en moi.", weights: { balance: 2, insight: 1, mystery: 1 } },
        { label: "Je tiens ma position pour protéger les autres, quoi qu'il arrive.", weights: { protect: 2, resilience: 1, leadership: 1 } },
        { label: "Je cherche le moment juste pour la contourner ou la déborder.", weights: { instinct: 2, freedom: 2 } },
        { label: "Je reste fasciné par ce qu'elle révèle du monde.", weights: { curiosity: 2, mystery: 1, memory: 1 } }
      ]
    },
    {
      prompt: "Quand quelqu'un vous suit dans une quête dangereuse, vous voulez surtout lui offrir...",
      options: [
        { label: "Une protection réelle.", weights: { protect: 2, loyalty: 1, compassion: 1 } },
        { label: "Une direction nette.", weights: { leadership: 2, resilience: 1, insight: 1 } },
        { label: "Une liberté de rester lui-même ou elle-même.", weights: { freedom: 2, compassion: 1, balance: 1 } },
        { label: "Une vérité plus grande que sa peur.", weights: { insight: 2, mystery: 1, memory: 1 } }
      ]
    },
    {
      prompt: "On vous provoque ouvertement devant les autres. Votre réponse la plus naturelle ?",
      options: [
        { label: "Je réponds tout de suite, frontalement.", weights: { ferocity: 2, instinct: 1, leadership: 1 } },
        { label: "Je laisse parler, puis je frappe seulement si c'est nécessaire.", weights: { balance: 2, resilience: 1, protect: 1 } },
        { label: "Je dévie la tension, parce que le vrai problème est souvent ailleurs.", weights: { insight: 2, mystery: 1, compassion: 1 } },
        { label: "Je prends sur moi si le groupe a besoin de calme.", weights: { loyalty: 2, compassion: 1, resilience: 1 } }
      ]
    },
    {
      prompt: "Quel rapport avez-vous au passé ?",
      options: [
        { label: "Il me construit encore profondément.", weights: { memory: 2, resilience: 1, mystery: 1 } },
        { label: "Je le respecte, mais je refuse d'y rester enfermé.", weights: { freedom: 2, balance: 1, instinct: 1 } },
        { label: "Je cherche dedans des clés pour comprendre le présent.", weights: { memory: 2, insight: 2 } },
        { label: "Je le porte surtout à travers les gens que j'aime ou que j'ai perdus.", weights: { compassion: 2, loyalty: 1, memory: 1 } }
      ]
    },
    {
      prompt: "Une personne venue d'ailleurs dit quelque chose d'impossible, mais vous sentez qu'elle n'est pas folle. Vous...",
      options: [
        { label: "Écoutez jusqu'au bout. L'impossible fait partie du monde.", weights: { mystery: 2, curiosity: 1, insight: 1 } },
        { label: "Cherchez la cohérence derrière ses mots.", weights: { insight: 2, curiosity: 1, balance: 1 } },
        { label: "Jugez surtout à sa manière d'être, pas à ce qu'elle raconte.", weights: { instinct: 1, compassion: 2, insight: 1 } },
        { label: "Restez prudent, mais gardez l'information en mémoire.", weights: { memory: 2, resilience: 1, mystery: 1 } }
      ]
    },
    {
      prompt: "Votre plus grande qualité dans une crise est probablement...",
      options: [
        { label: "Je tiens.", weights: { resilience: 2, protect: 1, loyalty: 1 } },
        { label: "Je vois.", weights: { insight: 2, mystery: 1, memory: 1 } },
        { label: "J'agis.", weights: { instinct: 2, ferocity: 1, leadership: 1 } },
        { label: "Je relie.", weights: { compassion: 2, balance: 1, loyalty: 1 } }
      ]
    },
    {
      prompt: "Dans un groupe endeuillé, vous êtes la personne qui...",
      options: [
        { label: "Reste près des autres, même sans trouver les mots.", weights: { compassion: 2, loyalty: 1, protect: 1 } },
        { label: "Transforme la perte en direction.", weights: { leadership: 2, resilience: 1, memory: 1 } },
        { label: "Garde le silence, mais ne lâche rien du réel.", weights: { mystery: 2, resilience: 1, balance: 1 } },
        { label: "Porte la douleur comme une énergie de combat.", weights: { ferocity: 2, instinct: 1, loyalty: 1 } }
      ]
    },
    {
      prompt: "Si un ennemi vous parle calmement d'un monde plus ordonné, plus contrôlé, qu'est-ce qui vous choque le plus ?",
      options: [
        { label: "Qu'il veuille supprimer ce qui est vivant dans sa liberté.", weights: { freedom: 2, compassion: 1, ferocity: 1 } },
        { label: "Qu'il prétende savoir mieux que le monde lui-même.", weights: { insight: 2, balance: 1, mystery: 1 } },
        { label: "Qu'il transforme les autres en moyens plutôt qu'en vies.", weights: { compassion: 2, protect: 1, loyalty: 1 } },
        { label: "Qu'il fasse de la peur une méthode.", weights: { resilience: 1, leadership: 1, ferocity: 2 } }
      ]
    },
    {
      prompt: "Vous devez traverser un espace très instable. Votre manière de faire ?",
      options: [
        { label: "Je lis les appuis et j'avance sans gaspiller de gestes.", weights: { instinct: 2, balance: 1, insight: 1 } },
        { label: "Je guide les autres un par un.", weights: { protect: 2, leadership: 1, compassion: 1 } },
        { label: "Je prends de l'élan et je casse l'hésitation.", weights: { freedom: 2, ferocity: 1, resilience: 1 } },
        { label: "Je cherche d'abord à comprendre pourquoi le lieu est instable.", weights: { curiosity: 2, memory: 1, insight: 1 } }
      ]
    },
    {
      prompt: "Ce que vous acceptez le moins chez vous, c'est...",
      options: [
        { label: "De ne pas avoir protégé assez.", weights: { protect: 2, compassion: 2 } },
        { label: "De ne pas avoir compris assez tôt.", weights: { insight: 2, memory: 1, curiosity: 1 } },
        { label: "D'avoir frappé trop vite ou trop fort.", weights: { ferocity: 2, balance: 1, loyalty: 1 } },
        { label: "De rester illisible même pour ceux qui m'aiment.", weights: { mystery: 2, resilience: 1, compassion: 1 } }
      ]
    },
    {
      prompt: "Face à un grand choix, vous faites le plus confiance...",
      options: [
        { label: "À mon instinct immédiat.", weights: { instinct: 2, freedom: 1, ferocity: 1 } },
        { label: "À ce que j'ai appris des anciens et des pertes.", weights: { memory: 2, insight: 1, resilience: 1 } },
        { label: "À ce qui protège le mieux les autres.", weights: { protect: 2, compassion: 1, loyalty: 1 } },
        { label: "À la part en moi qui sent l'équilibre ou son absence.", weights: { balance: 2, mystery: 1, insight: 1 } }
      ]
    },
    {
      prompt: "Quel type de rôle vous conviendrait le mieux dans Pandorus ?",
      options: [
        { label: "Veilleur ou veilleuse d'un seuil.", weights: { mystery: 2, protect: 1, insight: 1 } },
        { label: "Explorateur ou éclaireur en mouvement.", weights: { freedom: 2, curiosity: 1, instinct: 1 } },
        { label: "Passeur ou passeuse de mémoire.", weights: { memory: 2, compassion: 1, insight: 1 } },
        { label: "Point de lutte quand tout cède.", weights: { ferocity: 2, resilience: 1, leadership: 1 } }
      ]
    },
    {
      prompt: "Au fond, ce qui vous guide le plus est...",
      options: [
        { label: "L'amour des êtres et le besoin de les tenir debout.", weights: { compassion: 2, loyalty: 1, protect: 1 } },
        { label: "La recherche d'un sens caché.", weights: { mystery: 2, insight: 1, curiosity: 1 } },
        { label: "La volonté de ne jamais céder devant ce qui détruit.", weights: { resilience: 2, ferocity: 1, leadership: 1 } },
        { label: "Le désir de rester vrai au milieu du chaos.", weights: { balance: 2, freedom: 1, instinct: 1 } }
      ]
    },
    {
      prompt: "Si vous deviez laisser une seule trace derrière vous, ce serait plutôt...",
      options: [
        { label: "Une personne sauvée.", weights: { protect: 2, compassion: 2 } },
        { label: "Une vérité transmise.", weights: { insight: 2, memory: 1, leadership: 1 } },
        { label: "Un passage ouvert.", weights: { freedom: 2, curiosity: 1, balance: 1 } },
        { label: "Une ligne tenue jusqu'au bout.", weights: { resilience: 2, loyalty: 1, ferocity: 1 } }
      ]
    }
  ];

  const results = [
    {
      slug: "shaushana",
      name: "Shaushana",
      href: "#fiches-shaushana",
      image: buildMediaPath("pandorus", "Shaushana.jpg"),
      intro: "Tu avances comme une présence de cohérence. Tu ne te contentes pas d'exister dans le monde : tu le sens, tu l'écoutes et tu aides ce qui vacille à ne pas se rompre.",
      traits: { protect: 2, instinct: 2, insight: 5, memory: 2, resilience: 2, ferocity: 0, balance: 5, loyalty: 2, curiosity: 1, mystery: 5, leadership: 1, freedom: 0, compassion: 3 }
    },
    {
      slug: "shan",
      name: "Shan",
      href: "#fiches",
      image: buildMediaPath("pandorus", "Shan.jpg"),
      intro: "Tu tiens par la force, mais pas seulement. Sous la dureté, il y a une loyauté entière, un instinct de survie extrême et une manière très personnelle d'aimer sans le dire.",
      traits: { protect: 3, instinct: 4, insight: 2, memory: 1, resilience: 5, ferocity: 5, balance: 3, loyalty: 4, curiosity: 1, mystery: 1, leadership: 2, freedom: 3, compassion: 1 }
    },
    {
      slug: "franklin",
      name: "Franklin",
      href: "#fiches-franklin",
      image: buildMediaPath("pandorus", "Franklin.png"),
      intro: "Tu gardes une mesure humaine là où tout devient immense. Tu relies les autres, tu tiens par la loyauté, et tu transformes peu à peu la peur en vraie direction.",
      traits: { protect: 4, instinct: 3, insight: 3, memory: 3, resilience: 4, ferocity: 1, balance: 2, loyalty: 5, curiosity: 4, mystery: 1, leadership: 2, freedom: 1, compassion: 4 }
    },
    {
      slug: "mike",
      name: "Mike",
      href: "#fiches-mike",
      image: buildMediaPath("pandorus", "Mike.png"),
      intro: "Tu portes une fragilité vraie, mais jamais vide. Chez toi, la douceur n'est pas faiblesse : c'est ce qui rappelle pourquoi il faut encore protéger quelque chose.",
      traits: { protect: 2, instinct: 0, insight: 1, memory: 2, resilience: 2, ferocity: 0, balance: 2, loyalty: 5, curiosity: 1, mystery: 0, leadership: 0, freedom: 0, compassion: 5 }
    },
    {
      slug: "gerom",
      name: "Gérôm",
      href: "#fiches-gerom",
      image: buildMediaPath("pandorus", "Gérôm.png"),
      intro: "Tu es un appui calme. On peut s'appuyer sur toi quand tout se trouble, parce que tu restes stable, protecteur et digne sans jamais avoir besoin d'en faire trop.",
      traits: { protect: 4, instinct: 1, insight: 1, memory: 2, resilience: 5, ferocity: 1, balance: 4, loyalty: 5, curiosity: 0, mystery: 0, leadership: 1, freedom: 0, compassion: 3 }
    },
    {
      slug: "elrick",
      name: "Elrick",
      href: "#fiches-elrick",
      image: buildMediaPath("pandorus", "Elrick.png"),
      intro: "Tu fais partie de ceux qui transmettent plus qu'ils ne dominent. Tu lis les lignes profondes, tu relis le passé au présent et tu donnes aux autres une conscience plus vaste de ce qu'ils traversent.",
      traits: { protect: 2, instinct: 1, insight: 5, memory: 5, resilience: 3, ferocity: 1, balance: 4, loyalty: 3, curiosity: 2, mystery: 3, leadership: 4, freedom: 0, compassion: 3 }
    },
    {
      slug: "eben",
      name: "Eben",
      href: "#fiches-eben",
      image: buildMediaPath("pandorus", "Eben.jpg"),
      intro: "Tu n'es pas fait pour suivre des cadres étroits. Il y a chez toi une souveraineté instinctive, une puissance qui ne crie pas, et une façon d'imposer le respect avant même les mots.",
      traits: { protect: 0, instinct: 5, insight: 1, memory: 1, resilience: 4, ferocity: 4, balance: 3, loyalty: 1, curiosity: 1, mystery: 2, leadership: 4, freedom: 4, compassion: 0 }
    },
    {
      slug: "capitaine",
      name: "Capitaine",
      href: "#fiches-capitaine",
      image: buildMediaPath("pandorus", "Capitaine.png"),
      intro: "Tu es de ceux qui prennent les signes au sérieux avant les autres. Tu avances par responsabilité, tu protèges en décidant, et tu acceptes le poids d'une route quand personne ne veut encore la voir.",
      traits: { protect: 3, instinct: 1, insight: 3, memory: 3, resilience: 4, ferocity: 2, balance: 1, loyalty: 3, curiosity: 4, mystery: 1, leadership: 5, freedom: 0, compassion: 1 }
    },
    {
      slug: "harry-py",
      name: "Harry PY",
      href: "#fiches-harry-py",
      image: buildMediaPath("pandorus", "Harry PY.png"),
      intro: "Tu perçois avant beaucoup d'autres. Ta force est moins spectaculaire que profonde : tu lis les ruptures, tu sens les vides, et tu deviens naturellement un centre autour duquel les autres s'organisent.",
      traits: { protect: 1, instinct: 1, insight: 5, memory: 3, resilience: 2, ferocity: 0, balance: 3, loyalty: 2, curiosity: 3, mystery: 5, leadership: 2, freedom: 0, compassion: 1 }
    },
    {
      slug: "gardien-isma",
      name: "Gardien Isma",
      href: "#fiches-gardien-isma",
      image: buildMediaPath("pandorus", "Gardien Isma.png"),
      intro: "Tu es une ligne de protection. Quand tout cède, tu tiens. Quand d'autres hésitent, tu bloques le danger et tu offres au groupe une stabilité physique et morale rare.",
      traits: { protect: 5, instinct: 2, insight: 1, memory: 1, resilience: 5, ferocity: 3, balance: 2, loyalty: 4, curiosity: 0, mystery: 0, leadership: 3, freedom: 0, compassion: 2 }
    },
    {
      slug: "wingard",
      name: "Wingard",
      href: "#fiches-wingard",
      image: buildMediaPath("pandorus", "Wingard.png"),
      intro: "Tu es mouvement, décalage, vitesse. Tu déranges l'ordre des choses avant de le laisser se recomposer autrement, et ta liberté vaut souvent autant que ta force.",
      traits: { protect: 0, instinct: 4, insight: 1, memory: 0, resilience: 2, ferocity: 3, balance: 0, loyalty: 1, curiosity: 3, mystery: 1, leadership: 0, freedom: 5, compassion: 0 }
    },
    {
      slug: "levy",
      name: "Lévy",
      href: "#fiches-levy",
      image: buildMediaPath("pandorus", "Lévy.png"),
      intro: "Tu agis là où les autres ne voient encore qu'un malaise diffus. Tu ajustes, tu rééquilibres, tu lis les absences et tu sais intervenir dans les fractures les moins visibles.",
      traits: { protect: 0, instinct: 0, insight: 5, memory: 3, resilience: 2, ferocity: 0, balance: 5, loyalty: 1, curiosity: 2, mystery: 5, leadership: 1, freedom: 0, compassion: 0 }
    },
    {
      slug: "ossah-lyla",
      name: "Ossah Lyla",
      href: "#fiches-ossah-lyla",
      image: buildMediaPath("pandorus", "Ossah Lyla.png"),
      intro: "Tu protèges par la douceur, la lecture fine et le lien au vivant. Chez toi, la force ressemble à une présence qui apaise, révèle et maintient l'équilibre profond du monde.",
      traits: { protect: 2, instinct: 1, insight: 3, memory: 2, resilience: 2, ferocity: 0, balance: 5, loyalty: 2, curiosity: 1, mystery: 2, leadership: 1, freedom: 0, compassion: 5 }
    },
    {
      slug: "nastaz",
      name: "Nastaz",
      href: "#fiches-nastaz",
      image: buildMediaPath("pandorus", "Nastaz.png"),
      intro: "Tu ne fuis pas la lucidité, même quand elle coupe. Tu comprends vite, tu analyses froidement, et tu acceptes plus facilement que d'autres les décisions nécessaires.",
      traits: { protect: 2, instinct: 1, insight: 5, memory: 4, resilience: 3, ferocity: 2, balance: 3, loyalty: 1, curiosity: 2, mystery: 3, leadership: 4, freedom: 0, compassion: 1 }
    },
    {
      slug: "tsune",
      name: "Tsune",
      href: "#fiches-tsune",
      image: buildMediaPath("pandorus", "Tsune.jpg"),
      intro: "Tu es une défense vive. Ta loyauté se voit dans l'action, ton instinct est rapide, et ta violence, quand elle s'ouvre, n'est jamais gratuite : elle vient de ce que tu refuses de laisser tomber.",
      traits: { protect: 4, instinct: 4, insight: 1, memory: 2, resilience: 4, ferocity: 4, balance: 1, loyalty: 4, curiosity: 1, mystery: 0, leadership: 2, freedom: 2, compassion: 2 }
    },
    {
      slug: "hez",
      name: "Hez",
      href: "#fiches-hez",
      image: buildMediaPath("pandorus", "Hez.jpg"),
      intro: "Tu incarnes une force sobre et digne. Tu tiens, tu protèges, tu restes présent au milieu du chaos, et c'est justement cette absence d'effets qui donne tant de poids à ta fidélité.",
      traits: { protect: 3, instinct: 0, insight: 1, memory: 2, resilience: 5, ferocity: 1, balance: 2, loyalty: 5, curiosity: 0, mystery: 0, leadership: 1, freedom: 0, compassion: 2 }
    },
    {
      slug: "javier",
      name: "Javier",
      href: "#fiches-javier",
      image: buildMediaPath("pandorus", "Javier.png"),
      intro: "Tu veilles plus que tu n'occupes l'espace. Tu observes loin, tu comprends en silence, et tu offres au groupe une couverture discrète mais décisive.",
      traits: { protect: 3, instinct: 2, insight: 4, memory: 3, resilience: 2, ferocity: 1, balance: 3, loyalty: 4, curiosity: 1, mystery: 3, leadership: 1, freedom: 1, compassion: 2 }
    },
    {
      slug: "kuji",
      name: "Kuji",
      href: "#fiches-kuji",
      image: buildMediaPath("pandorus", "Kuji.png"),
      intro: "Tu portes une force de volonté presque implacable. Tu n'agis pas au hasard, tu assumes la direction, et tu pourrais déplacer beaucoup de choses si tu laissais l'intensité l'emporter sur le reste.",
      traits: { protect: 0, instinct: 1, insight: 3, memory: 2, resilience: 4, ferocity: 5, balance: 0, loyalty: 1, curiosity: 1, mystery: 2, leadership: 4, freedom: 0, compassion: 0 }
    },
    {
      slug: "elennya",
      name: "Elennya",
      href: "#fiches-elennya",
      image: buildMediaPath("pandorus", "Elennya.png"),
      intro: "Tu fais partie de ceux qu'on ne lit jamais complètement. Il y a chez toi une intelligence froide, une finesse presque dérangeante et une manière d'agir sans jamais te livrer tout entier.",
      traits: { protect: 0, instinct: 1, insight: 4, memory: 3, resilience: 2, ferocity: 1, balance: 2, loyalty: 1, curiosity: 2, mystery: 5, leadership: 1, freedom: 2, compassion: 0 }
    },
    {
      slug: "ezze",
      name: "Ezze",
      href: "#fiches-ezze",
      image: buildMediaPath("pandorus", "Ezze.png"),
      intro: "Tu es fait pour le mouvement. Tu sens les anomalies avant de les comprendre vraiment, tu avances vite, et ton énergie vient autant de l'instinct que du refus de rester figé.",
      traits: { protect: 0, instinct: 5, insight: 1, memory: 1, resilience: 2, ferocity: 1, balance: 0, loyalty: 1, curiosity: 5, mystery: 3, leadership: 0, freedom: 5, compassion: 1 }
    },
    {
      slug: "gil-et-filston",
      name: "Gil et Filston",
      href: "#fiches-gil-et-filston",
      image: buildMediaPath("pandorus", "Gil et Filston.jpg"),
      intro: "Tu gardes une curiosité vivante même quand tout se dérègle. Tu observes, tu questionnes, tu ne fermes pas trop vite les possibles, et cette ouverture t'amène souvent vers des vérités plus étranges que prévues.",
      traits: { protect: 1, instinct: 1, insight: 3, memory: 2, resilience: 1, ferocity: 0, balance: 2, loyalty: 2, curiosity: 5, mystery: 3, leadership: 0, freedom: 3, compassion: 4 }
    },
    {
      slug: "brad-et-bradlette",
      name: "Brad et Bradlette",
      href: "#fiches-brad-et-bradlette",
      image: buildMediaPath("pandorus", "Brad et Bradlette.jpg"),
      intro: "Tu sais tenir un lieu, les êtres qui y passent et la mémoire qui y veille. Chez toi, l'accueil n'est jamais simple décoration : c'est une manière profonde de garder le monde habitable.",
      traits: { protect: 3, instinct: 1, insight: 4, memory: 4, resilience: 3, ferocity: 0, balance: 4, loyalty: 4, curiosity: 1, mystery: 2, leadership: 2, freedom: 0, compassion: 5 }
    },
    {
      slug: "abyoubi",
      name: "Ab'Youbi",
      href: "#fiches-abyoubi",
      image: buildMediaPath("pandorus", "AbYoubi.png"),
      intro: "Tu perçois l'invisible, les traces, les écarts. Tu ne te livres pas facilement, mais ta présence pèse lourd, parce qu'elle sait reconnaître ce que les autres ne voient pas encore.",
      traits: { protect: 0, instinct: 0, insight: 5, memory: 5, resilience: 2, ferocity: 0, balance: 3, loyalty: 1, curiosity: 2, mystery: 5, leadership: 1, freedom: 0, compassion: 0 }
    },
    {
      slug: "syne",
      name: "Syne",
      href: "#fiches-syne",
      image: buildMediaPath("pandorus", "Syne.jpg"),
      intro: "Tu tiens quelque chose que les autres ne peuvent pas lire d'un regard. Tu imposes une limite calme, une retenue mystérieuse, et une autorité qui n'a pas besoin de se hausser pour être réelle.",
      traits: { protect: 2, instinct: 1, insight: 3, memory: 2, resilience: 2, ferocity: 0, balance: 4, loyalty: 1, curiosity: 1, mystery: 5, leadership: 1, freedom: 2, compassion: 1 }
    },
    {
      slug: "mitra-sesse",
      name: "Mitra Séssé",
      href: "#fiches-mitra-sesse",
      image: buildMediaPath("pandorus", "Mitra Séssé.jpg"),
      intro: "Tu portes quelque chose des résistances anciennes. Tu tiens dans la durée, tu relies le présent à un courage plus vieux, et tu sais que certaines luttes demandent mémoire autant que force.",
      traits: { protect: 1, instinct: 1, insight: 1, memory: 5, resilience: 4, ferocity: 3, balance: 1, loyalty: 3, curiosity: 1, mystery: 1, leadership: 4, freedom: 0, compassion: 0 }
    },
    {
      slug: "papy-perquis",
      name: "Papy Perquis",
      href: "#fiches-papy-perquis",
      image: buildMediaPath("pandorus", "Papy Perquis.jpg"),
      intro: "Tu analyses, tu questionnes, tu cherches des formes dans ce qui paraît confus. Ta force est de donner des mots et des lignes là où d'autres ne voient encore qu'une masse trouble.",
      traits: { protect: 0, instinct: 0, insight: 5, memory: 5, resilience: 1, ferocity: 0, balance: 1, loyalty: 1, curiosity: 4, mystery: 1, leadership: 1, freedom: 0, compassion: 0 }
    },
    {
      slug: "padre-souf",
      name: "Padre Souf",
      href: "#fiches-padre-souf",
      image: buildMediaPath("pandorus", "Padre Souf.png"),
      intro: "Tu gardes une forme d'ancienne tenue. Chez toi, la fidélité, la mémoire et la continuité comptent plus que l'éclat, et c'est précisément cela qui te rend solide dans le temps long.",
      traits: { protect: 1, instinct: 0, insight: 1, memory: 5, resilience: 3, ferocity: 0, balance: 2, loyalty: 5, curiosity: 0, mystery: 3, leadership: 1, freedom: 0, compassion: 2 }
    },
    {
      slug: "bichette",
      name: "Bichette",
      href: "#fiches-bichette",
      image: buildMediaPath("pandorus", "Bichette.png"),
      intro: "Tu es fait pour voir plus finement que les autres. Tu n'écrases pas le monde : tu le lis, tu l'équilibres, et tu offres une compréhension plus claire là où tout risquait de se réduire à la guerre.",
      traits: { protect: 2, instinct: 0, insight: 5, memory: 2, resilience: 2, ferocity: 0, balance: 5, loyalty: 1, curiosity: 2, mystery: 3, leadership: 4, freedom: 0, compassion: 3 }
    },
    {
      slug: "luna-queen",
      name: "Luna Queen",
      href: "#fiches-luna-queen",
      image: buildMediaPath("pandorus", "Luna Queen.png"),
      intro: "Tu gardes un seuil avec grâce et retenue. On sent chez toi une vigilance réelle, une présence d'équilibre, et une manière de protéger sans bruit ce qui mérite d'être préservé.",
      traits: { protect: 4, instinct: 0, insight: 2, memory: 1, resilience: 2, ferocity: 0, balance: 4, loyalty: 3, curiosity: 1, mystery: 2, leadership: 1, freedom: 0, compassion: 3 }
    },
    {
      slug: "meli-melo",
      name: "Méli Mélo",
      href: "#fiches-meli-melo",
      image: buildMediaPath("pandorus", "Méli Mélo.png"),
      intro: "Tu avances avec une intelligence plus souple, plus vive, parfois plus imprévisible qu'il n'y paraît. Tu gardes l'ouverture, la sensibilité et l'étrangeté vivante qui empêchent le monde de devenir trop simple.",
      traits: { protect: 1, instinct: 1, insight: 3, memory: 1, resilience: 1, ferocity: 0, balance: 3, loyalty: 2, curiosity: 4, mystery: 4, leadership: 1, freedom: 2, compassion: 4 }
    }
  ];

  const creatureTraitLabels = {
    aggression: "Percussion",
    stealth: "Discrétion",
    grace: "Grâce",
    endurance: "Endurance",
    territory: "Territoire",
    loyalty: "Meute",
    mystery: "Énigme",
    intelligence: "Lecture",
    verticality: "Hauteur",
    surge: "Surgissement",
    majesty: "Majesté",
    corruption: "Altération"
  };

  const creatureQuestions = [
    {
      prompt: "Dans ton milieu naturel, tu imposes surtout...",
      options: [
        { label: "Une présence écrasante dès le premier instant.", weights: { aggression: 2, majesty: 1, territory: 1 } },
        { label: "Une approche qu'on ne voit qu'au dernier moment.", weights: { stealth: 2, surge: 1, intelligence: 1 } },
        { label: "Une impression de beauté qui trouble avant de menacer.", weights: { grace: 2, mystery: 1, verticality: 1 } },
        { label: "Une résistance presque impossible à déloger.", weights: { endurance: 2, territory: 1, majesty: 1 } }
      ]
    },
    {
      prompt: "Quand un intrus entre sur ton territoire, ton premier réflexe est...",
      options: [
        { label: "Le charger frontalement.", weights: { aggression: 2, territory: 2 } },
        { label: "Le contourner jusqu'à ce qu'il perde ses appuis.", weights: { stealth: 2, intelligence: 1, surge: 1 } },
        { label: "Le jauger d'abord, comme un vrai gardien.", weights: { intelligence: 2, majesty: 1, territory: 1 } },
        { label: "Attendre que le lieu lui-même le fasse hésiter.", weights: { mystery: 2, territory: 1, endurance: 1 } }
      ]
    },
    {
      prompt: "Ton lien au groupe ressemble le plus à...",
      options: [
        { label: "Une meute soudée qui avance ensemble.", weights: { loyalty: 2, aggression: 1, territory: 1 } },
        { label: "Une vigilance commune, mais chacun garde sa singularité.", weights: { intelligence: 2, mystery: 1, loyalty: 1 } },
        { label: "Une solitude naturelle, même entourée.", weights: { stealth: 2, mystery: 1, majesty: 1 } },
        { label: "Un peuple vivant qui répond à un centre.", weights: { loyalty: 2, majesty: 1, territory: 1 } }
      ]
    },
    {
      prompt: "Tu préfères frapper...",
      options: [
        { label: "Au sol, dans l'impact et la masse.", weights: { aggression: 2, endurance: 1, territory: 1 } },
        { label: "Depuis l'eau, le dessous ou le bord.", weights: { surge: 2, stealth: 1, aggression: 1 } },
        { label: "Depuis le haut, en plongeant.", weights: { verticality: 2, surge: 1, grace: 1 } },
        { label: "Par la pression lente, sans précipiter le choc.", weights: { endurance: 2, mystery: 1, intelligence: 1 } }
      ]
    },
    {
      prompt: "Ce qui te définit le mieux, c'est...",
      options: [
        { label: "La faim de passage et de percée.", weights: { aggression: 2, surge: 1, freedom: 0 } },
        { label: "La lecture fine du terrain.", weights: { intelligence: 2, territory: 1, stealth: 1 } },
        { label: "La beauté ou l'étrangeté qu'on n'oublie pas.", weights: { grace: 2, mystery: 2 } },
        { label: "La capacité à rester quand tout fuit.", weights: { endurance: 2, territory: 1, majesty: 1 } }
      ]
    },
    {
      prompt: "Ton rapport au monde vivant est plutôt...",
      options: [
        { label: "Je protège un équilibre ancien.", weights: { majesty: 2, intelligence: 1, territory: 1 } },
        { label: "Je réagis comme un prédateur pur.", weights: { aggression: 2, surge: 1, stealth: 1 } },
        { label: "J'incarne une part lumineuse ou fragile du vivant.", weights: { grace: 2, mystery: 1, verticality: 1 } },
        { label: "Je porte déjà une altération du monde.", weights: { corruption: 2, aggression: 1, mystery: 1 } }
      ]
    },
    {
      prompt: "Si on te voit à distance, on pense d'abord...",
      options: [
        { label: "Danger immédiat.", weights: { aggression: 2, surge: 1, territory: 1 } },
        { label: "Silhouette étrange qu'on comprend mal.", weights: { mystery: 2, stealth: 1, grace: 1 } },
        { label: "Présence noble ou sacrée.", weights: { majesty: 2, grace: 1, intelligence: 1 } },
        { label: "Sentinelle du lieu.", weights: { territory: 2, intelligence: 1, endurance: 1 } }
      ]
    },
    {
      prompt: "Dans une forêt dense, tu es plus à l'aise...",
      options: [
        { label: "Au sommet, invisible entre les hauteurs.", weights: { verticality: 2, stealth: 1, grace: 1 } },
        { label: "Au cœur des troncs, maître du territoire.", weights: { territory: 2, endurance: 1, majesty: 1 } },
        { label: "Dans les surgissements rapides entre les branches.", weights: { surge: 2, intelligence: 1, loyalty: 1 } },
        { label: "Comme une présence qu'on sent avant de la voir.", weights: { mystery: 2, majesty: 1, stealth: 1 } }
      ]
    },
    {
      prompt: "Ce qui t'attire le plus dans un affrontement, c'est...",
      options: [
        { label: "Rompre l'élan adverse d'un coup.", weights: { aggression: 2, surge: 1, endurance: 1 } },
        { label: "Laisser l'autre s'épuiser dans un terrain que je connais mieux.", weights: { intelligence: 2, territory: 1, endurance: 1 } },
        { label: "Apparaître au moment le plus impossible.", weights: { stealth: 2, mystery: 1, verticality: 1 } },
        { label: "Imposer une majesté qui change le combat avant même le choc.", weights: { majesty: 2, grace: 1, territory: 1 } }
      ]
    },
    {
      prompt: "Si tu devais garder un seuil, ce serait en étant...",
      options: [
        { label: "Un barrage vivant.", weights: { endurance: 2, territory: 2 } },
        { label: "Une ombre qui contrôle les angles.", weights: { stealth: 2, intelligence: 1, mystery: 1 } },
        { label: "Une présence qui juge avant de laisser passer.", weights: { majesty: 2, intelligence: 1, territory: 1 } },
        { label: "Une anomalie troublante que nul n'oublie.", weights: { mystery: 2, corruption: 1, grace: 1 } }
      ]
    },
    {
      prompt: "Quand tu te déplaces, ton énergie est plutôt...",
      options: [
        { label: "Lourde et irrésistible.", weights: { endurance: 2, aggression: 1, majesty: 1 } },
        { label: "Rapide, vive, bondissante.", weights: { surge: 2, loyalty: 1, intelligence: 1 } },
        { label: "Fluide, presque élégante.", weights: { grace: 2, verticality: 1, mystery: 1 } },
        { label: "Sinueuse, imprévisible.", weights: { stealth: 2, mystery: 1, corruption: 1 } }
      ]
    },
    {
      prompt: "Quel défaut te ressemble le plus ?",
      options: [
        { label: "Je prends trop de place.", weights: { aggression: 2, majesty: 1, territory: 1 } },
        { label: "Je reste trop insaisissable.", weights: { stealth: 2, mystery: 2 } },
        { label: "Je peux devenir inquiétant sans le vouloir.", weights: { mystery: 1, corruption: 2, majesty: 1 } },
        { label: "Je ne lâche jamais mon terrain.", weights: { territory: 2, endurance: 1, loyalty: 1 } }
      ]
    },
    {
      prompt: "Tu serais le plus redoutable...",
      options: [
        { label: "Dans une attaque de groupe coordonnée.", weights: { loyalty: 2, aggression: 1, intelligence: 1 } },
        { label: "Seul, en terrain sacré ou fermé.", weights: { territory: 2, majesty: 1, endurance: 1 } },
        { label: "Dans un décor où on ne sait pas d'où tu vas venir.", weights: { stealth: 2, surge: 1, mystery: 1 } },
        { label: "Quand ton apparence suffit déjà à troubler.", weights: { grace: 1, mystery: 2, corruption: 1 } }
      ]
    },
    {
      prompt: "Au fond, ce qui te guide le plus est...",
      options: [
        { label: "L'instinct de chasse ou de frappe.", weights: { aggression: 2, surge: 1, stealth: 1 } },
        { label: "La garde d'un lieu ou d'un équilibre.", weights: { territory: 2, intelligence: 1, majesty: 1 } },
        { label: "La présence étrange que tu imposes au monde.", weights: { mystery: 2, grace: 1, corruption: 1 } },
        { label: "La fidélité à une meute, un peuple ou un centre.", weights: { loyalty: 2, endurance: 1, majesty: 1 } }
      ]
    },
    {
      prompt: "La trace que tu laisserais dans Pandorus serait surtout...",
      options: [
        { label: "Une peur nette.", weights: { aggression: 2, corruption: 1, surge: 1 } },
        { label: "Un passage gardé.", weights: { territory: 2, intelligence: 1, endurance: 1 } },
        { label: "Une image inoubliable.", weights: { grace: 2, mystery: 1, majesty: 1 } },
        { label: "Le sentiment qu'un territoire entier était vivant.", weights: { majesty: 2, loyalty: 1, territory: 1 } }
      ]
    }
  ];

  const creatureResults = [
    { slug: "aligaphoque", name: "Aligaphoque", href: "#creatures-fiche-aligaphoque", image: buildMediaPath("creatures", "Aligaphoque.png"), intro: "Tu frappes comme une embuscade lourde venue du fleuve : brutal, soudain, impossible à ignorer.", traits: { aggression: 5, stealth: 2, grace: 0, endurance: 4, territory: 3, loyalty: 2, mystery: 0, intelligence: 1, verticality: 0, surge: 5, majesty: 1, corruption: 0 } },
    { slug: "aligaroi", name: "Aligaroi", href: "#creatures-fiche-aligaroi", image: buildMediaPath("creatures", "Aligaroi.png"), intro: "Tu imposes une souveraineté du milieu. On ne te confond pas avec une simple bête : tu fais loi là où tu apparais.", traits: { aggression: 1, stealth: 0, grace: 0, endurance: 4, territory: 5, loyalty: 0, mystery: 3, intelligence: 3, verticality: 0, surge: 1, majesty: 5, corruption: 0 } },
    { slug: "bouldouger", name: "Bouldouger", href: "#creatures-fiche-bouldouger", image: buildMediaPath("pandorus", "Bouldouger.png"), intro: "Tu es la rupture pure, la charge qui écrase et change immédiatement l'échelle d'un affrontement.", traits: { aggression: 5, stealth: 0, grace: 0, endurance: 5, territory: 2, loyalty: 1, mystery: 1, intelligence: 1, verticality: 0, surge: 4, majesty: 3, corruption: 2 } },
    { slug: "canidaigle", name: "Canidaigle", href: "#creatures-fiche-canidaigle", image: buildMediaPath("creatures", "Canidaigle.png"), intro: "Tu viens du haut avec noblesse et gravité. Il y a chez toi à la fois l'élan du ciel et quelque chose de funèbre et fidèle.", traits: { aggression: 1, stealth: 1, grace: 4, endurance: 1, territory: 1, loyalty: 4, mystery: 2, intelligence: 1, verticality: 5, surge: 1, majesty: 4, corruption: 0 } },
    { slug: "felou", name: "Félou", href: "#creatures-fiche-felou", image: buildMediaPath("creatures", "Félou.png"), intro: "Tu es nerveux, direct, rapide à agir. Quand tu frappes, tout passe par l'instinct et la tension du moment.", traits: { aggression: 4, stealth: 2, grace: 0, endurance: 2, territory: 2, loyalty: 1, mystery: 0, intelligence: 1, verticality: 0, surge: 4, majesty: 0, corruption: 1 } },
    { slug: "felours", name: "Félours", href: "#creatures-fiche-felours", image: buildMediaPath("creatures", "Felours.png"), intro: "Tu es une masse de percussion. On te reconnaît à la violence de l'impact et à la pression que tu imposes.", traits: { aggression: 5, stealth: 0, grace: 0, endurance: 5, territory: 1, loyalty: 0, mystery: 0, intelligence: 0, verticality: 0, surge: 1, majesty: 1, corruption: 0 } },
    { slug: "gorillange", name: "Gorillange", href: "#creatures-fiche-gorillange", image: buildMediaPath("creatures", "Gorillange.png"), intro: "Tu relèves du peuple et de la puissance. Il y a chez toi la force, mais aussi l'appartenance à un ordre collectif plus grand.", traits: { aggression: 2, stealth: 0, grace: 0, endurance: 4, territory: 4, loyalty: 5, mystery: 0, intelligence: 2, verticality: 0, surge: 1, majesty: 3, corruption: 0 } },
    { slug: "gueplynx", name: "Guéplynx", href: "#creatures-fiche-gueplynx", image: buildMediaPath("creatures", "Gueplynx.png"), intro: "Tu es fait pour la coordination et la traque. Tu n'avances jamais seul dans ta logique : tu enfermes, tu lis et tu épuises.", traits: { aggression: 2, stealth: 4, grace: 0, endurance: 2, territory: 3, loyalty: 5, mystery: 0, intelligence: 5, verticality: 0, surge: 2, majesty: 0, corruption: 0 } },
    { slug: "kingkoala", name: "KingKoala", href: "#creatures-fiche-kingkoala", image: buildMediaPath("creatures", "KingKoala.png"), intro: "Tu imposes une garde calme, massive, presque royale. Chez toi, la force n'a pas besoin de hurler pour être décisive.", traits: { aggression: 0, stealth: 0, grace: 1, endurance: 5, territory: 4, loyalty: 2, mystery: 1, intelligence: 1, verticality: 0, surge: 0, majesty: 5, corruption: 0 } },
    { slug: "lumineau", name: "Lumineau", href: "#creatures-fiche-lumineau", image: buildMediaPath("creatures", "Lumineau.png"), intro: "Tu es grâce fragile, éclat suspendu, beauté qui reste vive même dans un monde déjà blessé.", traits: { aggression: 0, stealth: 1, grace: 5, endurance: 0, territory: 0, loyalty: 1, mystery: 2, intelligence: 1, verticality: 4, surge: 0, majesty: 2, corruption: 0 } },
    { slug: "macagardien", name: "Macagardien", href: "#creatures-fiche-macagardien", image: buildMediaPath("creatures", "Macagardien.png"), intro: "Tu observes avant tout. Tu fais partie de ceux qui gardent, testent et jugent sans se jeter dans le bruit immédiatement.", traits: { aggression: 1, stealth: 3, grace: 0, endurance: 2, territory: 5, loyalty: 4, mystery: 1, intelligence: 5, verticality: 3, surge: 1, majesty: 0, corruption: 0 } },
    { slug: "nogard", name: "Nogard", href: "#creatures-fiche-nogard", image: buildMediaPath("pandorus", "Nogard.jpg"), intro: "Tu es mobile, dérangeant, hostile avec méthode. Tu tiens plus de l'agent du trouble que du simple animal.", traits: { aggression: 3, stealth: 2, grace: 0, endurance: 2, territory: 1, loyalty: 1, mystery: 2, intelligence: 4, verticality: 0, surge: 3, majesty: 0, corruption: 4 } },
    { slug: "nonstiti", name: "Nonstiti", href: "#creatures-fiche-nonstiti", image: buildMediaPath("creatures", "Nonstiti.png"), intro: "Tu es rapide, vif, impossible à fixer longtemps. Tu participes à un regard collectif plus qu'à une domination solitaire.", traits: { aggression: 1, stealth: 2, grace: 0, endurance: 1, territory: 3, loyalty: 5, mystery: 0, intelligence: 3, verticality: 2, surge: 4, majesty: 0, corruption: 0 } },
    { slug: "parasite", name: "Parasite", href: "#creatures-fiche-parasite", image: buildMediaPath("creatures", "Parasite.png"), intro: "Tu appartiens à ce qui agit de l'intérieur. Tu es inquiétant non par la taille, mais par l'altération que tu promets.", traits: { aggression: 0, stealth: 4, grace: 0, endurance: 1, territory: 0, loyalty: 0, mystery: 5, intelligence: 1, verticality: 0, surge: 1, majesty: 0, corruption: 5 } },
    { slug: "poiscaille", name: "Poiscaille", href: "#creatures-fiche-poiscaille", image: buildMediaPath("creatures", "Poiscaille.png"), intro: "Tu frappes vite, par vagues, depuis les bords et les zones humides. Tu es fait pour l'usure et la saturation.", traits: { aggression: 3, stealth: 1, grace: 0, endurance: 1, territory: 2, loyalty: 4, mystery: 0, intelligence: 1, verticality: 0, surge: 5, majesty: 0, corruption: 1 } },
    { slug: "serpensouffre", name: "Serpensouffre", href: "#creatures-fiche-serpensouffre", image: buildMediaPath("creatures", "Serpensouffre.png"), intro: "Tu règnes depuis le haut, dans la frappe verticale et l'impression d'un danger qui tombe du ciel sans prévenir.", traits: { aggression: 4, stealth: 2, grace: 1, endurance: 2, territory: 3, loyalty: 1, mystery: 2, intelligence: 1, verticality: 5, surge: 4, majesty: 1, corruption: 0 } }
  ];

  return {
    character: {
      traitLabels,
      questions,
      results
    },
    creature: {
      traitLabels: creatureTraitLabels,
      questions: creatureQuestions,
      results: creatureResults
    }
  };
}
