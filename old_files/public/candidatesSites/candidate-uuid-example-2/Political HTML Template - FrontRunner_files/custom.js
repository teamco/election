"use strict";

jQuery(document).ready(function($){

	// Show/hide video and scroll to
	// ------------------------------------------------------------------------
	$(".video-list").on("click", ".video-thumbnail", function(){

		var videoIndex = $(this).data('video-index'),
		    element = $(".video-element-"+videoIndex),
		    wrapper = element.closest('.video-wrapper');

		// Mark the active container
		$('.video-element').removeClass('open');
		element.addClass('open');

		// Show playerf
		wrapper.addClass('show');
		wrapper.css({ overflow: 'hidden'});

		// Top offset
		var offset = 20;
		if($("body").hasClass("videos")){
			offset = 80;
		}
		// Scroll to view
		setTimeout((function() {
			var elementTo = $('.video-list').first();
			$('html, body').animate({
				scrollTop: elementTo.offset().top - offset
			});
		}), 150);
	});

	// Close video button
	$(".video-wrapper .close-button").on("click", function(){
		$(this).closest('.video-wrapper').removeClass('show');
	});


	// Ajax Load More Videos
	$("#more_videos").on("click", function(e) {

		e.preventDefault();

		var $moreBtn = $(this),
			videoPaged = $moreBtn.data('paged') + 1, // current page
			maxPaged = $moreBtn.data('max'); // max pages

		$moreBtn.blur();

		if ( videoPaged <= maxPaged ) {

			// Query
			var videoRequest = $.ajax({
				url: ajax_url,
				method: "POST",
				data: { paged : videoPaged },
				dataType: "text"
			});

			// Success
			videoRequest.done(function( videos ) {

				var videoObj = jQuery.parseJSON(videos);
				var next = videoObj[videoPaged];

				if (typeof next === 'object') {
					// add the videos
					$.each(next, function(key, value) {
						// Thumbnail
						var thumb = $('<div class="col-md-4 col-sm-6"><article class="video-entry"><div class="video-loading"></div><div class="thumbnail-wrapper video-thumbnail video-paged-'+videoPaged+'" id="thumb-'+value.video_id+'" data-video-index="'+value.video_id+'" style="background-image: url('+value.video_thumb+'); opacity: 0;"><i class="fa fa-play-circle"></i><div class="overlay"></div></div><h3 class="video-title">'+value.video_title+'</h3><p class="video-desc">'+value.video_desc+'</p></article></div>');
						$( "#player_list" ).append( thumb );

						// Player
						var player = $('<div class="video-element video-element-'+value.video_id+'"><div id="'+value.video_id+'" class="video-youtube"></div></div>');
						$( "#player_container" ).append( player );

						loadYTPlayer();
					});

					if ( videoPaged >= maxPaged ) {
						// Hide the more button
						$moreBtn.animate({
							'opacity': 0
						}, 800, function() {
							$moreBtn.slideUp(200);
						});
					} else {
						// Update paged variable
						$moreBtn.data('paged', videoPaged);
					}
				}
			});

			// Error
			videoRequest.fail(function( jqXHR, textStatus ) {
				console.log( "Request failed: " + textStatus );
			});
		}
	});


	// Events Timeline
	// ------------------------------------------------------------------------

	// Ajax Load More Videos
	$("#more_events").on("click", function(e) {

		e.preventDefault();

		var $moreBtn = $(this),
			eventPaged = $moreBtn.data('paged') + 1, // current page
			maxPaged = $moreBtn.data('max'); // max pages

		$moreBtn.blur();

		if ( eventPaged <= maxPaged ) {

			// Query
			var eventRequest = $.ajax({
				url: ajax_url,
				method: "POST",
				data: { paged : eventPaged },
				dataType: "text"
			});

			// Success
			eventRequest.done(function( events ) {

				var eventObj = jQuery.parseJSON(events);
				var next = eventObj[eventPaged];

				if (typeof next === 'object') {
					// add the events
					$.each(next, function(key, value) {

						var eventCount = $moreBtn.data('count') + 1; // event count
						$moreBtn.data('count', eventCount);

						// alternating class
						var alt_class = 'inverted';
						if (eventCount%2 == 0) {
							alt_class = 'standard';
						}

						// Event
						var entry = $('<li class="timeline-date event-paged-'+eventPaged+'"><div class="date">'+value.event_day+'</div><div class="month">'+value.event_month+'</div></li><li class="timeline-'+alt_class+'"><div class="circle"></div><div class="tl-panel"><div class="tl-heading">'+value.event_title+'</div><div class="tl-body"><p>'+value.event_desc+'</p><div class="time"><i class="fa fa-clock-o"></i> '+value.event_time_start+' '+value.event_time_start_period+' - '+value.event_time_end+' '+value.event_time_end_period+'</div><div class="location"><i class="fa fa-map-marker"></i> '+value.event_loc+'</div></div></div><div class="date-title">'+value.event_time_start+' <span>'+value.event_time_start_period+'</span></div></li>');
						$( "#events_list" ).append( entry );
					});

					if ( eventPaged >= maxPaged ) {
						// Fade out the time "line"
						$( "#events_list" ).find('.end-of-line').fadeIn(800);
						// Hide the more button
						$moreBtn.animate({
							'opacity': 0
						}, 800, function() {
							$moreBtn.slideUp(200);
						});
					} else {
						// Update paged variable
						$moreBtn.data('paged', eventPaged);
					}
				}
			});

			// Error
			eventRequest.fail(function( jqXHR, textStatus ) {
				console.log( "Request failed: " + textStatus );
			});
		}
	});


	// Home page default-menu
	// ------------------------------------------------------------------------
	var win_Width = $(window).width();

	$(window).on("scroll", function(){
		// Ignore on small screens
		if (win_Width >= 1200) {
			// If the wrapper has 'do-transition' class...
			if ($('.navbar-wrapper').hasClass('do-transition')) {
				var $nav = $("#nav-main");
				if($(this).scrollTop() >= 905) {
					// Show horizontal nav
					if ($nav.hasClass('navbar-vertical')) {
						$nav.stop( true, true )
							.css('opacity', 0)
							.removeClass('navbar-vertical')
							.addClass('navbar-fixed-top')
							.animate({ 'opacity': 1 }, 600 );
					}
				} else {
					// Show vertical nav
					if ($nav.hasClass('navbar-fixed-top') && !$nav.hasClass('fading')) {
						$nav.stop( true, true )
							.addClass('fading')
							.animate({ 'opacity': 0 }, 200, function(){
								$nav.removeClass('navbar-fixed-top')
								.addClass('navbar-vertical')
								.animate({ 'opacity': 1 }, 200, function(){
									$nav.removeClass('fading');
								});
							});
					}
				}
			}
		}
	});
	// Trigger manually once after loading
	$(window).trigger('scroll');

	// Update width var on resize
	$(window).resize(function() {
		win_Width = $(window).width();
	});

	// Page page sticky navbar
	// ------------------------------------------------------------------------
	if ( $('.navbar-sticky').length ) {

		var stickyElement = $('.navbar-sticky');
		var navbarTop = stickyElement.offset().top;

		$(window).scroll(function () {
			var y = $(this).scrollTop();
			if (y >= navbarTop && !stickyElement.hasClass('navbar-fixed-top')){
				stickyElement.addClass('navbar-fixed-top');
			}
			else if(y < navbarTop && stickyElement.hasClass('navbar-fixed-top')){
				stickyElement.removeClass('navbar-fixed-top');
			}

		});

		// adjust for orientation change
		$(window).resize(function () {
			stickyElement.removeClass('navbar-fixed-top');
			navbarTop = stickyElement.offset().top;
			$(window).trigger('scroll');
		});
	}


	// Home page sub menu
	// ------------------------------------------------------------------------

	$(".sub-menu").on("mouseover", function(){
		$(this).parent().addClass("open");
	});
	$(".sub-menu").on("mouseout", function(){
		$(this).parent().removeClass("open");
	});


	// Donate page, donate widget click event
	// ------------------------------------------------------------------------
	$(".box label").on("click", function(){
		if($(this).hasClass("on")) {
			return;
		}
	$(".box label").removeClass("on");
		$(this).addClass("on");
	});


	// owl carousel
	// ------------------------------------------------------------------------
	if ( $('.featured-carousel').length ) {
		$(".featured-carousel").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			autoplayHoverPause: true,
			autoplayTimeout: 3800,
			autoplaySpeed: 800,
			navSpeed: 500,
			dots: false,
			nav: true,
			navText: [
				'<i class="fa fa-angle-left"></i>',
				'<i class="fa fa-angle-right"></i>'
			]
		});
	}


	// Responsive videos
	// ------------------------------------------------------------------------
	if (typeof $().fitVids == 'function') {
		$(".container").fitVids({ ignore: '.video-wrapper, .video-element'});
	}


	// Style helpers
	// ------------------------------------------------------------------------
	if ($('#footer.with-overlap').length) {
		$('#footer.with-overlap').prev().addClass('before-footer-overlap');
	}

	// Navbar Hover/Click Responsive Behavior
	// ------------------------------------------------------------------------
	var collapseSize = 768;

	// hover sub-menu items
	$('.navbar-nav a').click( function(e) {
		var $this = $(e.target);
		var href = $this.attr('href'); // Link URL

		// Check link value
		if (href === undefined || !href.length || href === '#' || href === 'javascript:;') {
			href = false;
		}
		// Link behavior
		if ($this.hasClass('dropdown-toggle')) {
			// Parent menu items
			if ($(window).width() > collapseSize) {
				if (href) {
					// large screens, follow the parent menu link when clicked
					if (e.which !== 2) {
						window.location.href = href;
					}
				}
			 } else if ( $this.parent().hasClass('open') && href !== false) {
				// small screens, 1st tap opens sub-menu & 2nd tap follows link
				$(document).trigger('collapse-menus');
				window.location.href = href;
			}
		} else {
			// All other menu items, close menu on click
			$(document).trigger('collapse-menus');
		}
	});
	// Keep parent menus open on sub-menu expand
	$(document).on('show.bs.dropdown', function(obj) {
		if ($(window).width() <= collapseSize) {
			$(obj.target).parents('.show-on-hover').addClass('open');
		}
	});
	$('.navbar a:not(.dropdown-toggle)').click( function(e) {

		var $this = $(e.target);
		var href = $this.attr('href'); // Link URL

		// Check link value
		if (href === undefined || !href.length || href === '#' || href === 'javascript:;') {
			href = false;
		}
		// Link behavior
		if ($(window).width() > collapseSize) {
			if (href) {
				// large screens, follow the parent menu link when clicked
				if (e.which !== 2) {
					window.location.href = href;
				}
			}
		 } else if ( $this.parent().hasClass('open') && href !== false) {
			// small screens, 1st tap opens sub-menu & 2nd tap follows link
			$(document).trigger('collapse-menus');
			window.location.href = href;
		}
	});
	// Close all menus
	$(document).on('collapse-menus', function () {
		$('.collapse.in').removeClass('in').children().removeClass('open');
	});
	// Hover styling helpers
	$('.navbar-nav > li.show-on-hover').hover(function() {
		if ($(window).width() > collapseSize) {
			$(this).addClass('open');
		}
	}, function() {
		if ($(window).width() > collapseSize) {
			$(this).removeClass('open');
		}
	});


}); // END - jQuery(document).ready()


// YouTube in Video Sections
// ------------------------------------------------------------------------
var players = {};

// Initial trigger for loading videos (called by required script: https://www.youtube.com/iframe_api)
function onYouTubeIframeAPIReady() {
	loadYTPlayer(); // load the videos
}

// Load videos
function loadYTPlayer() {
	jQuery(".video-youtube").each( function() {

		// videoID = jQuery(this).children('div').attr('id') || 0;
		var $this = jQuery(this);
		var videoID = $this.attr('id') || 0;
		$this.removeClass('video-youtube');

		if (videoID && typeof(videoID) !== 'undefined') {

			players[videoID] = new YT.Player(videoID, {
				videoId: videoID,
				playerVars: {
					showinfo: 0,
					rel: 0,
					wmode: 'opaque',
				},
				events: {
					'onReady': onYTPlayerReady,
				}
			});
		}
	});

	// Close button
	jQuery(".video-wrapper .close-button").on("click", function(){
		stopYTVideo(players, false); // Stop all playing videos
	});
}

// Triggered when video player is ready. Used to set events.
function onYTPlayerReady(event) {

	// Current video
	var videoID = event.target.f.id;
	var $video = jQuery('#thumb-'+videoID);

	// Thumbnail click behaviors
	$video.on('click', function() {
		// Stop all playing videos
		stopYTVideo(players, false);

		// Play the video
		var player = event.target;
		if (player && typeof(player.playVideo) !== 'undefined') {
			setTimeout( function() { player.playVideo(); }, 900 );// 0.9 second delay
		}
	});

	// If hidden, show the thumbnail
	if ($video.css('opacity') == 0) {
		$video.animate({'opacity':1},200);
	}
}

 // Stop playing action
function stopYTVideo(players, video) {
	// Loop through and stop all videos
	for (var key in players) {
	   if (players.hasOwnProperty(key)) {
		   var player = players[key] || 0;
			if (player && typeof(player.stopVideo) !== 'undefined') {
				player.stopVideo();
			}
		}
	}
}