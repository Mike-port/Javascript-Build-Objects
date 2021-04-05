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


var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;       
var player = testObj[playerNumber];
console.log(player);


// Changing and adding properties to an object section
var ourDog = {
  'name': 'Camper',
  'legs': 4,
  'tails': 4,
  'friends': ['everything!']
}

ourDog.name = 'Happy Camper';

ourDog.bark = 'bow-wow'; // Added a new property to the object

console.log(ourDog.bark); // bow-wow


// Delete Properties from an Object

let favoriteCities = {
  Japan: 'Tokyo',
  Canada: 'Kelowna',
  Thailand: 'Bangkok',
  Italy: 'Cinque Terra'
}
delete favoriteCities.Canada;
console.log(favoriteCities.Canada); // Undefined


// Using Objects for Lookups
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  
  var lookup = {
    'alpha': 'Adams',
    'bravo': 'Boston',
    'charlie': 'Chicago',
    'delta': 'Denver',
    'echo': 'Easy',
    'foxtrot': 'Frank'
  };
  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
console.log(phoneticLookup('charlie')); // Chicago



// Testing objects for Properties
var myObj = {
  top: 'hat',
  bottom: 'pants'
};

console.log(myObj.hasOwnProperty('top')); // true
console.log(myObj.hasOwnProperty('middle')); // false

// #2
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty('checkProp')) {
    return obj[checkProp];
 } else {
    return "Not Found";
  }
  
  // Only change code above this line
}


// Manipulating Complex Objects
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    'artist': 'Red Hot Chili Peppers',
    'title': 'Under the Bridge',
    'release_year': 1991,
    'formats': [
      'CD',
      '8T',
      'LP'
    ]
  }
];
console.log(myMusic);

// Accessing Nested Objects
var ourStorage = {
  'desk': {
    'drawer': 'stapler'
  },
  'cabinet': {
    'top drawer': {
      'folder1': 'a file',
      'folder2': 'secrets'
    },
    'bottom drawer': 'soda'
  }
};
console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.cabinet["bottom drawer"]);

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside['glove box'];