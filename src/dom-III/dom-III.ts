//? in der Arrow Function kann als Parameter das Event übergeben werden
//? Event kann weggelassen werden wenn man nicht darauf zurgreifen möchte
//? addEventlistener beginnt mit Ereignis, hier click - dann => Function

let clickButton = document.getElementById("click-btn");
clickButton?.addEventListener("click", () => {
    console.log("Simple Button Click");
});

let doubleClickButton = document.getElementById("double-click-btn");
doubleClickButton?.addEventListener("dblclick", () => {
    console.log("Doble Click Button");
});

let hoverDiv = document.getElementById("hover-div");
hoverDiv?.addEventListener("mouseover", () => {
    console.log("MouseOver");
});

//? focus wird auf beim durchtabben mit Tab ausgelöst
let focusInput = document.getElementById("focus-input");
focusInput?.addEventListener("focus", () => {
    console.log("Focus");
});

//? löst bei jedem einzelnen Tippen aus - jedem Buchstaben bspw.
let typeInput = document.getElementById("type-input");
typeInput?.addEventListener("input", () => {
    console.log("Input");
});

//? löst bei jeder Auswahl aus dem Dropdown aus
//? selektierter Wert lässt sich auf 2 Arten auslesen
//? 1. über event.target
let selectInput = document.getElementById("select-input");
selectInput?.addEventListener("change", (event: Event) => {
    //? holt sich Ursprungs-SelectElement und wandelt in HTMLSelectElement um, um auf dessen spezielle Eigenschaften zuzugreifen
    let select = event.target as HTMLSelectElement;
    console.log("Wert im HTML Value " + select.value);
    console.log("Ausgewählter Index " + select.selectedIndex);
    console.log("Select");
});

//? 2. Direkt auf Element zugreifen
//? wenn das Select eh schon in einer Variable liegt, dann so - auch eher der Standard
selectInput?.addEventListener("change", () => {
    //? direkt aufs mit let angelegte Element zugreifen
    let select = selectInput as HTMLSelectElement;
    console.log("Wert im HTML Value " + select.value);
    console.log("Ausgewählter Index " + select.selectedIndex);
    console.log("Select");
});


//? Formular Default Verhalten bei Klick auf Submit = ganze Seite neu laden und alle Felder leeren
//! damit die FUNKTION von event.preventDefault ausgeführt werden kann, muss ich voerher das Event mitgeben auf das sie angewendet werden soll - das klick event selbst.
let submitForm = document.getElementById("submit-form");
submitForm?.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    console.log("Form was submitted");
});


//? beim Klick auf Google Link soll nicht zu Goggle navigiert werden
//? wir wollen quasi das Default-Verhalten verhinden
let googleLink = document.getElementById("link");
googleLink?.addEventListener("click", (event: Event) => {
    event.preventDefault();
    console.log("Use DuckDuckGo");
});

//? reagieren wenn checkbox ausgewählt oder Radio-Buttnons
//? .checked gibt einen Boolean aus, geht nur wenn das HTML Element -> as HTMLInputElement gesetzt ist
let inputCheckbox = document.getElementById("input-checkbox") as HTMLInputElement;
inputCheckbox?.addEventListener("change", () => {
    console.log("Checked!");
    console.log(inputCheckbox.checked);
});