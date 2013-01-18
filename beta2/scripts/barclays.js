$(document).ready(function() {
    $('.slideshow').cycle({
				fx:'fade', 
				force: 1,
				timeout: 0,
				pause: 1,
				pager:  '.slideshow nav',
				slideExpr: 'img',
				pauseOnPagerHover: 1
	});
});