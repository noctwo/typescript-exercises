//* Level 1-4
let textInput = document.querySelector(".input-one") as HTMLInputElement;
let addTextBtn = document.querySelector(".add-txt-btn") as HTMLElement;
let outputField = document.querySelector(".output-field") as HTMLElement;

addTextBtn.addEventListener("click", () => {
    giveNoteWithTimeStamp();
});

function giveNoteWithTimeStamp (){
    console.log("hi");

    let newNote = outputField.appendChild(document.createElement("p"));
    newNote.innerHTML = new Date() + ` ${textInput.value}`;
};


//* Level 1-2
let infoDiv = document.getElementById("info") as HTMLElement;
infoDiv.innerHTML = "<h1>Hello World!</h1><br><h2>How are u?</h2>";

let containerDiv = document.getElementById("container") as HTMLElement;
containerDiv.innerHTML = "<p>This is a paragraph</p>";

let inputText = document.querySelector(".input-type-set-attr") as HTMLInputElement;
inputText.setAttribute("type", "text");

//* Level 1-3
let addGalleryItem = document.querySelector(("#gallery")) as HTMLElement;

function createGallery (galleryItemCount:number){
    for (let index = 0; index < galleryItemCount; index++) {
        let galleryImage = addGalleryItem?.appendChild(document.createElement("figure"));
        galleryImage.innerHTML = "<img src='https://source.unsplash.com/random' width='400px'>" 
    }
};

createGallery(3);

//* Level 1-1
let shoppingListInput = document.getElementById("input-text") as HTMLInputElement;
let addItemBtn = document.getElementById("add-shopping-item-btn") as HTMLElement;
addItemBtn.addEventListener("click", () => addShoppingListItems());
let shoppingList = document.getElementById("myList") as HTMLElement;

function addShoppingListItems(){
    if (shoppingListInput.value != ""){
        let shoppingListItem = shoppingList.appendChild(document.createElement("li")) as HTMLElement;
        shoppingListItem.innerHTML = shoppingListInput.value.trim();
        shoppingListInput.value = "";
    } else{
        console.log("Eingabe ungueltig!");
    } 
};

//* Level 1-2
//let exampleBtn = document.querySelector(".example") as HTMLElement;
let allExampleElements:any = document.querySelectorAll(".example");

allExampleElements.forEach((exampleDiv: HTMLElement) => {
exampleDiv?.addEventListener("click", changeBgColor);
});

function changeBgColor(){

    allExampleElements.forEach((exampleDiv: HTMLElement) => {
        exampleDiv.style.backgroundColor = "orange";
    });
};
