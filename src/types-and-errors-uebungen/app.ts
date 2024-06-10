import { IStudent } from "./IStudent";

function processStudent(student:IStudent){
    console.log(`processing: ${student.name}`);
};

let student1  = {
    name: "Harald",
    age: 22,
    grade: 3
};
student1 as IStudent;
processStudent(student1);

let sutdent2 = {
    age: 33
};
sutdent2 as IStudent;
// processStudent(sutdent2); //undefined. (weil name erwartet wurde?! bzw string!?)

type Result = "success" | "error" | "pending";

let result1: Result = "success";
let result2: Result = "error";
let result3: Result = "pending";
// let result4 = "schnuffelpuffel";

function handleResult(result: Result){
   if (result === "pending"){
    console.log(result);
   } else if (result === "error"){
    console.log(result);
   } else if (result === "success"){ 
    console.log(result);
   } else{
    console.log("wrong type");
   }
};

handleResult(result1);
handleResult(result2);
handleResult(result3);
// handleResult(result4);

type Alcohol = {name: string; percentage: number; type: string};
type Mixer = {name: string; type: string; carbonated: boolean}

let Cocktail: Alcohol & Mixer = {
    name: "Mojito",
    percentage: 40,
    type: "Longdrink",
    carbonated: false
} 

console.log(Cocktail.name, Cocktail.percentage, Cocktail.type, Cocktail.carbonated);


function greetUser(){
try {

    let userName = window.prompt("Whats your Name?");
    if (userName === null || userName === ""){
    throw new Error("name empty");
    }
    window.alert(`Hi ${userName}`);
} catch (error) {
    
    window.alert("Hi Visitor!");
    
}
}
greetUser();


let myLottoNumbers:number[] = [];

function generateLottoNumber(){
    try{
    let newLottoNumber = Math.floor(Math.random() * 100);
    if (newLottoNumber > 49){
        throw new Error("> 49");
    } if (myLottoNumbers.includes(newLottoNumber)){ 
        throw new Error("only unique numbers");
    }
    myLottoNumbers.push(newLottoNumber);
    }
    catch (error){
    generateLottoNumber();
    }
    };

    for (let index = 1; index <= 7; index++) {
        generateLottoNumber();
    }

    console.log(myLottoNumbers);


