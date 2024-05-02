console.log("math")

console.log(Math.PI);

//math round
console.log(Math.round(3.4)); //ab
console.log(Math.round(3.5)); // auf

console.log(Math.round(3.512398740)); // rundet auf die näheste Ganzzahl (Integer)

// math floor - rundet immmer ab
console.log(Math.floor(3.99999)); // rundet immer ab, sogar hier -> 3

console.log(Math.floor(3.0)); // rundet nicht, bleibt bei 3

// math ceil -- rundet immer auf
console.log(Math.ceil(3.0001)); // rundet immer auf, auch hier
console.log(Math.ceil(7.83)); // rundet auf 8


// Math.random -- generiet Zufallszahlen zwischen 0 und 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// Zufallszahlen zwischen 1 und 10
const randomSmallerThanOne = Math.random();
console.log(randomSmallerThanOne);
const randomFloatToTen = randomSmallerThanOne * 10;
console.log(randomFloatToTen);
console.log(Math.ceil(randomFloatToTen)); //zwischen 1 und 10
console.log(Math.floor(randomFloatToTen)); // zwischen 0 und 9

//Zufallszahl zwischen 0 und 150
const randomTo150 = Math.floor(Math.random() * 151);
console.log(randomTo150);
// von 0 ab mit floor
// von ab 1 mit ceil
// bis 151 damit die 150 auch eingeschlossen wird und Ergebnis sein kann