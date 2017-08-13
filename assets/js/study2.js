// Scripts that handle places. First script is for 'place-visited'
// The other scripts are for individual places

// If you hover over place-visited, then do this:
$('.place-visited').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/study2-detail.jpg)"});
	$('.place-visited').addClass('ontop');
    $('.fullscreen').show();
},function(){
	$('.place-visited').removeClass('ontop');
    $('.fullscreen').hide();
});



// If you hover over place then do this:
$('.place#circulation').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/study2-circulation.jpg)"});
	$(this).addClass('ontop');
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});

// IMPORTANT
// IMPORTANT
// IMPORTANT
// IMPORTANT
// IMPORTANT
// IMPORTANT
// IMPORTANT
// IMPORTANT
// If you hover over place then do this:
$('.place#study').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/DNE.jpg)"});
	$(this).addClass('ontop');
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});

// IMPORTANT
// IMPORTANT
// IMPORTANT
// IMPORTANT
// IMPORTANT
// IMPORTANT
// IMPORTANT
// IMPORTANT
// If you hover over place then do this:
$('.place#periodicals').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/study2-periodicals.jpg)"});
	$(this).addClass('ontop');
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});

// If you hover over place then do this:
$('.place#entrance').hover(function(){
	$('.fullscreen').css({"background-image":"url(assets/images/DNE.jpg)"});
	$(this).addClass('ontop');
    $('.fullscreen').show();
},function(){
	$(this).removeClass('ontop');
    $('.fullscreen').hide();
});










 // Scripts that handle individual inline footnotes

$('.footnote.view').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("view has been clicked");
	$('.push.view').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.scan').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("scan has been clicked");
	$('.push.scan').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.fountain').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("fountain has been clicked");
	$('.push.fountain').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

$('.footnote.emergency').click(function() {
	// Make push visible. Make the container visible.
	// Change to toggle for quick reveal.
	console.log("emergency has been clicked");
	$('.push.emergency').toggle();
	// Display the space. Push the following text right.
	// Add class clicked to push. Invert text colours.
	$(this).toggleClass('clicked');
})

