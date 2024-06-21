import { AllCharacters, AllCharactersResults } from "./contracts/IRickMorty";

let dataOutputArea = document.querySelector(".output-wrapper") as HTMLElement;
let searchForm = document.querySelector(".search-form") as HTMLFormElement;
let searchFromSearchInput = document.getElementById("search-input") as HTMLInputElement;

searchForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    fetchAndCopyData();

})


const BASE_URL = "https://rickandmortyapi.com/api/";
const ALLCHARACTERS_URL_PART = "character";

function renderAllCards(characters:AllCharactersResults[]){
    characters.forEach(character => {
        let characterCard = dataOutputArea.appendChild(document.createElement("div"));
        characterCard.appendChild(createCharacterImage(`${character.image}`))
        characterCard.className = "single-character-card";
        characterCard.appendChild(createParagraph("Name", character.name));
        characterCard.appendChild(createParagraph("Status", character.status));
        characterCard.appendChild(createParagraph("Species", character.species));
        characterCard.appendChild(createParagraph("Gender", character.gender));
        characterCard.appendChild(createParagraph("Location", character.location.name));
    });
};

function fetchAndCopyData(){

fetch(`${BASE_URL}${ALLCHARACTERS_URL_PART}`)
.then((response: Response) => {
    console.log('Response: ', response);
    if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
    }
        return response.json();
})
.then((response:AllCharacters) => {
    let characters = [...response.results];
    console.log(characters);
    return characters;
})
.then((characters) => {
    renderAllCards(characters);
})
}


function createParagraph(label: string, value: string): HTMLParagraphElement {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `${label}: ${value}`;
    return paragraph;
}

function createCharacterImage(imageurl:string){
    let imageContainer = document.createElement("div");
    imageContainer.className = "character-image-container";
    imageContainer.style.backgroundImage = `url(${imageurl})`
    return imageContainer;
}