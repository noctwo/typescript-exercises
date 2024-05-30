import Actor from "./Actor";

class Episode {
    title: string = "";
    duration: number = 0;
    description: string = "";
    actors: Actor[];

    constructor (title:string, duration:number, description:string, actors: Actor) {
        this.title = title;
        this.duration = duration;
        this.description = description;
        this.actors = [actors];
    }
}

export default Episode;