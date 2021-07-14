const heroes = [
  {
    response: 'success',
    id: '27',
    name: 'Angela',
    powerstats: {
      intelligence: 'null',
      strength: '97',
      speed: 'null',
      durability: 'null',
      power: 'null',
      combat: 'null',
    },
    biography: {
      'full-name': '',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': '-',
      'first-appearance': '-',
      publisher: 'Image Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Female',
      race: 'null',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': '-',
      'hair-color': '-',
    },
    work: { occupation: '-', base: '-' },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1070.jpg',
    },
  },
  {
    response: 'success',
    id: '60',
    name: 'Bane',
    powerstats: {
      intelligence: '88',
      strength: '38',
      speed: '23',
      durability: '56',
      power: '51',
      combat: '95',
    },
    biography: {
      'full-name': '',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': '-',
      'first-appearance': 'Batman: Vengeance of Bane #1 (January, 1993)',
      publisher: 'DC Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'8", '203 cm'],
      weight: ['400 lb', '180 kg'],
      'eye-color': '-',
      'hair-color': '-',
    },
    work: { occupation: '-', base: 'Santa Prisca' },
    connections: {
      'group-affiliation':
        'Suicide Squad, The Secret Society of Super Villains',
      relatives: 'King Snake (father)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/637.jpg',
    },
  },
  {
    response: 'success',
    id: '6',
    name: 'Absorbing Man',
    powerstats: {
      intelligence: '38',
      strength: '80',
      speed: '25',
      durability: '100',
      power: '98',
      combat: '64',
    },
    biography: {
      'full-name': 'Carl Creel',
      'alter-egos': 'No alter egos found.',
      aliases: [
        'Greithoth',
        '"Crusher" Creel',
        'Rocky Davis',
        'Dynamite Davis',
        'Lightningbolt',
        'Prisoner #24957',
      ],
      'place-of-birth': 'New York City, New York',
      'first-appearance': 'Daredevil #1 (April, 1964) (As Rocky Davis)',
      publisher: 'Marvel Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'4", '193 cm'],
      weight: ['270 lb', '122 kg'],
      'eye-color': 'Blue',
      'hair-color': 'No Hair',
    },
    work: {
      occupation: 'Professional criminal; former professional boxer',
      base: '-',
    },
    connections: {
      'group-affiliation':
        'Masters of Evil, Lethal Legion; formerly Worthy, Frightful Four: former agent of Loki and They Who Wield Power',
      relatives:
        'Mary MacPherran (Titania) (wife); Jerry Sledge (son); Rockwell "Rocky" Davis (Hi-Llite) (cousin)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1448.jpg',
    },
  },
  {
    response: 'success',
    id: '312',
    name: 'Hawk',
    powerstats: {
      intelligence: '38',
      strength: '38',
      speed: '35',
      durability: '95',
      power: '43',
      combat: '42',
    },
    biography: {
      'full-name': 'Henry Hall',
      'alter-egos': 'No alter egos found.',
      aliases: ['Monarch', 'Extant'],
      'place-of-birth': '-',
      'first-appearance': 'Showcase #75 (June, 1968)',
      publisher: 'DC Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["6'1", '185 cm'],
      weight: ['197 lb', '89 kg'],
      'eye-color': 'Red',
      'hair-color': 'Brown',
    },
    work: { occupation: '-', base: '-' },
    connections: {
      'group-affiliation':
        'Black Lantern Corps, Teen Titans, Hawk and Dove, Titans West',
      relatives:
        'Don Hall (brother, deceased), Irwin Hall (father), Rae Penfield (mother), James Penfield (uncle)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1382.jpg',
    },
  },
  {
    response: 'success',
    id: '269',
    name: 'Franklin Richards',
    powerstats: {
      intelligence: '63',
      strength: '80',
      speed: '50',
      durability: '60',
      power: '100',
      combat: '50',
    },
    biography: {
      'full-name': 'Franklin  Richards',
      'alter-egos': 'No alter egos found.',
      aliases: [
        'Franklin Benjamin',
        'Tattletale',
        'Psi-Lord',
        'Ego-Spawn',
        'Avatar',
      ],
      'place-of-birth': 'New York, New York',
      'first-appearance': 'Fantastic Four Annual #6',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Mutant',
      height: ["4'8", '142 cm'],
      weight: ['100 lb', '45 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Blond',
    },
    work: {
      occupation: 'Student',
      base: 'Baxter Building, New York, New York (formerly) Four Freedoms Plaza; Pier 4; Massachusetts Academy',
    },
    connections: {
      'group-affiliation':
        'Future Foundation; formerly Power Pack, Generation X, Daydreamers',
      relatives:
        'Reed Richards (Mister Fantastic, father), Susan Storm Richards (Invisible Woman, mother), Valeria Richards (sister), Jonathan Storm (Human Torch, uncle), Nathaniel Richards (paternal grandfather), Franklin Storm (maternal grandfather, deceased), Evelyn Richards, Mary Storm (grandmothers (paternal and maternal respectively), deceased), Benjamin J. Grimm (Thing, godfather), Alicia Masters (godmother).',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/63.jpg',
    },
  },
  {
    response: 'success',
    id: '12',
    name: 'Air-Walker',
    powerstats: {
      intelligence: '50',
      strength: '85',
      speed: '100',
      durability: '85',
      power: '100',
      combat: '40',
    },
    biography: {
      'full-name': 'Gabriel Lan',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth':
        'Xandar, a planet in the Tranta system, Andromeda galaxy',
      'first-appearance': 'Fantastic Four #120',
      publisher: 'Marvel Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["6'2", '188 cm'],
      weight: ['240 lb', '108 kg'],
      'eye-color': 'Blue',
      'hair-color': 'White',
    },
    work: {
      occupation: 'Former starship captain, Herald of Galactus',
      base: '-',
    },
    connections: {
      'group-affiliation': 'Former member of Nova Corps, Heralds of Galactus',
      relatives: '-',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1358.jpg',
    },
  },
  {
    response: 'success',
    id: '4',
    name: 'Abomination',
    powerstats: {
      intelligence: '63',
      strength: '80',
      speed: '53',
      durability: '90',
      power: '62',
      combat: '95',
    },
    biography: {
      'full-name': 'Emil Blonsky',
      'alter-egos': 'No alter egos found.',
      aliases: ['Agent R-7', 'Ravager of Worlds'],
      'place-of-birth': 'Zagreb, Yugoslavia',
      'first-appearance': 'Tales to Astonish #90',
      publisher: 'Marvel Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'Human / Radiation',
      height: ["6'8", '203 cm'],
      weight: ['980 lb', '441 kg'],
      'eye-color': 'Green',
      'hair-color': 'No Hair',
    },
    work: { occupation: 'Ex-Spy', base: 'Mobile' },
    connections: {
      'group-affiliation':
        'former member of the crew of the Andromeda Starship, ally of the Abominations and Forgotten',
      relatives: 'Nadia Dornova Blonsky (wife, separated)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1.jpg',
    },
  },
  {
    response: 'success',
    id: '119',
    name: 'Blob',
    powerstats: {
      intelligence: '10',
      strength: '83',
      speed: '23',
      durability: '95',
      power: '28',
      combat: '72',
    },
    biography: {
      'full-name': 'Frederick J. Dukes',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': 'Lubbock, Texas',
      'first-appearance': 'X-Men #3 (1964)',
      publisher: 'Marvel Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["5'10", '178 cm'],
      weight: ['510 lb', '230 kg'],
      'eye-color': 'Brown',
      'hair-color': 'Brown',
    },
    work: {
      occupation:
        'Former criminal, terrorist, government agent, carnival performer',
      base: '-',
    },
    connections: {
      'group-affiliation':
        "X-Cell, formerly X-Corps, Magneto's army, Brotherhood Of Evil Mutants, Freedom Force, Factor Three, former partner of Unus",
      relatives: '-',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1119.jpg',
    },
  },
  {
    response: 'success',
    id: '323',
    name: 'Hellcat',
    powerstats: {
      intelligence: '63',
      strength: '11',
      speed: '33',
      durability: '45',
      power: '46',
      combat: '70',
    },
    biography: {
      'full-name': 'Patricia Walker',
      'alter-egos': 'No alter egos found.',
      aliases: ['Patsy Walker', 'Patricia Hellstrom', 'The Cat'],
      'place-of-birth': 'Centerville, CA USA',
      'first-appearance': 'Avengers #144 (February, 1976)',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Female',
      race: 'Human',
      height: ["5'8", '173 cm'],
      weight: ['135 lb', '61 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Red',
    },
    work: {
      occupation: 'Housemaker, model, adventurer, supernatural investigator',
      base: 'San Francisco, CA USA',
    },
    connections: {
      'group-affiliation':
        'Formerly Alaskan-based Initiative agent, Lady Liberators, Avengers, Defenders, Legion of the Unliving',
      relatives:
        'Joshua Walker (father), Dorothy Walker (mother, deceased), Sophia (maternal aunt), Bea (step-mother), Mickey Walker (brother), Robert "Buzz" Baxter (aka Mad-Dog, ex-husband), Daimon Hellstrom (aka Hellstorm, ex-husband), Percy Walker',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/79.jpg',
    },
  },
  {
    response: 'success',
    id: '79',
    name: 'Beta Ray Bill',
    powerstats: {
      intelligence: '63',
      strength: '80',
      speed: '35',
      durability: '95',
      power: '100',
      combat: '84',
    },
    biography: {
      'full-name': 'Beta Ray Bill (translation of his Korbinite name)',
      'alter-egos': 'No alter egos found.',
      aliases: ['Beta Ray Thor', 'Simon Walters'],
      'place-of-birth': 'Burning Galaxy',
      'first-appearance': 'Thor #337',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["6'7", '201 cm'],
      weight: ['480 lb', '216 kg'],
      'eye-color': '-',
      'hair-color': 'No Hair',
    },
    work: {
      occupation: 'Guardian of the Korbinite race',
      base: 'currently New York City, formerly Asgard, formerly the fleet of Korbinite ships.',
    },
    connections: {
      'group-affiliation': 'ally of the Asgardians, Thor Corps, Star Masters',
      relatives: '-',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/28.jpg',
    },
  },
  {
    response: 'success',
    id: '139',
    name: 'Brundlefly',
    powerstats: {
      intelligence: '69',
      strength: '32',
      speed: '25',
      durability: '40',
      power: '27',
      combat: '15',
    },
    biography: {
      'full-name': 'Seth Brundle',
      'alter-egos': 'No alter egos found.',
      aliases: ['The Fly'],
      'place-of-birth': '-',
      'first-appearance': 'The Fly (1986)',
      publisher: '',
      alignment: '-',
    },
    appearance: {
      gender: 'Male',
      race: 'Mutant',
      height: ["6'4", '193 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': '-',
      'hair-color': '-',
    },
    work: { occupation: 'Scientist', base: '-' },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/10642.jpg',
    },
  },
  {
    response: 'success',
    id: '95',
    name: 'Black Adam',
    powerstats: {
      intelligence: '88',
      strength: '100',
      speed: '92',
      durability: '100',
      power: '100',
      combat: '56',
    },
    biography: {
      'full-name': 'Teth-Adam',
      'alter-egos': 'No alter egos found.',
      aliases: ['Hassan Bari', 'Theo Adam', 'Mighty Adam', 'Khem-Adam'],
      'place-of-birth': 'Kahndaq, Egypt',
      'first-appearance': 'Marvel Family #1 (December, 1945)',
      publisher: 'DC Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["6'3", '191 cm'],
      weight: ['250 lb', '113 kg'],
      'eye-color': 'Brown',
      'hair-color': 'Black',
    },
    work: {
      occupation: '-',
      base: 'Mobile; Formerly Kahndaq; Fawcett City; New York City',
    },
    connections: {
      'group-affiliation':
        'None; Formerly the Black Marvel Family, Society of Villains, Injustice Society, Justice Society of America',
      relatives:
        "Shiruta (wife, deceased), Gon and Hurut (sons, deceased) Theo Adam (descendant, currently in control of his body), Sarah Primm (descendant, Theo's sister), Adrianna Tomaz (wife. deceased), Amon Tomaz (brother-in-law, deceased)",
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/643.jpg',
    },
  },
  {
    response: 'success',
    id: '1',
    name: 'A-Bomb',
    powerstats: {
      intelligence: '38',
      strength: '100',
      speed: '17',
      durability: '80',
      power: '24',
      combat: '64',
    },
    biography: {
      'full-name': 'Richard Milhouse Jones',
      'alter-egos': 'No alter egos found.',
      aliases: ['Rick Jones'],
      'place-of-birth': 'Scarsdale, Arizona',
      'first-appearance': 'Hulk Vol 2 #2 (April, 2008) (as A-Bomb)',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'8", '203 cm'],
      weight: ['980 lb', '441 kg'],
      'eye-color': 'Yellow',
      'hair-color': 'No Hair',
    },
    work: {
      occupation: 'Musician, adventurer, author; formerly talk show host',
      base: '-',
    },
    connections: {
      'group-affiliation':
        'Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom',
      relatives:
        'Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg',
    },
  },
  {
    response: 'success',
    id: '131',
    name: 'Boomer',
    powerstats: {
      intelligence: 'null',
      strength: 'null',
      speed: 'null',
      durability: 'null',
      power: 'null',
      combat: 'null',
    },
    biography: {
      'full-name': '',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': '-',
      'first-appearance': '-',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Female',
      race: 'null',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': '-',
      'hair-color': '-',
    },
    work: { occupation: '-', base: '-' },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/259.jpg',
    },
  },
  {
    response: 'success',
    id: '190',
    name: 'Crimson Dynamo',
    powerstats: {
      intelligence: 'null',
      strength: '65',
      speed: 'null',
      durability: 'null',
      power: 'null',
      combat: 'null',
    },
    biography: {
      'full-name': 'Anton Vanko',
      'alter-egos': 'No alter egos found.',
      aliases: ['Krashni Denamit'],
      'place-of-birth': '-',
      'first-appearance': 'Tales of Suspense #46 (Oct 1963)',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["5'11", '180 cm'],
      weight: ['230 lb', '104 kg'],
      'eye-color': 'Brown',
      'hair-color': 'No Hair',
    },
    work: {
      occupation: 'Scientist',
      base: 'Stark Industries plant, Long Island, New York',
    },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1093.jpg',
    },
  },
  {
    response: 'success',
    id: '88',
    name: 'Bird-Brain',
    powerstats: {
      intelligence: '25',
      strength: '10',
      speed: '35',
      durability: '28',
      power: '21',
      combat: '42',
    },
    biography: {
      'full-name': '',
      'alter-egos': 'No alter egos found.',
      aliases: ['Bird-Boy'],
      'place-of-birth': '-',
      'first-appearance': 'The New Mutants #56 (October, 1987)',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: '-',
      race: 'null',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': '-',
      'hair-color': '-',
    },
    work: { occupation: '-', base: '-' },
    connections: {
      'group-affiliation': 'New Mutants, Ani-Mate',
      relatives: '-',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/240.jpg',
    },
  },
  {
    response: 'success',
    id: '103',
    name: 'Black Lightning',
    powerstats: {
      intelligence: '50',
      strength: '11',
      speed: '53',
      durability: '28',
      power: '70',
      combat: '75',
    },
    biography: {
      'full-name': 'Jefferson Pierce',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': '-',
      'first-appearance': 'Black Lightning #1 (April 1977)',
      publisher: 'DC Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["6'1", '185 cm'],
      weight: ['200 lb', '90 kg'],
      'eye-color': 'Brown',
      'hair-color': 'No Hair',
    },
    work: {
      occupation:
        'Crime Fighter, High School teacher, Former gold-medal-winning Olympic Decathlete, formerly Secretary of Education under Presidents Pete Ross and Lex Luthor.',
      base: 'Chicago, Illinois; Metropolis, The Hall & The JLA Watchtower',
    },
    connections: {
      'group-affiliation':
        "Justice League of America (current), formerly Presidential Cabinet, The Outsiders (sporadically), Batman's Brother Eye attack group",
      relatives:
        'Unnamed father (deceased), Lynn Stewart (ex-wife), Joanna Pierce (niece, deceased), Anissa Pierce (Thunder, daughter), Jennifer Pierce (Lightning, daughter)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1128.jpg',
    },
  },
  {
    response: 'success',
    id: '18',
    name: 'Alien',
    powerstats: {
      intelligence: '50',
      strength: '28',
      speed: '42',
      durability: '90',
      power: '57',
      combat: '60',
    },
    biography: {
      'full-name': 'Xenomorph',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': 'Your chest :)',
      'first-appearance': 'Alien (1979)',
      publisher: 'Dark Horse Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'Xenomorph XX121',
      height: ["8'0", '244 cm'],
      weight: ['375 lb', '169 kg'],
      'eye-color': '-',
      'hair-color': 'No Hair',
    },
    work: { occupation: '-', base: '-' },
    connections: {
      'group-affiliation': '-',
      relatives: 'Alien Queen (mother)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/10449.jpg',
    },
  },
  {
    response: 'success',
    id: '591',
    name: 'Shocker',
    powerstats: {
      intelligence: '63',
      strength: '10',
      speed: '23',
      durability: '70',
      power: '79',
      combat: '56',
    },
    biography: {
      'full-name': 'Herman Schultz',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': '-',
      'first-appearance': 'Amazing Spider-Man #46',
      publisher: 'Marvel Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["5'9", '175 cm'],
      weight: ['175 lb', '79 kg'],
      'eye-color': 'Brown',
      'hair-color': 'Brown',
    },
    work: {
      occupation: 'Professional thief, hired assassin',
      base: 'New York City, New York',
    },
    connections: {
      'group-affiliation':
        'Formerly Masters of Evil, Sinister Syndicate, Sinister Seven, Sinister Twelve',
      relatives: 'Mr. & Mrs. Schultz (parents)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/19.jpg',
    },
  },
  {
    response: 'success',
    id: '566',
    name: 'Rocket Raccoon',
    powerstats: {
      intelligence: '50',
      strength: '5',
      speed: '23',
      durability: '28',
      power: '28',
      combat: '64',
    },
    biography: {
      'full-name': 'Rocket Raccoon',
      'alter-egos': 'No alter egos found.',
      aliases: ['Sharpshooting Space Racoon', 'Rocky Raccoon', 'Ranger Rocket'],
      'place-of-birth': '-',
      'first-appearance': 'Marvel Preview #7 (June, 1976)',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Animal',
      height: ["4'0", '122 cm'],
      weight: ['55 lb', '25 kg'],
      'eye-color': 'Brown',
      'hair-color': 'Brown',
    },
    work: {
      occupation:
        'Law enforcement officer, security guard, member of the Guardians of the Galaxy',
      base: "Knowhere; Formerly Hala, mobile aboard the Rakk'n'Ruin Halfworld, Keystone Quadrant",
    },
    connections: {
      'group-affiliation':
        "Guardians of the Galaxy; Formerly Star-Lord's unnamed commando team",
      relatives: 'Lylla (mate)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/10010.jpg',
    },
  },
  {
    response: 'success',
    id: '421',
    name: 'Mach-IV',
    powerstats: {
      intelligence: '75',
      strength: '36',
      speed: '60',
      durability: '84',
      power: '60',
      combat: '56',
    },
    biography: {
      'full-name': 'Abner Jenkins',
      'alter-egos': 'No alter egos found.',
      aliases: ['Beetle', 'MACH-I', 'MACH-II', 'MACH-III', 'Matthew'],
      'place-of-birth': 'Baltimore, Maryland',
      'first-appearance':
        '(Beetle) Strange Tales #123 (1964); (MACH-I) Incredible Hulk #449 (1997); (MACH-II) Thunderbolts #37 (2000); (MACH-III) Thunderbolts #57 (2001); (MACH-IV) New Thunderbolts #1 (2005)',
      publisher: 'Marvel Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["5'11", '180 cm'],
      weight: ['175 lb', '79 kg'],
      'eye-color': 'Brown',
      'hair-color': 'Brown',
    },
    work: {
      occupation:
        'Adventurer; former master mechanic, professional criminal, mercenary',
      base: '-',
    },
    connections: {
      'group-affiliation':
        "formerly Thunderbolts, Masters of Evil, Sinister Syndicate, Justin Hammer's Hit Squad, Maggia, Sinister Seven, Commission on Superhuman Activities, Defenders impersonators, Burton Canyon Police Department",
      relatives: '-',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/370.jpg',
    },
  },
  {
    response: 'success',
    id: '25',
    name: 'Angel Dust',
    powerstats: {
      intelligence: '38',
      strength: '55',
      speed: '23',
      durability: '42',
      power: '17',
      combat: '30',
    },
    biography: {
      'full-name': 'Christina',
      'alter-egos': 'No alter egos found.',
      aliases: ['Angel', 'Dusty'],
      'place-of-birth': '-',
      'first-appearance': 'Morlocks #1',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Female',
      race: 'Mutant',
      height: ["5'5", '165 cm'],
      weight: ['126 lb', '57 kg'],
      'eye-color': 'Yellow',
      'hair-color': 'Black',
    },
    work: { occupation: '-', base: 'Chicago, Illinois' },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/10405.jpg',
    },
  },
  {
    response: 'success',
    id: '570',
    name: 'Sabretooth',
    powerstats: {
      intelligence: '56',
      strength: '48',
      speed: '38',
      durability: '90',
      power: '50',
      combat: '100',
    },
    biography: {
      'full-name': 'Victor Creed',
      'alter-egos': 'No alter egos found.',
      aliases: ['Slasher', 'El Tigre'],
      'place-of-birth': '-',
      'first-appearance': 'Iron Fist #14 (August, 1977)',
      publisher: 'Marvel Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'Mutant',
      height: ["6'6", '198 cm'],
      weight: ['380 lb', '171 kg'],
      'eye-color': 'Amber',
      'hair-color': 'Blond',
    },
    work: {
      occupation: 'mercenary, professional criminal, assassin, serial killer',
      base: 'mobile',
    },
    connections: {
      'group-affiliation': 'Weapon X, Marauders, Brotherhood of Evil Mutants',
      relatives: 'Grayden Creed (son; deceased)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/17.jpg',
    },
  },
  {
    response: 'success',
    id: '254',
    name: 'Feral',
    powerstats: {
      intelligence: '38',
      strength: '28',
      speed: '45',
      durability: '28',
      power: '27',
      combat: '70',
    },
    biography: {
      'full-name': 'Maria Callasantos',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': 'Place of birth unknown',
      'first-appearance': 'NEW MUTANTS #99',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: '-',
      race: 'null',
      height: ["5'9", '175 cm'],
      weight: ['110 lb', '50 kg'],
      'eye-color': 'Yellow (without irises)',
      'hair-color': 'Orange / White',
    },
    work: {
      occupation: 'Formerly Adventurer, Terrorist',
      base: 'Base of operations unknown',
    },
    connections: {
      'group-affiliation':
        'Formerly Morlocks, X-Force, Mutant Liberation Front',
      relatives:
        'Mr. Callasantos (father, first name unrevealed, deceased), Marcella Callasantos (mother, deceased), Lucia Callasantos (Thornn, sister), Matteo Callasantos (brother, deceased), Carolina Callasantos (sister, deceased)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/57.jpg',
    },
  },
  {
    response: 'success',
    id: '535',
    name: 'Question',
    powerstats: {
      intelligence: '81',
      strength: '14',
      speed: '27',
      durability: '35',
      power: '20',
      combat: '80',
    },
    biography: {
      'full-name': 'Charles Victor Szasz',
      'alter-egos': 'No alter egos found.',
      aliases: ['Vic Sage'],
      'place-of-birth': '-',
      'first-appearance': 'Blue Beetle (Charlton) Vol 4 #1 (June, 1967)',
      publisher: 'DC Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'2", '188 cm'],
      weight: ['185 lb', '83 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Blond',
    },
    work: {
      occupation: 'Former Television Investigative Journalist',
      base: 'Hub City; Chicago, Gotham City, Metropolis',
    },
    connections: {
      'group-affiliation': 'Formerly L.A.W., JLA, Black Lantern Corps',
      relatives: '-',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/760.jpg',
    },
  },
  {
    response: 'success',
    id: '7',
    name: 'Adam Monroe',
    powerstats: {
      intelligence: '63',
      strength: '10',
      speed: '12',
      durability: '100',
      power: '100',
      combat: '64',
    },
    biography: {
      'full-name': '',
      'alter-egos': 'No alter egos found.',
      aliases: ['Takezo Kensei', 'Richard Sanders'],
      'place-of-birth': '-',
      'first-appearance': 'Heroes S02E01 - Four Months Later...',
      publisher: 'NBC - Heroes',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Blond',
    },
    work: {
      occupation:
        'former samurai swordsman, former British mercenary commander, former soldier in the Confederate Army',
      base: 'U.S.; formerly Diedenshausen, Germany; Milan, Italy; Paris, France; Japan; England; Atlanta, GA; Montreal, Canada',
    },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1026.jpg',
    },
  },
  {
    response: 'success',
    id: '287',
    name: 'Godzilla',
    powerstats: {
      intelligence: '44',
      strength: '100',
      speed: '54',
      durability: '100',
      power: '100',
      combat: '20',
    },
    biography: {
      'full-name': 'Gojira',
      'alter-egos': 'No alter egos found.',
      aliases: [
        'Legendary Godzilla',
        'King of the Monsters',
        'Gigantis',
        'Monster Zero-One',
        'God of Destruction',
        'Alpha Predator',
      ],
      'place-of-birth': '-',
      'first-appearance': 'Godzilla (1954)',
      publisher: '',
      alignment: 'bad',
    },
    appearance: {
      gender: '-',
      race: 'Kaiju',
      height: ["354'4", '108.0 meters'],
      weight: ['200000000 lb', '90,000 tons'],
      'eye-color': '-',
      'hair-color': '-',
    },
    work: { occupation: '-', base: '-' },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/10590.jpg',
    },
  },
  {
    response: 'success',
    id: '690',
    name: 'Venompool',
    powerstats: {
      intelligence: '69',
      strength: '57',
      speed: '63',
      durability: '100',
      power: '100',
      combat: '100',
    },
    biography: {
      'full-name': 'Wade Wilson',
      'alter-egos': 'Deadpool, Evil Deadpool',
      aliases: ['Deadpool'],
      'place-of-birth': '-',
      'first-appearance':
        'What If? Iron Man: Demon in an Armor #1 (February, 2011)',
      publisher: 'Deadpool',
      alignment: '-',
    },
    appearance: {
      gender: 'Male',
      race: 'Symbiote',
      height: ["7'5", '226 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': '-',
      'hair-color': '-',
    },
    work: { occupation: 'Conqueror; Adventurer', base: '-' },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/10618.jpg',
    },
  },
  {
    response: 'success',
    id: '461',
    name: 'Mister Zsasz',
    powerstats: {
      intelligence: '88',
      strength: '22',
      speed: '33',
      durability: '28',
      power: '18',
      combat: '85',
    },
    biography: {
      'full-name': 'Victor Zsasz',
      'alter-egos': 'No alter egos found.',
      aliases: ['Mr Zsasz'],
      'place-of-birth': '-',
      'first-appearance': '-',
      publisher: 'DC Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Blond',
    },
    work: { occupation: 'Serial Killer', base: '-' },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1486.jpg',
    },
  },
  {
    response: 'success',
    id: '98',
    name: 'Black Canary',
    powerstats: {
      intelligence: '63',
      strength: '8',
      speed: '33',
      durability: '15',
      power: '45',
      combat: '80',
    },
    biography: {
      'full-name': 'Dinah Drake Lance',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': '-',
      'first-appearance': 'Flash Comics #86 (August, 1947)',
      publisher: 'DC Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Female',
      race: 'Human',
      height: ["5'5", '165 cm'],
      weight: ['128 lb', '58 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Blond',
    },
    work: {
      occupation: 'Florist, former private investigator',
      base: 'Gotham City, Park City',
    },
    connections: {
      'group-affiliation': 'Justice Society of America',
      relatives:
        'Richard Drake (father), Lawrence Lance (husband), Dinah Laurel Lance (Black Canary, daughter), Oliver Queen (Green Arrow, son-in-law)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/644.jpg',
    },
  },
  {
    response: 'success',
    id: '532',
    name: 'Pyro',
    powerstats: {
      intelligence: '38',
      strength: '10',
      speed: '12',
      durability: '14',
      power: '54',
      combat: '28',
    },
    biography: {
      'full-name': 'St. John Allerdyce',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': 'Sydney, Australia',
      'first-appearance': '-',
      publisher: 'Marvel Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["5'10", '178 cm'],
      weight: ['150 lb', '68 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Blond',
    },
    work: {
      occupation:
        'Former government agent, terrorist, bodyguard, novelist, journalist',
      base: '-',
    },
    connections: {
      'group-affiliation':
        'Formerly Freedom Force, Brotherhood of Evil Mutants',
      relatives: '-',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/853.jpg',
    },
  },
  {
    response: 'success',
    id: '278',
    name: 'General Zod',
    powerstats: {
      intelligence: '94',
      strength: '100',
      speed: '96',
      durability: '100',
      power: '100',
      combat: '95',
    },
    biography: {
      'full-name': 'Dru-Zod',
      'alter-egos': 'No alter egos found.',
      aliases: ['Dru-Zod (possible first name)'],
      'place-of-birth': 'Krypton',
      'first-appearance': 'Action Comics #845',
      publisher: 'DC Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'Kryptonian',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': 'Black',
      'hair-color': 'Black',
    },
    work: {
      occupation: '-',
      base: 'Formerly Krypton; formerly the Phantom Zone; currently Earth',
    },
    connections: {
      'group-affiliation':
        'Phantom Zone criminals; former member of the Kryptonian Defense Council',
      relatives:
        'Ursa (mate/wife); Lor-Zod (son); Admiral Zod (possible ancestor)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/837.jpg',
    },
  },
  {
    response: 'success',
    id: '101',
    name: 'Black Goliath',
    powerstats: {
      intelligence: 'null',
      strength: 'null',
      speed: 'null',
      durability: 'null',
      power: 'null',
      combat: 'null',
    },
    biography: {
      'full-name': '',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': '-',
      'first-appearance': '-',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': '-',
      'hair-color': '-',
    },
    work: { occupation: '-', base: '-' },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/245.jpg',
    },
  },
  {
    response: 'success',
    id: '578',
    name: 'Scarlet Spider II',
    powerstats: {
      intelligence: '88',
      strength: '55',
      speed: '60',
      durability: '40',
      power: '37',
      combat: '56',
    },
    biography: {
      'full-name': 'Kaine Parker',
      'alter-egos': 'No alter egos found.',
      aliases: ['Tarantula', 'Kaine', 'Ara�a Escarlata'],
      'place-of-birth': '-',
      'first-appearance': 'Web of Spider-Man #119 (December, 1994)',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Clone',
      height: ["6'4", '193 cm'],
      weight: ['250 lb', '113 kg'],
      'eye-color': 'Brown',
      'hair-color': 'Brown',
    },
    work: { occupation: 'Fugitive', base: '-' },
    connections: {
      'group-affiliation': '-',
      relatives:
        'Miles Warren (creator), Peter Parker (Spider-Man, genetic template), Ben Reilly (Scarlet Spider, fellow clone, deceased), Spidercide (fellow clone, allegedly deceased), Guardian (fellow clone, deceased), Jack (fellow clone, deceased)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1536.jpg',
    },
  },
  {
    response: 'success',
    id: '639',
    name: 'Stormtrooper',
    powerstats: {
      intelligence: '10',
      strength: '8',
      speed: '8',
      durability: '15',
      power: '5',
      combat: '20',
    },
    biography: {
      'full-name': '',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': '-',
      'first-appearance': 'Star Wars: Episode IV - A New Hope (1977)',
      publisher: 'George Lucas',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'0", '183 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': '-',
      'hair-color': '-',
    },
    work: { occupation: '-', base: '-' },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/10539.jpg',
    },
  },
  {
    response: 'success',
    id: '481',
    name: 'Namor',
    powerstats: {
      intelligence: '69',
      strength: '95',
      speed: '58',
      durability: '70',
      power: '73',
      combat: '85',
    },
    biography: {
      'full-name': 'Namor McKenzie',
      'alter-egos': 'No alter egos found.',
      aliases: [
        'Imperius Rex',
        'Dr. G.W. Falton',
        'Sub-Mariner',
        '"Subby"',
        'Namor the First',
        'Avenging Son',
        'Old Man',
        'Rex',
        'Joe Pierre',
        'Lord of the Seven Seas',
        'the Scion of the Deep',
        'Phoenix',
      ],
      'place-of-birth': 'Atlantis',
      'first-appearance': 'Motion Picture Funnies Weekly #1 (April, 1939)',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Atlantean',
      height: ["6'2", '188 cm'],
      weight: ['278 lb', '125 kg'],
      'eye-color': 'Grey',
      'hair-color': 'Black',
    },
    work: {
      occupation: 'King of Atlantis, Adventurer; former warrior, commando, CEO',
      base: 'Ultimate Universe; formerly New Atlantis, Utopia, San Francisco Bay, California; Atlantis; Necropolis, Wakanda; occasionally mobile',
    },
    connections: {
      'group-affiliation':
        "Cabal (founder), Invaders, Atlantis; formerly Illuminati, X-Men, Extinction Team, Phoenix Five, Defenders, Osborn's X-Men, Osborn's Cabal, Avengers, All-Winners Squad, Titans Three, Fantastic Four, Oracle Inc., Order, Deep Six (founder and leader); ally o",
      relatives:
        "Elanna (maternal ancestor), Tanas (maternal ancestor), Zartra (maternal ancestor), Orrek (maternal distant relative), Stegor (maternal ancestor), Kamuu (maternal ancestor), Harran (maternal ancestor), Kalen (maternal ancestor), Ossem (maternal ancestor), Balaal (maternal ancestor), Thallo (maternal ancestor), Immanu (maternal great-grandfather-in-law, deceased), Thakorr (maternal grandfather, deceased), Korra (maternal grandmother), Wa-Korr (grandfather-in-law, presumed deceased), Wathan (father-in-law, presumed deceased), Tom Smallwood (father-in-law), Gladys Smallwood (mother-in-law), Zarina (maternal aunt), Namora's father (uncle), Daka (maternal uncle), Brynn (aunt-by-marriage/step-grandmother), Fen (mother, deceased), Leonard McKenzie (father, deceased), Experiment N2 (clone), Lawrence McKenzie (paternal half-brother), Dorma (wife / distant cousin, deceased), Marrina (wife), three unnamed children (by Marrina), Kamar (son, deceased), Black Moray (Leon McKenzie) (paternal half-nephew), Llyron McKenzie (paternal great-nephew), Dan Smallwood (brother-in-law), Namora (maternal cousin), Beemer (maternal cousin), Bobo (maternal cousin), Byrrahna (maternal cousin), Namita (maternal cousin), Daro (maternal cousin), Dara (maternal cousin), Seth (maternal cousin), Argus (maternal cousin), Arkus (maternal cousin), Byrrah (maternal cousin), Namorita (maternal 1st cousin once removed).",
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/137.jpg',
    },
  },
  {
    response: 'success',
    id: '209',
    name: 'Dash',
    powerstats: {
      intelligence: '25',
      strength: '12',
      speed: '92',
      durability: '60',
      power: '20',
      combat: '30',
    },
    biography: {
      'full-name': 'Dashiell Robert Parr',
      'alter-egos': 'No alter egos found.',
      aliases: ['The Fastest Kid on Earth', 'The Dash'],
      'place-of-birth': '-',
      'first-appearance': 'The Incredibles (Movies, 2004)',
      publisher: 'Dark Horse Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["4'0", '122 cm'],
      weight: ['60 lb', '27 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Blond',
    },
    work: { occupation: '-', base: '-' },
    connections: {
      'group-affiliation':
        'Incredible Family (genetic member), National Supers Agency (ties), Edna Mode (receives costumes and gadgets from her), Frozone (long-time friend), Mirage (ally)',
      relatives:
        'Robert Parr (Mr Incredible, father), Helen Parr (Elastigirl, mother), Violet Parr(Violet, sister), , Jack-jack (brother)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/824.jpg',
    },
  },
  {
    response: 'success',
    id: '661',
    name: 'Thunderbird',
    powerstats: {
      intelligence: '50',
      strength: '32',
      speed: '27',
      durability: '32',
      power: '13',
      combat: '70',
    },
    biography: {
      'full-name': 'John Proudstar',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': 'Camp Verde, Arizona',
      'first-appearance': 'Giant-Size X-Men #1 (1975)',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["6'1", '185 cm'],
      weight: ['225 lb', '101 kg'],
      'eye-color': 'Brown',
      'hair-color': 'Black',
    },
    work: {
      occupation: 'Former adventurer, student, Marine',
      base: "Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York",
    },
    connections: {
      'group-affiliation': 'X-Men, formerly US Marine Corp',
      relatives:
        'Unidentified grandfather (deceased), Neal Proudstar (father, deceased), Maria Proudstar (mother, deceased), James Proudstar (Warpath, brother)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/611.jpg',
    },
  },
  {
    response: 'success',
    id: '565',
    name: 'Robin VI',
    powerstats: {
      intelligence: '50',
      strength: '8',
      speed: '25',
      durability: '20',
      power: '17',
      combat: '70',
    },
    biography: {
      'full-name': 'Carrie Kelley',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': 'Gotham City',
      'first-appearance': '-',
      publisher: 'DC Comics',
      alignment: 'neutral',
    },
    appearance: {
      gender: 'Female',
      race: 'Human',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': 'Green',
      'hair-color': 'Red',
    },
    work: { occupation: '-', base: '-' },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/10394.jpg',
    },
  },
  {
    response: 'success',
    id: '575',
    name: 'Savage Dragon',
    powerstats: {
      intelligence: '63',
      strength: '70',
      speed: '54',
      durability: '85',
      power: '66',
      combat: '72',
    },
    biography: {
      'full-name': 'Kurr',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': '-',
      'first-appearance': '-',
      publisher: 'Image Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': '-',
      'hair-color': '-',
    },
    work: { occupation: '-', base: '-' },
    connections: {
      'group-affiliation':
        'Liberty League, Chicago Police Department, Special Operations Strikeforce (S.O.S.)',
      relatives: '-',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1117.jpg',
    },
  },
  {
    response: 'success',
    id: '214',
    name: 'Deadshot',
    powerstats: {
      intelligence: '50',
      strength: '10',
      speed: '23',
      durability: '28',
      power: '55',
      combat: '80',
    },
    biography: {
      'full-name': 'Floyd Lawton',
      'alter-egos': 'No alter egos found.',
      aliases: [
        'Man Who Never Misses',
        'Worlds Finest Assassin',
        'Orlando Furioso',
      ],
      'place-of-birth': '-',
      'first-appearance': 'Batman #59 (June, 1950)',
      publisher: 'DC Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'1", '185 cm'],
      weight: ['202 lb', '91 kg'],
      'eye-color': 'Brown',
      'hair-color': 'Brown',
    },
    work: { occupation: '-', base: '-' },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/670.jpg',
    },
  },
  {
    response: 'success',
    id: '731',
    name: 'Zoom',
    powerstats: {
      intelligence: '50',
      strength: '10',
      speed: '100',
      durability: '28',
      power: '100',
      combat: '28',
    },
    biography: {
      'full-name': 'Hunter Zolomon',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': '-',
      'first-appearance': 'Flash Secret Files #3',
      publisher: 'DC Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["6'1", '185 cm'],
      weight: ['181 lb', '81 kg'],
      'eye-color': 'Red',
      'hair-color': 'Brown',
    },
    work: { occupation: '-', base: 'Keystone City, Kansas' },
    connections: {
      'group-affiliation':
        'Secret Society of Super Villains, formerly Keystone Police Department, F.B.I.',
      relatives: 'Ashley Zolomon (ex-wife)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1384.jpg',
    },
  },
  {
    response: 'success',
    id: '726',
    name: 'Yellowjacket',
    powerstats: {
      intelligence: '88',
      strength: '10',
      speed: '12',
      durability: '28',
      power: '12',
      combat: '14',
    },
    biography: {
      'full-name': 'Hank Pym',
      'alter-egos': 'Ant-Man, Giant-Man, Goliath, Wasp II',
      aliases: ['Hank Pym'],
      'place-of-birth': 'Elmsford, New York',
      'first-appearance':
        '(as Pym) TALES TO ASTONISH #27, (as Ant-Man) TALES TO ASTONISH #35, (as Giant-Man) TALES TO ASTONISH #49, (as Goliath) AVENGERS #28, (as Yellowjacket) AVENGERS #59',
      publisher: 'Ant-Man',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'", '183 cm'],
      weight: ['185 lb', '83 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Blond',
    },
    work: {
      occupation: 'Adventurer, Biochemist, former manager of Avengers Compound',
      base: 'Avengers Mansion, New York City, New York, (formerly)Avengers Compound, Los Angeles, California',
    },
    connections: {
      'group-affiliation':
        'The Avengers, The West Coast Avengers, Secret Defenders',
      relatives:
        'Maria Trovaya (first wife, deceased), Janet Van Dyne a.k.a. The Wasp (second wife, divorced), Ultron (creation, "son"), Jocasta ("first daughter-in-law"), Alkhema ("second daughter-in-law"), Vision ("grandson"), Scarlet Witch (former granddaughter-in-law), Victor Mancha ("grandson")',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/70.jpg',
    },
  },
  {
    response: 'success',
    id: '553',
    name: 'Redeemer III',
    powerstats: {
      intelligence: 'null',
      strength: 'null',
      speed: 'null',
      durability: 'null',
      power: 'null',
      combat: 'null',
    },
    biography: {
      'full-name': 'Eddie Frank',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': '-',
      'first-appearance': '-',
      publisher: 'Image Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': '-',
      'hair-color': '-',
    },
    work: { occupation: '-', base: '-' },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1092.jpg',
    },
  },
  {
    response: 'success',
    id: '146',
    name: 'Callisto',
    powerstats: {
      intelligence: '63',
      strength: '53',
      speed: '23',
      durability: '42',
      power: '52',
      combat: '85',
    },
    biography: {
      'full-name': 'Callisto',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': '-',
      'first-appearance': 'X-MEN (first series) #169',
      publisher: 'Marvel Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Female',
      race: 'null',
      height: ["5'9", '175 cm'],
      weight: ['165 lb', '74 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Black',
    },
    work: {
      occupation: '-',
      base: "The Xavier Institute, Salem Center, Westchester County, New York State, (former) The Alley (beneath Manhattan's surface), X-Factor I's sentient starship",
    },
    connections: {
      'group-affiliation': 'Excalibur, Morlocks, Gene Nation',
      relatives: '-',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/271.jpg',
    },
  },
  {
    response: 'success',
    id: '373',
    name: 'Judge Dredd',
    powerstats: {
      intelligence: '75',
      strength: '18',
      speed: '38',
      durability: '50',
      power: '52',
      combat: '95',
    },
    biography: {
      'full-name': 'Joseph Dredd',
      'alter-egos': 'No alter egos found.',
      aliases: ['The Dead Man', 'Joe'],
      'place-of-birth': 'Mega City One',
      'first-appearance': '2000 AD no. 2 (5 March 1977)',
      publisher: 'Rebellion',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'2", '188 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': '-',
      'hair-color': '-',
    },
    work: { occupation: 'Mega-City Judge', base: 'Mega City One' },
    connections: {
      'group-affiliation': '-',
      relatives: 'Rico Dredd (brother), Judge Kraken (clone), Vienna (niece),',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1163.jpg',
    },
  },
  {
    response: 'success',
    id: '403',
    name: 'Legion',
    powerstats: {
      intelligence: '50',
      strength: '100',
      speed: '42',
      durability: '30',
      power: '100',
      combat: '75',
    },
    biography: {
      'full-name': 'David Haller',
      'alter-egos': 'No alter egos found.',
      aliases: [
        'Jack Wayne',
        'Cyndi',
        'Jemail Karami',
        'Daniel Lucas Haller',
        'Daniel Haller',
        'Rodney',
        'Ian',
        'Lucas',
        'Fanya',
        'Boris',
        'Zachary',
        'Sylvester',
        'God-Mutant',
      ],
      'place-of-birth': 'Israel',
      'first-appearance': 'New Mutants #25 (March, 1985)',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Mutant',
      height: ["5'9", '175 cm'],
      weight: ['130 lb', '59 kg'],
      'eye-color': 'Green / Blue',
      'hair-color': 'Black',
    },
    work: {
      occupation: 'Adventurer, Student',
      base: 'formerly Ruth Aldine\'s mind, Utopia, San Francisco Bay, California; Westcliffe, Colorado; "No-Time"; Moira MacTaggart\'s Mutant Research Center, Muir Island, off the coast of Scotland; Haifa; Paris, France',
    },
    connections: {
      'group-affiliation': 'Formerly X-Men, Muir Island X-Men',
      relatives:
        'Charles Graymalkin (paternal collateral ancestor), Marcia Graymalkin (paternal collateral ancestor), Jonas Graymalkin (paternal collateral ancestor), Brian Xavier (paternal grandfather), Sharon Xavier (paternal grandmother), Kurt Marko (paternal step-grandfather), Cain Marko (paternal step-uncle), Cassandra Nova Xavier (paternal aunt), Charles Xavier (father), Gabrielle Haller (mother), Daniel Shomron (stepfather), Xavier Family (paternal relatives), Ruth Aldine (lover/current body)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/10651.jpg',
    },
  },
  {
    response: 'success',
    id: '338',
    name: 'Hyperion',
    powerstats: {
      intelligence: '88',
      strength: '100',
      speed: '100',
      durability: '95',
      power: '87',
      combat: '80',
    },
    biography: {
      'full-name': 'Mark Milton',
      'alter-egos': 'No alter egos found.',
      aliases: ['Mark Milton', 'Zhib-Ran', 'Mr. Kant', 'Marcus Milton'],
      'place-of-birth': '-',
      'first-appearance': 'Avengers #85',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Eternal',
      height: ["6'0", '183 cm'],
      weight: ['460 lb', '207 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Red',
    },
    work: {
      occupation: 'Adventurer; (Formerly) Cartoonist, government agent',
      base: '-',
    },
    connections: {
      'group-affiliation':
        'Squadron Supreme, (Formerly) Star Masters, ally of Exiles',
      relatives: 'Mr. and Mrs. Hamilton (foster parents)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1286.jpg',
    },
  },
  {
    response: 'success',
    id: '232',
    name: 'Dormammu',
    powerstats: {
      intelligence: '88',
      strength: '95',
      speed: '83',
      durability: '100',
      power: '100',
      combat: '80',
    },
    biography: {
      'full-name': 'Dormammu',
      'alter-egos': 'No alter egos found.',
      aliases: [
        'The Dread One',
        'Eater of Souls',
        'Lord of Chaos',
        'Lord of Darkness',
        'the Great Enigma',
        'Flyx',
      ],
      'place-of-birth': 'Faltine Dimension',
      'first-appearance': 'Strange Tales #126 (1964)',
      publisher: 'Marvel Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["6'1", '185 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': 'Yellow',
      'hair-color': 'No Hair',
    },
    work: { occupation: 'Despot, conqueror', base: '-' },
    connections: {
      'group-affiliation':
        'Lords of the Splinter Realms, Lords of the Netherworlds; allied with Umar, Loki, Doctor Doom, Underchild, others',
      relatives:
        'Sinifer (parent/genitor), Umar (sister), Clea (niece), Doctor Strange (nephew-in-law), Satannish (alleged offspring)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1359.jpg',
    },
  },
  {
    response: 'success',
    id: '300',
    name: 'Green Goblin II',
    powerstats: {
      intelligence: '75',
      strength: '55',
      speed: '37',
      durability: '50',
      power: '44',
      combat: '26',
    },
    biography: {
      'full-name': 'Harold Osborn',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': 'New York City',
      'first-appearance': 'Amzing Spide-Man #31',
      publisher: 'Marvel Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["5'10", '178 cm'],
      weight: ['170 lb', '77 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Auburn',
    },
    work: { occupation: '-', base: 'Formerly New York City' },
    connections: {
      'group-affiliation': '-',
      relatives:
        'Liz Allen-Osborn (Wife,) Norman III (son,)Norman Osborn II - Green Goblin (father)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/25.jpg',
    },
  },
  {
    response: 'success',
    id: '510',
    name: 'Paul Blart',
    powerstats: {
      intelligence: '8',
      strength: '11',
      speed: '21',
      durability: '50',
      power: '7',
      combat: '5',
    },
    biography: {
      'full-name': 'Paul Blart',
      'alter-egos': 'No alter egos found.',
      aliases: ['Mall Cop'],
      'place-of-birth': '-',
      'first-appearance': '-',
      publisher: 'Sony Pictures',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["5'7", '170 cm'],
      weight: ['260 lb', '117 kg'],
      'eye-color': '-',
      'hair-color': '-',
    },
    work: { occupation: '-', base: '-' },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/10479.jpg',
    },
  },
  {
    response: 'success',
    id: '294',
    name: 'Gorilla Grodd',
    powerstats: {
      intelligence: '81',
      strength: '53',
      speed: '33',
      durability: '70',
      power: '100',
      combat: '65',
    },
    biography: {
      'full-name': 'Grodd',
      'alter-egos': 'No alter egos found.',
      aliases: ['William Dawson', 'King Grodd', 'Gorilla Grodd', 'Grodd-Son'],
      'place-of-birth': '-',
      'first-appearance': 'Flash #106 (May, 1959)',
      publisher: 'DC Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'Gorilla',
      height: ["6'6", '198 cm'],
      weight: ['600 lb', '270 kg'],
      'eye-color': 'Yellow',
      'hair-color': 'Black',
    },
    work: { occupation: '-', base: 'Gorilla City, Africa' },
    connections: {
      'group-affiliation': '-',
      relatives:
        'Boka (wife, separated), Gorbzil Mammit (son), Sam Simeon (grandson)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/694.jpg',
    },
  },
  {
    response: 'success',
    id: '240',
    name: 'Elongated Man',
    powerstats: {
      intelligence: '75',
      strength: '10',
      speed: '33',
      durability: '90',
      power: '44',
      combat: '40',
    },
    biography: {
      'full-name': 'Ralph Dibny',
      'alter-egos': 'No alter egos found.',
      aliases: ['Alvin Burgson; Molder'],
      'place-of-birth': '-',
      'first-appearance': 'Flash #112 (1960)',
      publisher: 'DC Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["6'1", '185 cm'],
      weight: ['178 lb', '80 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Red',
    },
    work: { occupation: 'Detective', base: 'Opal City, Central City' },
    connections: {
      'group-affiliation':
        'Justice League of America, Justice League Europe, Super Buddies, Outsiders, Croatoans, Black Lantern Corps',
      relatives:
        'Sue Dibny (wife, deceased); Ken Dibny (brother); Jake Dibny (uncle); Jim (uncle-in-law)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/1381.jpg',
    },
  },
  {
    response: 'success',
    id: '8',
    name: 'Adam Strange',
    powerstats: {
      intelligence: '69',
      strength: '10',
      speed: '33',
      durability: '40',
      power: '37',
      combat: '50',
    },
    biography: {
      'full-name': 'Adam Strange',
      'alter-egos': 'No alter egos found.',
      aliases: ['Warrior of Two Worlds', 'Savior of Rann'],
      'place-of-birth': 'Chicago, Illinois',
      'first-appearance': 'Outsiders #6 (April, 1986)',
      publisher: 'DC Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'1", '185 cm'],
      weight: ['195 lb', '88 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Blond',
    },
    work: {
      occupation: 'Adventurer, archaelogist, ambassador',
      base: 'Rann, Alpha Centauri System',
    },
    connections: {
      'group-affiliation':
        'Omega Men, L.E.G.I.O.N., R.E.B.E.L.S., formerly Seven Soldiers of Victory',
      relatives:
        'Alanna Strange (wife); Aleea Strange (daughter); Sardath (father-in-law); Janey Strange (sister); Todd Strange (brother, deceased); Bantteir (mother-in-law); Adam Strange II (descendent)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/626.jpg',
    },
  },
  {
    response: 'success',
    id: '28',
    name: 'Animal Man',
    powerstats: {
      intelligence: '56',
      strength: '48',
      speed: '47',
      durability: '85',
      power: '73',
      combat: '80',
    },
    biography: {
      'full-name': 'Bernhard Baker',
      'alter-egos': 'No alter egos found.',
      aliases: ['The Human Zoo; A-Man; The Man with Animal Powers'],
      'place-of-birth': '-',
      'first-appearance': 'Strange Adventures #180 (September, 1965)',
      publisher: 'DC Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'0", '183 cm'],
      weight: ['185 lb', '83 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Blond',
    },
    work: { occupation: '-', base: 'San Diego, California' },
    connections: {
      'group-affiliation':
        'Formerly Animal Masters, Forgotten Heroes, Justice League of America, Justice League Europe',
      relatives:
        'Ellen Frazier (wife), Cliff Baker (son), Maxine Baker (daughter), unnamed second daughter, Frank Baker, Jr. (father), Phyllis Baker (mother), unnamed sister, Frank, Sr (grandfather), Teddy (great grandfather), Sherman (great-great grandfather), Jack (great-great-great grandfather), Mary Frazier (mother-in-law), Dudley (uncle-in-law), Annie Cassidy (mother of second daughter), Lucy Cassidy (half-sister of second daughter)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/632.jpg',
    },
  },
  {
    response: 'success',
    id: '704',
    name: 'Warbird',
    powerstats: {
      intelligence: 'null',
      strength: 'null',
      speed: 'null',
      durability: 'null',
      power: 'null',
      combat: 'null',
    },
    biography: {
      'full-name': 'Carol Danvers',
      'alter-egos': 'Binary, Captain Marvel',
      aliases: ['Ms. Marvel', 'Binary'],
      'place-of-birth': 'Boston, Massachusetts',
      'first-appearance':
        '(as Carol Danvers) MARVEL SUPER HEROES #13, (as Ms. Marvel) MS. MARVEL #1, (as Binary) X-MEN # 164, AVENGERS Vol. 3, # 4',
      publisher: 'Binary',
      alignment: 'good',
    },
    appearance: {
      gender: 'Female',
      race: 'null',
      height: ["5'11'", '180 cm'],
      weight: ['120 lb', '54 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Blond',
    },
    work: {
      occupation:
        'Former National Aeronautics and Space Administration security Chief, former magazine editor, former freelance writer, former military intelligence officer.',
      base: 'Avengers Mansion',
    },
    connections: {
      'group-affiliation':
        'currently Avengers, former companion to the X-Men (as Carol Danvers), former member of the Starjammers (as Binary), Former Avenger (as Ms. Marvel)',
      relatives: 'Joseph (father), Marie (mother), Steve (brother, deceased),',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/153.jpg',
    },
  },
  {
    response: 'success',
    id: '19',
    name: 'Allan Quatermain',
    powerstats: {
      intelligence: 'null',
      strength: 'null',
      speed: 'null',
      durability: 'null',
      power: 'null',
      combat: 'null',
    },
    biography: {
      'full-name': '',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': '-',
      'first-appearance':
        "(original version) King Solomon's Mines; (this version) League of Extraordinary Gentlemen #1 (America's Best Comics)",
      publisher: 'Wildstorm',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': '-',
      'hair-color': '-',
    },
    work: {
      occupation: '(former) hunter; (current) agent of the British government',
      base: 'The Secret Wing of the British Museum, London',
    },
    connections: {
      'group-affiliation': 'League of Extraordinary Gentlemen',
      relatives: '-',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/630.jpg',
    },
  },
  {
    response: 'success',
    id: '546',
    name: 'Red Hood',
    powerstats: {
      intelligence: '75',
      strength: '12',
      speed: '23',
      durability: '28',
      power: '35',
      combat: '95',
    },
    biography: {
      'full-name': 'Jason Todd',
      'alter-egos': 'Robin II',
      aliases: ['Robin', 'Red Robin', 'Batman', 'Nightwing', 'Arkham Knight'],
      'place-of-birth': '-',
      'first-appearance': 'Batman #635',
      publisher: 'Robin II',
      alignment: 'neutral',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'0", '183 cm'],
      weight: ['180 lb', '81 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Black',
    },
    work: { occupation: 'Mercenary, Vigilante', base: '-' },
    connections: {
      'group-affiliation': 'formerly Batman Family, Teen Titans',
      relatives:
        'Willis Todd (father, deceased); Sheila Haywood (mother, deceased); Catherine Ann Todd (adoptive mother, deceased), Bruce Wayne (adoptive father), Dick Grayson and Tim Drake (adoptive brothers)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/932.jpg',
    },
  },
  {
    response: 'success',
    id: '62',
    name: 'Bantam',
    powerstats: {
      intelligence: '25',
      strength: '53',
      speed: '23',
      durability: '54',
      power: '21',
      combat: '56',
    },
    biography: {
      'full-name': 'Roberto Velasquez',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': '-',
      'first-appearance': 'Civil War: Front Line #3 (September, 2006)',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["5'5", '165 cm'],
      weight: ['119 lb', '54 kg'],
      'eye-color': 'Brown',
      'hair-color': 'Black',
    },
    work: { occupation: 'Adventurer, boxing trainer, former boxer', base: '-' },
    connections: {
      'group-affiliation': 'Captain America, Pro-Registration forces',
      relatives: '-',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/229.jpg',
    },
  },
  {
    response: 'success',
    id: '503',
    name: 'One-Above-All',
    powerstats: {
      intelligence: '100',
      strength: '100',
      speed: '100',
      durability: '100',
      power: '100',
      combat: '100',
    },
    biography: {
      'full-name': '',
      'alter-egos': 'No alter egos found.',
      aliases: ['One Above All'],
      'place-of-birth': '-',
      'first-appearance': 'Doctor Strange Vol 2 #13',
      publisher: 'Marvel Comics',
      alignment: 'neutral',
    },
    appearance: {
      gender: '-',
      race: 'Cosmic Entity',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      'eye-color': '-',
      'hair-color': '-',
    },
    work: { occupation: '-', base: '-' },
    connections: {
      'group-affiliation': '-',
      relatives: 'Living Tribunal (creation)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/10374.jpg',
    },
  },
  {
    response: 'success',
    id: '725',
    name: 'Yellow Claw',
    powerstats: {
      intelligence: 'null',
      strength: 'null',
      speed: 'null',
      durability: 'null',
      power: 'null',
      combat: 'null',
    },
    biography: {
      'full-name': '',
      'alter-egos': 'No alter egos found.',
      aliases: ['The Claw'],
      'place-of-birth': 'Somewhere in mainland China',
      'first-appearance':
        "(historical) YELLOW CLAW #1; (modern) (telepathic 'voice' of Yellow Claw) STRANGE TALES #160, (robot Yellow Claw) STRANGE TALES # 161, (actual Yellow Claw)CAPTAIN AMERICA #164",
      publisher: 'Marvel Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Male',
      race: 'null',
      height: ["6'2", '188 cm'],
      weight: ['210 lb', '95 kg'],
      'eye-color': 'Blue',
      'hair-color': 'No Hair',
    },
    work: {
      occupation: 'Would-be conqueror',
      base: 'Various hidden bases throughout the world',
    },
    connections: { 'group-affiliation': '-', relatives: '-' },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/23.jpg',
    },
  },
  {
    response: 'success',
    id: '93',
    name: 'Bizarro',
    powerstats: {
      intelligence: '38',
      strength: '95',
      speed: '100',
      durability: '100',
      power: '100',
      combat: '85',
    },
    biography: {
      'full-name': 'Bizarro',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': '-',
      'first-appearance': 'Superboy Vol. 1 #68 (1958)',
      publisher: 'DC Comics',
      alignment: 'neutral',
    },
    appearance: {
      gender: 'Male',
      race: 'Bizarro',
      height: ["6'3", '191 cm'],
      weight: ['345 lb', '155 kg'],
      'eye-color': 'Black',
      'hair-color': 'Black',
    },
    work: { occupation: '-', base: 'Bizarro World' },
    connections: {
      'group-affiliation':
        'Superman Revenge Squad; Bizarros of Bizarro World; former associate of the Secret Society of Super-Villains; Joker League of Anarchy; former partner of Batzarro',
      relatives:
        'Bizarro-Lois No. 1 (wife, Pre-Crisis only), Bizarro, Jr. (son, Pre-Crisis only), Bizarro-Lois, Jr. (daughter, Pre-Crisis only)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/642.jpg',
    },
  },
  {
    response: 'success',
    id: '584',
    name: 'Shadow King',
    powerstats: {
      intelligence: '75',
      strength: '12',
      speed: '27',
      durability: '100',
      power: '100',
      combat: '75',
    },
    biography: {
      'full-name': 'Amahl Farouk',
      'alter-egos': 'No alter egos found.',
      aliases: [
        'Professor X',
        'Ananasi',
        'Amahl Farouk',
        'Evil One',
        'Master of the Games; he also impersonated the following mind-controlled subjects (in chronological order): Alexander Flynn',
        'Karma',
        'Cypher',
        'Jacob Reisz',
        'Donald Pierce and probably others',
      ],
      'place-of-birth': '-',
      'first-appearance': 'X-Men #117 (1979)',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: '-',
      race: 'null',
      height: ["6'1", '185 cm'],
      weight: ['330 lb', '149 kg'],
      'eye-color': 'Red',
      'hair-color': '-',
    },
    work: { occupation: '-', base: 'The Astral Plane; Formerly Cairo, Egypt.' },
    connections: {
      'group-affiliation':
        'Shadow Mob; former head of the Gladiators and the Cairo�s Thieves Quarter',
      relatives: '-',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/121.jpg',
    },
  },
  {
    response: 'success',
    id: '715',
    name: 'Wiz Kid',
    powerstats: {
      intelligence: 'null',
      strength: 'null',
      speed: 'null',
      durability: 'null',
      power: 'null',
      combat: 'null',
    },
    biography: {
      'full-name': 'Takashi Matsuya',
      'alter-egos': 'No alter egos found.',
      aliases: ['-'],
      'place-of-birth': 'Place of birth unknown',
      'first-appearance': 'X-TERMINATORS # 1',
      publisher: 'Marvel Comics',
      alignment: 'good',
    },
    appearance: {
      gender: '-',
      race: 'null',
      height: ["4'7'", '140 cm'],
      weight: ['87 lb', '39 kg'],
      'eye-color': 'Brown',
      'hair-color': 'Black',
    },
    work: {
      occupation: 'Student',
      base: 'Saint Simons Academy, New Hampshire',
    },
    connections: {
      'group-affiliation': 'X-Terminators',
      relatives: 'Unnamed parents deceased',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/159.jpg',
    },
  },
];

let heroChoices = [];
let finalHeroChoice;

const heroTypeHandler = (button) => {
  console.log(finalHeroChoice);
  heroChoices = [];
  const selectedStat = button.getAttribute('data-stat');

  if (selectedStat === 'strength') {
    heroes.filter((hero) => {
      if (hero.powerstats.strength > 50) {
        heroChoices.push(hero);
      }
    });
  } else if (selectedStat === 'intelligence') {
    heroes.filter((hero) => {
      if (hero.powerstats.intelligence > 50) {
        heroChoices.push(hero);
      }
    });
  } else if (selectedStat === 'speed') {
    heroes.filter((hero) => {
      if (hero.powerstats.speed > 10) {
        heroChoices.push(hero);
      }
    });
  }
  // chooses a random hero from the refined list based on stats
  const randomHeroChoice =
    heroChoices[Math.floor(Math.random() * heroChoices.length)];

  // creates an object with only the info we want for the db/cards
  const trimmedHero = {
    name: randomHeroChoice.name,
    imagesrc: randomHeroChoice.image.url,
    alias: randomHeroChoice.biography.aliases[0],
    int: randomHeroChoice.powerstats.intelligence,
    str: randomHeroChoice.powerstats.strength,
    speed: randomHeroChoice.powerstats.speed,
  };

  finalHeroChoice = trimmedHero;

  const heroImage = document.createElement('img');
  heroImage.setAttribute('src', `${finalHeroChoice.imagesrc}`);
  document.querySelector('#hero-image').appendChild(heroImage);

  document.querySelector(
    '#hero-name'
  ).innerHTML = `Name: ${finalHeroChoice.name}`;
  document.querySelector(
    '#hero-alias'
  ).innerHTML = `Alias: ${finalHeroChoice.alias}`;
  document.querySelector(
    '#hero-strength'
  ).innerHTML = `Strength: ${finalHeroChoice.str}`;
  document.querySelector(
    '#hero-intelligence'
  ).innerHTML = `Intelligence: ${finalHeroChoice.int}`;
  document.querySelector(
    '#hero-speed'
  ).innerHTML = `Speed: ${finalHeroChoice.speed}`;

  document.querySelector('#hero-choice-box').classList.remove('is-hidden');
};

const heroCommitHandler = () => {
  alert('Hero has been added!');
  const deleteResponse = fetch('/api/heroes/delete', {
    method: 'DELETE',
  });
  if (deleteResponse.ok) {
    console.log("User's hero has been deleted.");
  } else {
    // returning undefined???
    console.log(deleteResponse.statusText);
  }
  // committing selected hero to db
  const postResponse = fetch('/api/heroes/', {
    method: 'POST',
    body: JSON.stringify(finalHeroChoice),
    headers: { 'Content-Type': 'application/json' },
  });
  if (postResponse.ok) {
    console.log("User's hero has been added.");
  } else {
    // returning undefined???
    console.log(postResponse.statusText);
  }
};

const rerollHandler = () => {
  // chooses a random hero from the refined list based on stats
  const randomHeroChoice =
    heroChoices[Math.floor(Math.random() * heroChoices.length)];

  // creates an object with only the info we want for the db/cards
  const trimmedHero = {
    name: randomHeroChoice.name,
    imagesrc: randomHeroChoice.image.url,
    alias: randomHeroChoice.biography.aliases[0],
    int: randomHeroChoice.powerstats.intelligence,
    str: randomHeroChoice.powerstats.strength,
    speed: randomHeroChoice.powerstats.speed,
  };

  finalHeroChoice = trimmedHero;

  const heroImage = document.createElement('img');
  heroImage.setAttribute('src', `${finalHeroChoice.imagesrc}`);
  document.querySelector('#hero-image').appendChild(heroImage);

  document.querySelector(
    '#hero-name'
  ).innerHTML = `Name: ${finalHeroChoice.name}`;
  document.querySelector(
    '#hero-alias'
  ).innerHTML = `Alias: ${finalHeroChoice.alias}`;
  document.querySelector(
    '#hero-strength'
  ).innerHTML = `Strength: ${finalHeroChoice.str}`;
  document.querySelector(
    '#hero-intelligence'
  ).innerHTML = `Intelligence: ${finalHeroChoice.int}`;
  document.querySelector(
    '#hero-speed'
  ).innerHTML = `Speed: ${finalHeroChoice.speed}`;
};

document.querySelector('.stat-btn').addEventListener('click', heroTypeHandler);
document
  .querySelector('#hero-sel-btn')
  .addEventListener('click', heroCommitHandler);
document
  .querySelector('#hero-reroll-btn')
  .addEventListener('click', rerollHandler);
