import IceCreamFlavor from "./iceCreamFlavors";
import SchoolClass from "./SchoolClass";
import Pupil from "./Pupils";
import Car from "./Car";
import Driver from "./Driver";
import Actor from "./Actor";
import Episode from "./Episode";
import Series from "./Series";

//* Level 1-1
let smurf = new IceCreamFlavor();
smurf.name = "Schlumpf-Eis";
smurf.price = 1.20;
smurf.isPopular = true;
smurf.description = "von führenden Schlümpfen empfohlen"


let vanilla = new IceCreamFlavor();
vanilla.name = "Vanille";
vanilla.price = 1.20;
vanilla.isPopular = false;
vanilla.description = "very much underrated"

let chocolade = new IceCreamFlavor();
chocolade.name = "Schokolade";
chocolade.price = 1.20;
chocolade.isPopular = true;
chocolade.description = "very much overrated"

let raspberry = new IceCreamFlavor();
raspberry.name = "Himbeere";
raspberry.price = 1.20;
raspberry.isPopular = true;
raspberry.description = "pink und gut"

let allIceCreamFlavors = [smurf, vanilla, chocolade, raspberry];

console.log(allIceCreamFlavors);

allIceCreamFlavors.forEach(flavor => {
    if(flavor.isPopular === true){
        console.log(flavor);
    }
});


//* Level 1-2

let classOne = new SchoolClass(123, "Klasse 1A");
classOne.endDate = "12.12.2012"

let classTwo = new SchoolClass(456, "Klasse 2B");
classTwo.endDate = "13.02.2022"
console.log(classTwo);
classTwo.name = "Klasse 2C"
console.log(classTwo);

let classThree = new SchoolClass(789, "Klasse 3C");
classThree.endDate = "25.09.2035"
console.log(classThree);
classThree.name = "Klasse 3D"
console.log(classThree);


//* Level 2-1

let pupilOne = new Pupil(988001, "Manfred", "Schmitt");
let pupilTwo = new Pupil(988002, "Eberhard", "Hermmann");
let pupilThree = new Pupil(988003, "Uwe", "Müller");
let pupilFour = new Pupil(988004, "Klaus", "Schweinske");
let pupilFive = new Pupil(988005, "Ingo", "Krause");


let classFour = new SchoolClass(470, "Klasse4B");
classFour.pupils = [pupilOne, pupilTwo, pupilThree, pupilFour, pupilFive];

classFour.pupils.forEach(pupil => {
    console.log(pupil);
});

//* Level 2-2

let carOne = new Car();
carOne.brand = "Opel";
carOne.constructionYear = 2008;
carOne.currentSpeed = 130;

let carTwo = new Car();
carTwo.brand = "Fiat";
carTwo.constructionYear = 2010;
carTwo.currentSpeed = 60;

let carThree = new Car();
carThree.brand = "Moskwitsch"
carThree.constructionYear = 1955;
carThree.currentSpeed = 25;

let driverOne = new Driver("Sterling", "Moss", 90, carOne );
let driverTwo = new Driver ("Ayrton", "Senna", 34, carTwo);
let driverThree = new Driver("Lewis", "Hamilton", 39, carThree);

console.log(driverOne);
console.log(driverOne.car);

console.log(driverTwo);
console.log(driverTwo.car);

console.log(driverThree);
console.log(driverThree.car);

//* BONUS

let actorMillieBobbyBrown = new Actor ();
actorMillieBobbyBrown.firstName = "Millie-Bobby";
actorMillieBobbyBrown.lastName = "Brwon";
actorMillieBobbyBrown.birthday = new Date(2004, 2, 19);
actorMillieBobbyBrown.gender = "female";

let actorDavidHarbor = new Actor();
actorDavidHarbor.firstName = "David";
actorDavidHarbor.lastName = "Harbor";
actorDavidHarbor.birthday = new Date(1975, 4, 10);
actorDavidHarbor.gender = "male";

let actorPedorPascal = new Actor();
actorPedorPascal.firstName = "Pedro";
actorPedorPascal.lastName = "Pascal";
actorPedorPascal.birthday = new Date (1975, 4, 2);
actorPedorPascal.gender = "male";

let actorGinaCarano = new Actor();
actorGinaCarano.firstName = "Gina";
actorGinaCarano.lastName = "Carano";
actorGinaCarano.birthday = new Date(1982, 4, 16);
actorGinaCarano.gender = "female";

let actorHenryCavill = new Actor();
actorHenryCavill.firstName = "Henry";
actorHenryCavill.lastName = "Cavill";
actorHenryCavill.birthday = new Date(1983, 5, 5);
actorHenryCavill.gender = "male";

let actorAnyaChalotra = new Actor();
actorAnyaChalotra.firstName = "Anya";
actorAnyaChalotra.lastName = "Chalotra";
actorAnyaChalotra.birthday = new Date(1996, 7, 21);
actorAnyaChalotra.gender = "female";

let strangerThingsEpisodeOne = new Episode();
strangerThingsEpisodeOne.title = "The Vanishing of Will Byers";
strangerThingsEpisodeOne.duration = 47;
strangerThingsEpisodeOne.description = "Will Byers verschwindet auf mysteriöse Weise, und seine Freunde machen sich auf die Suche nach ihm.";
strangerThingsEpisodeOne.actors = [actorMillieBobbyBrown, actorDavidHarbor];

let strangerThingsEpisodeTwo = new Episode();
strangerThingsEpisodeTwo.title = "The Weirdo on Maple Street";
strangerThingsEpisodeTwo.duration = 55;
strangerThingsEpisodeTwo.description = "Die Gruppe trifft auf ein mysteriöses Mädchen mit übernatürlichen Kräften, das sich Eleven nennt.";
strangerThingsEpisodeTwo.actors = [actorMillieBobbyBrown, actorDavidHarbor];

let theMandalorianEpisodeOne = new Episode();
theMandalorianEpisodeOne.title = "Chapter 1: The Mandalorian";
theMandalorianEpisodeOne.duration = 40;
theMandalorianEpisodeOne.description = "Ein einsamer Kopfgeldjäger wird angeheuert, um ein mysteriöses Ziel zu finden.";
theMandalorianEpisodeOne.actors = [actorPedorPascal, actorGinaCarano];

let theMandalorianEpisodeTwo = new Episode();
theMandalorianEpisodeTwo.title = "Chapter 2: The Child";
theMandalorianEpisodeTwo.duration = 32;
theMandalorianEpisodeTwo.description = "Der Mandalorianer kämpft gegen Plünderer und entdeckt das wahre Wesen seiner Fracht.";
theMandalorianEpisodeTwo.actors = [actorPedorPascal, actorGinaCarano];

let theWitcherEpisodeOne = new Episode();
theWitcherEpisodeOne.title = "The End's Beginning";
theWitcherEpisodeOne.duration = 61;
theWitcherEpisodeOne.description ="Geralt kämpft gegen ein Monster und trifft auf eine Zauberin mit einer mysteriösen Agenda.";
theWitcherEpisodeOne.actors = [actorHenryCavill, actorAnyaChalotra];

let theWitcherEpisodeTwo = new Episode();
theWitcherEpisodeTwo.title = "Four Marks";
theMandalorianEpisodeTwo.duration = 61;
theWitcherEpisodeTwo.description = "Yennefer entdeckt ihre magischen Fähigkeiten und beginnt ihre Ausbildung zur Zauberin.";
theWitcherEpisodeTwo.actors = [actorHenryCavill, actorAnyaChalotra];

let seriesStrangerThings = new Series();
seriesStrangerThings.title = "Stranger Things";
seriesStrangerThings.description = "Eine Gruppe von Kindern stößt in ihrer Kleinstadt auf geheimnisvolle Ereignisse und übernatürliche Kräfte."
seriesStrangerThings.startYear = new Date(2016);
seriesStrangerThings.endYear = new Date(2024);
seriesStrangerThings.episodes = [strangerThingsEpisodeOne, strangerThingsEpisodeTwo]

let seriesTheMandalorian = new Series();
seriesTheMandalorian.title = "The Mandalorian";
seriesTheMandalorian.description = "Ein Kopfgeldjäger kämpft in der Galaxie weit, weit entfernt nach dem Sturz des Imperiums.";
seriesTheMandalorian.startYear = new Date(2019);
seriesTheMandalorian.endYear = new Date(2025);
seriesTheMandalorian.episodes = [theMandalorianEpisodeOne, theMandalorianEpisodeTwo];

let seriesTheWitcher = new Series();
seriesTheWitcher.title = "The Witcher";
seriesTheWitcher.description = "Die Geschichte des Hexers Geralt von Riva, eines mutierten Monsterschlächter, der seinen Platz in der Welt sucht.";
seriesTheWitcher.startYear = new Date(2019);
seriesTheWitcher.endYear = new Date(2025);
seriesTheWitcher.episodes = [theWitcherEpisodeOne, theWitcherEpisodeTwo];

function printSeriesInfo(series:Series){
    console.log(`Title: ${series.title}`);
    console.log(`Description: ${series.description}`);
    console.log(`Start Year: ${series.startYear}`);
    console.log(`End Year: ${series.endYear}`);
    console.log(`Episodes: ${series.episodes.length}`);

    let uniqueActors = new Set<Actor>();
    series.episodes.forEach(episode => {
        let allActors = episode.actors;
        allActors.forEach(actor => {
            uniqueActors.add(actor);
        })
    });
    uniqueActors.forEach(actor => {
        console.log(actor.firstName, actor.lastName)
        console.log(actor.birthday);
        console.log(actor.gender);
    })
}

printSeriesInfo(seriesTheWitcher);
printSeriesInfo(seriesStrangerThings);
printSeriesInfo(seriesTheMandalorian);