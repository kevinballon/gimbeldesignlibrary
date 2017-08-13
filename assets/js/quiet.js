// Scripts that handle places. First script is for 'place-visited'
// The other scripts are for individual places

// If you hover over place-visited, then do this:
$('.place-visited').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/quiet-detail.jpg)"});
	$('.place-visited').addClass('ontop');
    $('.fullscreen').show();
},function(){
	$('.place-visited').removeClass('ontop');
    $('.fullscreen').hide();
});

// If you hover over place then do this:
$('.place#stacks').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/quiet-stacks.jpg)"});
	$(this).addClass('ontop');
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});

// If you hover over place then do this:
$('.place#circulation').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/quiet-circulation.jpg)"});
	$(this).addClass('ontop');
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});










 // Scripts that handle individual inline footnotes

$('.footnote.stations').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("stations has been clicked");
	$('.push.stations').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.scanners').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("scanners has been clicked");
	$('.push.scanners').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.printer').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("printer has been clicked");
	$('.push.printer').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.lounge').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("lounge has been clicked");
	$('.push.lounge').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.view').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("view has been clicked");
	$('.push.view').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

