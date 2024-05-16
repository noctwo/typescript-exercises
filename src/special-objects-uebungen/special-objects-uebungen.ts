//* Level 1-1
const starWarsActors: string[][] = [
    ["Luke Skywalker", "Mark Hamill"],
    ["Darth Vader", "James Earl Jones"],
    ["Yoda", "Frank Oz"],
    ["Han Solo", "Harrison Ford"],
    ["Princess Leia", "Carrie Fisher"]
];

starWarsActors.forEach((actor) => {
    console.log(`${actor[1]} spielt ${actor[0]}`);
});


//* Level 2-1
const workerLuke: [number, string, string, number] = [123, "Luke", "Jedi", 50000];
const workerVader: [number, string, string, number] = [666, "Vader", "Sith", 5000000];
const workerYoda: [number, string, string, number] = [789, "Yoda", "Jedi-Master", 0];
const workerSolo: [number, string, string, number] = [455, "Solo", "Pilot", 10000];
const workerLeia: [number, string, string, number] = [999, "Leia", "Princess", 1000000000];

const allWorkers = [
    [123, "Luke", "Jedi", 50000],
    [666, "Vader", "Sith", 5000000],
    [789, "Yoda", "Jedi-Master", 0],
    [455, "Solo", "Pilot", 10000],
    [999, "Leia", "Princess", 1000000000]
];

allWorkers.forEach((worker) => {
    console.log(worker);
});

//* Level 1-1
enum WeekdayDE{
    Montag,
    Dienstag,
    Mittwoch,
    Donnerstag,
    Freitag,
    Samstag,
    Sonntag
};

for (const key in WeekdayDE) {
    console.log(key);
};

enum aFewMonths{
    January,
    February,
    March,
    November,
    December 
}
for (const key in aFewMonths) {
    console.log(key);
};


//* Level 1-2
enum PizzaSize{
    Small,
    Medium,
    Large,
    Family
}

enum PizzaIngedients{
    Cheese,
    Onion,
    Tofu,
    Broccoli
}

type PizzaTemplate = {size: PizzaSize, ingredients: PizzaIngedients};

let pizzaOne:PizzaTemplate = {
    size: PizzaSize.Small,
    ingredients: PizzaIngedients.Cheese
}

let pizzaTwo:PizzaTemplate = {
    size: PizzaSize.Medium,
    ingredients: PizzaIngedients.Onion
}

let pizzaThree:PizzaTemplate = {
    size: PizzaSize.Large,
    ingredients: PizzaIngedients.Tofu
}

let pizzaFour:PizzaTemplate = {
    size: PizzaSize.Family,
    ingredients: PizzaIngedients.Broccoli
}

//* Level 2-1
enum ErrorCodes{
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500
}

function generateCodes(){
    let rndCode = Math.floor(Math.random()*5);
    if (rndCode <= 2) {
        console.log(ErrorCodes[200]);
    } else if (rndCode === 3){
        console.log(ErrorCodes[300]);
    } else if (rndCode === 4){
        console.log(ErrorCodes[400]);
    } else {
        console.log(ErrorCodes[500]);
    }
};
generateCodes();

//* Level 2-2
enum ClothingColor{
    Gelb = "f5e642",
    Orange = "f59b42",
    Pink = "ef42f5",
    Blau = "42aaf5",
    Lila = "bf42f5",
    Grau = "dbd9db",
};
let allColors = [ClothingColor.Gelb, ClothingColor.Orange, ClothingColor.Pink, ClothingColor.Blau, ClothingColor.Lila, ClothingColor.Grau];
console.log(allColors);

allColors.forEach(color => {
    let button:any = document.createElement("button");
    button.innerText = color;
    button.style.backgroundColor = "#" + color;
    document.body.appendChild(button)
});

//* Level 1-1
const starWarsCharacters :string[] = ["Luke Skywalker", "Darth Vader", "Obi Wan Kenobi"]
console.log(starWarsCharacters);
starWarsCharacters.push("Leia Organa");
console.log(starWarsCharacters);

starWarsCharacters.push("Leia Organa");
console.log(starWarsCharacters);

//* Level 1-1
const favoriteBands = new Map<string, string[]>();
favoriteBands.set("Metallica", ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"]);
favoriteBands.set("Pink Floyd", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"]);
favoriteBands.set("The Rolling Stones", ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"]);
console.log(favoriteBands);
favoriteBands.set("The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"])
console.log(favoriteBands);
console.log(favoriteBands.get("Metallica"));
console.log(favoriteBands.get("Metallica")[3]);

