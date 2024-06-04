import IEmployee from "./contracts/IEmployee";

class Employee implements IEmployee{
    public name: string = "";
    public age: number = 0;
    public position: string = "";
    public startDate: Date | null = null;

    getYearsOfService(startDate:Date):void {
        let dateNow = new Date(Date.now());
        let yearsOfService = dateNow.getFullYear() - startDate.getFullYear();
        console.log(yearsOfService);
    }

    constructor (name:string, age:number, posistion:string, startDate:Date|null){
        this.name = name;
        this.age = age;
        this.position = posistion;
        this.startDate = startDate;
    }
}

export default Employee;