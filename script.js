// objectName.propertyName
var myDog = {
  'name': 'Bingo',
  'legs': 4,
  'tails': 1,
  'friends': ['everyone', 'All lifeforms except cats']
};
console.log(myDog.friends[0 ]); 


var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1;
var prop2val = myObj.prop2;
console.log(prop1val);


var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;


let delicousRamen = {
  base: "Miso",
  noodles: "Egg",
  spicelevel: "Tongue Numbing",
};
let bestNoodleType = delicousRamen.noodles; // Here
let requiredSpiceLevel = delicousRamen.spicelevel; // And here

console.log(bestNoodleType + ', ' + requiredSpiceLevel); // Egg, Tongue numbing


// Bracket Notation
let famousBeerByCountry = {
  "Japan 日本": "Asahi ビール",
  "Canada カナダ": "Molson Canadian",
  "Netherlands　オランダ ": "Heineken Bier",
};
let bestBeer = famousBeerByCountry["Japan 日本"];
console.log(bestBeer); // Asahi ビール



// Accessing Object Properties with Variables

let dogs = {
  Fido: 'Mutt', Hunter: 'Doberman', Snoopie: 'Beagle'
};
let hisDog = 'Hunter';
let hisBreed = dogs[hisDog];
console.log(hisBreed); // Doberman

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line
console.log(player);







