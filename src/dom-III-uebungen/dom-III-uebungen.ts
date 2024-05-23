//* Level 1-9
let select = document.getElementById("farbeAuswahlen") as HTMLSelectElement;
let delColBtn = document.getElementById("del-col-btn");
delColBtn?.addEventListener("click", (event: Event) => {
    event.preventDefault();
    deleteSelectIndex();
});

function deleteSelectIndex(){
select.remove(select.selectedIndex)
};

//* Level 2-2

type SimplePerson = {
    name: string;
    lastName: string;
    country: string
}

let Person:SimplePerson[] = [];

let personForm = document.getElementById("form1");
let firstNameInput = document.getElementById("vorname") as HTMLInputElement;
let lastNameInput = document.getElementById("nachname") as HTMLInputElement;
let countryInput = document.getElementById("land") as HTMLSelectElement;

personForm?.addEventListener("submit", (event:Event) => {
    event.preventDefault();
    simplePersonOutput();
});

function simplePersonOutput(){
    let newPerson:SimplePerson = {
    name: firstNameInput.value,
    lastName: lastNameInput.value,
    country: countryInput.value
    }
    Person.push(newPerson);
    console.log(Person);
};

//* Level 2-4
let selectColor = document.getElementById("choose-color") as HTMLSelectElement;
let colorChangeBtn = document.getElementById("bg-color-change-btn");
let docBody:any = document.querySelector("body");
colorChangeBtn?.addEventListener("click", (event: Event) => {
    event.preventDefault();
    changeBGColorOnClick();
});

function changeBGColorOnClick(){
    //docBody.style.backgroundColor = `${selectColor.value}`;
    // wenn "richtiger" value im html hinterlegt
    let removeSpaces = selectColor.value.replace(/ /g,"");
    docBody.style.backgroundColor = removeSpaces;
};

//! ohne regex -> .replace(" ", "");

//* Level 2-10
//fruitButtonToCreate.classList.add("fruit-item");
let smallBtn = document.getElementById("small-btn");
let mediumBtn = document.getElementById("medium-btn");
let bigBtn = document.getElementById("big-btn");

let backgroundElement = document.getElementById("element");
//backgroundElement?.classList.add("small")

smallBtn?.addEventListener("click", addClassSmall);
mediumBtn?.addEventListener("click", addClassMedium);
bigBtn?.addEventListener("click", addClassBig);


function removeClass(){
    backgroundElement?.classList.remove("small-one");
    backgroundElement?.classList.remove("small-two");
    backgroundElement?.classList.remove("small-three");
}

function addClassSmall(){
    removeClass()
    backgroundElement?.classList.toggle("small-one");

};

function addClassMedium(){
    removeClass()
    backgroundElement?.classList.toggle("small-two");
};

function addClassBig(){
    removeClass()
    backgroundElement?.classList.toggle("small-three");
};
//! boolean bei toggle fehlt - dann brauchts auch kein .remove! dogh!

//* Level 3-1
let newToDoInput = document.getElementById("new-to-do-input") as HTMLInputElement;
let todoSubmit = document.getElementById("todo-submit");
let toDoOutputField = document.getElementById("my-todos") as HTMLElement;

todoSubmit?.addEventListener("click", addMyNewToDo);

function addMyNewToDo(){
    let newToDoItem = document.createElement("div");
    newToDoItem.className="new-todo-item";

    let newToDoItemCheckBox = document.createElement("input");
    newToDoItemCheckBox.type = "checkbox";

    let newToDoText = document.createTextNode(newToDoInput.value);

    let toDoDeleteBtn = document.createElement("span");
    toDoDeleteBtn.className = "todo-delete-btn"
    toDoDeleteBtn.innerHTML = " - - - X";

    newToDoItem.appendChild(newToDoItemCheckBox);
    newToDoItem.appendChild(newToDoText);
    newToDoItem.appendChild(toDoDeleteBtn);

    toDoOutputField.appendChild(newToDoItem);

    newToDoItemCheckBox.addEventListener("change", () => {
    if(newToDoItemCheckBox.checked === true){
        console.log("yes")
        newToDoItem.classList.add("todo-crossed")
    }  else{
        console.log("no")
        newToDoItem.classList.remove("todo-crossed")
    }
})

toDoDeleteBtn.addEventListener("click", () => {
    if (newToDoItemCheckBox.checked === true){
    newToDoItem.remove();
    } else {
        window.alert("ToDoItem must be marked as done!");
    }
});

    newToDoInput.value = "";
};

