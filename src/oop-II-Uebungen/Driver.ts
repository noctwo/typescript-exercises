import Car from "./Car";
import carType from "./carType";

class Driver {
    firstName: string = "";
    lastName: string = "";
    age: number = 0;
    car?: Car;
    private _licenceFromYear: Date;
    typeOfCar: carType = carType.type3;

    get licenceFromYear(){
        return this._licenceFromYear;
    }

    get getCarType():string{
        console.log(this.typeOfCar)
        return this.typeOfCar;
    }

    constructor (_licenceFromYear: Date){

        this._licenceFromYear = _licenceFromYear;
    }
}

export default Driver;
