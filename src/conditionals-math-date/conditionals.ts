const randomErrorNumber: number = Math.ceil(Math.random() * 10);

if (randomErrorNumber === 1){
    console.log("Schwerer Fehler");
} else if (randomErrorNumber === 2){
    console.log("Mittelschwerer Fehler");
} else if (randomErrorNumber === 3){
    console.log("Leichter Fehler");
} else {
    console.log("Alles supi");
}

/*
switch (key) {
    case value: //case mit wert is qausi IF
        
        break; //nach jedem CASE muss ein BREAK kommen

    default:  // default is wie ELSE
        break;
}
*/

switch (randomErrorNumber) {
    case 1:
        console.log("Schwerer Fehler");
        break;
        case 2:
            console.log("Mittelschwerer Fehler");
        break;
        case 3:
            console.log("Leichter Fehler");
            break;
    default:
        console.log("Alles supi");
        break;
}

const FruitVegetable = window.prompt("Gib mir ein Obst oder Gemüse");

if (FruitVegetable === "Banane" || FruitVegetable === "Apfel" || FruitVegetable === "Birne"){
    console.log("Das ist Obst");
} else if (FruitVegetable === "Blumenkohl" || FruitVegetable === "Karotte" || FruitVegetable === "Sellerie"){ 
    console.log("Du bist Gemüse");
} else {
    console.log("Keine Ahnung was du bist");
}
// auch "FallThrough gennannt"
switch (FruitVegetable) {
    case "Banane":
        case "Apfel":
        case "Brine":
        console.log("Das ist Obst")
        break;
    case "Blumenkohl":
        case "Karotte":
        case "Sellerie":
        console.log("Du bist Gemüse")
            break;
    default:
        console.log("Keine Ahnung was du bist");
        break;
}


//größer kleine vergleich mit switch -- aber IF ist einfacher hier

if (randomErrorNumber < 5) {
    console.log("Kein Fehler");
} else if (randomErrorNumber < 8){
    console.log("Warnung");
} else {
    console.log("Fehler");
}

switch (true) {
    case randomErrorNumber < 5:
        console.log("Kein Fehler");
        break;
    case randomErrorNumber < 8:
        console.log("Warnung");
        break;
    default:
        console.log("Fehler");
        break;
}

//Terneray Expressions / Ternary Operator

// Immer Drei-teilig

const isOnline: boolean = Math.random() <= 0.5;
// da random nur bis 1 geht gibt es entweder ja nein aus

if (isOnline){
    console.log("User is onine");
} else {
    console.log("User is offline");
}

const message: string = isOnline ? "User is online" : "User is offline";
console.log({message});


const randomLottoNumber: number = Math.ceil(Math.random() * 50);
const lottoMessage = randomLottoNumber < 5 ? "Klein" : "Groß";
console.log(lottoMessage);