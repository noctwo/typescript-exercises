const eightiesHits2: string[] = [
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

// map wendet eine Funktion auf das Ursprungsarray an und gibt ein neues array zurük
// oft genutzt zum UMFORMATIEREN von Dingen
// braucht RETURN

const hitsWithExclamationMark = eightiesHits2.map((hit:string) => {
    return hit + "!";
});
console.log(hitsWithExclamationMark);

const hitsToUpperCase = eightiesHits2.map((hit:string) => {
    return hit.toLocaleUpperCase();
});
console.log(hitsToUpperCase);

const hitsWithBigLove = eightiesHits2.map((hit:string) => {
    return hit.toLocaleLowerCase().replace("love", "HATE");
})
console.log(hitsWithBigLove);

// in .map lässt sich auch längere Logik abfragen!
const hitsRated = eightiesHits2.map((hit:string) => {
    if (hit.includes("Blue")){
        return `Best song: ${hit}`;
    }

    if (hit.includes("Rio")){
        return `Worst song: ${hit}`;
    }
    return `Good song: ${hit}`;
});
console.log(hitsRated);


// mit mit Index
// index +1 wegen Zählweise ab 0
const hitsWithOrder = eightiesHits2.map((hit:string, index:number) => {
    return `Index: ${index+1} - ${hit}`;
});
console.log(hitsWithOrder);



//forEach
// gibt im Unterschied zu MAP nichts zurück
// es entsteht kein neues Array

eightiesHits2.forEach((hit:string) => {
    console.log(hit);
});

eightiesHits2.forEach((hit:string, index:number) => {
    console.log(`${index +1} - ${hit}`);
});

eightiesHits2.forEach((hit:string) => {
    if (hit.includes("Blue")){
        console.log( `Best song: ${hit}`);
    }

    if (hit.includes("Rio")){
        console.log( `Worst song: ${hit}`);
    }
    console.log( `Good song: ${hit}`);
});
