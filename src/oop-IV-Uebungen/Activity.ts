class Activity {
    public name: string;
    private _difficulty: number = 0;

    get difficulty():number{
        return this._difficulty
    }

    set difficulty(level:number){
        if (level >= 1 && level <= 6){
            this._difficulty = level;
        } else console.error("Difficulty Level must be between 1 and 6");
    }

    constructor(name:string){
        this.name = name;
        
    }

    executing(){
        console.log(`Executing: ${this.name}`);
    }
}

export {Activity};