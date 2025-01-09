const myLibrary = [];
const addBookButton = document.querySelector('#add-book-btn');

(() => {
  class Book {
    constructor( title, author, pages, read ) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  
    toggleRead() {
      this.read = (!this.read);
      displayLibrary();
    }
  
    deleteBook(selectedBook) {
      myLibrary.splice(selectedBook, 1);
      displayLibrary();
    }
  }
  
  function addBookToLibrary( title, author, page, read ) {
    const addBook = new Book( title, author, page, read );
    myLibrary.push(addBook);
  }
  
  function displayLibrary() {
  
    const parentDiv = document.querySelector('.output-field');
    const ul = document.createElement('ul');
    ul.setAttribute('class','card-list');
  
    if (parentDiv.firstChild) parentDiv.removeChild(parentDiv.firstChild);
    
    parentDiv.appendChild(ul);
  
    for (let i = 0; i < myLibrary.length; i++) {
  
      const container = document.querySelector('.card-list');
      const li = document.createElement('li');
      const deleteBtn = document.createElement('button');
      const readBtn = document.createElement('button');
  
      li.setAttribute("class","card");
      container.appendChild(li);
      
      li.innerHTML = `
        <p>Title: ${myLibrary[i].title}</p>
        <p>Author: ${myLibrary[i].author}</p>
        <p>Pages: ${myLibrary[i].pages}</p>
        <p>Has Read? ${ myLibrary[i].read ? 'Yes' : 'No'}.</p>
      `;
  
      deleteBtn.innerHTML = 'Delete';
      readBtn.innerHTML = 'Read Toggle';
  
      li.appendChild(deleteBtn);
      li.appendChild(readBtn);
  
      deleteBtn.addEventListener("click", () => {
        myLibrary[i].deleteBook(i);
      })
  
      readBtn.addEventListener("click", () => {
        myLibrary[i].toggleRead();
      })
  
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
})();
