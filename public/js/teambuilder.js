// create user id when you call the post route and pass it through
// import hero js here
// grab random hero
// send the body of that hero to the post route in heroroutes
// sending the body of the hero from the front end not the back end

// import { heroes } from '../../modules/heroes';
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
];

const squadOption = [];

const heroHandler = (button) => {
  const selectedStat = button.getAttribute('data-stat');
  console.log(selectedStat);
  if (selectedStat === 'strength') {
    heroes.filter((hero) => {
      if (hero.powerstats.strength > 75) {
        console.log(hero.name, hero.powerstats.strength);
      }
    });
  } else if (selectedStat === 'intelligence') {
    heroes.filter((hero) => {
      if (hero.powerstats.intelligence > 75) {
        console.log(hero.name, hero.powerstats.intelligence);
      }
    });
  } else if (selectedStat === 'speed') {
    heroes.filter((hero) => {
      if (hero.powerstats.speed > 75) {
        console.log(hero.name, hero.powerstats.speed);
      }
    });
  }
};

document.querySelector('.button').addEventListener('click', heroHandler);
