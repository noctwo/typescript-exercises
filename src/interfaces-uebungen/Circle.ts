import IShape from "./contracts/IShape";

class Circle implements IShape {
    public name: string = "";
    public color: string = "";
    public radius: number = 0;
    public isRound: boolean = false;

    draw(){
        console.log("drawing circle");
    }

    constructor (name:string, color:string, radius:number, isRound:boolean) {
        this.name = name;
        this.color = color;
        this.radius = radius;
        this.isRound = isRound;
    }
}

export default Circle;