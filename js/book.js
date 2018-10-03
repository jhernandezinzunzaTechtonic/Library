function book (title, author, numPages, pubDate){
  this.title = title;
  this.author = author;
  this.numberOfPages = numPages;
  this.publishDate = pubDate;
};

book.prototype.editBook = function(oBook){

};

var testBook1 = new book("testBook1", "Jose", 1, 2018);
var testBook2 = new book("testBook2", "Charles", 1, 2019);
var testBook3 = new book("testBook3", "John", 10, 2012);
var testBook4 = new book("testBook4", "Eddie", 14, 2015);

var testBookArray = [
  {testBook1},
  {testBook2},
  {testBook3},
  {testBook4}];

document.getElementById("demo").innerHTML = "Current Books:" + "<br/>";
document.getElementById("demo").innerHTML += testBook1.title + "<br/>";
document.getElementById("demo").innerHTML += testBook2.title + "</br>";
document.getElementById("demo").innerHTML += testBook3.title + "</br>";
