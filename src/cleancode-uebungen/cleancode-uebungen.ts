//* Level 1-1
let textField = document.getElementById("text-input") as HTMLInputElement;

let countCapitalsButton = document.getElementById("count-capitals-btn") as HTMLElement;
countCapitalsButton.addEventListener("click", function(){
    let textFieldInputValue = textField?.value;
    countAllUpperCaseLettersInInputString(textFieldInputValue)
});

let countSpacesButton = document.getElementById("count-spaces-btn") as HTMLElement;
countSpacesButton.addEventListener("click", function(){
    let textFieldInputValue = textField?.value;
    countAllSpacesInInputString(textFieldInputValue)
});

let countVocalsButton = document.getElementById("count-vocals-btn") as HTMLElement;
countVocalsButton.addEventListener("click", function (){
let textFieldInputValue = textField?.value;
countAllVocalsInInputString(textFieldInputValue)
});

let outputArea = document.getElementById("output-area") as HTMLElement;

function countAllUpperCaseLettersInInputString(inputString:string){
let allCapitals = (inputString.match(/[A-Z]/g) || []).length;
    if(outputArea){
        outputArea.innerHTML = allCapitals.toString();
}
};

function countAllSpacesInInputString(inputString:string){
let allSpaces = (inputString.match(/ /g) || []).length;
if(outputArea){
    outputArea.innerHTML = allSpaces.toString();
}
};

function countAllVocalsInInputString(inputString:string){
let allVocals = (inputString.match(/[aeiouAEIOU]/g) || []).length;
    if(outputArea){
        outputArea.innerHTML = allVocals.toString();
}
};


//* Level 2-1

/*
const getNumberText = (num: number | undefined): string =>
    ['One', 'Two', 'Three', 'Four', 'Five'][num ? num - 1 : 0 - 1] ?? 'Unknown';

const userInput: number = Math.ceil(Math.random() * 7);
console.log(userInput);

const numberText = getNumberText(userInput);
console.log(numberText);
*/


let numberStrings = ['One', 'Two', 'Three', 'Four', 'Five'];
let getRandomNumber = Math.ceil(Math.random() * 7);

function getStringBasedOnRndNumber (rndNumber: number | undefined): void {
    if (typeof(rndNumber) === "number"){
        console.log(numberStrings[rndNumber - 1]);
    } else {
        console.log("Unknown");
    }
};

console.log(getRandomNumber);
getStringBasedOnRndNumber(getRandomNumber);

//* Level 3-1

/*
enum TaskType {
  Urgent = 4,
  NotUrgent = 2,
  Info = 1
}

type Task = { name: string };

let n = 'todo';
let array: string[] = [];
let array2: Task[] = [];

// Get the input from the user for a task
const input1 = prompt('Bitte geben Sie eine Aufgabe ein:');
array.push(input1 || '');
let inputObject1 = { name: input1 || '' };
array2.push(inputObject1);
// Log the task to the console
console.log('Aufgabe erstellt ' + input1 + ' von ' + n);

// Get the input from the user for a task
const input2 = prompt('Bitte geben Sie noch eine Aufgabe ein:');
array.push(input2 || '');
let inpObj2 = { name: input2 || '' };
array2.push(inpObj2);

console.log('debug1 - after 2');

// Log the task to the console
console.log('Aufgabe erstellt ' + input2 + ' von ' + n);
// Get the input from the user for a task
const input3 = prompt('Bitte geben Sie noch eine Aufgabe ein:');
array.push(input3 || '');
let io3 = { name: input3 || '' };
array2.push(io3);
// Log the task to the console
console.log('Aufgabe erstellt ' + input3 + ' von ' + n);

console.log('debug1');
// // Get the input from the user for a task
// const input3 = prompt('Bitte geben Sie noch eine Aufgabe ein:');
// array.push(input3 || '');
// let io3 = { name: input3 || '' };
// array2.push(io3);
// // Log the task to the console
// console.log('Aufgabe erstellt ' + input3 + ' von ' + n);

// // Get the input from the user for a task
// const input3 = prompt('Bitte geben Sie noch eine Aufgabe ein:');
// array.push(input3 || '');
// let io3 = { name: input3 || '' };
// array2.push(io3);
// // Log the task to the console
// console.log('Aufgabe erstellt ' + input3 + ' von ' + n);

if (array[0] === '') {
  array.shift();
} else if (array[1] === '') {
  array.shift();
} else if (array[2] === '') {
  array.shift();
}
// no good user input - clear the other array too
if (!array.length) {
  array2 = [];
} else {
  filterThem(array, 'asc');
  filterThem2(array2, 'asc');
}
//not urgent as default - fix later
array2.forEach((e) => {
  (e as any).type = TaskType.NotUrgent;
});

console.log('debug7 - before result outside');
let resultOutside = 0;
function addItAllUp(): void {
  let result = 0;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      for (let k = 0; k < 100; k++) {
        result += i + j + k;
      }
    }
  }
  console.log('Die maximale Anzahl der Aufgaben ist: ' + result);
  resultOutside = result;
}

if (array.length > 0 && array.length <= 3 && array2.length > 0 && array2.length <= 3) {
  console.log('Die Anzahl der Aufgaben liegt zwischen 1 und 2.');
} else if (array.length > resultOutside) {
  console.log('Die Anzahl der Aufgaben liegt außerhalb des erwarteten Bereichs.');
}

processTasks();

function filterThem(a: string[], b: string): string {
  const ret = a.concat();
  if (b === 'rev') {
    ret.reverse();
  } else if (b === 'no') {
    ret;
  } else if (b === 'asc') {
    ret.sort((a, b) => a.localeCompare(b));
  } else if (b === '') {
    ret;
  }
  return ret.toString();
}

function filterThem2(a: Task[], b: string): string {
  const ret = a.concat();
  if (b === 'rev') {
    ret.reverse();
  } else if (b === 'no') {
    ret;
  } else if (b === 'asc') {
    ret.sort((a, b) => b.name.localeCompare(a.name));
  } else if (b === '') {
    ret;
  }

  return ret.toString();
}

// This function will proces all the tasks
function processTasks(): void {
  //Todo: implement later
  console.log('implement later');
}
*/



//* WORK IN PRGRESS --- or work will maybe someday progress :D

let allUserTasks: string[] = [];
let singleUserTask = {}

function getNewTaskInputFromUser(){
    let newuserTaskInput = prompt("Bitte geben Sie einen Task ein");
    singleUserTask.push(newuserTaskInput);
    allUserTasks.push(singleUserTask);
    console.log(singleUserTask);
}

function checkMaxNumberofAllUserInputTasks(){
if (allUserTasks.length > 100){
    console.log("Die maximale Anzahl der Aufgaben ist 100.");
}
}

checkMaxNumberofAllUserInputTasks();


