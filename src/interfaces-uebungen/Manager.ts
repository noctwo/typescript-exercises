import IEmployee from "./contracts/IEmployee";
import Employee from "./Employee";

class Manager extends Employee {
    public name: string = "";
    public age: number = 0;
    public position: string = "";
    public startDate: Date | null = null;

    private _assignedEmployees: IEmployee[] = [];

    addSubordinate(newSubOrdinateArray:IEmployee[]){
        newSubOrdinateArray.forEach(newSubordinate => this._assignedEmployees.push(newSubordinate));
    }

    constructor (name:string, age:number, position:string, startDate:Date|null){
        super(name, age, position, startDate)
        this.name = name;
        this.age = age;
        this.position = position;
        this.startDate = startDate;

    }
}

export default Manager;
