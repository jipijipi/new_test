let myLibrary = [];

function Book(title, author, pages, hasRead = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = () => `The book is ${this.title} by ${this.author}, it has ${this.pages} pages and ${!this.hasRead ? "I did not read it yet." : "I already read it."}`;
}

function addBook(title, author, pages, hasRead) {
    myLibrary.push(new Book(title, author, pages, hasRead));
}

addBook('Moby Dick', 'Melville', 2345);
addBook('Harry Potter', 'JK Rowling', 3212, true);


function updateLibrary() {
    let library = document.querySelector('#library');
    library.innerHTML = "";

    for (item of myLibrary) {

        console.log(item);

        let card = document.createElement('div');
        card.setAttribute('id', item.title);
        card.setAttribute('class', 'book');
        card.innerHTML = `<h2>${item.title}</h2><p>${item.author}</p><p>${item.pages}</p><p>${item.hasRead}</p>`;
        library.append(card);

    }
}

updateLibrary();

//get form data

function submitBook() {
    let bookForm = document.querySelector('#bookForm');
    let title = bookForm.querySelector(['[name = "title"]']);
    let details = bookForm.querySelectorAll('.detail');
    let checks = bookForm.querySelectorAll('.checkbox').checked;

    addBook(title.value);
    details.forEach(x => console.log("ee", myLibrary[myLibrary.length - 1][x.getAttribute('name')]));

    console.log('input : ' + title.value);
    details.forEach(x => console.log('input : ' + x.value));
    console.log('input : ' + checks);

    updateLibrary();
}

//button click

document.querySelector('#addBook').addEventListener('click', submitBook);