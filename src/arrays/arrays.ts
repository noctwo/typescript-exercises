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
