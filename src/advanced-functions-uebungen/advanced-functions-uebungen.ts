//* Level 1-1
function intro1(){
    console.log("Hello Intro1");
}

intro1();

let intro2 = () => {
    console.log("Hello Intro2");
}

intro2();

//* Level 1-2
function helloHTML(){
   // document.body.innerHTML = "Hello";
}
helloHTML();

let helloHTMLArrow = () => {
   // document.body.innerHTML = "Hello";
}

helloHTMLArrow();



function addTwoHTML(a:number, b:number){
    console.log(a + b);
}

addTwoHTML(2,1);

let addTwoHTMLArrow = (a:number, b:number) => {
    console.log(a + b);
}

addTwoHTMLArrow (2,3);




function alertMultiplyTwo(a:number, b:number){
    window.alert(a * b);
}

alertMultiplyTwo(2, 2);

let alertMultiplyTwoArrow = (a:number, b:number) => {
   window.alert(a * b);
}

alertMultiplyTwoArrow(2,4);



let anObject = {
    contentOne: 1,
    contentTwo: 2,
    contentThree: 3
}

function objectToConsole(myObject:Object){
    Object.keys(myObject).forEach(key => {
        console.log(key);
    });
}

objectToConsole(anObject);

let objectToConsoleArrow = (myObject:Object) => {
    Object.keys(myObject).forEach(key => {
        console.log(key);
    });
}

objectToConsoleArrow(anObject);


//* Level 1-2
let person = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: 1.78,
    zeigeProfil: function () {
        return `${this.vorname}, ${this.nachname}, ${this.alter}, ${this.familienstand}`;
    }
};

let person2 = {
    vorname: 'Antonia',
    nachname: 'Haifish',
    alter: 32,
    familienstand: 'single',
    groesse: 1.55,
    zeigeProfil2: () => {
        return `${person2.vorname}, ${person2.nachname}, ${person2.alter}, ${person2.familienstand}`;
    }
};

let outputDiv = document.getElementById("person");
if (outputDiv) {
    outputDiv.innerText = person.zeigeProfil();
} else {
    console.log(person.zeigeProfil());
}

let outputDiv2 = document.getElementById("person2");
if (outputDiv) {
    outputDiv.innerText = person2.zeigeProfil2();
} else {
    console.log(person2.zeigeProfil2());
}


//* Level 1-6
type Monster = {
    name: string,
    type: string,
    health: number,
    strength: number,
    speed: number,
}


function createMonster(name:string, type:string, health:number = 100, strength: number = 50, speed: number = 25 ){
    let newMonster: Monster = {
        name: name,
        type: type,
        health: health,
        strength: strength,
        speed: speed
    }
    return newMonster;
};

console.log(createMonster("Mogmog", "Smoke", 150, 35, 50));
console.log(createMonster("Labbellutz", "Blubberlubb"));
console.log(createMonster("Bommelluff", "Ummelabbel", 200, 10));
console.log(createMonster("Pummel", "Ugglbuggl", 500));


//* Level 2-2

let customerfirstName = document.getElementById("first-name") as HTMLInputElement;

let customerLastName = document.getElementById("last-name") as HTMLInputElement;

let customerEmail = document.getElementById("email") as HTMLInputElement;

let customerPhone = document.getElementById("phone") as HTMLInputElement;

let greetingOutputArea = document.getElementById("greeting-output");

let newCustomerSubmitBtn = document.getElementById("submit");

type NewCustomCustomer = {
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
}

newCustomerSubmitBtn?.addEventListener("click",(event) => {
    event.preventDefault();

    let newCustomer:NewCustomCustomer = {
        firstName: customerfirstName.value,
        lastName: customerLastName.value,
        email: customerEmail.value,
        phone: customerPhone.value
    }

    let customerFirstNameInput = customerfirstName.value;
    let customerLastNameInput = customerLastName.value;
    let customerEmailInput = customerEmail.value;
    let customerPhoneInput = customerPhone.value;

    greetNewUser1(newCustomer);

    greetUser2(customerFirstNameInput, customerLastNameInput, customerEmailInput, customerPhoneInput);
});

function greetNewUser1(newCustomer: NewCustomCustomer) {
    if (newCustomer.email !== "" && newCustomer.phone !== "") {
        console.log(`Hello ${newCustomer.firstName} ${newCustomer.lastName}. We will contact you via ${newCustomer.email} and ${newCustomer.phone}.`);
    } else if (newCustomer.email !== "") {
        console.log(`Hello ${newCustomer.firstName} ${newCustomer.lastName}. We will contact you via ${newCustomer.email}.`);
    } else if (newCustomer.phone !== "") {
        console.log(`Hello ${newCustomer.firstName} ${newCustomer.lastName}. We will contact you via ${newCustomer.phone}.`);
    } else {
        console.log(`Hello ${newCustomer.firstName} ${newCustomer.lastName}.`);
    }
};

function greetUser2(customerFirstNameInput:string, customerLastNameInput:string, customerEmailInput?:string, customerPhoneInput?:string){
    if (customerEmailInput && customerPhoneInput){
        console.log(customerFirstNameInput, customerLastNameInput, customerEmailInput, customerPhoneInput);
    } else if (customerEmailInput){
        console.log(customerFirstNameInput, customerLastNameInput, customerEmailInput);
    } else if (customerPhoneInput){
        console.log(customerFirstNameInput, customerLastNameInput, customerPhoneInput);
    } else {
        console.log(customerFirstNameInput, customerLastNameInput);
    }
        
}