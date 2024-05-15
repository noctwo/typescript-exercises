//* Math Bibliothek

const accountBalance: number = 2584.55;
//? zur nächsten ganzen Zahl abrunden
console.log(Math.floor(accountBalance));
//? zur nächsten ganzen Zahl aufrunden
console.log(Math.ceil(accountBalance));
//? echtes Runden
console.log(Math.round(accountBalance));

//* RND Number
const randomNumber23 = Math.ceil(Math.random()*10);
console.log(randomNumber23);

//* Min ermitteln
const minimum = Math.min(22, 333, 11, 55, 10);
console.log(minimum);

//* Max ermitteln
const maximum = Math.max(22, 333, 11, 55, 10);
console.log(maximum);

//* Potenz berechnen > 2 hoch 3 = 2 * 2 * 2
let power = Math.pow(2,3);
console.log(power);

let power2 = Math.pow(10, 4);
console.log(power2);

//* Wurzel bzw Quadratwurzel berechnen 25 = 5
let sqaureRoot = Math.sqrt(25);
console.log(sqaureRoot);

let square121 = Math.sqrt(121);
console.log(square121);