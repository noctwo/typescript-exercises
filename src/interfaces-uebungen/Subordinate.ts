import Employee from "./Employee";

class Subordinate extends Employee {
    public name: string = "";
    public age: number = 0;
    public position: string = "";
    public startDate: Date | null = null;

    getYearsOfService(startDate:Date):void {
        let dateNow = new Date(Date.now());
        let yearsOfService = dateNow.getFullYear() - startDate.getFullYear();
        console.log(yearsOfService);
    }

    constructor (name: string, age: number, position: string, startDate:Date|null) {
        super(name, age, position, startDate)
        this.name = name;
        this.age = age;
        this.position = position;
        this.startDate = startDate;
    }
}

export default Subordinate;