class Alien {
    public name: string = "";
    public planet: string = "";
    public galaxy: string = "";
    private _color: string = "";

    get color(){
        return this._color;
    }

    constructor (name: string, color: string){
        this.name = name;
        this._color = color;
    }
}

export default Alien;