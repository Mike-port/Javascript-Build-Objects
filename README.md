# My Notes - Build Objects

## 1.

The main thing to take away from this part is that you can access an objects property that you already know using **dot notation**.

```javascript
let delicousRamen = {
  base: "Miso",
  noodles: "Egg",
  spicelevel: "Tongue Numbing",
};
let bestNoodleType = delicousRamen.noodles; // Here
let requiredSpiceLevel = delicousRamen.spicelevel; // And here

console.log(bestNoodleType + ', ' + requiredSpiceLevel); // Egg, Tongue numbing
```
# objectName.propertyName
Note this concept may be pretty basic, this is just to build up skills taking notes using markdown.

## 2.

_"If the property of the object you are trying to access has a **space** in its name, you will need to use bracket notation."_

```javascript
let famousBeerByCountry = {
  "Japan 日本": "Asahi ビール",
  "Canada カナダ": "Molson Canadian",
  "Netherlands　オランダ ": "Heineken Bier",
};

let bestBeer = famousBeerByCountry["Japan 日本"];
console.log(bestBeer); // Asahi ビール
```
# object[ 'property' ]

# 3. Changing and adding properties to an object section
```javascript 
// Changing and adding properties to an object section
var ourDog = {
  'name': 'Camper',
  'legs': 4,
  'tails': 4,
  'friends': ['everything!']
}

ourDog.name = 'Happy Camper'; // Changed name

ourDog.bark = 'bow-wow'; // Added a new property to the object

console.log(ourDog.bark); // bow-wow

```
# 4. Delete Properties from an Object
Note that there is no '.' after delete.
```javascript
// Delete Properties from an Object

let favoriteCities = {
  Japan: 'Tokyo',
  Canada: 'Kelowna',
  Thailand: 'Bangkok',
  Italy: 'Cinque Terra'
}
delete favoriteCities.Canada;
console.log(favoriteCities.Canada); // Undefined

```
# 5. Using Objects for Lookups

Double check this concept, for some reason it has not clicked yet.

```javascript
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

```

# 6. Testing Objects for Properties

```javascript

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

```

# 7. Manipulating Complex Objects

```javascript
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

```
# 8. Accessing Nested Objects

```javascript
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

```
End of Objects for now.
