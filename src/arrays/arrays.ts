const shoppingListItem1 = "beer";
const shoppingListItem2 = "chips";
const shoppingListItem3 = "pizza";


// const heißt hier nur, dass Name und Typ fix sind. Den Inhalt des Arrays kann man trotzdem beliebig verändern.
const shoppingItems = ["Toilet Paper", "Beer", "Ice Cream", "Peanuts", "Coffee", "Broccoli"];

//gibt das 4. Element aus
console.log(shoppingItems[3]);

// Wert an bestimmter Stelle ersetzen
// ersetz allerdings auch den Wert im Original Array dauerhaft
shoppingItems[3] = "Peanut Butter";
console.log(shoppingItems[3]);
console.log(shoppingItems);

//neues Element am Ende anfügen
console.log(shoppingItems.length); // Anzahl nicht! Index
shoppingItems.push("Pasta");
console.log(shoppingItems);
console.log(shoppingItems.length);

shoppingItems.push("Soap", "Toothpaste");
console.log(shoppingItems);
console.log(shoppingItems.length);

//Element am Ende entfernen
const popLast = console.log(shoppingItems.pop()); //kann direkt in Variable gespeichert und ausgegeben werden (siehe hover beschreibung - geht auch bei anderen methoden)
console.log(shoppingItems);
console.log(shoppingItems.length);

//number Array
const prices = [12.99, 2.32, 33.44, 77.44];
console.log(prices[2]);

// shift entfernt erstes Element bzw. verschiebt alles um ein Element nach Links!
const shiftFirst = console.log(shoppingItems.shift());
console.log(shoppingItems);

// unshift fügt neuen Wert an die erste Stelle des Arrays
const lenghtAfterUnshift = shoppingItems.unshift("Tea", "Cookies");
console.log({lenghtAfterUnshift});
console.log(shoppingItems);


// Element an bestimmter Stelle entfernen -- Index, Länge
const shoppingItems2 = ["Toilet Paper", "Beer", "Ice Cream", "Peanuts", "Coffee", "Broccolie"];

const splicedElement = shoppingItems2.splice(2, 1);
console.log(splicedElement); // kommt sogar als Array zurück

// splice zum einfügen
const addedElementSplice = shoppingItems2.splice(1, 0, "Eggplants");
// zweiter wert ist die länger der zu löschenden - als 0 löscht nichts!
console.log(shoppingItems2);



// Slice - kopieren (ganzes Array oder Teile) - original Array bleibt erhalten!
const allItemsSliced = shoppingItems2.slice();
// kopiert das ganze array
console.log(allItemsSliced);

const sliceFrom2 = shoppingItems2.slice(2);
// kopiert ab Index 2 alles bis zum Ende
console.log(sliceFrom2);

const sliceFromt2To3 = shoppingItems2.slice(2, 4);
// kopiert von Index bis Anfang nächster Index - also 2 und 3
console.log(sliceFromt2To3);


// split

const songText = "We all live in a yellow submarine";
const yellewSubWords = songText.split(" ");
// teilt den string anhand des Indikators, hier Leerzeichen und speichert die Werte in einem Array.
console.log(yellewSubWords);

const longString = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, distinctio quas minus voluptas atque necessitatibus? Dolorem atque, mollitia minus inventore voluptatum error aut consequuntur nobis adipisci ex tempora? Laudantium quas deleniti, in nesciunt explicabo itaque unde placeat ipsa quia illum commodi aut perspiciatis aperiam non minima nulla accusantium eligendi neque vero delectus rerum. Unde dolore eligendi expedita ipsa quis architecto eum saepe impedit nihil voluptatem omnis quae ea sit aliquam soluta veniam, suscipit quasi est iusto iste? Expedita reiciendis provident quam, hic, assumenda, ex fuga harum itaque ea quae ratione quia aut esse vel nihil voluptatem ducimus. Esse, totam molestias?";
const longTextSentence = longString.split(".");
console.log(longTextSentence)


// Kopieren von einfachen Datentypen
let priceOfShoes = 69.99;
let priceOfBackoack = priceOfShoes;
console.log({priceOfShoes}, {priceOfBackoack});

priceOfShoes = 79.99;
console.log({priceOfShoes});
priceOfBackoack = 59.99;
console.log({priceOfBackoack});

// Kopieren von Arrays (Komplexen Datentypen)
const fruits = ["Ananas", "Banane", "Pfirsich", "Kirsche"];
console.log(fruits);
const deliciousFruits = fruits;
console.log(deliciousFruits);
deliciousFruits.pop();
console.log(deliciousFruits);
console.log(fruits);
// aus beiden Arrays wird der Wert gelöscht cO!
// weil in der Kopie über eine Adresse ! auf den Wert zugegriffen wird - also erfolgen Änderungen im Original - es exisitiert quasi keine Kopie.

// echte Kopie - Slice ohen Parameter kopiert das ganze Array
const realCopyWithSlice:string[] = fruits.slice();
realCopyWithSlice.pop();
console.log(fruits);
console.log(realCopyWithSlice);

// concat ohne Parameter kopiert das ganze Array
const copyWithConcat:string[] = fruits.concat();
copyWithConcat.shift();
console.log(fruits);
console.log(copyWithConcat);

// Spread Operator - kopiert alle Elemente und "breitet sie in neuem Array aus"
const copyWithSpreadOperator:string[] = [...fruits];
copyWithSpreadOperator.push("Birne");
console.log(fruits);
console.log(copyWithSpreadOperator);


// Zwei Arrays miteinander verknüpfen
const vegetables:string[] = ["Erbsen", "Bohnen", "Blumenkohl"];
const fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables);

// verknüpfen mit Spread
const fruitsAndVeggiesWithSpread: string[] = [...fruits, ...vegetables];
console.log(fruitsAndVeggiesWithSpread);

// Sortieren

// wirkt sich aufs Original Array aus - also immer vorher in neuer Variable zwischenspeichern!

//reverse
const colors:string[] = ["Red", "Yellow", "Green", "blue", "Pink"];
const newPrices:number[] = [111, 20, 66, 5, 1200, 7];

const reversedColors = colors.reverse();
console.log(colors);
console.log(reversedColors);
newPrices.reverse();
console.log(newPrices);

// sort
console.log(colors.sort()); // sortiert automatisch alphabetisch
console.log(newPrices.sort()); 

// sort aufsteigend absteigend

function sortAscending(a:number, b:number){
    return a - b;
}

function sortDescending(a:number, b:number){
    return b - a;
}

console.log(newPrices.sort(sortAscending));
console.log(newPrices.sort(sortDescending));

function sortAscendingString (a:string, b:string){
    return a.localeCompare(b);
}

function sortDescendingString (a:string, b:string){
    return b.localeCompare(a);
}

//localcompare sind die lokalen einstellungen der maschine (Landessprache etc)

console.log(colors.sort(sortAscendingString));
console.log(colors.sort(sortDescendingString));

function sortByLength (a:string, b:string){
   return a.length - b.length; //hier muss eine Zahl rauskommen - also MINUS. größer kleiner geht nicht
}

console.log(colors.sort(sortByLength));


// mit callback function - arrow function

colors.sort((a:string, b:string) => {return a.localeCompare(b)});