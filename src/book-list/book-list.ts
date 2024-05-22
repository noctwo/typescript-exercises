//* 1. Buch-Object bzw. Typ definieren
//* 2. Liste von Büchern anlegen
//* 3. Alle HTML Elemente holen
//* 4. Eventlistenr anlegen


type Book = {title: string; author: string; genre: string; year: number; pages: number};

//? hier sollen später die eingegebenen Bücher rein
const books: Book[] = []; 

let bookForm = document.getElementById("book-form");
let titleInput = document.getElementById("title-input") as HTMLInputElement;
let autohrInput = document.getElementById("author-input") as HTMLInputElement;
let genreSelect = document.getElementById("genre-select") as HTMLSelectElement;
let yearInput = document.getElementById("year-input") as HTMLInputElement;
let pagesInput = document.getElementById("pages-input") as HTMLInputElement;

let bookErrorOutput = document.getElementById("error-text");
let bookList = document.getElementById("book-list");

//? submit button braucht hier keine ID weil er im <form> als type="submit" definiert ist
bookForm?.addEventListener("submit", (event:Event) => {
    event.preventDefault();
    console.log("submitted");
    //? eingabe validieren
    //? buch erzeugen 
    //? buch hinzufügen
    let newBook = addBookToArray();
    //? buch in liste anzeigen
    addBookToOutput(newBook)
});

function addBookToArray():Book{
    //? über input Feld den aktuellen wert mit .value über den Typ ins Object übermitteln
    let newBook: Book = {
        title: titleInput.value,
        author: autohrInput.value,
        genre: genreSelect.value,
        year: Number(yearInput.value),
        pages: Number(pagesInput.value)
    }
    books.push(newBook);
    console.log(books);
    return newBook;
};

function addBookToOutput(newBook: Book){
    let bookListElement = document.createElement("li");
    bookListElement.innerHTML = `${newBook.title} by ${newBook.author} genre ${newBook.genre} year ${newBook.year} pages ${newBook.pages}`;
};