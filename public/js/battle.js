// const heroes = require('./heroes.js');
// import heroes from './heroes';
// const inquirer = require('inquirer');

let validCharacters = [];
let pOneHero;

for (i = 0; i < heroes.length; i++) {
  if (
    typeof heroes[i].powerstats !== 'undefined' &&
    heroes[i].powerstats.speed !== 'null'
  ) {
    validCharacters.push(heroes[i]);
  }
}

let pTwoRandom =
  validCharacters[Math.floor(Math.random() * validCharacters.length)];

class Character {
  constructor(name, strength, durability) {
    this.name = name;
    this.strength = strength;
    this.durability = durability;
  }
  // Method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.durability} hit points remaining!`);
    console.log('------------');
  }
  // Method which determines whether or not a character's "hitpoints" are less then zero
  // Returns true or false depending upon the outcome
  isAlive() {
    if (this.durability <= 0) {
      console.log(`${this.name} has been defeated!`);
      return false;
    }
    return true;
  }
  // Method which takes in a second object and decreases their "durability" by this character's strength
  attack(opponent) {
    console.log(`${this.name} hit ${opponent.name} for ${this.strength}`);
    opponent.durability -= this.strength;
  }
}

const getUserHero = () => {
  fetch('/userhero')
    .then((response) => response.text())
    .then((data) => {
      let parsedData = JSON.parse(data);
      for (i = 0; i < validCharacters.length; i++) {
        if (parsedData[0].name === validCharacters[i].name) {
          pOneHero = validCharacters[i];
        }
      }
      // Creates two unique characters using the "character" constructor
      const playerOne = new Character(
        pOneHero.name,
        pOneHero.powerstats.strength,
        pOneHero.powerstats.durability
      );
      const playerTwoRandom = new Character(
        pTwoRandom.name,
        pTwoRandom.powerstats.strength,
        pTwoRandom.powerstats.durability
      );
      // This keeps track of whose turn it is
      let playerOneRandomTurn = true;
      playerOne.printStats();
      playerTwoRandom.printStats();
      const turnInterval = setInterval(() => {
        // If either character is not alive, end the game
        if (!playerOne.isAlive() || !playerTwoRandom.isAlive()) {
          clearInterval(turnInterval);
          console.log('Game over!');
        } else if (playerOneRandomTurn) {
          playerOne.attack(playerTwoRandom);
          playerTwoRandom.printStats();
        } else {
          playerTwoRandom.attack(playerOne);
          playerOne.printStats();
        }
        // Switch turns
        playerOneRandomTurn = !playerOneRandomTurn;
      }, 2000);
    });
};

const createEnemyCard = () => {
  const heroImage = document.createElement('img');
  heroImage.setAttribute('src', `${pTwoRandom.image.url}`);
  document.querySelector('#enemy-image').appendChild(heroImage);

  document.querySelector('#enemy-name').innerHTML = `Name: ${pTwoRandom.name}`;
  document.querySelector(
    '#enemy-alias'
  ).innerHTML = `Alias: ${pTwoRandom.biography.aliases[0]}`;
  document.querySelector(
    '#enemy-strength'
  ).innerHTML = `Strength: ${pTwoRandom.powerstats.strength}`;
  document.querySelector(
    '#enemy-intelligence'
  ).innerHTML = `Intelligence: ${pTwoRandom.powerstats.intelligence}`;
  document.querySelector(
    '#enemy-speed'
  ).innerHTML = `Speed: ${pTwoRandom.powerstats.speed}`;
};

createEnemyCard();
getUserHero();
