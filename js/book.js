function book (title, author, numPages, pubDate){
  bookDate = new Date(pubDate);
  this.title = title;
  this.author = author;
  this.numberOfPages = numPages;
  this.publishDate = bookDate;
};

// Takes in an object that can have some or all of the book properties to overrite original book properties.
// Returns the edited book object.
book.prototype.editBook = function(oBook){
  if (gLibrary.isBookInLibrary(oBook)) {
    console.log("This book already exists in the library.");
  } else {
    this.title = oBook.title || this.title;
    this.author = oBook.author || this.author;
    this.numberOfPages = oBook.numberOfPages || this.numberOfPages;
    this.publishDate = oBook.publishDate || this.publishDate;
  }
};
