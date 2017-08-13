// Scripts that handle places. First script is for 'place-visited'
// The other scripts are for individual places

// If you hover over place-visited, then do this:
$('.place-visited').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/periodicals-detail.jpg)"});
	$('.place-visited').addClass('ontop');
    $('.fullscreen').show();
},function(){
	$('.place-visited').removeClass('ontop');
    $('.fullscreen').hide();
});



// If you hover over place then do this:
$('.place#study').hover(function(){
	// Get the correct image
	$('.fullscreen').css({"background-image":"url(assets/images/periodicals-study.jpg)"});
	// Add the ontop class (z-index of 10)
	$(this).addClass('ontop');
	// Show the fullscreen div
    $('.fullscreen').show();
},function(){
	// Remove the ontop class
	$(this).removeClass('ontop');
	// Hide the fullscreen div
    $('.fullscreen').hide();
});







 // Scripts that handle individual inline footnotes

$('.footnote.bound').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("bound has been clicked");
	$('.push.bound').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.current').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("current has been clicked");
	$('.push.current').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.catalogue').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("catalogue has been clicked");
	$('.push.catalogue').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.artwork').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("artwork has been clicked");
	$('.push.artwork').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

