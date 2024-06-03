class Song {
    private _title: string = "";
    protected artist: string = "";
    public durationInSeconds: number = 0;

    constructor (title:string, artist:string){
        this._title = title;
        this.artist = artist;
    }
}

export default Song;