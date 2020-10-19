function bookMaker(title, author, pageCount, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
    this.info = () => `${title} by ${this.author} has ${this.pageCount} pages and ${this.isRead ? "I read it" : "I did not read it"}`;
}
let book1 = new bookMaker('Moby dick', 'Melville', 1234, false);
