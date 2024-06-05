class Activity {
    public name: string;
    public dufficulty: number;

    get difficulty():number{
        return this.difficulty
    }

    set difficulty(level:number){
        if (level >= 1 && level <= 6){
            this.difficulty = level;
        } else console.error("Difficulty Level must be between 1 and 6");
    }

    constructor(name:string, difficulty:number){
        this.name = name;
        this.dufficulty = difficulty;
    }

    executing(){
        console.log(`Executing: ${this.name}`);
    }
}

export {Activity};