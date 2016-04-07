/*$(".button-collapse").sideNav();
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
$(document).ready(function(){
    $('.parallax').parallax();
});
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#f0f0f0');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
       }
   });
    }
});
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});
$(".button-collapse").sideNav();
$(document).ready(function(){
    $('.paralla').parallax();
});
$('#top-nav').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 1200
});
if (!window.jQuery) { document.write('<script src="bin/jquery-2.1.1.min.js"></script>'); }

// Show sideNav
$('.button-collapse').sideNav('show');
// Hide sideNav
$('.button-collapse').sideNav('hide');
$('.button-collapse').sideNav({
  menuWidth: 300, // Default is 240
  edge: 'right', // Choose the horizontal origin
  closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
}
);*/
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
    // Show sideNav
  $('.button-collapse').sideNav('show');
  // Hide sideNav
  $('.button-collapse').sideNav('hide');