// ! diese Art des kompletten Imports wollen wir künftig nicht mehr verwenden
// ! wir wollen nur das aus customer importieren, was wir wirklich brauchen
// ! import './customer';

// ? sieht immer so aus: import, in geschweiften Klammern: was wir importiert, from, Dateiname/Pfad zur Datei
// ? die einzelne Import werden innerhalb der geschweiften Klammern mit Komma getrennt
import { calculatePrice, DISCOUNT, Customer } from './customer';
// ? wir können einen Alias - einen Alternativnamen vergeben
// ? das machen wir mit as und dem alternativen Namen dahinter
// ? wir vermeiden damit den Fehler, dass der Name calculatePrice schon mal verwendet wird
// ? ich kann auch, wenn mir der Name nicht gefällt einen eigenen Namen vergeben
import { calculatePrice as calculatePrice2, MAXDISCOUNT } from './custmomer2';
import { printOddNumbers } from './legacy-code';

// ? der Vorteil ist, ich muss beim Import keinen gescheiften Klammern tippen
// ? und kann direkt einen eigenen Namen vergeben ohne as zu verwenden
import CustomerStatusBetterName from './models/customer-status';
import { Customers, Suppliers } from './namespace';
// ? so ist der längere Weg, wenn es kein default wäre
// ? import {CustomerStatus as CustomerStatusBetterName} from './models/customer-status';
// ? ich kann die Funktion hier so aufrufen, als wäre sie in dieser Datei definiert
// * aus customer importieren
console.log(calculatePrice(200));
console.log(DISCOUNT);

const customer33: Customer = {
  number: 3455,
  status: CustomerStatusBetterName.VIP,
  name: 'Max Mustermann',
  address: { street: 'Hauptstr. 33', postalCode: 'D-90491', city: 'Nürnberg' }
};
console.log(customer33);

// * aus customer2 importieren
calculatePrice2(500);
console.log(MAXDISCOUNT);

// * aus legacy-code
console.log(printOddNumbers(20));
// * Namespaces
// ? Vorteil von Namensräumen: er steht vorne dran und lässt direkt im Code erkennen, woher die Logik kommt
console.log(Suppliers.totalNumber);
console.log(Suppliers.showBestSupplier());

console.log(Customers.totalNumber);


//! RECAP

// * Warum sollte ich Module nutzen?
// ? um den Code zu strukturieren, Performace/Ladezeiten, weil ich nur das lade, was ich wirklich brauche
// ? damit ich kleinere, übersichtlichere Dateien habe

// * Wann sollte ich was exportieren?
// ? wenn ich die Variablen, Funktion in einer andere Datei/Modul nutzen will - teilen will

// * Welchen Hack kann ich nutzen, wenn ich nichts exportieren will, aber die Datei als Module behandeln will?
export {};
// ? damit wir diese Datei als Modul behandelt und ich bekomme den Fehler: doppelter Variablenname etc. nicht
// ? in echten Projekten sollten wir das nicht machen, nur bei uns in unserem großen Projekt, in dem in den
// ? Unterordern ganz viele unabhängige Themen liegen können wir das nutzen

// * Wofür nutzt man Namespaces?
// ? um nochmal Unterkategorien festzulegen, z. B. fachliche Gruppierung (Bestellungen, Kunden...)