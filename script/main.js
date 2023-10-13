// $(document).ready(function() {
//   var scrollTime = 100; // Animation duration in milliseconds
//   var debounceTime = 500; // Time in milliseconds to prevent multiple scroll events in quick succession

//   var isScrolling = false;
//   var timeout;

//   $(window).on('mousewheel', function(event) {
//     event.preventDefault();

//     if (!isScrolling) {
//       isScrolling = true;

//       clearTimeout(timeout);

//       timeout = setTimeout(function() {
//         isScrolling = false;
//       }, debounceTime);

//       var delta = event.originalEvent.deltaY;

//       var scrollDirection = delta > 0 ? 'next' : 'prev';

//       var $currentSection = $('.section.active');
//       var $nextSection;

//       if (scrollDirection === 'next') {
//         $nextSection = $currentSection.next('.section');
//       } else {
//         $nextSection = $currentSection.prev('.section');
//       }

//       if ($nextSection.length) {
//         $('html, body').animate({
//           scrollTop: $nextSection.offset().top
//         }, scrollTime, function() {
//           $currentSection.removeClass('active');
//           $nextSection.addClass('active');
//         });
//       }
//     }
//   });
// });

function showNavbarDropDown(){
  $('.drdn-menu').toggleClass('active');
}
function hideNavbarDropDown(){
  $('.drdn-menu').removeClass('active');
}

function goto(link){
  window.location.replace(link);
}


$(document).ready(function(){
  $('.drdn-menu').mouseleave(function(){ 
    hideNavbarDropDown();
  })
});