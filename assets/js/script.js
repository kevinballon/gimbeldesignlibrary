// Hide all divs with a class of push, eg. hide all inline footnote images
$('.fullscreen').hide();
$('.push').hide();


$( 'a.footnote' ).click(function(event) {
  event.preventDefault();
});

// .css('background', '#fff');

// .css({
// 	'background': '#fff',
// 	'color': '#ff0',
// 	'width': '120px',
// 	'height': '200px'
// }); 

// .animate({'background': '#ccc'}, 5000)

