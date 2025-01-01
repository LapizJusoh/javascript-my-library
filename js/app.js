const myLibrary = [];
const addBookButton = document.querySelector('#add-book-btn');

function Book( title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary( title, author, page, read ) {
  const addBook = new Book( title, author, page, read );
  myLibrary.push(addBook);
}

function displayLibrary() {

  const parentDiv = document.querySelector('.input');
  const ul = document.createElement('ul');
  ul.setAttribute('class','card-list');

  parentDiv.removeChild(parentDiv.firstChild);
  parentDiv.appendChild(ul);

  for (let i = 0; i < myLibrary.length; i++) {

    const container = document.querySelector('.card-list');
    const li = document.createElement('li');

    li.setAttribute("class","card");
    li.innerHTML = `
        <p>Title: ${myLibrary[i].title}</p>
        <p>Author: ${myLibrary[i].author}</p>
        <p>Pages: ${myLibrary[i].pages}</p>
        <p>Has Read? ${ myLibrary[i].read ? 'Yes' : 'No'}.</p>
    `;

    container.appendChild(li);
  }

}

addBookButton.addEventListener("click", (e)=> {
  let titleInput = document.querySelector("#title").value;
  let authorInput = document.querySelector("#author").value;
  let pagesInput = document.querySelector("#pages").value;
  let readInput = document.querySelector("#has-read").checked;

  addBookToLibrary( titleInput, authorInput, pagesInput, readInput );
  displayLibrary();
  document.querySelector("#title").value = '';
  document.querySelector("#author").value = '';
  document.querySelector("#pages").value = '';
  document.querySelector("#has-read").checked = false;

  e.preventDefault();

})

displayLibrary();