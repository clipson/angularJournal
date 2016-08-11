'use strict';

angular
.module('angularJournalApp')
.controller('MainCtrl',['localStore', function (localStore) {
  var main = this;

  var Book = function(obj) {
    this.pages = [];
    if(typeof obj !== "undefined") {
      for (var p in obj.pages) {
        this.pages.push(new Page(obj.pages[p].number, obj.pages[p]));
      }
    }
  }

  var Page = function(num, p) {
    this.number = num;
    if(typeof p !== "undefined") {
      this.front = p.front;
      this.back = p.back;
    } else {
      this.front = {
        content: null
      }
      this.back = {
        content: null
      }
    }
  }

  Book.prototype.addPage = function() {
    this.pages.push(new Page(this.pages.length + 1));
    main.saveBook();
  }
  Book.prototype.removePage = function() {
    this.pages.pop();
    main.saveBook();
  }

  main.saveBook = function() {
    localStore.setBook(main.book);
  }

  Page.prototype.edit = function(side, content) {
    if (side=='front') {
      this.front.content = content;
    } else {
      this.back.content= content;
    }
    main.saveBook();
  }

  var data = localStore.getBook();
  if (data === null) {
    main.book = new Book();
  } else {
    main.book = new Book(JSON.parse(data));
  }

}]);
