import Dog from "./Dog";
import Owner from "./Owner";
//* bisher haben wir Objekte mit tyoen angelegt
type DogOld = {
    name: string;
    age: number;
    owner: string;
    breed: string;
    favoriteFootd: string
}

const fluffy: DogOld ={
    name: "Fluffy",
    age: 6,
    owner: "Sven Svennson",
    breed: "Labradoodle",
    favoriteFootd: "Pablo Dog Food"
}

console.log(fluffy);

//* Dogs anlegen auf Basis der vorher erstellten Klasse Dog
//? Variablen Namen vergeben
//? alle Objekte der Klasse Dog werden Instanz genannt und immer mit new, dem Klassennamen und runden Klammern angelegt
const owner1 = new Owner("Johann Jahannse", "Main Street 34", 12345, "Malmö");
const wuffy: Dog = new Dog("wuffy", 3, owner1); 
//! in die Klammern nach new Dog () werden die Parameter für den constructor übergeben

//? auf die EIgenschaften von "wuffy" kann ich mit PUNKT zugreifen

console.log(wuffy);
//? hier noch leer - die zuvor beim anlegen der Klasse definierten Leerwerte werden angezeigt
//? dann mit Punkt neue Werte eingeben

// wuffy.name = "wuffy";
// wuffy.age = 3;
wuffy.favoriteFood = "Frolic";

console.log({wuffy});
//? jetzt werden die bisher geänderten Werte und die noch nicht veränderten Standardwerte angezeigt

const owner2 = new Owner ("Julian", "", 12345, "")
const lio = new Dog("lio", 2, owner2);
// lio.name = "Lio";
// lio.age = 2;
lio.breed = "Labrador";
lio.owner_old = "Julian";
lio.favoriteFood = "Alles"

console.log(lio);

const owner3 = new Owner ("Lisa", "", 28270, "")
const kali = new Dog("kali", 8, owner3);
// kali.name = "Kali";
// kali.age = 8;
kali.breed = "Malteser";
kali.owner_old = "Lisa",
kali.favoriteFood = "Alles"

console.log(kali);

//? Hunde ohne Namen und Alter sind jetzt nicht mehr anlegbar

const owner4 = new Owner ("Heiner", "", 56789, "")
const oscar = new Dog("Oskar", 7, owner4);
oscar.breed = "Pudel";
oscar.owner_old = "Heinrich";
oscar.favoriteFood = "Rinti"

console.log({oscar})
//? Ausgabe von "Heiner"
console.log(oscar.owner.name)
//? PLZ von Kalis owner
console.log(kali.owner.zipCode);

