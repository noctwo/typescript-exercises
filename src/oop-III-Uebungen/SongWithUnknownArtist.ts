import Song from "./Song";

class SongWithUnknownArtist extends Song {
    
    setArtist(name:string){
        this.artist = name;
    }

    constructor(title:string, artist:string){
        super(title, artist)
    }
}

export default SongWithUnknownArtist;