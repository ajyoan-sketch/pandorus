const heritageWords = [
  {
    text: "Le plus beau papillon n'est qu'une chenille habillée.",
    source: "Proverbe français",
    family: "Héritage"
  },
  {
    text: "En se posant sur la branche, le papillon craint de la briser.",
    source: "Proverbe arménien",
    family: "Héritage"
  },
  {
    text: "Le papillon blanc annonce le printemps.",
    source: "Proverbe français",
    family: "Héritage"
  },
  {
    text: "Pour le papillon, la propriété, c'est le vol.",
    source: "Albert Willemetz",
    family: "Héritage"
  },
  {
    text: "Papillon, ce billet doux plié cherche une adresse de fleur.",
    source: "Jules Renard",
    family: "Héritage"
  },
  {
    text: "Les papillons ne sont que des fleurs envolées.",
    source: "George Sand",
    family: "Héritage"
  },
  {
    text: "Suis-je un homme rêvant qu'il est papillon ?",
    source: "Zhuangzi",
    family: "Héritage"
  },
  {
    text: "La promesse de la chenille n'engage pas le papillon.",
    source: "André Gide",
    family: "Héritage"
  },
  {
    text: "Vous ne toucherez point un papillon sans faire tomber la poudre de ses ailes.",
    source: "Octave Pirmez",
    family: "Héritage"
  },
  {
    text: "Le papillon aime la fleur sans lui demander de rester.",
    source: "Écho ancien",
    family: "Héritage"
  },
  {
    text: "Le papillon trouve sa route là où la lumière hésite.",
    source: "Voix ancienne",
    family: "Héritage"
  },
  {
    text: "Une aile légère peut annoncer une saison entière.",
    source: "Tradition du jardin",
    family: "Héritage"
  },
  {
    text: "Le papillon passe; la fleur se souvient.",
    source: "Écho ancien",
    family: "Héritage"
  },
  {
    text: "La branche la plus fragile apprend au papillon la douceur.",
    source: "Parole de seuil",
    family: "Héritage"
  },
  {
    text: "Le papillon ne garde rien, et c'est pour cela qu'il traverse tout.",
    source: "Voix ancienne",
    family: "Héritage"
  },
  {
    text: "Qui poursuit le papillon oublie parfois de voir le jardin.",
    source: "Parole de jardin",
    family: "Héritage"
  },
  {
    text: "La chenille travaille où le papillon dansera.",
    source: "Tradition",
    family: "Héritage"
  },
  {
    text: "Le papillon touche à peine la terre qu'il lui laisse déjà une mémoire.",
    source: "Écho ancien",
    family: "Héritage"
  },
  {
    text: "Une aile suffit parfois à montrer que le vent n'est pas seul.",
    source: "Voix ancienne",
    family: "Héritage"
  },
  {
    text: "Le papillon ne possède pas le jour; il lui emprunte un passage.",
    source: "Tradition du vivant",
    family: "Héritage"
  }
];

const pandorusWords = [
  {
    text: "Le papillon ne traverse pas Pandorus, il l'écoute.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Quand les papillons se taisent, le monde commence à se perdre.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Là où un papillon hésite, le vivant retient son souffle.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Un papillon suffit parfois à dire que la lumière tient encore.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Ce que le monde oublie, les papillons le portent encore un instant.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Les papillons ne décorent pas Pandorus; ils en soutiennent la respiration.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Quand un papillon tombe, une région entière peut perdre son accord.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Les ailes les plus fines gardent parfois les charges les plus anciennes.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Le papillon voit d'abord la faille que l'homme n'appelle pas encore blessure.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Un battement d'aile peut être une veille quand tout le reste s'endort.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Le papillon n'avertit pas par bruit, mais par désaccord.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Dans Pandorus, un papillon absent pèse parfois plus qu'une bête visible.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Celui qui suit les papillons marche plus près de la vérité vivante.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "La première alarme de Pandorus n'est pas un cri, c'est un papillon vidé.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Le papillon annonce moins un chemin qu'une qualité du monde.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Il existe des terres qui meurent en silence; les papillons les sentent d'abord.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Quand une aile se ferme dans Pandorus, c'est souvent un seuil qui se durcit.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Les papillons ne jugent pas le monde; ils révèlent son état.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Le vivant parle souvent par ses formes les plus légères.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Il suffit d'une aile troublée pour comprendre qu'une terre n'est plus en paix.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Un papillon vivant est parfois une promesse; un papillon vide, déjà une accusation.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "La mémoire du monde aime les ailes parce qu'elles touchent sans posséder.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Les papillons donnent une forme visible à ce que Pandorus ressent encore en secret.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Dans les terres encore justes, les papillons ne pressent rien; ils circulent.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Là où le papillon se détourne, la route n'est jamais tout à fait saine.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Un papillon n'est pas fragile quand le monde a besoin de lui.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Le souffle de Pandorus se mesure parfois à la grâce d'une aile intacte.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Les papillons portent les nouvelles du vivant avant les cartes et avant les rois.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Ce qui altère les papillons finit toujours par chercher davantage qu'eux.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "À Pandorus, le papillon n'est pas un détail: il est une mesure.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Un monde qui n'écoute plus ses papillons finit par ne plus s'entendre lui-même.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Les ailes savent parfois mieux que les épées de quel côté le monde bascule.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Le papillon ne sauve pas seul; il indique où il faut encore tenir.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Quand un territoire respire juste, les papillons n'ont pas besoin d'expliquer leur présence.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Les papillons ne mentent pas au vivant; ils changent quand lui change.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Une aile claire peut encore tenir tête à une obscurité entière si le monde la soutient.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Le papillon ne domine rien, et c'est peut-être pour cela qu'il perçoit tant.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Ce que la violence écrase d'abord, les papillons le pleurent longtemps.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Les plus anciennes mémoires de Pandorus savent encore battre des ailes.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  },
  {
    text: "Un papillon ne porte pas le monde entier; il indique seulement où il commence à céder.",
    source: "Archives de Pandorus",
    family: "Pandorus"
  }
];

export const dailyWords = [...heritageWords, ...pandorusWords];
