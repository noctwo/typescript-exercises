// ?wdh einface Datentypen
const firstNameSuzy:string = "Suzy";
const lastNameSuzy:string = "Miller";
const ageSuzy:number = 27;

// ?Listen oder Arrays
const listOfTasks:string[] = ["Do dishes", "Work out", "make dinner"];

// ?Objects
const suzy = {
    firstName: "Suzy",
    lastName: "Miller",
    age: 27
};

console.log(suzy.firstName);
console.log(suzy.lastName);
console.log(suzy.age);
// console.log(suzy.adress); // TS checkt sofort, dass Eigenschaft nicht vorhanden ist.

// suzy.age = "30"; wenn Eigenschaft bereits Typ Number ist, kann String dann nicht zugewiesen werden.

const tommy = {
    firstName: "Thomas",
    lastName: "Smith",
    age: 55,
   // !address: "High Street 33"
    address: {
        street: "High-Street",
        zipCode: 12345,
        city: "London"
    }
}

console.log("Tommys Zip Code ", tommy.address.zipCode);
tommy.address.zipCode = 78910;
console.log("Tommys Zip Code ", tommy.address.zipCode);

tommy.age = 44;
console.log(tommy.address, tommy.age);

const movieHomeAlone = {
    title: "Home Alone",
    year: 1990,
    mainChracter: "Kevin",
    villains: ["Harry", "Marv"]
}

console.log(movieHomeAlone.villains[1]);
movieHomeAlone.villains.push("Parents");
console.log(movieHomeAlone.villains)
// ! das Urpsrungsobject wird hier für immer verändert und wird bei späteren Zugriffen mit dem neuen Wert ausgegeben.
movieHomeAlone.year = 1991;

const movieJurassicPark = {
    title: "Jurassic Park",
    year: 1993,
    mainCharacter: "Dr. Alan Grant",
    villains: ["T-Rex", "Velociraptor"]
}

console.log(movieJurassicPark.title);

const movies = [movieHomeAlone, movieJurassicPark];
console.log("Movie Title and Year");
movies.forEach((movies) => {
    console.log("Title ", movies.title);
    console.log("Year ", movies.year);
});

console.log(movieJurassicPark.year);
console.log(movieJurassicPark["year"]);  //! alternative Schreibweise zu "."

//? movies nach Erscheinungsjahr sortieren
movies.sort((movieA, movieB) => {
    return movieB.year - movieA.year;
});
console.log({movies});

// * eigenen Datentypen anlegen
const wanderhure = {
    titel: "Die Wanderhure",
    erscheinungsjahr: 2010,
    hauptperson: "Die Wanderhure"
};

// movies.push(wanderhure); //! kann nicht in movies gepusht werden, weil es ganz andere Eigenschaften und Datentypen hat!

// * mit Type kann man einen bestimmten Datentyp festlegen - wird immer Groß geschrieben - es ist eine Art Template bzw. Schema.

type Movie = {
    title: string;
    year: number;
    mainCharacter: string;
    villains:string[];
}

const wanderhureNeu: Movie = {
    title: "Die Wanderhure",
    year: 2010,
    mainCharacter: "Die Wanderhure",
    villains: ["Kirche"]
}

//? for Schleife für Objects
//? zeigt alle Eigenschaften des Objekts wanderhureNeu
console.log("For In für Wanderhure");
for (const key in wanderhureNeu){
    console.log(key);
}

//! im Object sind "KEY-VALUE-PAIRS" enthalten jeder Key hat einen Value

//? Object Keys
console.log(Object.keys(wanderhureNeu));

//? Object Values
console.log(Object.values(wanderhureNeu));
