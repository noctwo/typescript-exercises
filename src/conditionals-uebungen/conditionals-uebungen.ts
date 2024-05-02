// Level 1-15
let num: number = 5;
let anotherNum:number = 8;

console.log(num == anotherNum);
console.log(num === anotherNum);
console.log(num > anotherNum);
console.log(num < anotherNum);
console.log(num >= anotherNum);
console.log(num <= anotherNum);
console.log(num == "5");
console.log(num != 8);
console.log(num != "5");

// Level 2-1
let heightJohn:number = 170;
let ageJohn:number = 22;

let heightMeike:number = 168;
let ageMeike:number = 34;

let scoreJohn:number = (ageJohn * 5) + heightJohn;
let scoreMeike:number = (ageMeike * 5) + heightMeike;
console.log({scoreJohn}, {scoreMeike});

if (scoreJohn > scoreMeike){
    console.log("John wins");
} else if (scoreJohn < scoreMeike){
    console.log("Meike wins");
} else if (scoreJohn === scoreMeike){
    console.log("Draw");
}

// Level 2-3
let randomNum = 123;

if (randomNum > 27){
    console.log((randomNum - 27) * 2);
} else {
    console.log(randomNum - 27);
}

// Level 2-4
let numOne = Math.random() * 78;
let numTwo = Math.random() * 78;

if (numOne === numTwo){
    console.log("So ein Zufall");
} else if (numOne > numTwo){
    console.log("Erste Zahl ist größer");
} else if (numOne < numTwo){
    console.log("Zweite Zahl ist größer");
}

switch (true) {
    case numOne > numTwo:
        console.log("Erste Zahl ist größer");
        break;
    case numTwo > numOne:
        console.log("Zweite Zahl ist größer");
        break;
    case numTwo === numOne:
        console.log("So ein Zufall");
        break;
}

// Level 1-5

let weekDayAsNumber:number = Number(window.prompt("Please insert Number between 1 and 7"));
let weekDayAsString 

switch (true) {
    case weekDayAsNumber === 1:
        weekDayAsString = "Monday";
        break;
    case weekDayAsNumber === 2:
        weekDayAsString = "Tuesday";
        break;
    case weekDayAsNumber === 3:
        weekDayAsString = "Wednesday";
        break;
    case weekDayAsNumber === 4:
        weekDayAsString = "Thursday";
        break;
    case weekDayAsNumber === 5:
        weekDayAsString = "Friday";
        break;
    case weekDayAsNumber === 6:
        weekDayAsString = "Saturday";
        break;
    case weekDayAsNumber === 7:
        weekDayAsString = "Sunday";
        break;
    default:
        console.log("Weekday must be a number between 1 and 7, you idiot!");
        break;
}

console.log(weekDayAsString);

// Level 2-8

let schoolGrade:number = Math.ceil(Math.random() * 10);
console.log({schoolGrade});
switch (true) {
    case schoolGrade === 1:
        console.log("sehr gut");
        break;
    case schoolGrade === 2:
        console.log("gut");
        break;
    case schoolGrade === 3:
        console.log("befriedigend");
        break;
    case schoolGrade=== 4:
        console.log("ausreichend");
        break;
    case schoolGrade === 5:
        console.log("mangelhaft");
        break;
    case schoolGrade === 6:
        console.log("ungenügend");
        break;
    case schoolGrade === 7 || schoolGrade === 8 || schoolGrade === 9 || schoolGrade === 10:
        console.log("Keine gültige Schulnote");
        break;
}

// Level 3-1

let salesMonth = Math.ceil(Math.random() * 12);
console.log({salesMonth});
let actualSalesMonth = "";
switch (true) {
    case salesMonth >= 1 && salesMonth <= 3:
        console.log("1. Quartal");
        actualSalesMonth = "1. Quartal";
        break;
    case salesMonth >= 4 && salesMonth <= 6:
        console.log("2. Quartal");
        actualSalesMonth = "2. Quartal";
        break;
    case salesMonth >= 7 && salesMonth <= 9:
        console.log("3. Quartal");
        actualSalesMonth = "3. Quartal";
        break;
    case salesMonth >= 10 && salesMonth <= 12:
        console.log("4. Quartal");
        actualSalesMonth = "3. Quartal";
        break;
    default:
        break;
}

let totalSales = Math.floor(Math.random() * (1000 -10000) + 10000);
console.log({totalSales});
let bewertung = "";
switch (true) {
    case totalSales >= 1000 && totalSales <= 2500:
        bewertung = "schlecht";
        break;
    case totalSales >= 2501 && totalSales <= 5000:
        bewertung = "mittel";
        break;
    case totalSales >= 5001 && totalSales <= 7500:
        bewertung = "hoch";
        break;
        case totalSales >= 7501 && totalSales <= 10000:
        bewertung = "unglaublich";
        break;
    default:
        break;
}
console.log(bewertung);
console.log(`Im ${actualSalesMonth} war der Umsatz ${bewertung}`);

// Level 2-2
let userOnline: boolean = Math.random() <= 0.5;
let isPremiumUser: boolean = Math.random() <= 0.5;
let isAdult: boolean = (Math.random() * 100) >= 18;

let dialogOnline: string = userOnline ? "User is online" : "User is offline";
console.log({dialogOnline});

let dialogPremium: string = isPremiumUser ? "User is Premium" : "User is default";
console.log({dialogPremium});

let dialogAdult: string = isAdult ? "User is adult" : "User is a child";
console.log({dialogAdult});





let randomAge = Math.floor(Math.random()*120);
let randomSalery = Math.floor(Math.random()*15000);

let middleAged = "is middle aged";
randomAge >= 40 && randomAge <= 65 ? console.log(middleAged) : console.log(randomAge);

randomSalery > 10000 ? console.log("rich") : console.log("poor");