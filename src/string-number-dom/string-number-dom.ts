console.clear();
console.log("Ahoi");

//numbers

const age: number = 36;
const salery: number = 3234.1376;

const ageAsString: string = age.toString();
console.log({ageAsString});

const salaryAsString = salery.toString();
console.log({salaryAsString});

// mit einem Wert in der toString Methode, kann man in betimmte Zahlenformate umwandeln -- 2 binär, 16 Hex etc...!

const saleryToFixed = salery.toFixed(2);
console.log({saleryToFixed});
//immer die Nachkommastellen angeben!
// es wird aufgerundet - die letzte Nachkommastelle

const saleryToPrecision = salery.toPrecision(2);
console.log({saleryToPrecision});
//Exponential Notation

const birthYear = "1911";
const birthYearAsNumber: number = parseInt(birthYear);
console.log({birthYearAsNumber});
//parseint ist nur für ganze Zahlen!

const tax = "17.55";
const taxAsNumber:number = parseFloat(tax);
console.log({taxAsNumber});
// konvertiert Komma Zahlen

const saleryToExponential = salery.toExponential(3);
console.log({saleryToExponential});
//wie precission nur mit angabe der nachkommastellen

const highNumberAsString = 574839.23057;
const highNumber = Number(highNumberAsString);
console.log({highNumber});
//konvertierung von string zu zahl mit Number
// eher dirty und nicht "clean-code"
// konvertiert ganze Zahlen und Komma Zahlen