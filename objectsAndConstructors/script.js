function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not read yet"}`;
    };
}

const myLibrary = [];
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("addBook").addEventListener("click", function(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value.toLowerCase() === 'true';

    if (title && author && pages) {
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        displayBooks();
        clearForm();
    } else {
        alert("Please fill in all fields");
    }
  });
});

function displayBooks() {
    const list = document.getElementById("bookList");
    list.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const li = document.createElement("li");
        li.textContent = book.info();
        list.appendChild(li);
    });
}

function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").value = "";
}