import Car from "./Car";

class Driver {
    firstName: string = "";
    lastName: string = "";
    age: number = 0;
    car: Car;

    constructor (firstName:string, lastName:string, age:number, car:Car){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.car = car;
    }
}

export default Driver;
