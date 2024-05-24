//* normale Funktion mit Aufruf

function sayHelloToEveryOne(){
    console.log("hello everyone");
};

sayHelloToEveryOne();



//* Arrow Functions

document.getElementById("something")?.addEventListener("click", () => {
    console.log("Hi");
})
//? hier ist die Arrow Function eine Funktion ohne Namen -> Anonyme Funktion - mach das gleiche wie normale Funktion und hat die gleichen Elemente - runde () für Parameter dann den => und die {}
//? Parameter gehen rein in Logik
//? (   ()   =>   {}   )
let sexAndTheCityPeople: string[] = ["Carrie", "Charlotte", "Miranda", "Samantha", "Mr Big"];

sexAndTheCityPeople.forEach((name:string)=>{ 
    console.log(name)
});

//? Ergebnis von .map ist immer ein neues Array
const sexAndTheCityGreetings = sexAndTheCityPeople.map((name:string) => {
    return "Hi " + name;
});
console.log(sexAndTheCityGreetings);


//* Wenn Logik nur aus einer Zeile oder Anweisung besteht, könenn wir die Schreibweise verkürzen
//? {} können weggelassen werden und alles steht in einer Zeile
sexAndTheCityPeople.forEach(name => console.log(name));

//? hier kann man sogar noch das return weglassen
let sexAndTheCityGreetings2 = sexAndTheCityPeople.map(name => "Hi2 " +name);
console.log(sexAndTheCityGreetings2);

//? bei sort immer 2 Parameter - weil jeweils 2 Elemente - miteinander verglichen werden
sexAndTheCityPeople.sort((a:string, b:string) => {
    return a.localeCompare(b);
});

//? Kurz ohne {}
sexAndTheCityPeople.sort((a:string, b:string) => a.localeCompare(b));



//* Arrow Functions mit Namen

function addTwoNumbers(a:number, b:number){
    return a +b
}

addTwoNumbers(3, 4);

const addTwoNumbersArrow = (a:number, b:number) => {
    return a + b;
}

addTwoNumbersArrow(22, 33);
//? hier schreibt man eine anonyme Function und weist sie einer Variblen zu. Über diese Variable kann ich die Function dann aufrufen - also wie eine normale Funtion mit parameter, nur dass es eine Variable ist eigentlich.


//* Optionale Parameter in einer Funktion
//! addTwoNumbers(3) wirft Fehler - 2 Parameter erwartet

//? durch Kennzeichnung mit ? wird hier der 3. Parameter optional und kann weggelassen werden
function addThreeNumbers(a:number, b:number, c?:number){
    if (c){
        return a + b + c;
    }
    return a + b
}

console.log(addThreeNumbers(4, 5));
console.log(addThreeNumbers(7, 8, 9));

function showUserGreeting(firstName:string, lastName?:string){
    if (lastName){
        console.log(`Hello ${firstName}, ${lastName}`);
    } else{
        console.log(`Hello ${firstName}`);
    }
}

showUserGreeting("Hans", "Heiner");
showUserGreeting("Harry");

//! optionale Parameter müssen immer hinter einem Pflichtparameter stehen, nicht an erster Stelle z.B. aber mehrere optionale können hintereinander stehen wenn davor ein Pflichtparameter stand

function addMoreNumbers (a:number, b:number, c?:number, d?:number){
    return a + b + (c ?? 0) + (d ?? 0);
    //? wenn c da nimm c, sonst 0
    //? bei addition bietet sich die 0 an - verfälscht ergebnis nicht
}

console.log(addMoreNumbers(1, 2, 3, 4));
console.log(addMoreNumbers(1, 2, 3,));
console.log(addMoreNumbers(1, 2));


//* Default Parameter in Funktionen
//? Default - Standard-Wert

//? function gibt je nach Anzahl hello world aus
function repeatHelloWorld(numberOfTimes:number):void{
    for (let index = 0; index < numberOfTimes; index++) {
        console.log("Hello World")
        
    }
}
repeatHelloWorld(3);

//? Ziel - ohne extra Angabe 3 Mal ausgeben
//? = 3 bedeutet: wenn niemand etwas übergibt - dann setze den Wert einfach auf 3

function repeatHelloWorldDefault(numberOfTimes:number = 3){
    for (let index = 0; index < numberOfTimes; index++){
    console.log("Hello Default");
    }
}

repeatHelloWorldDefault(5);
repeatHelloWorldDefault();

// ? ich kann für alle Parameter einen Standardwert angeben
function addWithDefault(a: number = 1, b: number = 2): number {
    return a + b;
  }
  
  // ? drei Optionen: beide angeben, nur a angeben, keinen angeben => nur b angeben geht hier nicht, damit kommt TS nicht zurecht
  console.log(addWithDefault(3, 4));
  // ? wenn ich hier nur einen Wert angebe, ist das der Wert von a und die hinteren Parameter sind default
  console.log(addWithDefault(3));
  console.log(addWithDefault());
  
  // ? der Defaultwert sollte immer viele Fälle abdecken - wenn öfter Neukunden angelegt werden, dann true sonst false
  function createCustomer(firstName: string, lastName: string, isNew: boolean = true) {
    const customer = { firstName, lastName, isNew };
    console.log(customer);
  }
  
  createCustomer('John', 'Doe'); // ? ist automatisch ein Neukunde mit isNew = true;
  createCustomer('Mary', 'Mae', false);





//* Funktionen in Objekten deklarieren

const customer30 = {
    firstName: "Harry",
    lastName: "Potter",
    age: 37,
//? funktion ist nur im Object verfügbar
    showInfo: function () {
        console.log("Harry Potter is 37");
    }
}
//? kann dann nur über das Objekt aufgerufen werden
customer30.showInfo();

//? Arrowfunction im Object

const customer31 = {
    firstName: "Hermine",
    lastName: "Granger",
    age: 37,
    showInfo: () => {
        console.log("Hermine Granger is 37");
        console.log(customer31.firstName, customer31.lastName, customer31.age);
    }
};

customer31.showInfo();

const customer32 = {
    firstName: "Hermine",
    lastName: "Granger",
    age: 37,
    showInfo: function () {
        //! in this. steckt das aktuelle object in dem ich mich gerade befinde und stellt mir alle Eigenschaften und Methoden zu verfügung
        console.log(`${this.firstName} ${this.lastName} ${this.age}`);
    },
    getBirthyear: function ():number {
        return 2024 - this.age;
    }
};

console.log(customer32.getBirthyear());

//! wenn wir Arrowfunctions verwenden können wir nicht auf this. zugreifen
//? sobald ich in einer Funktion in einem Objekt this. verwenden möchte, muss ich die normale Funktions Schreibweise verwenden!


//* in eigenem definierten Datentyp kann auch festgelegt werden, dass eine function verwendet werden muss
//? hier soll es immer eine showinfo function geben
//! functions in Datentypen müssen mit Arrow hinterlegt werden
//! nach dem Arrow muss der Rückgabetyp deklariert werden - hier :void
type CustomerWithFunc = {
    fistName: string; 
    lastName: string; 
    age:number; 
    showInfo: () => void; 
    calculateAge: (year:number) => number
};

const customer34: CustomerWithFunc = {
    fistName: "Hans",
    lastName: "Meise",
    age: 37,
    showInfo: function ():void {
        console.log(this.fistName, this.lastName);
    },
    calculateAge: function (year:number) {
        return year - (2024 - this.age);
    }
};

customer34.showInfo();
console.log(customer34.calculateAge(1999))

