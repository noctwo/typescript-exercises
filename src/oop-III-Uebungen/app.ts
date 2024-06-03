import Alien from "./Alien";
import Song from "./Song";
import SongWithUnknownArtist from "./SongWithUnknownArtist";

//* Level 1-4

let newAlien = new Alien("WrglMrgl", "green");
newAlien.planet = "Mars",
newAlien.galaxy = "MilkyWay"


let newAlienTwo = new Alien("GrmlGrum", "red");
newAlienTwo.planet = "Moon";
newAlienTwo.galaxy = "MilkyWay";

let newAlienThree = new Alien("BrglBob", "yellow");
newAlienThree.planet = "Saturn";
newAlienThree.galaxy = "MilkyWay";


console.log(newAlien, newAlienTwo, newAlienThree);


//* Level 1-5

let newSongOne = new Song("For whom the bell tolls", "Metallica");
newSongOne.durationInSeconds = 305.4;

let newSongTwo = new Song ("Pneuma", "Tool");
newSongTwo.durationInSeconds = 691.8;

let newSongWithUnknownArtist = new SongWithUnknownArtist("Love me two times", "");
newSongWithUnknownArtist.setArtist("The Doors");
newSongWithUnknownArtist.durationInSeconds = 193.2;
console.log(newSongWithUnknownArtist);