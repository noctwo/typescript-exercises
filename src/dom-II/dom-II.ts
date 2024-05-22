//? eingebundener Code wird nur ein Mal! aufgerufen - beim Seitenaufbau!

//* Wann werden Elemente im HTML angelegt unnd wann im Typescript?
//? Feste, sich nicht verändernde Elemente im HTML - alles was sich ändert, dynamisch ist, Dinge ausgibt im TS.
//? Für generiegung der Elemente im Code spricht auch, dass sie sich stetig automatisch erweitern sollten - also eine Liste von Links soll automatisch neue Links erhalten wenn sich in der DB etas ändert.


//* 1. Die nötigen Daten erzeugen oder abholen
//* Array von Objekten die einem bestimmten Typ entsprechen
//* Durch dynamische erzeugung können nun Elemente einfach hinzugefügt werden oder gelöscht werden
//? Types werden mit SEMIKOLON getrennt!

type FruitButton = {name: string; emoji: string; color: string}

const fruitButtons: FruitButton[] = [
  { name: 'Apple', color: '#ff0800', emoji: '🍎' },
  { name: 'Banana', color: '#ffe135', emoji: '🍌' },
  { name: 'Grapes', color: '#6f2da8', emoji: '🍇' },
  { name: 'Orange', color: '#ffa500', emoji: '🍊' },
  { name: 'Strawberry', color: '#fc5a8d', emoji: '🍓' },
  { name: 'Watermelon', color: '#fc6c85', emoji: '🍉' }
];

//* 2. Die Elemente aus dem HTML herausholen
//* Welche Möglichkeiten gibt es um HTML Elemente anzusprechen?
//? get.ElementById
//? in Variable speichern um immer wieder drauf zugreifen zu können
//? mit "as HTMLDivElement" sage ich dem Element welche Eigenschaften es haben soll und auf welche ich dann später zugreifen / verwenden möchte / kann
//? häufig "as" für input Select value
const fruitListElement = document.getElementById("fruit-list") as HTMLDivElement;

//? querySelector
//? kann mit CSS Syntax - mit Art des Zugriffs umgehen
//? holt sich nur das erste Element auf das die Bedingung zutrifft
const fruitListElementWithQuery = document.querySelector(".fruit-list-class");

//? Zugriff über das Div Element
const fruitListElementWithDiv = document.querySelector("div");

//? holt sich alle Div Elemente auf die die Bedingung zutrifft
const allDivElements = document.querySelectorAll("div");
//? gibt dann aber eine Art Array aus. Um einzelne ELemente zu ändern -> forEach Loop!


//* 3. Daten darstellen
//? Funktion anlegen die die Daten darstellt
//? wird meist mehrfach verwendet und macht den Code lesbarer
//? "render" wird als Name oft verwendet für "darstellende" Funktionen

function renderFruits():void {
    //? am Anfang der Render Functio immer alles leeren - sonst kann sie mehrfach ausgeführt werden und der immer gleiche Content kommt nacheinander
    //? hier mit IF weil Elvis sonst links stünde
    if (fruitListElement){
        fruitListElement.innerHTML = "";
    }
    fruitButtons.forEach((fruitButton: FruitButton, index: number) => {
        const fruitButtonToCreate = document.createElement("button");
        fruitButtonToCreate.style.backgroundColor = fruitButton.color;
        //! klasse aus dem CSS-File hinzufügen:
        fruitButtonToCreate.classList.add("fruit-item");
        fruitButtonToCreate.innerHTML = `${fruitButton.emoji} ${fruitButton.name}`;
        //? so kann eine eindeutige ID pro Button erzeugt werden - dafür muss oben index als parameter mit definiert werden, index zählt ind forEach automatisch mit hoch
        fruitButtonToCreate.setAttribute("id", index.toString());

        //? Eventlistener direkt mit generieren
        const selectedFruitElement = document.getElementById("selected-fruit")
        if (selectedFruitElement) {
        fruitButtonToCreate.addEventListener("click",() => {
            selectedFruitElement.innerHTML = `You picked ${fruitButton.emoji} ${fruitButton.name}`;
        } );
    }
        //? erzeugtes Element im HTML anhängen
        fruitListElement?.appendChild(fruitButtonToCreate);
    })
};

renderFruits();

//* Input
//? solange kein "as" dabei ist, ist das ganze nur ein reguläres HTML Element mit den zur Verfügung stehenden Methoden - wirft dann auch einen TS Fehler (.value für HTML Element nicht vorhanden) - also umwanden in Input Element mit "as HTMLInputElement"
const ageInputElement = document.getElementById("age-input") as HTMLInputElement;
const ageOutputElement = document.getElementById("age-output");
const showAgeBtn = document.getElementById("show-age-btn");

if (ageInputElement && ageOutputElement && showAgeBtn) {
    showAgeBtn.addEventListener("click", () =>{
    ageOutputElement.innerHTML = `Dein Alter ist: ${ageInputElement.value}`
});
};