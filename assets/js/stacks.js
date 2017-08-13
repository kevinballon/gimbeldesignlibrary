// Scripts that handle places. First script is for 'place-visited'
// The other scripts are for individual places

// If you hover over place-visited, then do this:
$('.place-visited').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/stacks-detail.jpg)"});
	$('.place-visited').addClass('ontop');
    $('.fullscreen').show();
},function(){
	$('.place-visited').removeClass('ontop');
    $('.fullscreen').hide();
});



// If you hover over place then do this:
$('.place#quiet').hover(function(){
	// Get the correct image
	$('.fullscreen').css({"background-image":"url(assets/images/stacks-quiet.jpg)"});
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


// If you hover over place then do this:
$('.place#circulation').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/stacks-circulation.jpg)"});
	$(this).addClass('ontop');
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});

// If you hover over place then do this:
$('.place#research').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/stacks-research.jpg)"});
	$(this).addClass('ontop');
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});










 // Scripts that handle individual inline footnotes

$('.footnote.loccs').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("loccs has been clicked");
	$('.push.loccs').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.call').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("call has been clicked");
	$('.push.call').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.stools').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("stools has been clicked");
	$('.push.stools').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

