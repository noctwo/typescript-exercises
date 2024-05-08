const eightiesHits: string[] = [
    'Blue Monday',
    'Just Cant Get Enough',
    'Dont You Want Me',
    'Tainted Love',
    'Enjoy the Silence',
    'Bizarre Love Triangle',
    'Rio',
    'Heart of Glass',
    'Love Will Tear Us Apart',
    'Dont stop believin',
    'love Me Two Times'
];

// indexOf
const indexOfRio = eightiesHits.indexOf("Rio");
console.log(indexOfRio);

if (indexOfRio > -1){
    console.log("Es wurde ein Ergebnis gefunden.");
}

// lastIndexOf
const lastIndexOfRio = eightiesHits.lastIndexOf("Rio");
console.log(lastIndexOfRio);


// includes - gibt boolean zurück ob Element enthalten oder nicht
const includesTaindetLove = eightiesHits.includes("Tainted Love");
console.log(includesTaindetLove);

if(eightiesHits.includes("Heat of Glas")){
    console.log("Song found!");
}


// find - gibt das ERSTE Vorkommen im Array zurück
const blueMondEy = eightiesHits.find((hit:string) => hit === "Blue MondEy");
console.log(blueMondEy);

const blueMonday = eightiesHits.find((hit:string) => hit === "Blue Monday");
console.log(blueMonday);

const firstHitWithDont = eightiesHits.find((hit:string) => hit.startsWith("Dont"));
console.log(firstHitWithDont);


// filter - filtert alle Elemente raus die den Kriterien entsprechen - gibt Array aller Ergebnisse aus
const allHitsWithDont = eightiesHits.filter((hit:string) => hit.startsWith("Dont"));
console.log(allHitsWithDont);

const allHitsWithLove = eightiesHits.filter((hit:string) => hit.includes("Love"));
console.log(allHitsWithLove);

const loveSearchInput = "LOVE";
const allHitsWithLoveCase = eightiesHits.filter((hit:string) => hit.toLocaleLowerCase().includes("love")); // + includes lovesearchinput
console.log(allHitsWithLoveCase);
//man kann auch alles klein machen und dann suchen
// User Eingaben könnte man hier auch berücksichtigen und  umwandeln - so wird jede Schreibweise berücksichtigt und es gibt Ergebnisse

const allHitsWithDontAndEnjoy = eightiesHits.filter((hit:string) => hit.startsWith("Dont") || hit.startsWith("Enjoy"));
console.log(allHitsWithDontAndEnjoy);

const allHitsLongerThan13 = eightiesHits.filter((hit:string) => hit.length > (13));
console.log(allHitsLongerThan13);

//hier sind die String Methoden wichtig!

