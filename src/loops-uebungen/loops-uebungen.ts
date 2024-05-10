// Level 1-1
for(let index = 1; index <= 10; index++){
    console.log("Hi "+index);
}

// Level 1-2
let numbersToArray:number[] = [];
for(let index = 0; index <= 10; index++){
    numbersToArray.push(index);
}
console.log(numbersToArray);

// Level 1-3
let whileCounter = 0;
while (whileCounter < 10) {
    console.log("Hello World " +whileCounter);
    whileCounter++;
}

// Level 1-4
let freindNames:string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];
for (let index = 0; index < freindNames.length; index++) {
    const element = freindNames[index];
    console.log(element); 
}

for (const friend of freindNames) {
    console.log(friend);
}

// Level 1-7
let specialIndexCounter = 1; 
do {
    let writeHere = document.querySelector(".writehere");
    writeHere.innerHTML += `The number is ${specialIndexCounter++} <br>`;
} while (specialIndexCounter < 6);


 // Level 1-8

let evenNumbersCounter = 0; 
do {
    if (evenNumbersCounter % 2 === 0){
    let writeHereAsWell = document.querySelector(".writehereaswell");
    writeHereAsWell.innerHTML += `${evenNumbersCounter} <br>`;
    }
    evenNumbersCounter++;
} while (evenNumbersCounter <= 20);


// Level 2-1
function createImageNames(){
    let returnArray = [];
    let fileCount = 0;
    let zeroCount:string = "0";
    
    for (let index = 1; index <= 100; index++) {
        if (fileCount.toString.length < 3){
            zeroCount = "00";
        }
        let fileName = `image_${zeroCount}${fileCount++}.jpg`;
        
        returnArray.push(fileName);
    
    }
    console.log(returnArray);
}

createImageNames();
