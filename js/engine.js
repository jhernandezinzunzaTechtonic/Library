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

Library.prototype.removeBookByAuthor = function(authorName){
  for (i=0; i < gLibrary.bookshelf.length; i++){
    if (authorName === gLibrary.bookshelf[i]["author"]){
      gLibrary.bookshelf.splice(i, 1);
      console.log("Books by " + "\""+authorName+"\"" + " successfully removed.");
      return true;
    } else {
      console.log("There is no book by " + "\""+authorName+"\"" + " in the library");
      return false
    }
  }
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
