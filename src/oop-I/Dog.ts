//* KLassen immer in eine Neue Dateie, Name der Klasse GROß geschrieben in Dateiname und Class Definition
import Owner from "./Owner";
class Dog {
    //? Eigenschaft, Property, Attribut - steht in der Klasse, besteht aus Name und Datentyp
    //? Es muss immer ein Anfangswert / Initialwert hinterlegt sein wenn die Klasse erstellt wird - sonst TS Fehler
    //? bei string - leerstring, bei nummer 0, boolean false
    name: string = "";
    age: number = 0;
    owner_old: string = "";
    owner: Owner;
    //? so werden Beziehungen zwischen Klassen erstellt
    breed: string = "";
    favoriteFood: string = ""

    //? jede Klasse hat einen "constructor" der Aufgerufen wird sobald man "new" aufruft
    //? das ist die Methode, die die Klasse erzeugt
   //? constructor () {}
   //? kann weggelassen werden wenn nichts passieren soll und die Klasse komplett leer angelegt wird
   //? constructor kann für Pflichtfelder, Pflichtangaben benutzt werden
   //? was im constructor als Pflicht Parameter abgefragt wird, braucht dann oben keinen Initialwert mehr
   //? Mit Fragezeichein hinter Eigenschaft werden sie optional und müssen nicht angegeben werden --> favoriteFood?: "";

   constructor (name: string, age:number, owner: Owner) {
    this.name = name;
    this.age = age;
    this.owner = owner;
    console.log("dog was created");
   }

   //? dann muss der name schon beim anlegen mit new Dog ("Wuffy") mit übergeben werden
   //? Die übergebenen Paramenter müssen den internen Eigenschaften aber auch noch zugewiesen werden --> mit this
}

export default Dog;