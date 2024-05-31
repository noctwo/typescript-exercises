class Animal {
    _species: string = "";
    private _age: number = 0;
    _color: string = "";

    get species(){
        console.log("getter-species");
        return this._species;
        
    }

    get age(){
        console.log("getter-age");
        return this._age;
    }

    get color(){
        console.log("getter-color");
        return this._color;
    }

    set species(value:string){
        console.log("setter-species");
        this._species = value;
    }

    set age(value:number){
        console.log("setter-age");
        this._age = value;
    }

    set color(value:string){
        console.log("setter-color");
        this._color = value;
    }

}

export default Animal;