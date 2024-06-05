import { Activity } from "./Activity";

class Running extends Activity{

    distance: number;

    constructor(name:string, difficulty:number, distance:number){
        super(name, difficulty)
        this.distance = distance;
    }  
    
    warmUpCoolDown(){
        let minutes = 0;
        if (this.distance >= 3 && this.distance < 4.5){
            minutes = 2;
        } else if (this.distance >= 4.5 && this.distance < 7){
            minutes = 3;
        } else if (this.distance >= 7 && this.distance < 10){
            minutes = 4;
        } else if (this.distance >= 10){
            minutes = 5;
        }
        console.log(`Warm up for ${minutes} minutes, Cool down for ${minutes} minutes.`);
    }
}

export{Running};