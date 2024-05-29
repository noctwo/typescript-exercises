import Pupil from "./Pupils";


class SchoolClass {

    id: number = 0;
    name: string = "";
    endDate?: string = "";
    pupils:Pupil [] = [];

    constructor (id: number, name: string) {
        this.id = id;
        this.name = name;
        console.log("School Class creation successful");
    }
}
export default SchoolClass;