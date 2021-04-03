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