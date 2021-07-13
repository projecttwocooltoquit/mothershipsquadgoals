const heroes = require('./heroes.js');
​
let nullCharacters = []
let speedClass = [];
​
for(i=0;i<heroes.length;i++){
    if (typeof heroes[i].powerstats === 'undefined'){
        nullCharacters.push(heroes[i]);
    }
   else if (heroes[i].powerstats.speed === 'null'){
        nullCharacters.push(heroes[i]);
    }
   else if (parseInt(heroes[i].powerstats.speed) > 79){
        speedClass.push(heroes[i]);
    };
};
for(i=0;i<speedClass.length;i++){
    console.log(speedClass[i].powerstats.speed);
}
console.log(speedClass.length);