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
  //If book is already in library, make sure it is formatted correctly
  if (gLibrary.isBookInLibrary(oBook)) {
    console.log("This book already exists in the library.");
  } else {
    this.title = oBook.title.trim() || this.title;
    this.author = oBook.author.trim() || this.author;
    this.numberOfPages = oBook.numberOfPages.trim() || this.numberOfPages;
    this.publishDate = oBook.publishDate.trim() || this.publishDate;
  }
  // Update library information on page.
  this.showLibraryDetails(this.bookshelf);
  // Update local storage
  this.storeLibrary();
};
