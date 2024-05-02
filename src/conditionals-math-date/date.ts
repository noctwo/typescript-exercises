import { differenceInYears } from "date-fns";

const today = new Date(); //heutiger Tag ohne etwas in den Klammern
console.log(today);

const startDate = new Date(0); // das ist der UNIX Start Tag
console.log(startDate);

const birthday = new Date("1943-02-20");
console.log(birthday);

const projectStartDay = new Date(2024, 4, 10, 13, 45, 22); //Monate beginnen bei NULL, nur Monate! - also hier 4 für Mai.
//sonst von links nach rechts kleiner bis sekunden
console.log(projectStartDay);

console.log(projectStartDay.toLocaleString()); //lakale Notaion

console.log(projectStartDay.toLocaleString("en-GB"));
console.log(projectStartDay.toLocaleString("en-US"));
console.log(projectStartDay.toLocaleString("ko-KR"));
console.log(projectStartDay.toLocaleString("de-DE", {timeZone: "UTC"}));

console.log(projectStartDay.getDay()); 
// gibt den Tag der WOCHE als ZAHL aus
console.log(projectStartDay.getDate()); 
// gibt den Tag des MONATS als ZAHL aus
console.log(projectStartDay.getMonth()); 
// gibt den MONAT des JAHRES als ZAHL aus wieder ab NULL
console.log(projectStartDay.getFullYear()); // immer get Full Year. Get Yeaer gibt jahr ab 1900 aus.
// console.log(projectStartDay.getYear());
console.log(projectStartDay.getTime()); // zahl der MS seit 1970

projectStartDay.setHours(2);
console.log(projectStartDay);

// date-fns - date-fns.org
// Bibliothek zur Berechnung von Datumswerten
// mit einfach nur diff eingeben sieht man alle möglichen arten zur berechnung und spart sich lange Zeilen schreiben

const age = differenceInYears(new Date(), birthday);
console.log(age);
