const heroes = require('./heroes.js');
​
let nullCharacters = []
let strengthClass = [];
let intelligenceClass = [];
let speedClass = [];
​
for(i=0;i<heroes.length;i++){
    if (typeof heroes[i].powerstats === 'undefined'){
        nullCharacters.push(heroes[i]);
    }
   else if (heroes[i].powerstats.strength === 'null'){
        nullCharacters.push(heroes[i]);
    }
   else if (parseInt(heroes[i].powerstats.strength) > 79){
        strengthClass.push(heroes[i]);
    };
};
for(i=0;i<strengthClass.length;i++){
    console.log(strengthClass[i].powerstats.strength);
}
console.log(strengthClass.length);