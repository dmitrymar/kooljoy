$(document).ready(function() {
    $('#ajui.slideshow').cycle({
				fx:'fade', 
				force: 1,
				timeout: 0,
				pause: 1,
				pager:  '#ajui.slideshow nav',
				slideExpr: 'img',
				pauseOnPagerHover: 1,
				after: function(curr, next, opts, fwd) {
					  var $ht = $(next).height();
						if ($ht > 0) {
							$('#ajui').css("height", $ht);
							//$('#ajui').animate({height: $ht});
							//$(this).parent().css("height", $ht);
						}
					}
	});
    $('#ajbanners.slideshow').cycle({
				fx:'fade', 
				force: 1,
				timeout: 0,
				pause: 1,
				pager:  '#ajbanners.slideshow nav',
				slideExpr: 'img',
				pauseOnPagerHover: 1
	});
});