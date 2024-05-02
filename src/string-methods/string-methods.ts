// Level 1-1
console.log("Ahoi");

let firstName = "Harald";
let lastName = "Schmitt";

console.log(firstName.length, lastName.length);

let fullName = firstName.concat(lastName);
console.log(fullName, fullName.length);

// Level 1-2
let earthQuote = "How inappropriate to call this planet Earth, when clearly it is Ocean.";
let firstH = earthQuote.indexOf("h");
console.log(firstH);
let earth = earthQuote.indexOf("Earth");
console.log(earth);
let moon = earthQuote.indexOf("Moon");
console.log(moon);

// Level 1-3
let oceanQuote = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";
console.log(oceanQuote.search(";"));
console.log(oceanQuote.search("green"));
console.log(oceanQuote.search("blue"));
console.log(oceanQuote.search("Blue"));

// Level 1-4
const susisStatus = "Susi is going to codingschool";
let statusName = susisStatus.slice(0, 5);
let writeStatusName = document.querySelector(".status-name");
if (writeStatusName){
    writeStatusName.innerHTML = statusName;
}

let statusIs = susisStatus.slice(5, 7);
let writeStatusIs = document.querySelector(".status-is");
if (writeStatusIs){
    writeStatusIs.innerHTML = statusIs;
}

let statusIsAndMore = susisStatus.slice(5,16).concat(" ");
let statusSchool = susisStatus.slice(23, 30);
let writeStatusIsAndMore = document.querySelector(".status-is-and-more");
let writeStatusSchool = document.querySelector(".status-school");
let writeSusiSchool = document.querySelector(".status-susi-is-school");
if(writeStatusIsAndMore){
    writeStatusIsAndMore.innerHTML = statusIsAndMore.concat(statusSchool);
}
if(writeStatusSchool){
    writeStatusSchool.innerHTML = statusSchool;
}
if(writeSusiSchool){
    writeSusiSchool.innerHTML = statusName.concat(statusIs).concat(" ").concat(statusSchool);
}

// Level 1-5
const whereIsSusi = 'Susi is back from codingschool';
let backName = whereIsSusi.substring(0, 4);
let backIs = whereIsSusi.substring(5, 7);
let backSchool = whereIsSusi.substring(24);

let writeBackName = document.querySelector(".back-name");
let writeBackIs = document.querySelector(".back-is");
let writeBackSchool = document.querySelector(".back-school");
let writeBackAll = document.querySelector(".back-all");

if (writeBackName){
    writeBackName.innerHTML = backName;
}
if(writeBackIs){
    writeBackIs.innerHTML = backIs;
}
if(writeBackSchool){
    writeBackSchool.innerHTML = backSchool;
}
if(writeBackAll){
    writeBackAll.innerHTML = backName.concat(" ").concat(backIs).concat(" ").concat(backSchool);
}

// Level 1-6
//Unterschiede: Veraltet & man wählt Startpunkt + Länge
const samsJob = "Sam is working at codingschool";
let workingName = samsJob.substr(0, 3);
let workingIs = samsJob.substr(4, 10);
let workingAt = samsJob.substr(15, 2);
let workingSchool = samsJob.substr(24);

let samWrite = document.querySelector(".sam");
if (samWrite){
    samWrite.innerHTML = `${workingName}<br>${workingIs}<br>${workingAt}<br>${workingSchool}`;
}

// Level 1-7
const samsStatus = "Sam is good at codingschool";
let samsStatusBad = samsStatus.replace("good", "bad");
let samsStatusSchool = samsStatus.replace("coding", "");
let samsStatusTennis = samsStatus.replace("codingschool", "tennis");

// document.querySelector(".bad").innerHTML = samsStatusBad;
// document.querySelector(".school").innerHTML = samsStatusSchool;
// document.querySelector(".tennis").innerHTML = samsStatusTennis;




// Zum Abzählen kann man auch Startindexof nehmen!!!
/*
const quote = 'When I wrote this code, only God and I understood what I did. Now only God knows. – Anonymous';

document.open();

// Die Länge von quote ausgeben -> Alex
document.write(`Die Länge ist: ${quote.length}<br>`);

// Das Wort code ausschneiden --> Pius
const startIndex = quote.indexOf('code');
let code = quote.slice(startIndex, startIndex + 'code'.length);
document.write(code);
*/