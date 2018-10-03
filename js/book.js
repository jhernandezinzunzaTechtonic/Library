function book (title, author, numPages, pubDate){
  this.title = title;
  this.author = author;
  this.numberOfPages = numPages;
  this.publishDate = pubDate;
};

// Takes in an object that can have some or all of the book properties to overrite original book properties.
// Returns the edited book object.
book.prototype.editBook = function(oBook){
  this.title = oBook.title;
  this.author = oBook.author;
  this.numberOfPages = oBook.numPages;
  this.publishDate = oBook.pubDate;
};
