function Library(){
  this.bookshelf = new Array();
};


//Additional functions///
// Check to see if book is already in the library.
Library.prototype.isInLibrary = function (oBook){
  for (i=0; i < gLibrary.bookshelf.length; i++)
    if (oBook["title"] === gLibrary.bookshelf[i]["title"]){
      return true;
    }
    return false
};

// Add a book to my Library's bookshelf.
// Return true if it is not already added, false if already added.
Library.prototype.addBook = function (oBook) {
  if (gLibrary.isInLibrary(oBook)) {
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
  for (i=0; i < gLibrary.bookshelf.length; i++){
    if (title === gLibrary.bookshelf[i]["title"]){
      gLibrary.bookshelf.splice(i, 1);
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
  for (i=0; i < gLibrary.bookshelf.length; i++){
    // console.log(authorName);
    // console.log(gLibrary.bookshelf[i]["author"]);
    if (authorName == gLibrary.bookshelf[i]["author"]){
      gLibrary.bookshelf.splice(i, 1);
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
  var randomIndex = Math.floor(Math.random() * Math.floor(gLibrary.bookshelf.length));
  return gLibrary.bookshelf[randomIndex];
}

// Return all books that completely or partially match the string title passed into the function.
// Return array of book objects if you find books with matching titles, empty array if no books are found.
Library.prototype.getBookByTitle = function(title){
    var titleResults = gLibrary.bookshelf.filter(function(titlesSearched) {
        return titlesSearched.title.indexOf(title) > -1;
      });
      console.log(titleResults);
      return false;
    }

// Find all books where the authors name partially or completely matches the authorName argument passed to the function.
// Return array of books if you find books with matching authors, empty array if no books match.
Library.prototype.getBookByAuthor = function(authorName){
  var authorResults = gLibrary.bookshelf.filter(function(titlesSearched) {
      return titlesSearched.title.indexOf(authorName) > -1;
    });
    console.log(authorResults);
    return false;
}

// Takes multiple books, in the form of an array of book objects, and adds the objects to my bookshelf array.
// Return number of books succesfully added, 0 is no books were added.
Library.prototype.addBooks = function(booksArray){
  if (booksArray.length >= 0) {
    gLibrary.bookshelf.concat(booksArray);
    console.log(booksArray.length + " Books Added");
    return true;
  } else if(booksArray !== undefined ){
    console.log("Please enter in a proper array.");
  }
}
Library.prototype.getAuthors = function(){

}
Library.prototype.getRandomAuthor = function(){

}

// console.log(window.bookshelf);
document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();
})
