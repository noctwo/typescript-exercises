import { SoloSinger } from "./SoloSinger";

class Freddie extends SoloSinger {
    constructor(name: string) {
       super(name);
    }
    sing(): string {
        return "We will, we will rock you!";
    }
}

export {Freddie};