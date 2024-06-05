import { yogaTypes } from "./yogaTypes";
import { Activity } from "./Activity";

class Yoga extends Activity {
        type: yogaTypes;
    
    constructor(name:string, difficulty:number, type:yogaTypes){
        super(name, difficulty)
        this.type = type;
    }
}
export{Yoga};