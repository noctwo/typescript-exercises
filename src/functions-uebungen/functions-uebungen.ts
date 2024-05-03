// Level 1-3

function showPersonInfo(name:string, city:string, age:number):string{
    let fullPersonInfo = `Hi, mein Name ist ${name}. Ich bin ${Math.floor(age).toString()} Jahre alt. Ich komme aus ${city}`;
    return fullPersonInfo
};
console.log(showPersonInfo("Dieter", "Köln", 41.5));

// Level 1-4

function showHero(heroName:string, heroWeapon:string, heroEnemy:string):void{
    let nameOutput:string = `Meine Lieblingsheld ist ${heroName}. `;
    let weaponOutput = `Er hat die Waffe ${heroWeapon}. `;
    let enemyOutput = `Sein größter Feind ist ${heroEnemy}.`;
    console.log(nameOutput + weaponOutput + enemyOutput);
};

showHero("Arthas", "Frostmourne", "Illidan");

// Level 1-5

function multiplyAndDivide(num1:number, num2:number):void{
    if (num2 === 0){
        console.log("Division durch 0 nicht erlaubt");
    } else {
        console.log("mulitply: ", num1 * num2, " divide: ", num1 / num2)
    }
};

multiplyAndDivide(10, 2);
multiplyAndDivide(10, 0);
multiplyAndDivide(30, 20);
multiplyAndDivide(100, 100);
multiplyAndDivide(5, 0);
multiplyAndDivide(45, 173);
multiplyAndDivide(1, 1000);

// Level 1-6

let w = 1;
let v = returnOne();

function returnOne(){
    return 1
};

if (w === v){
    console.log("Wird das angezeigt?");
} else{
    console.log("nix");
}

// Level 1-7

function doubleThis(input:number):number{
    let doubled = input *2;
    return doubled
};
console.log(doubleThis(100));

// Level 1-8

function calculateMyAge(birthYear:number):number{
    let myAge = 2024 - birthYear;
    return myAge;
};
console.log(calculateMyAge(1924));

function calcAgeDifference(birthYearOne, birthYearTwo){
    let ageDifference = birthYearOne - birthYearTwo;
    return ageDifference;
};
console.log(calcAgeDifference(1992, 1987));

// Level 1-9

function showMyPersonalInfo(name:string, lastName:string, cityOfBirth:string, age:number, livingIn:string):string{
    let myFullPersonInfo = "Mein Name ist ".concat(name).concat(lastName)+" Ich in in ".concat(cityOfBirth)+" geboren. "+"Ich lerne bei Supercode. "+"Ich bin ".concat(age)+" Jahre alt. "+"Ich wohne in".concat(livingIn);
    return myFullPersonInfo
};
console.log(showMyPersonalInfo("Dieter ", "Schwensen", "Castrop-Rauxel", 65, "Buxtehude"));

/* 
let myFullPersonInfo = "Mein Name ist ".concat(name).concat(lastName).concat(" Ich in in ",cityOfBirth, " geboren. ").concat("Ich lerne bei Supercode.").concat("Ich bin ", age).concat(" Jahre alt. ").concat("Ich wohne in ").concat(livingIn);
*/