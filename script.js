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
  let propertyArray = [];

  for (let i = 0; i < librarySize; i += 1) {
    const tableRow = document.createElement("tr");
    propertyArray = Object.values(myLibrary[i]);
    for (let x = 0; x < propertyArray.length; x += 1) {
      if (x === 3) {
        const tableCell = document.createElement("td");
        const readToggle = document.createElement("input");
        readToggle.className = "toggle";
        readToggle.type = "checkbox";
        if (propertyArray[x]) {
          readToggle.checked = true;
          tableCell.style.backgroundColor = "green";
        } else {
          tableCell.style.backgroundColor = "red";
        }
        readToggle.setAttribute("data-index", `${i}`);
        tableCell.appendChild(readToggle);
        tableRow.appendChild(tableCell);
      } else {
        const tableCell = document.createElement("td");
        tableCell.textContent = propertyArray[x];
        tableRow.appendChild(tableCell);
      }
    }

    const tableCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Book";
    removeButton.className = "remove";
    removeButton.setAttribute("data-index", `${i}`);
    tableCell.appendChild(removeButton);
    tableRow.appendChild(tableCell);
    body.appendChild(tableRow);
  }

  const togglesRead = document.querySelectorAll(".toggle");
  togglesRead.forEach((toggle) => {
    toggle.addEventListener("change", (e) => {
      const toggleState = e.target.checked;
      const toggleNumber = e.target.dataset.id;
      myLibrary[toggleNumber].read = toggleState;
      createTable();
    });
  });

  const removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", (e) => {
      const buttonNumber = e.target.dataset.index;
      myLibrary.splice(buttonNumber, 1);
      createTable();
    });
  });
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

/* Default Books */
const firstBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const secondBook = new Book(
  "Harry Potter and the Philosopher's Stone",
  "J. K. Rowling",
  223,
  true
);

addBookToLibrary(firstBook);
addBookToLibrary(secondBook);
createTable();

/* Form */
const addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener("click", () => {
  document.getElementById("myForm").style.display = "block";
});

const closeButton = document.querySelector(".cancel");
closeButton.addEventListener("click", () => {
  document.getElementById("myForm").style.display = "none";
});

const submitButton = document.querySelector(".submit");
const myForm = document.querySelector(".form-container");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.getElementById("book-name").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);
  document.getElementById("myForm").style.display = "none";
  myForm.reset();
  createTable();
});
