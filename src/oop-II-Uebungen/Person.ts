import Gender from "./Gender";
class Person1 {
    private _name: string = "";
    birthday: Date | null = null;
    private _gender: Gender = 0;

    get name(){
        return this._name;
    }

    get gender(){
        return this._gender;
    }

    set name(value:string){
        console.log("setter-name");
        this._name = value;
    }

    set gender(value:Gender){
        console.log("setter-gender");
        this._gender = value;
    }

    constructor(birthday:Date){
        this.birthday = birthday;
    }
}

export default Person1;