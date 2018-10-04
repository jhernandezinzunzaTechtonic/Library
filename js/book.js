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
  for (var i=0; i < arguments.length; i++) {
    
  }
  this.title = oBook.title;
  this.author = oBook.author;
  this.numberOfPages = oBook.numberOfPages;
  this.publishDate = oBook.publishDate;
};
