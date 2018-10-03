function Library(){
  this.bookshelf = new Array();
};


//Additional functions///
// Check to see if book is already in the library.
Library.prototype.isBookInLibrary = function (oBook){
  for (i=0; i < this.bookshelf.length; i++)
    if (oBook.title === this.bookshelf[i].title){
      return true
    }
    return false
};

// Add a book to my Library's bookshelf.
// Return true if it is not already added, false if already added.
Library.prototype.addBook = function (oBook) {
  if (this.isBookInLibrary(oBook)) {
    console.log("Sorry, this book is already in our library");
    return false;
  } else if (typeof oBook !== "object") {
    console.log("Please enter in a book object");
    return false;
  } else {
    this.bookshelf.push(oBook);
    console.log("You succesfully added a new Book!");
    return true;
    }
};

// Remove a book from the library using its getBookByTitle
//  Return true if book is removed, false if no books match.
Library.prototype.removeBookByTitle = function (title){
  for (i=0; i < this.bookshelf.length; i++){
    if (title === this.bookshelf[i]["title"]){
      this.bookshelf.splice(i, 1);
      console.log("Book " + "\""+title+"\"" + " successfully removed.");
      return true;
    } else {
      console.log("There is no book " + "\""+title+"\"" + " in the library");
      return false
    }
  }
}

// Remove specific book or books by a certain author.
// Return true if book is removed and false if no books match.
Library.prototype.removeBookByAuthor = function(authorName){
  for (i=0; i < this.bookshelf.length; i++){
    // console.log(authorName);
    // console.log(this.bookshelf[i]["author"]);
    if (authorName == this.bookshelf[i]["author"]){
      this.bookshelf.splice(i, 1);
      console.log("Books by " + "\""+authorName+"\"" + " successfully removed.");
      return true;
    }
  }
  console.log("There is no book by " + "\""+authorName+"\"" + " in the library");
  return false;
}

// Return a random book object from the bookshelf array.
// Return a book object if you find a book, null if there are no books.
Library.prototype.getRandomBook = function () {
  var randomIndex = Math.floor(Math.random() * Math.floor(this.bookshelf.length));
  return this.bookshelf[randomIndex];
}

// Return all books that completely or partially match the string title passed into the function.
// Return array of book objects if you find books with matching titles, empty array if no books are found.
Library.prototype.getBookByTitle = function(title){
    var titleResults = this.bookshelf.filter(function(titlesSearched) {
        return titlesSearched.title.indexOf(title) > -1;
      });
      console.log(titleResults);
      return false;
    }

// Find all books where the authors name partially or completely matches the authorName argument passed to the function.
// Return array of books if you find books with matching authors, empty array if no books match.
Library.prototype.getBookByAuthor = function(authorName){
  var authorResults = this.bookshelf.filter(function(authorsSearched) {
      return authorsSearched.author.indexOf(authorName) > -1;
    });
    console.log(authorResults);
    return false;
}

// Takes multiple books, in the form of an array of book objects, and adds the objects to my bookshelf array.
// Return number of books succesfully added, 0 is no books were added.
Library.prototype.addBooks = function(booksArray){
  if (booksArray.length >= 0) {
    gLibrary.bookshelf = this.bookshelf.concat(booksArray);
    console.log(booksArray.length + " Books Succesfully Added");
    return true;
  }
    console.log("Please enter in a proper array.");
  }

//Find the distinct author's name from all books in your library.
//Return array of strings of the names of all distinct authors, empty array if no books exist or no authors exist.
Library.prototype.getAuthors = function(){
  //create list of all authors.
  var allAuthors = [];
  for (i=0; i < this.bookshelf.length; i++) {
    allAuthors[i] = this.bookshelf[i].author;
  }
  //make sure there are only unique authors, and display them.
  var uniqueResults = allAuthors.filter(function(author, pos) {
    console.log(pos);
      return allAuthors.indexOf(author) == pos;
    });
        // console.log(uniqueResults);
}

// Retrieves a random author name from your books collection.
// Return string author name, null if no book exists.
Library.prototype.getRandomAuthor = function(){
  var randomIndex = Math.floor(Math.random() * Math.floor(this.bookshelf.length));

  if (this.bookshelf.length === 0) {
    return null
  }
  return this.bookshelf[randomIndex].author;
}

// console.log(window.bookshelf);
document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();
})



// TESTING GROUND //
var testBook1 = new book("testBook1", "Jose", 1, 2018);
var testBook2 = new book("testBook2", "Charles", 1, 2019);
var testBook3 = new book("testBook3", "John", 10, 2012);
var testBook4 = new book("testBook4", "Eddie", 14, 2015);
var testBook5 = new book("testBook5", "Eddie", 14, 2015);

var testBookArray =
  [
    testBook1,
    testBook2,
    testBook3,
    testBook4,
    testBook5
  ];

document.getElementById("demo").innerHTML = "Current Books:" + "<br/>";
document.getElementById("demo").innerHTML += testBook1.title + "<br/>";
document.getElementById("demo").innerHTML += testBook2.title + "</br>";
document.getElementById("demo").innerHTML += testBook3.title + "</br>";
document.getElementById("demo").innerHTML += testBook4.title + "</br>";
document.getElementById("demo").innerHTML += testBook5.title + "</br>";
