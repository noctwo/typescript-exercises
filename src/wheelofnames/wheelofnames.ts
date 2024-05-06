/*

name array

function add names

function random name pick mit rnd number 
input name length!!!!

function remove specific value from array

suche nach name
del name

*/



let wheelNames = [];


function askForNameInput(){
    let nameHere = document.querySelector(".wheel");
    let userInputNames = window.prompt("Bitte gib deine Namen durch Komma getrennt ein.");
    let userInputSingleName = userInputNames.split(",");
    
    for (let i = 0; i < userInputSingleName.length; i++) {
        wheelNames.push(userInputSingleName[i].trim());
    }

    for (let i = 0; i < wheelNames.length; i++) {
        nameHere.innerHTML += (`<p class="name-on-wheel">${wheelNames[i]}</p>`);
    }
    
    console.log(wheelNames);
};

askForNameInput();
console.log(wheelNames);

function getRndName(){
    let rndRange = wheelNames.length;
    console.log(rndRange);
    let rndNumber = Math.floor(Math.random() * rndRange);
    console.log(rndNumber);
};

getRndName();



function removeName(){
    let nameToRemove = window.prompt("Welcher Name soll gelöscht werden?");
    let removeThisName = wheelNames.indexOf(nameToRemove);
    if (removeThisName !== -1){
        wheelNames.splice(removeThisName, 1);
    }
}

function spinStart(){
    let startTurn = document.querySelector(".btn-spin-start");
    let wheel = document.getElementById("wheel");

    startTurn.addEventListener("click", function(){
        wheel.className = "wheel spin-wheel";
    })
}

spinStart();

function spinStop(){
    let stopTurn = document.querySelector(".btn-spin-stop");
    let wheel = document.getElementById("wheel");
    let rndRotateDegree = document.querySelector(":root");
    
    stopTurn.addEventListener("click", function(){
        wheel.className = "wheel";
        let degreeValue = Math.floor(Math.random()* 360);
        rndRotateDegree.style.setProperty("--stop-rotate", `rotate(${degreeValue}deg)`);
        console.log(degreeValue);
    })
}

spinStop();
