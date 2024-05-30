import Episode from "./Episode";

class Series {
    title:string = "";
    description:string = "";
    startYear:Date | null = null;
    endYear:Date | null = null;
    episodes:Episode[];

    constructor(title:string, description:string, startYear:Date, endYear:Date, episodes:Episode){
        this.title = title;
        this.description = description;
        this.startYear = startYear;
        this.endYear = endYear;
        this.episodes = [episodes];
    }
}

export default Series;