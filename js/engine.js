function Library(){
  this.bookshelf = new Array();
};

// Add a book to my Library's bookshelf.
// Return true if it is not already added, false if already added.
Library.prototype.addBook = function (oBook) {
  testLibrary.bookshelf.push(oBook);
  console.log("You called the add Book function");
};

var testLibrary = new Library();
var testBook = new book("testBook", "Jose", 1, 2018);
var testBook2 = new book("testBook2", "Charles", 1, 2019);

testLibrary.addBook(testBook);
testLibrary.addBook(testBook2);
console.log(testLibrary.bookshelf);

Library.prototype.removeBookByTitle = function (title){

}

Library.prototype.removeBookByAuthor = function(authorName){

}

Library.prototype.getRandomBook = function(){

}
Library.prototype.getBookByTitle = function(title){

}
Library.prototype.getBookByAuthor = function(authorName){

}
Library.prototype.addBooks = function(books){

}
Library.prototype.getAuthors = function(){

}
Library.prototype.getRandomAuthor = function(){

}


// console.log(window.bookshelf);
document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();
})
