const heroes = require('./heroes.js');
​
let nullCharacters = []
let intelligenceClass = [];
​
for(i=0;i<heroes.length;i++){
    if (typeof heroes[i].powerstats === 'undefined'){
        nullCharacters.push(heroes[i]);
    }
   else if (heroes[i].powerstats.intelligence === 'null'){
        nullCharacters.push(heroes[i]);
    }
   else if (parseInt(heroes[i].powerstats.intelligence) > 79){
        intelligenceClass.push(heroes[i]);
    };
};
for(i=0;i<intelligenceClass.length;i++){
    console.log(intelligenceClass[i].powerstats.intelligence);
}
console.log(intelligenceClass.length);