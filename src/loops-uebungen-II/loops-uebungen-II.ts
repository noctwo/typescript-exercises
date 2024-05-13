// Level 1-10

function getHighestNumber(numArray:number[]){
    let numArrayNumber = 0;
    for (let num of numArray) {
        if (num > numArrayNumber){
            numArrayNumber = num;
        }
        
    }
    console.log(numArrayNumber);
}

getHighestNumber([1, 10, 20, 55, 99]);


// Level 1-11
 function calculateSum(maxNumber:number){
    let addTillMaxNumber = 0;
    for (let index = 1; index < maxNumber; index++) {
        addTillMaxNumber = addTillMaxNumber+index; 
    }
    console.log(addTillMaxNumber);
 }
 calculateSum(5);

 // Level 2-3
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function getNumberOfVowels(vowelString:string){
    let vowelCount = 0;
    if (vowelString.includes(vowels)){
            vowelCount += 1;
        }
        console.log(vowelCount);
    }

getNumberOfVowels("Dampfschifffahrtsgesellschaftsvorstandsvorsitzender");
console.log("---");


// Level 2-4
function addToFifty(){
    for (let index = 0; index < 10; index++) {
        let rndDigit = Math.floor(Math.random()*11);
        console.log(rndDigit);

        for (let index = 0; index <= 50; index++) {
            let result2 = rndDigit++;
            if (result2 >= 50)
                {console.log(result2);}
        }
    }
}

addToFifty();