let heroChoices = [];
let finalHeroChoice;

const heroTypeHandler = (button) => {
  heroChoices = [];
  const selectedStat = button.getAttribute('data-stat');

  if (selectedStat === 'strength') {
    heroes.forEach((hero) => {
      if (hero && hero.powerstats) {
        if (hero.powerstats.strength > 75) {
          heroChoices.push(hero);
        }
      }
    });
  } else if (selectedStat === 'intelligence') {
    heroes.forEach((hero) => {
      if (hero && hero.powerstats) {
        if (hero.powerstats.intelligence > 75) {
          heroChoices.push(hero);
        }
      }
    });
  } else if (selectedStat === 'speed') {
    heroes.forEach((hero) => {
      if (hero && hero.powerstats) {
        if (hero.powerstats.speed > 75) {
          heroChoices.push(hero);
        }
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

const backButtonHandler = () => {
  fetch('/api/users/', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.id);
      document.location.replace(`/teampage/${data.id}`);
    });
};

document.querySelector('.stat-btn').addEventListener('click', heroTypeHandler);
document
  .querySelector('#hero-sel-btn')
  .addEventListener('click', heroCommitHandler);
document
  .querySelector('#hero-reroll-btn')
  .addEventListener('click', rerollHandler);
document
  .querySelector('#back-btn')
  .addEventListener('click', backButtonHandler);
