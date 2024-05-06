let toDoItems = ["Putzen", "Einkaufen"];

function addItem(todoElement:string, atTheBack:boolean):void{
    if (atTheBack == false){
        toDoItems.unshift(todoElement);
        console.log(toDoItems);
    } else{
        toDoItems.push(todoElement);
        console.log(toDoItems);
    }
};

function removeItem(atTheBack:boolean){
    if (atTheBack == true){
        toDoItems.pop();
        console.log(toDoItems);
    } else {
        toDoItems.shift();
        console.log(toDoItems)
    }
};


addItem("Kochen", true);
addItem("Lernen", false);

removeItem(true);
removeItem(false);


function addItemAt(indexOne:number, indexTwo:number, item:string):void{
    toDoItems.splice(indexOne, indexTwo, item);
    console.log(toDoItems);
};

addItemAt(1, 0, "Hallo");

function removeItemAt(index:number):void{
    toDoItems.splice(index);
    console.log(toDoItems);
};

removeItemAt(2);

function printList(){
    console.log(toDoItems);
};

printList();

function printPretty(){
    console.log(toDoItems.join(" ** "))
};

printPretty();

function askForUserInput(){
    let userInputTasks = window.prompt("Bitte gib 5 Tasks durch Komma getrennt ein.");
    let userInputSingleTask = userInputTasks.split(",");
    console.log(userInputSingleTask);
    toDoItems.push(userInputSingleTask[0]);
    toDoItems.push(userInputSingleTask[1]);
    toDoItems.push(userInputSingleTask[2]);
    toDoItems.push(userInputSingleTask[3]);
    toDoItems.push(userInputSingleTask[4]);
};

askForUserInput();
printPretty();


/* eins, zwei, drei, vier, fünf */