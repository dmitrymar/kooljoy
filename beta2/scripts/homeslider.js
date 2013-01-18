
	
define(function () {
 
    $('.homeslider').cycle({
				fx:'fade', 
				force: 1,
				timeout: 0, /*set to 7000 to automatically move to another slide*/
				pause: 1,
				pager:  '.homeslider nav',
				slideExpr: 'img',
				pauseOnPagerHover: 1
	});
});