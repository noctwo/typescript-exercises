import carType from "./carType";

class Car {
    brand: string = "";
    private _constructionYear: number;
    currentSpeed: number = 0;
    carType: carType = carType.type1;

get constructionYear(){
    return this._constructionYear;
}

get speedInfo():string{
    if(this.currentSpeed < 40){
        return "Driving slowly"
    } else if(this.currentSpeed > 40 && this.currentSpeed < 70){
        return "Driving normally"
    } else if(this.currentSpeed > 70 && this.currentSpeed < 120){
        return "Drivin fast"
    } else if(this.currentSpeed > 120 && this.currentSpeed < 190){
        return "Driving really fast"
    } else {
        return "WTF!?"
    }
}

    constructor (constructionYear: number){
        this._constructionYear = constructionYear
    }
}

export default Car;