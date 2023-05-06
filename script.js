const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages}, Has read: ${this.read}}`;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const firstBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const secondBook = new Book(
  "Harry Potter and the Philosopher's Stone",
  "J. K. Rowling",
  223,
  true
);

function createTable() {
  const body = document.querySelector("tbody");
  body.innerHTML = "";
  const librarySize = myLibrary.length;
  let data = null;
  let row = null;
  let propertyArray = [];
  for (let i = 0; i < librarySize; i += 1) {
    row = document.createElement("tr");
    propertyArray = Object.values(myLibrary[i]);
    for (let x = 0; x < propertyArray.length; x += 1) {
      data = document.createElement("td");
      data.textContent = propertyArray[x];
      row.appendChild(data);
    }
    body.appendChild(row);
  }
}
addBookToLibrary(firstBook);
createTable();
addBookToLibrary(secondBook);
createTable();
