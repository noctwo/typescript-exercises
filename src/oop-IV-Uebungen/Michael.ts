import { SoloSinger } from "./SoloSinger";

class Michael extends SoloSinger {
    constructor(name: string) {
       super(name);
    }
    sing(): string {
        return "Just beat it!";
    }
}

export {Michael};