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