let searchForm = document.getElementById("search-input") as HTMLFormElement;
let regionInput = document.getElementById("region-input") as HTMLInputElement;
let realmInput = document.getElementById("realm-input") as HTMLInputElement;
let characterNameInput = document.getElementById("name-input") as HTMLInputElement;
let outputArea = document.getElementById("character-output-wrapper") as HTMLElement;

searchForm.addEventListener("submit", (event => {
    event.preventDefault()
    searchForCharacter();
}));

function searchForCharacter(){

    let region:string = regionInput.value;
    let realm:string = realmInput.value;
    let characterName:string = characterNameInput.value;
    let fetchURL = "";
    createFetchURLFromInput()


function createFetchURLFromInput(){
    let BASE_URL = "https://raider.io/api/v1/characters/profile?";
    let REGION_URL_PART = `region=${region}`;
    let REALM_URL_PART = `realm=${realm}`;
    let CHARACTER_URL_PART = `name=${characterName}`;

    fetchURL = `${BASE_URL}${REGION_URL_PART}&${REALM_URL_PART}&${CHARACTER_URL_PART}`;

}


fetch(fetchURL)
.then((response:Response) => {
    if(!response.ok){
        throw Error(`${response.status}, ${response.statusText}`)
    }
    return response.json();
})
.then((data) => {

        if (data.faction === "horde") {
            outputArea.innerHTML = `
            <div class="backdrop backdrop-horde">
            <div class="char-portrait">
                <img src="${data.thumbnail_url}">
            </div>
            <div class="char-info">
            <p class="char-name">${data.name}</p>
            <div class="char-details">
            <p class="char-race">${data.race}</p>
            <p class="char-class">${data.class}</p>
            <p class="char-faction">${data.faction}</p>
            </div>
            </div>
            </div>
            `
        } else{
            outputArea.innerHTML = `
            <div class="backdrop backdrop-alliance">
            <div class="char-portrait">
                <img src="${data.thumbnail_url}">
            </div>
            <div class="char-info">
            <p class="char-name">${data.name}</p>
            <div class="char-details">
            <p class="char-race">${data.race}</p>
            <p class="char-class">${data.class}</p>
            <p class="char-faction">${data.faction}</p>
            </div>
            </div>
            </div>
            `
        }
    
})

};




import { ITodo } from "./contracts/ITodo";

let todoWrapperDiv = document.getElementById("todo-wrapper") as HTMLElement;

fetch("https://jsonplaceholder.typicode.com/todos")
.then((response:Response) => {
    if(!response.ok){
        throw Error(`${response.status}, ${response.statusText}`)
    }
    return response.json();
})
.then((todos:ITodo) => {
    console.log(todos)
    return todos
})
.then((todos:ITodo) => {
    todos.sort((a:ITodo, b:ITodo) => a.title.localeCompare(b.title));
    return todos
})
.then((todos:ITodo) => {

    let listOfTodos = todos.map((todo:ITodo) => {
        if(todo.completed === true){
            return `
            <div class="single-todo single-todo-done">
            <p>UserID: ${todo.userId}</p>
            <p>ID: ${todo.id}</p>
            <p>Title: ${todo.title}</p>
            <p>Completed: ${todo.completed}</p>
            </div>
            `
        } else {
            return `
            <div class="single-todo single-todo-open">
            <p>UserID: ${todo.userId}</p>
            <p>ID: ${todo.id}</p>
            <p>Title: ${todo.title}</p>
            <p>Completed: ${todo.completed}</p>
            </div>
            `
        }
    })
    todoWrapperDiv.innerHTML = listOfTodos;
})
.catch((error) => {
    throw error;
})
.finally(() => {
    console.log("loading complete")
})