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

function createTable() {
  const body = document.querySelector("tbody");
  body.innerHTML = "";
  const librarySize = myLibrary.length;
  let data = null;
  let row = null;
  let index = null;
  let propertyArray = [];
  for (let i = 0; i < librarySize; i += 1) {
    row = document.createElement("tr");
    propertyArray = Object.values(myLibrary[i]);
    for (let x = 0; x < propertyArray.length; x += 1) {
      data = document.createElement("td");
      data.textContent = propertyArray[x];
      row.appendChild(data);
    }
    index = document.createElement("button");
    index.textContent = "Remove Book";
    index.className = "remove";
    index.setAttribute("id", `${i}`);
    row.appendChild(index);
    body.appendChild(row);
  }
  const removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", (e) => {
      const number = e.target.id;
      myLibrary.splice(e.target.id, 1);
      createTable();
    });
  });
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

addBookToLibrary(firstBook);
createTable();
addBookToLibrary(secondBook);
createTable();

/* Forms */
const addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener("click", () => {
  document.getElementById("myForm").style.display = "block";
});

const closeButton = document.querySelector(".cancel");
closeButton.addEventListener("click", () => {
  document.getElementById("myForm").style.display = "none";
});

const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.getElementById("book-name").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;
  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);
  document.getElementById("myForm").style.display = "none";
  createTable();
});
