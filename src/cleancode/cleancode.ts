export {};
// * KISS Prinzip = Keep it simple, stupid
// ? Code soll so einfach wie möglich sein - unnötige Komplexität vermeiden
const mateDrinks = ['Club Mate', 'Mio Mio', 'Flora Mate', 'Thomas Henry'];

// mateDrinks
//   .map((m) => (m.toLowerCase().replace(' ', '').includes('mate') ? 'yes' : 'no'))
//   .forEach((m) => {
//     console.log(m);
//   });
// ? verstösst auf jeden Fall gegen das KISS Prinzip - man muss länger draufschauen, um das zu verstehen
// ? Code aufräumen/besser machen -> Refactoring (= Umschreiben)

mateDrinks
  // ? viele Methoden aneinanderhängen ist auch ein Code Smell - ab der 3. genau überlegen, ob man das will
  .map((mateDrink: string) => {
    const mateDrinkLowerCase = mateDrink.toLowerCase();
    const mateDrinkLowerCaseNoSpaces = mateDrinkLowerCase.replace(' ', '');
    // ? Ternary Operator für if-Abkürzung
    if (mateDrinkLowerCaseNoSpaces.includes('mate')) {
      return 'yes';
    } else {
      return 'no';
    }
  })
  .forEach((mateDrink: string) => {
    console.log(mateDrink);
  });
// ? am Ende nochmal fragen: ist die ganze Struktur ok für das was ich erreichen will?
mateDrinks.forEach((mateDrink: string) => {
  const mateDrinkLowerCase = mateDrink.toLowerCase();
  const mateDrinkLowerCaseNoSpaces = mateDrinkLowerCase.replace(' ', '');
  mateDrinkLowerCaseNoSpaces.includes('mate') ? console.log('yes') : console.log('no');
});

// * DRY-Prinzip: Don´t repeat yourself
// ? Wiederholungen im Code vermeiden
// const blueDiv = document.createElement('div');
// blueDiv.textContent = 'I am a blue div';
// blueDiv.style.backgroundColor = 'blue';
// blueDiv.style.fontSize = '14px';
// document.body.appendChild(blueDiv);

// const yellowDiv = document.createElement('div');
// yellowDiv.textContent = 'I am a yellow div';
// yellowDiv.style.backgroundColor = 'yellow';
// yellowDiv.style.fontSize = '14px';
// document.body.appendChild(yellowDiv);

// const redDiv = document.createElement('div');
// redDiv.textContent = 'I am a red div';
// redDiv.style.backgroundColor = 'red';
// redDiv.style.fontSize = '14px';
// document.body.appendChild(redDiv);

createAndAppendColorDiv('blue');
createAndAppendColorDiv('yellow');
createAndAppendColorDiv('red');
createAndAppendColorDiv('gray');

// ? ich wiederhole mich hier drei Mal
// ? gegen DRY-Prinzip hilft: Functions - manchmal Loops
// ? wenn mit Loop sinnvoll möglich, dann Loop - sonst Function
function createAndAppendColorDiv(color: string) {
  const colorDiv = document.createElement('div');
  colorDiv.textContent = `I am a ${color} div`;
  colorDiv.style.backgroundColor = color;
  colorDiv.style.fontSize = '16px';
  document.body.appendChild(colorDiv);
}

// ? Lösung mit Loop
// ? für Loop spricht hier die sehr einfache Erweiterbarkeit
const colors = ['blue', 'yellow', 'red', 'gray'];
colors.forEach((color: string) => {
  const colorDiv = document.createElement('div');
  colorDiv.textContent = `I am a ${color} div`;
  colorDiv.style.backgroundColor = color;
  colorDiv.style.fontSize = '16px';
  document.body.appendChild(colorDiv);
});
// ? bei Arrays immer forEach oder for..of bevorzugen, dann hab das einzelne Element direkt in der Hand
for (const color of colors) {
}

// * Funktion aufteilen
// function processOrder(order: { itemPrices: number[]; taxRate: number; discount: number }) {
//   let subtotal = 0;
//   for (let price of order.itemPrices) {
//     subtotal += price;
//   }

//   const tax = subtotal * order.taxRate;
//   const discountAmount = subtotal * order.discount;
//   const total = subtotal + tax - discountAmount;

//   if (total > 1000) {
//     console.log('Large order');
//   } else {
//     console.log('Regular order');
//   }

//   console.log(`Subtotal: ${subtotal.toFixed(2)}`);
//   console.log(`Tax: ${tax.toFixed(2)}`);
//   console.log(`Discount: ${discountAmount.toFixed(2)}`);
//   console.log(`Total: ${total.toFixed(2)}`);
// }
// ? Typ immer extra definieren
type Order = { itemPrices: number[]; taxRate: number; discount: number };
// ? in dieser Funktion passieren einige Dinge
// ? process = code smell?
function processOrder(order: Order) {
  let subtotal = calculatePriceBasedOnItems(order.itemPrices);

  // ? hier lassen, da zu viele Parameter
  const taxAmount = subtotal * order.taxRate;
  const discountAmount = subtotal * order.discount;
  const total = subtotal + taxAmount - discountAmount;

  printOrderType(total);
  printFinalPrices(subtotal, taxAmount, discountAmount, total);
}

// ? Code reinkopieren - was unterringelt wird an nicht vorhandenen Variablen gebe ich als Parameter rein
function printFinalPrices(subtotal: number, tax: number, discountAmount: number, total: number) {
  console.log(`Subtotal: ${subtotal.toFixed(2)}`);
  console.log(`Tax: ${tax.toFixed(2)}`);
  console.log(`Discount: ${discountAmount.toFixed(2)}`);
  console.log(`Total: ${total.toFixed(2)}`);
}

function printOrderType(total: number) {
  if (total > 1000) {
    console.log('Large order');
  } else {
    console.log('Regular order');
  }
}

// ? wenn ich nur die itemPrices in der Funktion brauche, gebe ich auch nur die rein und nicht das ganze order-Objekt
function calculatePriceBasedOnItems(itemPrices: number[]): number {
  // ? wie immer 0, weil ich aufsummiere
  let result = 0;
  for (let price of itemPrices) {
    result += price;
  }
  return result;
}