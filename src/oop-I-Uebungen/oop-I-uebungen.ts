import IceCreamFlavor from "./iceCreamFlavors";
import SchoolClass from "./SchoolClass";
import Pupil from "./Pupils";
import Car from "./Car";
import Driver from "./Driver";

//* Level 1-1
let smurf = new IceCreamFlavor();
smurf.name = "Schlumpf-Eis";
smurf.price = 1.20;
smurf.isPopular = true;
smurf.description = "von führenden Schlümpfen empfohlen"


let vanilla = new IceCreamFlavor();
vanilla.name = "Vanille";
vanilla.price = 1.20;
vanilla.isPopular = false;
vanilla.description = "very much underrated"

let chocolade = new IceCreamFlavor();
chocolade.name = "Schokolade";
chocolade.price = 1.20;
chocolade.isPopular = true;
chocolade.description = "very much overrated"

let raspberry = new IceCreamFlavor();
raspberry.name = "Himbeere";
raspberry.price = 1.20;
raspberry.isPopular = true;
raspberry.description = "pink und gut"

let allIceCreamFlavors = [smurf, vanilla, chocolade, raspberry];

console.log(allIceCreamFlavors);

allIceCreamFlavors.forEach(flavor => {
    if(flavor.isPopular === true){
        console.log(flavor);
    }
});


//* Level 1-2

let classOne = new SchoolClass(123, "Klasse 1A");
classOne.endDate = "12.12.2012"

let classTwo = new SchoolClass(456, "Klasse 2B");
classTwo.endDate = "13.02.2022"
console.log(classTwo);
classTwo.name = "Klasse 2C"
console.log(classTwo);

let classThree = new SchoolClass(789, "Klasse 3C");
classThree.endDate = "25.09.2035"
console.log(classThree);
classThree.name = "Klasse 3D"
console.log(classThree);


//* Level 2-1

let pupilOne = new Pupil(988001, "Manfred", "Schmitt");
let pupilTwo = new Pupil(988002, "Eberhard", "Hermmann");
let pupilThree = new Pupil(988003, "Uwe", "Müller");
let pupilFour = new Pupil(988004, "Klaus", "Schweinske");
let pupilFive = new Pupil(988005, "Ingo", "Krause");


let classFour = new SchoolClass(470, "Klasse4B");
classFour.pupils = [pupilOne, pupilTwo, pupilThree, pupilFour, pupilFive];

classFour.pupils.forEach(pupil => {
    console.log(pupil);
});

//* Level 2-2

let carOne = new Car();
carOne.brand = "Opel";
carOne.constructionYear = 2008;
carOne.currentSpeed = 130;

let carTwo = new Car();
carTwo.brand = "Fiat";
carTwo.constructionYear = 2010;
carTwo.currentSpeed = 60;

let carThree = new Car();
carThree.brand = "Moskwitsch"
carThree.constructionYear = 1955;
carThree.currentSpeed = 25;

let driverOne = new Driver("Sterling", "Moss", 90, carOne );
let driverTwo = new Driver ("Ayrton", "Senna", 34, carTwo);
let driverThree = new Driver("Lewis", "Hamilton", 39, carThree);

console.log(driverOne);
console.log(driverOne.car);

console.log(driverTwo);
console.log(driverTwo.car);

console.log(driverThree);
console.log(driverThree.car);