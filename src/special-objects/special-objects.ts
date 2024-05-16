//? Datentyp für Termin
type Appointment = { title: string; date: Date; isImportant: boolean};

const soccerTraining: Appointment = {
    title: "Soccer Training",
    date: new Date(),
    isImportant: false
};

const watchMovie: Appointment = {
    title: "Planet der Affen anschauen",
    date: new Date(),
    isImportant: true
};

const appointmentsToday: Appointment[] = [soccerTraining, watchMovie];

appointmentsToday.forEach((appointment:Appointment) => {
    console.log(appointment.title);
});

//? Datentyp im Datentyp
type Article = {number: number, name: string, quantity: number};
type Order = {id: string, customerNumber: number, articles: Article[]};

const article1: Article = {
    number: 122,
    name: "Nike Air, Size 42",
    quantity: 1
};

const firstOrder: Order = {
    id: "ADOU)RAF",
    customerNumber: 345349011,
    articles: [article1]
};

console.log(firstOrder.customerNumber);
console.log(firstOrder.articles[0].name);


//? Objects kopieren
//* Registrierte Kunden
type NewCustomer = {firstName: string, lastName: string, email: string, mobielPhone?: string}; //! mobilePhone ist durch "?" eine "Optionale Eigenschaft" - muss also nicht angegeben werden bei neuen Objecten des Typs. Sonst müsste man immer diese Eigenschaft mit schreiben und einen Leer String angeben. "?" Steht in TS oft für "Dieser Wert ist optional.". So lassen sich auch Pflichtfelder in einem Registrierprozess realisieren.
const customer1: NewCustomer = {
    firstName: "Franny",
    lastName: "Salinger",
    email: "f.salinger@mail.de"
};

console.log(customer1.firstName);
const customer2: NewCustomer = customer1;
// customer2.firstName = "Danny";
// console.log(customer2.firstName);
// console.log(customer1.firstName);
//! ändert den Wert im Ursprungs-Objekt! - wie beim Array

//! concat und slice geht nur bei Arrays. Bei Objects geht nur der Spread

//? Spread Operator
const realCopyCustomer2: NewCustomer = {...customer1};
realCopyCustomer2.firstName = "Danny";
console.log(customer2.firstName);
console.log(realCopyCustomer2.firstName);
console.log(customer2.firstName);

//? Object.assign
const realCopyCustomer3 = Object.assign({}, customer1);
//* kopiere in ein leeres Object, alles aus customer1
realCopyCustomer3.firstName = "Sunny";
console.log(realCopyCustomer3.firstName);
console.log(realCopyCustomer2.firstName);
console.log(customer1.firstName);

const customer4: NewCustomer = {
    firstName: "Jochen",
    lastName: "Schweizer",
    email: "jochen@gmx.de",
    mobielPhone: "123534346346"
};

console.log("Mobile of customer2: ", customer2.mobielPhone); //undefined

//? Nur Customer ausgeben bei denen Mobile Nummer vorhanden ist
const customers: NewCustomer[] = [customer1, customer2, customer4];
customers.forEach((customer:NewCustomer) => {
    if (customer.mobielPhone) {
        console.log("Mobile vorhanden: ", customer.mobielPhone);
    }
});

//? ENUM
//* Datentyp wöchentliches Meeting mit title, startDate und WochenTag

type WeeklyMeeting = {title: string, startDate: Date, weekDay: string}

const dailyMeeting: WeeklyMeeting = {
    title: "Daily",
    startDate: new Date(),
    weekDay: "Montag"
}

const dailyMeeting2: WeeklyMeeting = {
    title: "Daily",
    startDate: new Date(),
    weekDay: "Monday"
}

const dailyMeeting3: WeeklyMeeting = {
    title: "Daily",
    startDate: new Date(),
    weekDay: "MO"
}

const allMeetings: WeeklyMeeting[] = [dailyMeeting, dailyMeeting2, dailyMeeting3];

allMeetings.forEach((meeting: WeeklyMeeting) => {
    if (meeting.weekDay === "Montag" || meeting.weekDay === "Monday" || meeting.weekDay === "MO"){
        console.log("Meeting findet statt");
    }
});

// das ist umständlich und fehleranfällig weil alle Möglichkeiten berücksichtigt werden müssten

enum Weekday{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(Weekday.Monday);
console.log(Weekday.Tuesday);
console.log(Weekday.Wednesday);

type WeeklyMeeting2 = {title: string, startDate: Date, weekDay: Weekday};

const retroMeeting: WeeklyMeeting2 = {
    title: "Retro",
    startDate: new Date(),
    weekDay: Weekday.Thursday
}

console.log(retroMeeting);

//* Bestellstatus mit ENUM

enum Orderstatus {
    Created,
    Accepted,
    InProgress,
    Delivery,
    Delivered,
    Cancelled,
    Deleted
}

type ShopOrder = {number: number, customerNumber: number, status: Orderstatus};

const order477: ShopOrder = {
    number: 477,
    customerNumber: 53331,
    status: Orderstatus.Created
}

console.log("Order wurde angelegt und hat den Status: ", order477.status);
order477.status = Orderstatus.Accepted;
console.log("Bezeichnung von Orderstatus Accepted: ", Orderstatus[1]);
//! zeigt den Text an nicht, den Zahlenwert


//? eigene Werte (Nummern) vergeben

enum HTTPStatusCodes {
    OK = 200,
    CREATED = 201,
    BADGATEWAY = 400,
    NOTFOUND = 404
}

console.log(HTTPStatusCodes.NOTFOUND);

//* SET
//* ist wie ein Array, nur mit eindeutigen Werten

const cocktails: string[] = ["Pina-Colada", "Mojito", "Long-Island-Icetea", "Mojito", "Cuba-Libre", "Pina-Colada"];
console.log("cocktails: ", cocktails);
console.log("cocktails length: ", cocktails.length);

const cocktailSet = new Set<string>();
cocktailSet.add("Pina-Colada");
cocktailSet.add("Cuba-Libre");
cocktailSet.add("Pina-Colada");
console.log("cocktailset: ", cocktailSet);
// hat nur 2 Einträge weil Dopplungen ingnoriert werden
console.log("CocktailSet Size: ", cocktailSet.size);

if (cocktailSet.has("Cuba-Libre")){
    console.log("Free Cuba");
}

//? kein Index-Zugriff möglich
// console.log(cocktailSet[0]);

//? wird häufig verwendet um Arrays aufzuräumen - doppelte Werte entfernen
const cleanUpCocktailsSet = new Set(cocktails);
console.log({cleanUpCocktailsSet});
//? Array.from wandelt in Array um
const cleanedUpArray = Array.from(cleanUpCocktailsSet);
console.log(cleanedUpArray);

//* array wird in ein Set gewandelt weil set automatisch doppelte werte entfert. so ist mit einer Zeile jede Dopplung raus. mit array.from wird das set wieder zurückgewandelt in ein array!


//* MAP
//* spezielles Objekt - wird oft als "Lexikon" oder "Wörterbuch" verwendet

const germanEnglishDictionary = new Map<string, string>();
germanEnglishDictionary.set("Tier", "animal");
germanEnglishDictionary.set("froh", "happy");
germanEnglishDictionary.set("Montag", "monday");
germanEnglishDictionary.forEach((entry) => {
    console.log(entry);
});

germanEnglishDictionary.forEach((value, key) => {
    console.log(`${key} heißt auf englisch ${value}`);
});

//? Index Zugriff
console.log("germanEnglischDictionary get: ", germanEnglishDictionary.get("Tier"));

const italianMenu = new Map<number, string>();
italianMenu.set(100, "Bruscetta");
italianMenu.set(200, "Pizza");
italianMenu.set(300, "Pasta");

console.log("Nummer 200: ", italianMenu.get(200));


//* TUPLE
//* ist ein Array mit verschiedenen Datentypen

const nameAgeSize: [string, number, number] = ["Annie", 22, 1.73];
console.log("Name: ", nameAgeSize[0]);

//? besser ist die Schreibweise mit type


// enum vordefiniert
// set zum aufräumen
// map zum nachschlagen
// tuple lieber nicht