import { Unicorn } from "./Unicorn"
import {Car} from "./Car";
import { ElectriCar } from "./Electric-Car";

class InstanceChecker {
    static checkInstance(objectToCheck:any):void{
        if (objectToCheck instanceof Unicorn){
            console.log(true);
        } else {
            console.log(false);
        }
    }

    static checkFuelCar(carToCheck:any){
        if(carToCheck instanceof Car){
            console.log(true);
        } else {
            console.log(false);
        }
    }

    static checkElectricCar(carToCheck:any){
        if(carToCheck instanceof ElectriCar){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

export {InstanceChecker};