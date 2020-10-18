function bookMaker(title, author, pageCount, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
    this.info = () => `${title} by ${author} has ${pageCount} pages and ${this.isRead ? "I read it" : "I did not read it"}`;
}

function bookMakerTest(...info) {
    this.title = info;
    this.author = info;
    this.pageCount = info;
    this.isRead = info;
    this.info = () => `${title} by ${author} has ${pageCount} pages and ${isRead ? "I read it" : "I did not read it"}`;
}

