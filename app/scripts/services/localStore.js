angular.module('angularJournalApp')
  .service('localStore', function () {
     this.getBook = function() {
       if (localStorage.getItem("book")!==null) {
         return localStorage.getItem('book');
       } else {
         return null;
       }
     };

     this.setBook = function(book) {
       localStorage.setItem("book", JSON.stringify(book));
     };
  });
