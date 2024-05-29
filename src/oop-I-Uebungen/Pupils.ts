class Pupil {
    id: number = 0;
    firstName: string = "";
    lastName: string = "";
    birthday?: Date = new Date;

    constructor (id:number, fistName:string, lastName:string){
        this.id = id;
        this.firstName = fistName;
        this.lastName = lastName;
    }
}

export default Pupil;