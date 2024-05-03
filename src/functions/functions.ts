import { add } from "date-fns";

console.log("Ahoi-functions");

// function in JS
/* 
function addTwenty(zahl){
    let additionResult = zahl +20;
    console.log(addtionResult);
}
addTwenty(10);
addTwenty(20);
addTwenty(true);
addTwenty(ugglbuggl);

in JS kann man hier alles mitgeben - Problemquelle!
*/

// TS

function addTwenty(zahl:number):void{
    let additionResult = zahl +20;
    console.log(additionResult);
};

//:void gibt an was aus der Funktion rauskommen soll, in dem Fall nichts

addTwenty(20);
// addTwenty("hallo");
// addTwenty(true);

function addThirty(zahl:number):number{
    let result = zahl + 30;
    return result;
}

let resultThirty = addThirty(100);
console.log(resultThirty);
console.log(addThirty(30));

function addFourty(zahl1:number, zahl2:number, zahl3:number):number{
    return zahl1 + zahl2 +zahl3 +40;
}
//cleancode -> nicht mehr als 4 oder 5 Parameter

console.log(addFourty(44, 66, 77));

function addFiftyAndPrint(zahl1:number, message:string):number{
    let result = zahl1 + 50;
    console.log(message);
    return result;
}

let resultFifty = addFiftyAndPrint(122, "Das ist das Ergebnis");
let sum = resultFifty + 234556;

console.log({sum});

console.log(addFiftyAndPrint(2, "hallo"));


function getOnlineMessage(isOnline: boolean):string {
    if (isOnline){
        return "User is online"
    } else {
        return "User is offline"
    }
};
// nach return ist eigentlich schluss, durch das if else wird jedoch immer nur ein return ausgeführt.

// return isOnline ? "User is online" : "User is offline";
//kürzer so
// auch hier wird nach dem return weitergelesen (in dieser Zeile, danach ist schluss)



//Scope
// aus jedem inneren Scope kann ich Variablen in allen ihn umschließenden Scopes sehen.
// Globale Variablen können also abgerufen werden, global kann ich jedoch nicht auf Variablen in den inneren Scopes zugreifen!

let pi = Math.PI;

function calculateTax(percentage:number, isMarried:boolean):void {
    let myTax = 2000;
    if (isMarried) {
        let resultMarried = percentage * 50 + myTax;
        console.log(resultMarried);
    } else {
        let resultUnMarried = percentage * 80 + myTax;
        console.log(resultUnMarried);
    }
};

// pi ist von überall aus erreichbar

// console.log(myTax); 
//wird nicht gefunden, nur innerhalb der Funktion erreichbar

// im else Scope kann ich nicht auf Variablen aus dem IF Scope zugreifen! - Es sind eigene Blöcke die nebeneinander existieren. IF und ELSE sind für sich geschlossene "Boxen".

// um etwas doch in beiden blöcken zu verwenden muss es dann eben eine Ebene höher deklariert werden.



// Event Listener
let counterElement = document.getElementById("counter");
let counter = 0;


if (counterElement){
    let buttonElement = document.getElementById("button-counter");
    if (buttonElement){
        buttonElement.addEventListener("click", (event) => {
            event.preventDefault();
            counter++;
            counterElement.textContent = counter.toString();
        });
    }
    }

   // event.preventDefault verhindert das bereits per default vorgegebene Verhalten und implemenitert das nachfolgende. hier wird bsp-weise das Neuladen der Seite verhindert.

   // statt arrow function
/*
if (counterElement){
    function handleCountButtonClicked(event: MouseEvent):void{
        event.preventDefault();
        counter++;
        if(counterElement){
            counterElement.textContent = counter.toString();
        }
    }


let buttonElement = document.getElementById("button-counter");
    if (buttonElement){
        buttonElement.addEventListener("click", handleCountButtonClicked);
    }
}

*/

// funktion wird hier ohne nachfolgende Klammern hinzugefügt und somit nur verknüpft