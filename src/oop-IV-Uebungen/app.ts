import { Unicorn } from "./Unicorn";
import { InstanceChecker } from "./Instance-Checker";
import { Car } from "./Car";
import { ElectriCar } from "./Electric-Car";
import { Running } from "./Running";
import { Yoga } from "./Yoga";
import { Beyonce } from "./Beyonce";
import { Freddie } from "./Freddie";
import { Madonna } from "./Madonna";
import { Michael } from "./Michael";
import { SoloSinger } from "./SoloSinger";

//* Level 1-7
let emptyObject = {};
InstanceChecker.checkInstance(emptyObject); // false

let newUnicorn = new Unicorn("Grimmwartz", ["pink", "cyan", "lila"]);
InstanceChecker.checkInstance(newUnicorn); // true


//* Level 1-8
let newCar:Car = new Car("Toyota", "Supra", "Orange", false);
InstanceChecker.checkFuelCar(newCar); // true
InstanceChecker.checkElectricCar(newCar); // false

let newElectricCar = new ElectriCar("Renault", "Zoe", "gray", true);
InstanceChecker.checkFuelCar(newElectricCar); // false
InstanceChecker.checkElectricCar(newElectricCar); // true


//* Level 1-11
let runRunRun = new Running("Jogging", 6, 5);
console.log(runRunRun);
runRunRun.warmUpCoolDown();

let newYoga = new Yoga("PowerYoga", 6, 3);
console.log(newYoga);
console.log(newYoga.type);


//* Level 2-6
let beyonce = new Beyonce("Beyonce Knowles");
let freddie = new Freddie("Freddie Mercury");
let madonna = new Madonna("Madonna");
let michael = new Michael("Michael Jackson");


function letSing (singer:SoloSinger){
    if (singer instanceof Beyonce){
        console.log(`👩🏾‍🦰 ${singer.name} sings ${singer.sing()}`);
    } else if (singer instanceof Freddie){
        console.log(`👨‍🦰 ${singer.name} sings ${singer.sing()}`);
    } else if (singer instanceof Madonna){
        console.log(`👩🏼‍🦳 ${singer.name} sings ${singer.sing()}`);
    } else if (singer instanceof Michael){
        console.log(`🧑🏿‍🦱 ${singer.name} sings ${singer.sing()}`);
    } else {
        console.log("not singin");
    }
}   

letSing(beyonce);
letSing(freddie);
letSing(madonna);
letSing(michael);



