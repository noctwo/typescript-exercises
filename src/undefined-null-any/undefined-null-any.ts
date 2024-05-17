// ? undefined - klassischer Fall: Variable noch nicht initialisiert/angelegt
let sum20: number;

// if (sum20) {
//   console.log('Sum20 initial: ', sum20);
// }

// ? Array von Pflanzen
type Plant = { name: string; color: string };
const plants: Plant[] = [
  { name: 'Rose', color: 'red' },
  { name: 'Ivy', color: 'green' },
  { name: 'Lavender', color: 'purple' }
];

// ? Find gibt undefined zurück, wenn kein Ergebnis gefunden wurde
const greenPlant = plants.find((plant: Plant) => plant.color === 'green');
console.log(greenPlant);

const orangePlant = plants.find((plant: Plant) => plant.color === 'orange');
if (orangePlant) {
  console.log(orangePlant.name);
}
// ? Alternativ Optional Chaining Operator ? - Elvis-Operator
// ? macht das Gleiche wie if
console.log(orangePlant?.name);

// * null - kommt unter anderem bei getElementById, querySelector
const buttonElement20 = document.getElementById('button');
if (buttonElement20) {
  buttonElement20.innerText = 'Hallo';
}
console.log('Innertext des nicht vorhandenen Buttons: ', buttonElement20?.innerText);

// ? Elvis-Operator kann nur bei Zuweisungen und Ausgaben verwendet, kurz gesagt: auf rechten Seite des =
const innerText = buttonElement20?.innerText;
console.log({ innerText });
// ? Ich kann Hallo nicht ins Nichts schreiben - die linke Seite ist hier undefined, wenn es den Button nicht gibt
// ? Die Abkürzung über den Elvis-Operator geht hier leider nicht, wir müssen ein if verwenden
// ? Elvis nur rechts vom Gleichheitszeichen
// buttonElement20?.innerText = 'Hallo';

// * any steht als Platzhalter für jeden beliebigen Datentypen
// ! sollte sehr sehr sparsam eingesetzt werden
const iAmEverthing: any = { firstName: 'Michael', lastName: 'Meyers' };
iAmEverthing.city = 'Chicago';

function returnAnything(): any {
  return 12;
}
// ? statt any einen der TypeScript-Datentypen verwenden oder einen eigenen anlegen mit type
type Movie2 = { title: string; year: string; director: string };
//function renderMovies(movies: any) {}
function renderMovies(movies: Movie2[]): void {
  // render the Movies
}