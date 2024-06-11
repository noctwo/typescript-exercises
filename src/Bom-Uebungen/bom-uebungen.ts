/*
window.setTimeout(() => {
    console.log("Hi");
}, 1000)
*/
/*
let counter = 10;
console.log("Start - warten für 3 Sekunden");

let intervalOne = window.setInterval(() => {
    counter --;
    if (counter > 0){
        console.log(counter);
    } else{
        console.log("Endlich Feierabend!");
        clearInterval(intervalOne);
    }
}, 1000);

window.setTimeout(() => {
    console.log("Erledigt, du hast 3 Sekunden verschwendet.");
}, 3 * 1000);
*/

let startBtn = document.getElementById("btn") as HTMLButtonElement;
let timeDiv = document.querySelector(".zeit") as HTMLElement;


startBtn?.addEventListener("click", () => {
    let counter = 100;
    let intervalTwo = window.setInterval(() => {
        timeDiv.innerHTML = counter.toString();
        counter --;
        if (counter === -1){
            clearInterval(intervalTwo);
        }
    }, 100);
});


let getBomDataBtn = document.getElementById("get-bom-data") as HTMLButtonElement;
let bomOutput = document.getElementById("bom-data-output-area") as HTMLElement;

getBomDataBtn.addEventListener("click", () => {
    bomOutput.innerHTML = `
    Browser: ${window.navigator.appName} <br>
    Betriebssystem-Architektur: ${window.navigator.userAgent}<br>
    Browser-Version: ${window.navigator.appVersion}<br>
    Interne Breite des Dokuments: ${window.screen.availWidth}<br>
    Interne Höhe des Dokuments: ${window.screen.availHeight}<br>
    Farbtiefe: ${window.screen.colorDepth}<br>
    Pixeltiefe: ${window.screen.pixelDepth}
    `;
});

let messageDiv = document.querySelector(".message") as HTMLElement;
let counterDiv = document.getElementById("count") as HTMLElement;
let vanishBtn = document.getElementById("vanish-btn") as HTMLButtonElement;

vanishBtn.addEventListener("click", () => {
    let counter = 10;
    let intervalThree = window.setInterval(() => {
        counterDiv.innerHTML = counter.toString();
        counter --;
        if (counter === -1){
            messageDiv.style.display = "none";
            clearInterval(intervalThree);
        }
    }, 500)
});



