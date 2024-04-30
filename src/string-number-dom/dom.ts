console.log("Hall ich bin das DOM");

const contentElement = document.getElementById("content");
if (contentElement){
    contentElement.innerHTML = "Hello";
}

//wenn man hier in TS das IF weglässt, bekommt man eine Fehlermeldung. Diese kommt weil das Element möglicherweise nicht vorhanden sein könnte -  daher schreibt man das als if --> defensives Programmieren.