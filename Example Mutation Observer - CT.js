
(function() {
// Select the node that will be observed for mutations
var targetNode = document.querySelector('.header-search__form');

var className = 'header-search__form--expanded';

var headerBanner = document.querySelector(".page-container.header-banner");


if(targetNode){
 
// Options for the observer (which mutations to observe)
var config = {
	  attributes: true,
      attributeFilter: ['class'],
      subtree: false
    }
// Callback function to execute when mutations are observed
var callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.target.classList.contains(className)) {
            
            $(headerBanner).css("padding-top","104px");
        }
        else  {
            
            $(headerBanner).css("padding-top","50px");
        }
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
}
})();