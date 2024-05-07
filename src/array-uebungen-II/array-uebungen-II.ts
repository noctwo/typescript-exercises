// Level 1-1
let languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

console.log(languages.sort());

let countries:string[] = ["France", "Germany", "Sweden", "UK", "Czech Republic", "Switzerland", "Azerbaijan"];

console.log(countries.sort());


// Level 1-2
function sortDescendingTwo(sortThis:string[]){
    let sorted = sortThis.sort();
    let sortedReverse = sorted.reverse();
    console.log(sortedReverse);
}

console.log(sortDescendingTwo(languages));
console.log(sortDescendingTwo(countries));


// Level 1-3
let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

console.log(numArray1.sort());

function sortAscending(a:number, b:number){
    return a - b;
}

function sortDescending(a:number, b:number){
    return b - a;
}

console.log(numArray1.sort(sortAscending));
console.log(numArray1.sort(sortDescending));


// Level 2-1
function reverseWords(reverseMe:string){
    let stringToArray = reverseMe.split("");
    let spliToReverse = stringToArray.reverse();
    console.log(spliToReverse.join(""));

}

reverseWords("Sergio"); 
reverseWords("Hannah"); 
reverseWords("Regallager"); 
reverseWords("Reliefpfeiler"); 
reverseWords("Rentner"); 
reverseWords("Ella mag alle Bohnen"); 
reverseWords("han nesaH has ennaH"); 


// Level 2-3
let oldPainters:string[] = ["Caspar David Friedrich", "Mary Cassatt", "Rosa Bonheur", "Francisco de Goya", "Édouard Manet"];

let newPainters:string[] = ["Pablo Picasso", "Salvador Dalí", "Frida Kahlo", "Georgia O'Keeffe",];

let femalePaintersOld = oldPainters.splice(1, 2);
let femalePaintersNew = newPainters.splice(2);

let femalePaintersAllTimeConcat = femalePaintersOld.concat(femalePaintersNew);
console.log(femalePaintersAllTimeConcat);

let femalePaintersAllTimeSpread = [...femalePaintersOld, ...femalePaintersNew]
console.log(femalePaintersAllTimeSpread);


let malePaintersOld = oldPainters;
let malePaintersNew = newPainters;

let malePaintersAllTimeConcat = malePaintersOld.concat(malePaintersNew);
console.log(malePaintersAllTimeConcat);

let malePaintersAllTimeSpread = [...malePaintersOld, ...malePaintersNew];
console.log(malePaintersAllTimeSpread);


// Level 1-14
let oldHollywoodActors:string[] = ["Marlon Brando", "Audrey Hepburn", "Elizabeth Taylor", "Cary Grant", "Paul Newman", "Doris Day"];

let actorsReference = oldHollywoodActors;
actorsReference.push("Marilyn Monroe");
console.log(actorsReference);
console.log(oldHollywoodActors);

let oldHollywoodActorsCopyConcat = oldHollywoodActors.concat();
let oldHollywoodActorsCopySlice = oldHollywoodActors.slice();
let oldHollywoodActorsCopySpread = [...oldHollywoodActors];

oldHollywoodActorsCopyConcat.push("Steve McQueen");
oldHollywoodActorsCopySlice.push("James Dean");
oldHollywoodActorsCopySpread.push("Marlene Dietrich");
console.log(oldHollywoodActorsCopyConcat);
console.log(oldHollywoodActorsCopySlice);
console.log(oldHollywoodActorsCopySpread);


// Level 3-1
let artworks:string [] = [    
    "Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Die Schrei - Edvard Munch",
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"
];

let artworkDates:string[] = [
    "Die Sternennacht - 1889",
    "Guernica - 1937",
    "Die Geburt der Venus - 1486",
    "Die Nachtwache - 1642",
    "Die Mona Lisa - 1503",
    "Die Kartoffelesser - 1885",
    "Die Schrei - 1893",
    "Das letzte Abendmahl - 1495",
    "Die freudige Botschaft - 1885",
    "Der Garten der Lüste - 1505"
];

// Work in Progress!

function searchArtworks (searchTerm:string){
    let findString = artworks.find((findParam) => findParam.startsWith(searchTerm));
    console.log(findString); 
};

searchArtworks("Guernica");

function searchYears (searchTerm:string){
    let findYear = artworkDates.find((findParam) => findParam.startsWith(searchTerm));
    console.log(findYear); 
};

searchYears("Guernica");