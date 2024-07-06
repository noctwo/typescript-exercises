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