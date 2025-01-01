const myLibrary = [];

function Book( title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary( titleInput, authorInput, pageInput, readInput ) {
  const addBook = new Book( titleInput, authorInput, pageInput, readInput );
  myLibrary.push(addBook);
}

function displayLibrary() {

  for (let x=0; x < myLibrary.length; x++) {

  }

}