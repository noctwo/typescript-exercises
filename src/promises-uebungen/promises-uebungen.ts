let doesSheLoveMe = new Promise((resolve, reject) => {
    let sheLovesMe: boolean = Math.random() >= 0.5;

    if(sheLovesMe){
        resolve(true);
    } else {
        reject(false);
    }
});

doesSheLoveMe
.then(() => {
    console.log("She loves me :)")
})
.catch(() => {
    console.log("She loves me not :(");
})
.finally(() => {
    console.log("Now i know.");
})





import { WeatherType } from "./WeatherType";

let weatherPromise:Promise<WeatherType> = new Promise((resolve, reject) => {
    let weatherRandomizer:number = Math.floor(Math.random() * 9);
    if(weatherRandomizer <= 6){
        resolve(WeatherType[weatherRandomizer])
    } else{
        reject("Forecast not available.");
    }
})

weatherPromise
.then((weather) => {
    console.log(weather)
})
.catch((message) => {
    console.log(message);
})






let exerciseMaybe = Math.random() <= 0.5;

let exerciseOne = new Promise ((resolve, reject) => { 
    if (exerciseMaybe){
    setTimeout(() => {
        resolve("Exercise 1 done!");
    }, 2 * 1000)
} else {
    reject("beeing a little lazy");
}
})

exerciseOne
.then((message) => {
    console.log(message);
})
.catch((message)=>{
    console.log(message);
})


let exerciseTwo = new Promise ((resolve, reject) => {
    if (exerciseMaybe){
    setTimeout(() => {
        resolve("Exercise 2 done!");
    }, 4 * 1000)
} else {
    reject("beeing very lazy");
}
})

exerciseTwo
.then((message) => {
    console.log(message);
})
.catch((message)=>{
    console.log(message);
})


let exerciseThree = new Promise ((resolve, reject) => {
    if (exerciseMaybe){
    setTimeout(() => {
        resolve("Exercise 3 done!");
    }, 6 * 1000)
} else {
    reject("beeing an absolute sloth");
}
})

exerciseThree
.then((message) => {
    console.log(message);
})
.catch((message)=>{
    console.log(message);
})





let numberPromise = new Promise<number[]> ((resolve, reject) => {
    let randomNumbersArray:number[] = [
        Math.ceil(Math.random() * 130),
        Math.ceil(Math.random() * 130),
        Math.ceil(Math.random() * 130)
    ];
if (randomNumbersArray[0] < 100 && 
    randomNumbersArray[1] < 100 && 
    randomNumbersArray[2] < 100){
    resolve(randomNumbersArray);
} else{
    reject("Error: One Value to high!")
}
})

numberPromise
.then((randomNumbers:number[]) => {
    console.log(randomNumbers);
    let addSeven = randomNumbers.map((number) => number + 7)
    console.log(addSeven);
    return addSeven
})
.then((randomNumbers) => {
    let timesTwo = randomNumbers.map((number) => number * 2)
    console.log(timesTwo);
    return timesTwo
})
.then((randomNumbers) => {
    let minusOne = randomNumbers.map((number) => number - 1)
    console.log(minusOne);
    return minusOne
})
.then((randomNumbers) => {
    let moduloTwo = randomNumbers.map((number) => number % 2)
    console.log(moduloTwo);
    return moduloTwo
})
.then((randomNumbers) => {
    console.log(randomNumbers)
})
.catch((errormessage) => {
    console.log(errormessage);
})
.finally(() => {
    console.log("Finished");
})
