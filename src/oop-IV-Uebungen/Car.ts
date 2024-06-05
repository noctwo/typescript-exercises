class Car {
    public brand: string;
    public model: string;
    public color: string;
    public isElectric: boolean;
    
    constructor(brand:string, model:string, color:string, isElectric:boolean){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.isElectric = isElectric;
    }
}

export {Car};