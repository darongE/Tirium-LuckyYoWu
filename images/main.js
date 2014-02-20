//////////////////////////////////////////////////////
// 						vannsKang's blog ver. 0.5a						//
//		 						author: vannsKang									//
//					facebook: fb.com/vanns.Kang 						//
//////////////////////////////////////////////////////

/////////////////////////////////* imgCaptionHandler *////////////////////////////////
function imgHandler () {	
	var $contentImage = $('div.imageblock>span>img');
	$contentImage.each(function () {			
		var $height = $(this).height();
		var $cap = $(this).parent().next();
		// imageCaptionHandler
		$cap.attr('style', 'bottom:'+$height+'px');
	});
};
/////////////////////////////////////* fluidvids *////////////////////////////////////
function fluidvidsPlayer () {
  /* Grab all iframes on the page or return */
  var iframes = document.getElementsByTagName( 'iframe' );
  /* Loop through the iframes array  */
  for ( var i = 0; i < iframes.length; i++ ) {      
    var iframe = iframes[i],
    /* RegExp, extend this if you need more players */
    players = /www.youtube.com|player.vimeo.com/;
    /* If the RegExp pattern exists within the current iframe */
    if ( iframe.src.search( players ) > 0 ) {
      /* Calculate the video ratio based on the iframe's w/h dimensions  */
      var videoRatio        = ( iframe.height / iframe.width ) * 100;
      /* Replace the iframe's dimensions and position the iframe absolute, this is the trick to emulate the video ratio*/
      iframe.style.position = 'absolute';
      iframe.style.top      = '0';
      iframe.style.left     = '0';
      iframe.width          = '100%';
      iframe.height         = '100%';      
      /* Wrap the iframe in a new <div> which uses a dynamically fetched padding-top property based on the video's w/h dimensions*/
      var wrap              = document.createElement( 'div' );
      wrap.className        = 'fluid-vids';
      wrap.style.width      = '100%';
      wrap.style.position   = 'relative';
      wrap.style.paddingTop = videoRatio + '%';      
      /* Add the iframe inside our newly created <div> */
      var iframeParent      = iframe.parentNode;
      iframeParent.insertBefore( wrap, iframe );
      wrap.appendChild( iframe );
    };
  };	
};
$(document).ready(function () {
	'use strict';
	$('blockquote').addClass('webView');
	// side bar plugin control
	$("#sideMenu").mmenu({
		header: true,						
		slidingSubmenus: false
	}, {}).trigger('#sideNavBarToggle');
	// side bar component
	$('nav>ul>li, nav>ul>li>ul>li').addClass('mm-opened');	
	$('nav>ul').prepend('<li><a href="http://vannskang.tistory.com/"><img src="http://cfs.tistory.com/custom/blog/164/1640147/skin/images/cat.png?=1850073090"/>&nbsp;&nbsp;&nbsp;Home</a></li><li><a href="http://vannskang.tistory.com/notice/10"><img class="img-circle navAvatar" src="http://cfs.tistory.com/custom/blog/164/1640147/skin/images/avatar.jpg?=598352219">&nbsp;&nbsp;강수명 Vanns Kang</a></li>');
	$('.mm-list').addClass('webNav');			
	//add default avatar to guest comment & handling mobileView&webView
	$('.rp_general>div.commentControl, .rp_secret>div.commentControl').prepend('<span><img src="http://cfs.tistory.com/custom/blog/164/1640147/skin/images/avatarDefault.jpg?=443587928" class="img-circle commentThumbnail"></span>');	
	// codeHighlighter
	hljs.initHighlightingOnLoad();
	// fluidvidsPlayer
	fluidvidsPlayer();
	// scrollUpEvent
	$.scrollUp({      
    scrollSpeed: 1500, // Speed back to top (ms)
    easingType: 'easeOutQuint', // Scroll to top easing (see http://easings.net/)
    scrollImg: true, // Set true to use image
	});
	// Destroy scollUp object
	$('.destroy').click(function(){
		$.scrollUp.destroy();
	})
	// sharebutton
	$('.shareButton').socialShare({
		social: 'facebook,twitter,google,linkedin,tumblr,myspace,pinterest,windows,yahoo',
		blur: true		
	});
});
$(window).on('load', function () {
	imgHandler();
});