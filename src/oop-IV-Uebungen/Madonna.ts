import { SoloSinger } from "./SoloSinger";

class Madonna extends SoloSinger {
    constructor(name: string) {
       super(name);
    }
    sing(): string {
        return "I'm a virign";
    }
}

export {Madonna};