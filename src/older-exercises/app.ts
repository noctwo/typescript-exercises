import { SingerThree } from "./SingerThreeType";
import { singersThree } from "./singersThree";

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