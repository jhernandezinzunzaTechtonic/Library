function book (title, author, numPages, pubDate){
  this.title = title;
  this.author = author;
  this.numberOfPages = numPages;
  this.publishDate = pubDate;
};

book.prototype.editBook = function(oBook){

};

var testBook = new book("testBook", "Jose", 1, 2018);
var testBook2 = new book("testBook2", "Charles", 1, 2019);

document.getElementById("demo").innerHTML = "Current Books:" + "<br/>";
document.getElementById("demo").innerHTML += testBook.title + "<br/>";
document.getElementById("demo").innerHTML += testBook2.title + "</br>";
