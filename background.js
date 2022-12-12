(function(window, document, $, chrome) {
'use strict';	
$("#mark_rober").hide();
	// Check whether new version is installed
$( document ).ready(function() {
	chrome.storage.sync.get({
    mark: true
  }, function(items) {
    var random__boolean = items.mark;
	  chrome.storage.sync.get('mark', function (reee) {
    console.log(reee);
		  });
		if (random__boolean) {
	var random_boolean = Math.random() < 0.3;
    if (random_boolean) {
        $("#mark_rober").show();
    } else {
        $("#mark_rober").hide();
    }
	}
  });	
});

})(window, document, jQuery, chrome);