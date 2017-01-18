var dulux = (function() {
	var DEFAULTS = {
		// element selectors
		loadingDiv : '#loadingDiv',
		resultsDiv : '#resultsDiv',
		submitBtn : "#send",

		// URLs
		webServiceURL : "http://date.jsontest.com",
		resultURL : "results.html"

	}
	return {
		init: function() {
			// hide loading image
			$(DEFAULTS.loadingDiv).hide();
		},
		getData: function() {
			$(DEFAULTS.submitBtn).on('click', function(){
			    $.ajax(
			    	{
			    		url: DEFAULTS.webServiceURL, 
			    		beforeSend: function() {
			    			$(DEFAULTS.loadingDiv).show();
			    			$(DEFAULTS.submitBtn).attr("disabled", "disabled");
			    		},
			    		complete: function(){
						    $(DEFAULTS.loadingDiv).hide();
						 },
			    		success: function(result){
			    			localStorage.state = result.date;
			    		}
			    	}).done(function () {
				        window.location.href = DEFAULTS.resultURL;
				    });
			});
		},
		showData: function() {
			$(DEFAULTS.resultsDiv).html(localStorage.state);
		}
	}
})();
