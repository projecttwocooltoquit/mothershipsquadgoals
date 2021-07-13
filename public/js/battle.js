console.log('whatever');
// const heroes = require('./heroes.js');
// import heroes from './heroes';
// const inquirer = require('inquirer');

let validCharacters = [];
for (i = 0; i < heroes.length; i++) {
  if (
    typeof heroes[i].powerstats !== 'undefined' &&
    heroes[i].powerstats.speed !== 'null'
  ) {
    validCharacters.push(heroes[i]);
  }
}
let pOneRandom =
  validCharacters[Math.floor(Math.random() * validCharacters.length)];
let pTwoRandom =
  validCharacters[Math.floor(Math.random() * validCharacters.length)];
console.log(pOneRandom.name);
console.log(pTwoRandom.name);
console.log(validCharacters.length);
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
// Creates two unique characters using the "character" constructor
const playerOneRandom = new Character(
  pOneRandom.name,
  pOneRandom.powerstats.strength,
  pOneRandom.powerstats.durability
);
const playerTwoRandom = new Character(
  pTwoRandom.name,
  pTwoRandom.powerstats.strength,
  pTwoRandom.powerstats.durability
);
// This keeps track of whose turn it is
let playerOneRandomTurn = true;
playerOneRandom.printStats();
playerTwoRandom.printStats();
const turnInterval = setInterval(() => {
  // If either character is not alive, end the game
  if (!playerOneRandom.isAlive() || !playerTwoRandom.isAlive()) {
    clearInterval(turnInterval);
    console.log('Game over!');
  } else if (playerOneRandomTurn) {
    playerOneRandom.attack(playerTwoRandom);
    playerTwoRandom.printStats();
  } else {
    playerTwoRandom.attack(playerOneRandom);
    playerOneRandom.printStats();
  }
  // Switch turns
  playerOneRandomTurn = !playerOneRandomTurn;
}, 2000);
