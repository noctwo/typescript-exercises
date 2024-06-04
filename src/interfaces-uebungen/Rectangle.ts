import IShape from "./contracts/IShape";

class Rectangle implements IShape {
    
    public name: string = "";
    public color: string = "";
    public width: number = 0;
    public height: number = 0;
    public isRound: boolean = false;

    constructor (name:string, color:string, width:number, height: number, isRound:boolean){
        this.name = name;
        this.color = color;
        this.width = width;
        this.height = height;
        this.isRound = isRound;
    }

    draw(): void {
        console.log(`drawing ${this.name}`);
    }
}

export default Rectangle;