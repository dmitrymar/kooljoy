    require(["http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js","http://malsup.github.com/jquery.cycle.all.js"], function(someModule) {
        //This function will be called when all the dependencies
        //listed above are loaded. Note that this function could
        //be called before the page is loaded.
        //This callback is optional.
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