(function(window, document, chrome) {
'use strict';
function clickHandler(){
   var isChecked =document.getElementById("switchValue").checked;
	save_options(isChecked, true, 1);
}
var el = document.getElementById('save');
el.addEventListener('click', clickHandler);
var resett = document.getElementById('reset');
resett.addEventListener('click', reset);
function save_options(ok, dis, mode) {
  chrome.storage.sync.set({
    mark: ok
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
	  if(dis){
		  if(mode == 1){
		    status.textContent = 'Options Saved!';
	     }else if(mode == 2){
			  status.textContent = 'Done Resetting To Defaults!';
		  }else if(mode == 3){
			  status.textContent = 'Done Clearing Storage!';
		  }
		setTimeout(function() {
            status.textContent = '';
          }, 1200);  
	  }
  });
}
function reset(){
	document.getElementById("switchValue").checked = true;
	save_options(true, true, 2);
}
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    mark: true
  }, function(items) {
    document.getElementById("switchValue").checked = items.mark;
  });
}
	
})(window, document, chrome);