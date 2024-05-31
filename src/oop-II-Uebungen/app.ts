import Animal from "./Animal";
import Person from "./Person";
import Handy from "./Handy";
import Car from "./Car";
import Driver from "./Driver";
import carType from "./carType";
import IceCreamFlavor from "./IceCreamFlavors";
import Customer from "./Customer";

let newAnimal = new Animal();
newAnimal.species = "Elephant";
newAnimal.age = 50;
newAnimal.color = "gray";

console.log(newAnimal);

newAnimal.age = 56;

console.log(newAnimal);


let newPerson = new Person(new Date(1980, 12, 12));
newPerson.name = "Dieter",
newPerson.gender = 2;

console.log(newPerson);


let newHandy = new Handy("Google-Pixel", "black", false);
console.log(newHandy);
newHandy.damaged = true;
console.log(newHandy);
newHandy.damaged = false;
console.log(newHandy);

let newCar = new Car(1988);
console.log(newCar);

let carFour = new Car(2008);
carFour.brand = "Opel";
carFour.currentSpeed = 130;
carFour.carType = carType.type3;

let newDriver = new Driver(new Date(1999));
newDriver.firstName = "Walter"
newDriver.lastName = "Röhrl"
newDriver.age = 83
newDriver.car = carFour;
newDriver.getCarType;
console.log(newDriver);

console.log(newDriver.car);

let newIce = new IceCreamFlavor();
newIce.name = "Hazelnut";
newIce.description = "Squirrels would kill for this";
newIce.price = 2;
newIce.printInfo();
console.log(newIce);
console.log(newIce.getTotalPrice(4));

let newCustomer = new Customer();
newCustomer.email = "ugglbugfg";
newCustomer.zipCode = 0;

console.log(newCustomer);


