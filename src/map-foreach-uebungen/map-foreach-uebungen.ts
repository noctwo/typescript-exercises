// Level 1-2
const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta'];

let upperDrinks = drinks.map((drink:string) => {
    return drink.toUpperCase();
});
console.log(upperDrinks);


// Level 1-4
let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];
let toCelcius = fahrenheit.map((degreeValueF) => {
    return Math.floor((degreeValueF - 32) / 1.8);
});
console.log(toCelcius);


// Level 1-5
let checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];
let divideMeMaybe = checkNumber.map((numberToCheck) => {
    if (numberToCheck % 3 === 0){
        return numberToCheck + 100;
    } else return numberToCheck;
});
console.log(divideMeMaybe);


// Level 1-6
let album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];
let changeFileNames = album.map((fileName) => {
    if (fileName.endsWith(".jpg") || fileName.endsWith(".GIF")){
        return fileName.slice(0, -3).toLowerCase();
    } else {
        return "invalid";
    }
});
console.log(changeFileNames);


// Level 1-7
let fruitsEmoji: string[] = ['🍇', '🍌', '🍒', '🍎'];
let fruitJuiceEmoji = fruitsEmoji.map((addEmoji) => {
    return addEmoji + "🥤";
});
console.log(fruitJuiceEmoji);


// Level 1-8
const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredEvenNumbers = zahlen.filter((zahl:number) => {
    if (zahl % 2 === 0) {
        return zahl;
    } 
});
console.log(filteredEvenNumbers);


let filteredOddNumbers = zahlen.filter((zahl:number) => {
    if (zahl % 2 !== 0) {
        return zahl;
    } 
});
console.log(filteredOddNumbers);


// Level 1-2
const heroArr: (string | null | undefined)[] = ["Superman", "Batman", undefined, undefined, "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", undefined, null];

let heroesCleaned = heroArr.filter((hero) => {
    if (hero !== undefined || hero !== null){
        return hero;
    }
});
console.log(heroesCleaned);

// Level 2-1
const woerter: string[] = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe", "Top", "Los", "Lahm"];
let filterBySix = woerter.filter((word) => {
    if (word.length <= 6)
        return word;
});

console.log(filterBySix);

let filterEe = woerter.filter((word) => {
    if (word.includes("e") || word.includes("E"))
        return word;
});
console.log(filterEe);

let filterMore = woerter.filter((word) => {
    let vokale = word.match(/[aeiou]/gi);
    if (vokale.length >= 3){
        return word;
    }
        
});
console.log(filterMore);