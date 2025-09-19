let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    const library = document.getElementById("library");
    library.innerHTML = "";

myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
    <div class="book-title">${book.title}</div>
    <p>by ${book.author}</p>
    <p>${book.pages} pages</p>
    <p>${book.read ? "Read" : "Not Read"}</p>
    <button type="button" class="remove-btn" onclick="removeBook(${index})">Remove</button>
    <button type="button" class="toggle-btn" onclick="toggleRead(${index})">Toggle Read</button>`;

    library.appendChild(bookDiv);
});
}

function removeBook(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

document.getElementById("book-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    this.reset();
});