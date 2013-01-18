    require(["scripts/test.js","http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"], function(someModule) {
        //This function will be called when all the dependencies
        //listed above are loaded. Note that this function could
        //be called before the page is loaded.
        //This callback is optional.
		$("p").css("color","yellow");

    });