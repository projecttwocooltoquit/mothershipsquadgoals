const heroes = require('./heroes');
const inquirer = require('inquirer');
// //inquirer will have 2 prompt "who's player 1's characters" and "who's player 2 characters"

// // class ChosenOnes {
// //   constructor(Name, strength, intelligence, speed, durability) {
// //     heroes.name = Name;
// //     heroes.powerstats.strength = strength;
// //     heroes.powerstats.intelligence = intelligence;
// //     heroes.powerstats.speed = speed;
// //     heroes.powerstats.durability = durability;
// //   }

// // Method which prints all of the stats for a character
// function printStats(hero) {
//   console.log(`Stats for ${hero.name} are as following:`);
//   console.log(`Each attack will do ${hero.powerstats.strength} damage.`);
//   console.log(
//     `${hero.name} has ${hero.powerstats.durability} hit points remaining!`
//   );
//   console.log('------------');
// }

// // Method which determines whether or not a character's "hitpoints" are less then zero
// // Returns true or false depending upon the outcome
// function isAlive() {
//   if (heroes.powerstats.durability <= 0) {
//     console.log(`${heroes.name} has been defeated!`);
//     return false;
//   }
//   return true;
// }

// // Method which takes in a second object and decreases their "hitPoints" by this character's strength
// function attack(opponent) {
//   console.log(`${heroes.name} hit ${opponent.name} for ${this.strength}`);
//   opponent.hitPoints -= this.strength;
// }

// // Creates two unique characters using the "character" constructor

// //   this.Name,
// //   this.strength,
// //   this.intelligence,
// //   this.speed,
// //   this.durability
// console.log(
//   parseInt(heroes[1].powerstats.durability) -
//     parseInt(heroes[2].powerstats.strength)
// );
// let bane = heroes[1];
// let absorbingman = heroes[2];

// // This keeps track of whose turn it is
// let baneTurn = true;

// printStats(bane);
// printStats(absorbingman);

// const turnInterval = setInterval(() => {
//   // If either character is not alive, end the game
//   if (!bane.isAlive() || !absorbingman.isAlive()) {
//     clearInterval(turnInterval);
//     console.log('Game over!');
//   } else if (baneTurn) {
//     bane.attack(absorbingman);
//     absorbingman.printStats();
//   } else {
//     absorbingman.attack(bane);
//     bane.printStats();
//   }

//   // Switch turns
//   baneTurn = !baneTurn;
// }, 2000);

for (var i = 0; i < heroes.length; i++) {
  return (heroChoices = heroes[i].name);
}

inquirer
  .prompt({
    type: 'list',
    name: 'player1',
    message: 'choose player1 character',
    options: heroChoices,
  })
  .then((data) => {
    console.log(data.player1);
  });
