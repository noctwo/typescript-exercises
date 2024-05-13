for(let index: number = 0; index < 3; index ++){
    console.log("Hi")
    console.log("-".repeat(10));
};

for(let index: number = 12; index < 16; index ++){
    console.log(index);
};

for(let index: number = 0; index < 10; index = index +2){
    console.log(index);
};

// ungerade zählen - einfach bei 1 anfangen
for(let index: number = 1; index < 10; index = index +2){
    console.log("ungerade", index);
}

// count down
for(let index: number = 10; index >=0; index--){
    console.log("count down", index);
}

// alle Zahlen bis 30, die durch 3 teilbar sind
for (let index = 0; index <= 30; index++) {
    if(index % 3 === 0){
        console.log("teilbar durch 3: ", index);
    }
    
}

// alle Zahlen von 1 bis 30 aufaddieren
let sumOfNumbersTo30:number = 0;
for (let index = 1; index <= 30; index++) {
    sumOfNumbersTo30 += index;
    console.log(sumOfNumbersTo30);
}

// einen String mit for durchlaufen und Buchstaben verdoppeln
let text = "Hier steht ein Text";
let doubledText = "";
for (let index = 0; index < text.length; index++) {
    console.log(text[index]);
    // geht den Text Buchstaben f. Buchstabe durch
    doubledText += text[index] + text[index];
    
}
console.log(doubledText);

//array durchlaufen - bei arrays verwendet man jedoch besser forEach (oder .map?)
const numbersToEleven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let index = 0; index < numbersToEleven.length; index++) {
    const element = numbersToEleven[index];
    console.log(element);
    
}

// array befüllen lassen
const numbersToTwelve:number[] = [];
for (let index = 1; index <= 12; index++) {
    numbersToTwelve.push(index);
}
console.log(numbersToTwelve);



//while loop
let counterForWhile = 0;

while (counterForWhile < 10) {
    console.log("While");
    counterForWhile++;
}


/*
let userInput = "";
while (userInput !== "STOP") {
    userInput = window.prompt("Bitte gib etwas ein") ?? "";
}
*/


// do while

let specialCounter = 5;

while (specialCounter < 5) {
    console.log("while");
}

// do while wird mindestens ein Mal durchlaufen weil die Bedingung - im gegensatz zu while - erst nach dem ersten Durchlauf geprüft wird!
do {
    console.log("do while")
} while (specialCounter < 5);


// for of
const meals: string[] = ["Pizza", "Pommes", "Döner", "Tomatensuppe"];
for (const meal of meals) {
    console.log(meal);
}

// alternativ
meals.forEach((meal: string ) => {
    console.log(meal);
})


// break

for (let index = 0; index < 10; index++) {
    console.log(index);
    if (index === 8){
        break; // hört bei auf zu zählen
    }
}

// gibt da erste ergebins das durch 7 teilbar ist zurück und hört dann auf.  --- weil braucht man ja nicht mehr wenn das erste Result gefunden ist.
function divideblayBySeven (startNumber: number, endNumber: number){
    let result = 0;
    for (let index = startNumber; index <= endNumber; index++) {
        if(index % 7 === 0){
            result = index;
            break;
        }
        
    }
    return result;
}
const result1 = divideblayBySeven(15, 23);
console.log(result1);


// continue
for (let index = 0; index < 10; index++) {
    if (index % 2 === 0) {
        continue; // wenn bedingung zutrifft, dann hier denn aktuellen Schleifendurchlauf abbrechen
    }
    console.log(index);
    let summm = 1233435;
    console.log(summm);
}


// break bricht die ganze Schleiefe ab (und was danach kommt ?), continue den Durchlauf (und das was danach kommt läuft weiter?)!