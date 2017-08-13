// Scripts that handle places. First script is for 'place-visited'
// The other scripts are for individual places

// If you hover over place-visited, then do this:
$('.place-visited').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/research-detail.jpg)"});
	$('.place-visited').addClass('ontop');
    $('.fullscreen').show();
},function(){
	$('.place-visited').removeClass('ontop');
    $('.fullscreen').hide();
});



// If you hover over place then do this:
$('.place#study').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/research-study.jpg)"});
	$(this).addClass('ontop');
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});

// If you hover over place then do this:
$('.place#stacks').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/research-stacks.jpg)"});
	$(this).addClass('ontop');
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});










 // Scripts that handle individual inline footnotes

$('.footnote.catalogue').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("catalogue has been clicked");
	$('.push.catalogue').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.print').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("print has been clicked");
	$('.push.print').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.guides').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("guides has been clicked");
	$('.push.guides').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

