

function addTwoAndGiveSum(a:number, b:number, printSum: (c:number) => void){
    let sum = a + b;
    printSum(sum)
};


function logSumToConsole(sum:number){
    console.log(sum);
}

addTwoAndGiveSum(7,2,logSumToConsole)

function showAlert(sum:number){
    window.alert(sum);
}

// addTwoAndGiveSum(15,5,showAlert);

function showMaximum(numbers:number[], maxNumber: (max:number) => void){
    let highestNum = Math.max(...numbers);
    console.log(highestNum);
    maxNumber(highestNum);
    console.log("Finished with showMaximum");
};

function logHighestNumToConsoleAgain(number:number):void{
    console.log(`Number from Callback: ${number}`);
};

showMaximum([4455, 3476, 8923, 27585, 1323454, 4352], logHighestNumToConsoleAgain);

function powerOfTen(number: number):void{
    let powOfTen = Math.pow(number, 10);
    console.log(powOfTen);
};

showMaximum([1, 2, 3, 4, 5], powerOfTen);




function calculateSumAndMore(
    a:number, 
    b:number, 
    callback1: (result1:number) => number, 
    callback2: (result2:number) => number)
    {
        let sum = a + b;
        callback1(sum);
        callback2(sum);
};

function doubleSum(number:number):number{
    let doubledSum = number * 2;
    console.log(doubledSum);
    return doubledSum;
}

function convertSumToBinary(number:number):number{
    let sumInBinary = number.toString(2);
    console.log(sumInBinary);
    return Number(sumInBinary);
}

calculateSumAndMore(1, 5, doubleSum, convertSumToBinary);
calculateSumAndMore(16, 4, doubleSum, convertSumToBinary);
calculateSumAndMore(25, 388, doubleSum, convertSumToBinary);


let headline = document.getElementById("headline") as HTMLElement;
let rndBtn = document.getElementById("random-btn") as HTMLButtonElement;

rndBtn.addEventListener("click", () => {
    let functionRandomizer = Math.ceil(Math.random() * 4);
    switch (true) {
        case functionRandomizer === 0:
            updateHeadline(generateRndText(15));
            break;
        case functionRandomizer === 1:
            updateHeadline(generateRndEmoji());
            break;
        case functionRandomizer === 2:
            updateHeadline(generateRndBoolean());
            break;
        case functionRandomizer === 4:
            updateHeadline(generateRndNumber());
            break;
    }
});

function generateRndNumber():string{
    let newRndNumber = Math.floor(Math.random() * 100);
    return newRndNumber.toString();
};

function generateRndText(length:number):string{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }

    return result;
}

function generateRndBoolean():boolean{
    let newRndBoolean = Math.random() <= 0.5;
    return newRndBoolean; // returns true?
}

function generateRndEmoji(){
    const characters:string[] = ["🧔🏻‍♀️", "👡", "🌩️", "🌈", "🚦"];
    let result = "";
    const charactersLength = characters.length;
    
    for (let index = 0; index < characters.length; index++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result = characters[randomIndex];
    }

    return result;
}

function updateHeadline(thisIsTheNewHeadline:() => {}){
    headline.innerText = thisIsTheNewHeadline;
};




