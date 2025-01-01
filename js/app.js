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

function initialLibraryData() {
  const initBook = new Book("The Hobbit", "JRR Tolkien", 259, true);
  const initBook2 = new Book("Warhammer2", "GM Workshop", 116, false);
  myLibrary.push(initBook);
  myLibrary.push(initBook2);
}

function displayLibrary() {

  for (let i = 0; i < myLibrary.length; i++) {

    const container = document.querySelector('.card-list');
    const li = document.createElement('li');

    li.setAttribute("class","card");
    li.innerHTML = `
        <p>Title: ${myLibrary[i].title}</p>
        <p>Author: ${myLibrary[i].author}</p>
        <p>Pages: ${myLibrary[i].pages}</p>
        <p>Has Read? ${ myLibrary[i].read.checked ? 'Yes' : 'No'}.</p>
    `;

    container.appendChild(li);
  }

}

initialLibraryData();
displayLibrary();