//* Level 1-4
let numbersArray = [393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488];
console.log(Math.min(...numbersArray));
console.log(Math.max(...numbersArray));

//* Level 2-1
function roundTo(Zahl:number, NachkommaStellen:number):void{
    let result = Zahl.toFixed(NachkommaStellen);
    console.log(result);
};
roundTo(5.123456, 4)
roundTo(3.1415926535, 5);

//* Level 1-3
type Apple = {
    color: string;
    size: string;
    sweet: boolean;
};

let redApple: Apple = { color: 'red', size: 'big', sweet: true };
let greenApple: Apple = { color: 'green', size: 'small', sweet: false };
let yellowApple: Apple = { color: 'yellow', size: 'big', sweet: false };
let pinkApple: Apple = {color: "pink", size: "medium", sweet: true};

let apples: Apple[] = [redApple, greenApple, yellowApple];

apples.push(pinkApple);

apples.forEach((Apple) => {
    console.log(Apple.size)
});

apples.forEach((Apple) => {
    console.log(Apple.color)
});

apples.forEach((Apple) => {
    console.log(Apple.sweet)
});

console.log(apples.length)


//* Level 1-4
type Pet = {
    tiertyp: string;
    namen: string[];
};

let unsereHaustiere: Pet[] = [
    {
    tiertyp: 'Katze',
    namen: ['Gipsy', 'Nala', 'Dinky']
    },
    {
    tiertyp: 'Hunde',
    namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
    },
    {
    tiertyp: "Hamster",
    namen: ["Klaus", "Uwe", "Manfred"]
    }
];

console.log(unsereHaustiere[0].namen[1], unsereHaustiere[1].namen[2]);
console.log(unsereHaustiere[1].namen);

unsereHaustiere[1].namen[2] = "Snoopy";
console.log(unsereHaustiere[1].namen[2]);

unsereHaustiere[0].namen[2] = "Pinky";
console.log(unsereHaustiere[0].namen[2]);

//* Level 1-5
type Lager = {
    schreibtisch: {
        schublade: string;
    };
    schrank: {
        "Obere Schublade": {
            Ordner1: string;
            Ordner2: string;
        };
        "Untere Schublade": string;
    };
};

let unserLager: Lager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

//* Level 1-6
type Musik = {
    kunstler: string;
    title: string;
    release_jahr: number;
    formate: string[];
    gold: boolean;
};

let meineTopVier: Musik[] = [
    {
    kunstler: 'The Beatles',
    title: 'Abbey Road',
    release_jahr: 1969,
    formate: ['LP', 'CD', 'MC', 'Download'],
    gold: true
    },
    {
    kunstler: 'Pink Floyd',
    title: 'Dark Side of the Moon',
    release_jahr: 1978,
    formate: ['CS', 'CD', 'LP', 'Download'],
    gold: true
    },
    {
    kunstler: 'Led Zeppelin',
    title: 'Led Zeppelin IV',
    release_jahr: 1971,
    formate: ['CS', 'LP', 'Download'],
    gold: true
    },
    {
    kunstler: 'Metallica',
    title: 'Kill ’Em All und Ride the Lightning',
    release_jahr: 1983,
    formate: ['LP', 'CD', 'MC', 'Download'],
    gold: true
    },
    {
    kunstler: "Tool",
    title: "Fear Inoculum",
    release_jahr: 2019,
    formate: ['LP', 'CD', 'MC', 'Download'],
    gold: true
    }
];

console.log(meineTopVier[0].kunstler);
console.log(meineTopVier[1].formate[3]);
console.log(meineTopVier[1].gold);
console.log(meineTopVier[2].release_jahr, meineTopVier[3].release_jahr);
console.log(meineTopVier[3].formate[2]);
console.log(meineTopVier[3].title.substring(17, 22));

//* Level 2-2
type PeriodActive = {
    start: number;
    end: number | string;
    extra?: number;
};

type Singer = {
    name: string;
    country: string;
    period_active: PeriodActive;
    genre: string;
};

const singers: Singer[] = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

let aphabeticalSort = singers.concat();
console.log(aphabeticalSort.sort((a:any, b:any) => {
    return a.name.localeCompare (b.name)}));

console.log(aphabeticalSort.sort((a:any, b:any) => {
    return a.period_active.start - (b.period_active.start)}));


//* Level BONUS 2-5
type PeriodActiveTwo = {
    start: number;
    end: number | string;
    extra?: number;
};

type SingerTwo = {
    name: string;
    country: string;
    period_active: PeriodActiveTwo;
    genre: string;
};

const singersTwo: SingerTwo[] = [
    { 
    name: 'The Beatles', 
    country: 'United Kingdom', 
    period_active: { start: 1960, end: 1970 }, 
    genre: 'Rock / Pop' 
    },
    {
    name: 'Elvis Presley',
    country: 'United States',
    period_active: { start: 1954, end: 1977 },
    genre: 'Rock and roll'
    },
    {
    name: 'Michael Jackson',
    country: 'United States',
    period_active: { start: 1964, end: 2009 },
    genre: 'Pop / Rock / Dance / Soul / R&B'
    },
    {
    name: 'Elton John',
    country: 'United Kingdom',
    period_active: { start: 1964, end: 'present' },
    genre: 'Pop / Rock'
    },
    {
    name: 'Madonna',
    country: 'United States',
    period_active: { start: 1979, end: 'present' },
    genre: 'Pop / Dance / Electronica'
    },
    {
    name: 'Led Zeppelin',
    country: 'United Kingdom',
    period_active: { start: 1968, end: 1980 },
    genre: 'Hard rock / Blues rock / Folk rock'
    },
    {
    name: 'Rihanna',
    country: 'United States',
    period_active: { start: 2005, end: 'present' },
    genre: 'R&B / Pop / Dance / Hip-hop'
    },
    {
    name: 'Pink Floyd',
    country: 'United Kingdom',
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: 'Progressive rock / Psychedelic rock'
    }
];

let searchButton = document.getElementById("search-button");
searchButton?.addEventListener("click",searchSingersTwo);

let searchInput:any = document.getElementById("searchInput");

let outputTable = document.getElementById("table-container");

function createTable(resultFromSearch:any){
    let table:any = outputTable?.appendChild(document.createElement("div"));

    let singerName = table.appendChild(document.createElement("h3"));
    let singerCountry = table.appendChild(document.createElement("p"));
    let singerActive = table.appendChild(document.createElement("p"));
    let singerGenre = table.appendChild(document.createElement("p"));

    //? singerName.innerHTML = singersTwo[].name
    //! mit einem Loop komme ich hier direkt rein, wie unten!
    
};

function searchSingersTwo(){
    let searchTerm = searchInput?.value.toLocaleLowerCase();
    let searchResult = singersTwo.filter((singer) => singer.name.toLocaleLowerCase().includes(searchTerm));
    createTable(searchResult);
};

//! singersTwo geht ins Array - erste Ebene
//! (singer) sagt, dass ich die im Array befindlichen Dinge durchgehen will - zweite Ebene
//! singer.name sagt, dass ich noch eine Ebene tiefer in die Dinge rein will - dritte Ebene