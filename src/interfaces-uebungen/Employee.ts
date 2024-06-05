import IEmployee from "./contracts/IEmployee";

class Employee implements IEmployee{
    public name: string = "";
    public age: number = 0;
    public position: string = "";
    public startDate: Date | null = null;


    //! startDate ist als Parameter überflüssig. Im  Interface ist auch kein Parameter angegeben (daher Fehler). Ausserdem spare ich mir dann die Angabe des Startdatums manuell beim aufrufen und nehme automatisch das eh schon angelegte Startdatum unten mit this.startDate
    //! um den Fehler ganz zu beheben muss der ReturnType auf Number - wie im Interface und es muss abgefragt werden ob startDate nicht null ist mit if vorher
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