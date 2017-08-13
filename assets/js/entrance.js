// Scripts that handle places. First script is for 'place-visited'
// The other scripts are for individual places

// If you hover over place-visited, then do this:
$('.place-visited').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/entrance-detail.jpg)"});
	$('.place-visited').addClass('ontop');
    $('.fullscreen').show();
},function(){
	$('.place-visited').removeClass('ontop');
    $('.fullscreen').hide();
});



// If you hover over place then do this:
$('.place#circulation').hover(function(){
	// Add the ontop class (z-index of 10)
	$(this).addClass('ontop');
	// Get the correct image
	$('.fullscreen').css({"background-image":"url(assets/images/entrance-circulation.jpg)"});
	// Show the fullscreen div
    $('.fullscreen').show();
},function(){
	// Remove the ontop class
	$(this).removeClass('ontop');
	// Hide the fullscreen div
    $('.fullscreen').hide();
});


// If you hover over place then do this:
$('.place#research').hover(function(){
	$(this).addClass('ontop');
	$('.fullscreen').css({"background-image":"url(assets/images/entrance-research.jpg)"});
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});

// If you hover over place then do this:
$('.place#quiet').hover(function(){
	$(this).addClass('ontop');
	$('.fullscreen').css({"background-image":"url(assets/images/entrance-quiet.jpg)"});
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});

// If you hover over place then do this:
$('.place#quiet').hover(function(){
	$(this).addClass('ontop');
	$('.fullscreen').css({"background-image":"url(assets/images/entrance-quiet.jpg)"});
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});



 // Scripts that handle individual inline footnotes

$('.footnote.gimbel').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("Gimbel has been clicked");
	$('.push.gimbel').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.rules').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("rules  has been clicked");
	$('.push.rules').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.reference').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("reference has been clicked");
	$('.push.reference').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

