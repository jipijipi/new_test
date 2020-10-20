let myLibrary = [];

//book constructor

function Book(title, author, pages, hasRead = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = () => `The book is ${this.title} by ${this.author}, it has ${this.pages} pages and ${!this.hasRead ? "I did not read it yet." : "I already read it."}`;
    this.toggleRead = () => {
        this.hasRead ? this.hasRead = false : this.hasRead = true;
        updateLibrary()
    };
}


function addBook(title, author, pages, hasRead) {
    myLibrary.push(new Book(title, author, pages, hasRead));
}

addBook('Moby Dick', 'Melville', 2345);
addBook('Harry Potter', 'JK Rowling', 3212, true);


function updateLibrary() {
    let library = document.querySelector('#library');
    library.innerHTML = "";

    for (let [index, item] of myLibrary.entries()) {

        let card = document.createElement('div');
        card.setAttribute('id', item.title);
        card.setAttribute('class', 'book');
        card.setAttribute(['data-index'], index);
        card.innerHTML = `<h2>${item.title}</h2><p>${item.author}</p><p>${item.pages}</p><p>${item.hasRead}</p><button class="btnRemove">-</button><button class="btnRead">read</button>`;
        library.append(card);

    }

    //remove buttons
    let removeButtons = document.querySelectorAll('.btnRemove');
    removeButtons.forEach(x => x.addEventListener('click', removeBook));

    //toogle read
    let toggleRead = document.querySelectorAll('.btnRead');
    toggleRead.forEach(x => x.addEventListener('click', toggleReadBook))
}

updateLibrary();

//get form data

function submitBook() {
    let bookForm = document.querySelector('#bookForm');
    let title = bookForm.querySelector(['[name = "title"]']);
    let author = bookForm.querySelector(['[name = "author"]']);
    let pages = bookForm.querySelector(['[name = "pages"]']);
    let hasRead = bookForm.querySelector(['[name = "hasRead"]']);

    addBook(title.value, author.value, pages.value, hasRead.checked);

    updateLibrary();
}

//add book click

document.querySelector('#addBook').addEventListener('click', submitBook);

//remove book click

function removeBook() {
    let cardIndex = this.parentNode.getAttribute('data-index');
    myLibrary.splice(cardIndex, 1);
    updateLibrary()
}

function toggleReadBook() {
    let cardIndex = this.parentNode.getAttribute('data-index');
    myLibrary[cardIndex].toggleRead();
}