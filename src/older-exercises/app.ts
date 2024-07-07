import { SingerThree } from "./SingerThreeType";
import { singersThree } from "./singersThree";
import { weather } from "./weather";

let searchInput = document.getElementById("search-input") as HTMLInputElement;
let tableOutput = document.getElementById("table-container") as HTMLElement;
let searchBtn = document.getElementById("search-button") as HTMLButtonElement;

searchBtn.addEventListener("click", () => {
    let searchInputValue = searchInput.value;
    tableOutput.innerHTML = "";
    searchSingers(searchInputValue)
});


function printAllSingersTable(element:SingerThree){
        tableOutput.appendChild(document.createElement("h3")).innerHTML = element.name;
        tableOutput.appendChild(document.createElement("span")).innerHTML = element.country;
        tableOutput.appendChild(document.createElement("span")).innerHTML = element.period_active.start.toString();
        tableOutput.appendChild(document.createElement("span")).innerHTML = element.period_active.end.toString();
        tableOutput.appendChild(document.createElement("span")).innerHTML = element.genre;
}


function searchSingers(searchTerm:string){

    let result = singersThree.filter(singer => {
        return singer.name === searchTerm ||
                singer.country === searchTerm ||
                singer.genre.includes(searchTerm) ||
                singer.period_active.end === Number(searchTerm) ||
                singer.period_active.start === Number(searchTerm);
    })
    console.log(result);
    result.forEach(element => {
        printAllSingersTable(element);
    });
}


let weatherData = [...weather.data]
console.log(weatherData);

function getMinTemp(){
    let minTemps = weatherData.map((data) => data.temperature_min);
    let min = `Niedrigste Temperatur: ${Math.min(...minTemps)} °C`;
    console.log(min);
}

function getMaxTemp(){
    let maxTemps = weatherData.map((data) => data.temperature_max);
    let max = `Höchste Temperatur: ${Math.max(...maxTemps)} °C`;
    console.log(max);
}
getMinTemp();
getMaxTemp();


console.log(`Current URL is: ${window.location.href}`)

function calculateFactorial(number:number){
    
    if (number === 0 || number === 1){
        console.log(`factorial(${number}) = ${Number(1)}`);
    } 
    else{
        let result= 1;
        for (let index = 1; index <= number; index++) {
        result = result * index
        console.log(result);
}
    }
}
calculateFactorial(3)
calculateFactorial(5)
calculateFactorial(10)

function addToFifty(){
    let isFifty = 0;
    for (let index = 0; isFifty <= 50; index++) {
        let addUp = Math.floor(Math.random()*10);
        console.log(addUp);
        isFifty = isFifty + addUp;
    }
    console.log(`result: ${isFifty}`);
}
addToFifty();




function getNumberOfVowels(inputString:string){
    let foundVowels:string[] | null = [];
    let vowels:any = inputString.match(/[aeiou]/ig);
    foundVowels.push(vowels);
    console.log(foundVowels);
}
getNumberOfVowels("abracadabrasimsalabimbambazeladu");



let loopNumberInput = document.getElementById("loop-number-input") as HTMLInputElement;
let loopBtn = document.getElementById("loop-output-btn") as HTMLButtonElement;
let loopOutput = document.getElementById("loop-output") as HTMLElement;


loopBtn.addEventListener("click", () => {
    let loopNumberInputValue = Number(loopNumberInput.value);
    createLoopOutput(loopNumberInputValue);
})

function createLoopOutput(numberOfOOOOOOOOOOOs:number){
    let numberOfOsArray = [];
    for (let index = 0; index <= numberOfOOOOOOOOOOOs; index++) {
        numberOfOsArray.push("o");
    }
    let allOs = numberOfOsArray.join("");
    loopOutput.innerHTML = `L${allOs}p`;
}





let artworks:string [] = [    
    "Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Der Schrei - Edvard Munch",
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"
];

let artworkDates:string[] = [
    "Die Sternennacht - 1889",
    "Guernica - 1937",
    "Die Geburt der Venus - 1486",
    "Die Nachtwache - 1642",
    "Die Mona Lisa - 1503",
    "Die Kartoffelesser - 1885",
    "Der Schrei - 1893",
    "Das letzte Abendmahl - 1495",
    "Die freudige Botschaft - 1885",
    "Der Garten der Lüste - 1505"
];


function searchAndSplitArtworksAndDates (searchTerm:string){
    let findString = artworks.find((findParam) => findParam.startsWith(searchTerm))?.split("-");
    let findYear = artworkDates.find((findParam) => findParam.startsWith(searchTerm))?.split("-");

    console.log(`${findString![0]} wurde von ${findString![1]} im Jahre ${findYear![1]} gemalt.`);
    return findString && findYear;
};

searchAndSplitArtworksAndDates("Guernica");
searchAndSplitArtworksAndDates("Die Sternennacht");
searchAndSplitArtworksAndDates("Der Schrei");
searchAndSplitArtworksAndDates("Die Mona Lisa");
searchAndSplitArtworksAndDates("Die Kartoffelesser");
searchAndSplitArtworksAndDates("Das letzte Abendmahl");
searchAndSplitArtworksAndDates("Die freudige Botschaft");
searchAndSplitArtworksAndDates("Der Garten der Lüste");
searchAndSplitArtworksAndDates("Die Nachtwache");
searchAndSplitArtworksAndDates("Die Geburt der Venus");




let scoreHome = document.getElementById("score-home") as HTMLElement;
let scoreAway = document.getElementById("score-away") as HTMLElement;

let addOneHome = document.getElementById("add-one-home") as HTMLButtonElement;
let addTwoHome = document.getElementById("add-two-home") as HTMLButtonElement;
let addThreeHome = document.getElementById("add-three-home") as HTMLButtonElement;

let addOneAway = document.getElementById("add-one-away") as HTMLButtonElement;
let addTwoAway = document.getElementById("add-two-away") as HTMLButtonElement;
let addThreeAway = document.getElementById("add-three-away") as HTMLButtonElement;

let resetBtn = document.getElementById("reset-score-btn") as HTMLButtonElement;

let changeHomeTeamNameBtn = document.getElementById("home-team-name-btn") as HTMLButtonElement;
let changeAwayTeamNameBtn = document.getElementById("away-team-name-btn") as HTMLButtonElement;

let homeTeamNameOutput = document.getElementById("home-team-name-output") as HTMLElement;
let awayTeamNameOutput = document.getElementById("away-team-name-output") as HTMLElement;

function addToHomeScore(add:number){
    let currentScoreHome = Number(scoreHome.innerText);
    let newScoreHome = currentScoreHome + add;
    scoreHome.innerHTML = newScoreHome.toString();
}

function addToAwayScore(add:number){
    let currentScoreAway = Number(scoreAway.innerText);
    let newScoreAway = currentScoreAway + add;
    scoreAway.innerHTML = newScoreAway.toString();
}

let addScoreButtonsHome = [addOneHome, addTwoHome, addThreeHome];
let addScoreButtonsAway = [addOneAway, addTwoAway, addThreeAway]

addScoreButtonsHome.forEach(button => {
    button.addEventListener("click", () =>{
        addToHomeScore(Number(button.value))
    })
});

addScoreButtonsAway.forEach(button => {
    button.addEventListener("click", () =>{
        addToAwayScore(Number(button.value))
    })
});

resetBtn.addEventListener("click", () => {
    scoreHome.innerHTML = "0";
    scoreAway.innerHTML = "0";
    homeTeamNameOutput.innerHTML = "Home Team";
    awayTeamNameOutput.innerHTML = "Away Team"
})

changeHomeTeamNameBtn.addEventListener("click", () => {
    let homeTeamNameUserInput = window.prompt("Home Team Name");
    homeTeamNameOutput.innerText = homeTeamNameUserInput!;
})

changeAwayTeamNameBtn.addEventListener("click", () => {
    let awayTeamNameUserInput = window.prompt("Home Team Name");
    awayTeamNameOutput.innerText = awayTeamNameUserInput!;
})