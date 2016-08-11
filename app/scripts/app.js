'use strict';

angular.module('angularJournalApp', [])
.directive('ngFlip', function($document) {
  return {
    link: function(scope, elem) {
      $(elem).click(function() {
        var p = $(this).closest(".page");
        p.toggleClass('flipped');
        var z = p.css("z-index");
        z = -z;
        p.css("z-index", z);
      });
    }
  }
})
.directive('ngFind', function($document) {
  return {
    link: function(scope, elem) {

      $(elem).click(function() {
        var id = parseInt($(this).attr('id'));
        var current = parseInt($('.page:not(.flipped):first').attr('id'));

        if (current == id || current-1 ==id) { //On page
        } else if (current > id){ //page back
          $(".page.flipped").each(function(index) {
            if ((index+1) * 2 > id) {
                $(this).toggleClass('flipped');
                var z = $(this).css("z-index");
                z = -z;
                $(this).css("z-index", z);
            }
          });
        } else if (current <= id){ //page forward
          $(".page:not(.flipped)").each(function() {
            var id2 = parseInt($(this).attr('id'));
            if (id2 < id) {
                $(this).toggleClass('flipped');
                var z = $(this).css("z-index");
                z = -z;
                $(this).css("z-index", z);
            }
          });
        } else { //no right-side page
          current = $('.page.flipped:last').attr('id') + 1;
          $(".page.flipped").each(function(index) {
            if ((index+1) * 2 > id) {
                $(this).toggleClass('flipped');
                var z = $(this).css("z-index");
                z = -z;
                $(this).css("z-index", z);
            }
          });
        }

      });
    }
  }
});
