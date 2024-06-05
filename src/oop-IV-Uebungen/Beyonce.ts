import { SoloSinger } from "./SoloSinger";

class Beyonce extends SoloSinger {
    constructor(name: string) {
       super(name);
    }
    sing(): string {
        return "I'm a survivor, I'm gonna make it!";
    }
}

export {Beyonce};