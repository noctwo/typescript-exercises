class Handy {
   private _brand:string;
   private _color:string;
    _damaged:boolean;

    get brand(){
        return this._brand;
    }

    get color(){
        return this._color;
    }

    get damaged(){
        return this._damaged;
    }

    set damaged(value:boolean){
        this._damaged = value;
    }

    constructor(_brand:string, _color:string, _damaged:boolean){
        this._brand = _brand;
        this._color = _color;
        this._damaged = _damaged;
    }
}

export default Handy;