//////////////////////////////////////////////////////
// 						vannsKang's blog ver. 0.5a						//
//		 						author: vannsKang									//
//					facebook: fb.com/vanns.Kang 						//
//////////////////////////////////////////////////////
jQuery(window).load(function() { // detect window browser size when resize//
	var $windowWidth = $(window).width();
	console.log('$windowWidthout:',$windowWidth)
	var $webView = $('.webView');
	var $mobileView = $('.mobileView');
	var $webTitle = $('.webTitle');
	var $mobileTitle = $('.mobileTitle');
	var $webBody = $('.webBody');
	var $mobileBody = $('.mobileBody');
	var $webComment = $('.webComment');
	var $mobileComment = $('.mobileComment');
	var $adminCommentName = $('.commentControl>span.name>a');
	var $guestCommentName = $('.commentControl>span.name');
	var $adminCommentThumbnail = $('img[alt="BlogIcon"]');
	var $guestCommentThumbnail = $('.commentThumbnail');
	var $commentDelete = $('.modify');
	var $commentReply = $('.write');
	var $commentDeleteIcon = $('.fa-trash-o');
	var $commentReplyIcon = $('.fa-reply');
	var $commentDate = $('.address');
	var $label = $('label');
	var $textField = $('.textField');
	var $textarea = $('textarea');
	var $commentButton = $('.btnComment');
	var $pagination = $('.pageNav');
	var $webNav = $('.webNav');
	var $mobileNav = $('.mobileNav');
	var $mobileCaption = $('.cap1');
	var $webMoreLessFold = $('.moreless_fold>span');
	var $webMoreLessTop = $('.moreless_top>span');
	var $webMoreLessBottom = $('.moreless_bottom>span');
	// var $p = $('p');
	// var $fluidvids = $('.fluid-vids');
	// var $imageblock = $('div.imageblock');	
	if ($windowWidth <= 768) {		//dectect window size when start up//
		// articleHandler
		$webView.addClass('mobileView');
		$webView.removeClass('webView');
		// titleHandler			
		$webTitle.addClass('mobileTitle');
		$webTitle.removeClass('webTitle');
		// bodyHandler
		$webBody.addClass('mobileBody');
		$webBody.removeClass('webBody')
		// commentHandler
		$webComment.addClass('mobileComment');
		$webComment.removeClass('webComment');
		// commentNameHandler
		$adminCommentName.attr('style','font-size: 18px;');
		$guestCommentName.attr('style','font-size: 18px;');
		$commentDate.attr('style','font-size: 10px;');
		// commentThumbnailHandler
		$adminCommentThumbnail.attr('style','width: 30px;');
		$guestCommentThumbnail.attr('style','width: 30px;');
		// commentButtonHandler
		$commentDelete.addClass('btn-sm');
		$commentReply.addClass('btn-sm');			
		$commentDeleteIcon.removeClass('fa-lg');
		$commentReplyIcon.removeClass('fa-lg');
		$commentButton.addClass('btn-sm');
		// labelHandler
		$label.attr('style','font-size: 18px;');
		$textField.addClass('input-sm');
		$textarea.attr('rows','3');
		// pagination		
		$pagination.removeClass('btn-lg');
		// nav Handler
		$webNav.addClass('mobileNav');
		$webNav.removeClass('webNav');
		// captionHandler
		$mobileCaption.removeClass('captionLg');
		// moreless handler
		$webMoreLessFold.attr('style', 'padding: 5px 10px;font-size: 13px;line-height: 1.5; border-radius: 0;');
		$webMoreLessTop.attr('style', 'padding: 5px 10px;font-size: 13px;line-height: 1.5; border-radius: 0;');
		$webMoreLessBottom.attr('style', 'padding: 5px 10px;font-size: 13px;line-height: 1.5; border-radius: 0;');
		// basic
		// $p.attr('style','margin-bottom: 10px;')
		// $fluidvids.attr('style', 'margin-top: 10px;margin-bottom: 10px;')
		// $imageblock.atrr('style', 'margin-top: 10px;margin-bottom: 10px;')		
		return;
	} else if ($windowWidth > 768) {
		// articleHandler
		$mobileView.addClass('webView');
		$mobileView.removeClass('mobileView');			
		// titleHandler			
		$mobileTitle.addClass('webTitle');
		$mobileTitle.removeClass('mobileTitle');	
		// bodyHandler		
		$mobileBody.addClass('webBody');
		$mobileBody.removeClass('mobileBody');
		// commentHandler
		$mobileComment.addClass('webComment');
		$mobileComment.removeClass('mobileComment');
		// commentNameHandler
		$adminCommentName.removeAttr('style');
		$guestCommentName.removeAttr('style');
		$commentDate.removeAttr('style');
		// commentThumbnailHandler
		$adminCommentThumbnail.removeAttr('style');
		$guestCommentThumbnail.removeAttr('style');
		// commentButtonHandler
		$commentDelete.removeClass('btn-sm');
		$commentReply.removeClass('btn-sm');			
		$commentDeleteIcon.addClass('fa-lg');
		$commentReplyIcon.addClass('fa-lg');
		$commentButton.removeClass('btn-sm');
		// labelHandler
		$label.removeAttr('style');
		$textField.removeClass('input-sm');
		$textarea.attr('rows','10');
		// pagination
		$pagination.addClass('btn-lg');		
		// nav Handler
		$mobileNav.addClass('webNav');
		$mobileNav.removeClass('mobileNav');
		// captionHandler
		$mobileCaption.addClass('captionLg');
		// moreless handler
		$webMoreLessFold.removeAttr('style');
		$webMoreLessTop.removeAttr('style');
		$webMoreLessBottom.removeAttr('style');
		// basic
		// $p.attr('style','margin-bottom: 30px;')
		// $fluidvids.attr('style', 'margin-top: 25px;margin-bottom: 25px;')
		// $imageblock.atrr('style', 'margin-top: 25px;margin-bottom: 25px;')	
		return;
	};
});