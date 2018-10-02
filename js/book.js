function book (title, author, numPages, pubDate){
  this.title = title;
  this.author = author;
  this.numberOfPages = numPages;
  this.publishDate = pubDate;
};

book.prototype.editBook = function(oBook){

};


var testBook = new book("testBook", "Jose", 1, 2018);
  testBook.title = "Hello World";
  // testBook.author = "Jose";
  // testBook.numberOfPages = 1;
  // testBook.publishDate = 2018;


  // document.getElementById("demo").innerHTML = testBook.title;
