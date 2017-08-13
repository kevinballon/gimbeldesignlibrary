// Scripts that handle places. First script is for 'place-visited'
// The other scripts are for individual places

// If you hover over place-visited, then do this:
$('.place-visited').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/circulation-detail.jpg)"});
	$('.place-visited').addClass('ontop');
    $('.fullscreen').show();
},function(){
	$('.place-visited').removeClass('ontop');
    $('.fullscreen').hide();
});



// If you hover over place then do this:
$('.place#stacks').hover(function(){
	// Get the correct image
	$('.fullscreen').css({"background-image":"url(assets/images/circulation-stacks.jpg)"});
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
$('.place#quiet').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/circulation-quiet.jpg)"});
	$(this).addClass('ontop');
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});

// If you hover over place then do this:
$('.place#study').hover(function(){
	$(this).addClass('ontop');
	$('.fullscreen').css({"background-image":"url(assets/images/circulation-study.jpg)"});
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});










 // Scripts that handle individual inline footnotes

$('.footnote.staff').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("Staff has been clicked");
	$('.push.staff').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.adam').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("Adam Gimbel has been clicked");
	$('.push.adam').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.sophie').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("Sophie Gimbel has been clicked");
	$('.push.sophie').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

