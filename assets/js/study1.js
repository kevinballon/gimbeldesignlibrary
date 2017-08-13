// Scripts that handle places. First script is for 'place-visited'
// The other scripts are for individual places

// If you hover over place-visited, then do this:
$('.place-visited').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/study1-detail.jpg)"});
	$('.place-visited').addClass('ontop');
    $('.fullscreen').show();
},function(){
	$('.place-visited').removeClass('ontop');
    $('.fullscreen').hide();
});



// If you hover over place then do this:
$('.place#stacks').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/study1-stacks.jpg)"});
	$(this).addClass('ontop');
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});

// If you hover over place then do this:
$('.place#research').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/study1-research.jpg)"});
	$(this).addClass('ontop');
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});

// If you hover over place then do this:
$('.place#entrance').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/study1-entrance.jpg)"});
	$(this).addClass('ontop');
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});










 // Scripts that handle individual inline footnotes

$('.footnote.printer').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("printer has been clicked");
	$('.push.printer').toggle();
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
