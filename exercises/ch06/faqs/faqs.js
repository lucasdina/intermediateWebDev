"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function() {
    var element = this;                    // clicked h2 tag     
    var h2 = element.parentNode;
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag

    // toggle plus and minus image in h2 elements by adding or removing a class
    if (h2.className == "minus") { 
//        h2.removeAttribute("class");	
        h2.className = "plus";
    } else { 
//        h2.setAttribute("class", "minus"); 
        h2.className = "minus";
    }

    // toggle div visibility by adding or removing a class
    if (div.className == "open") { 
//        div.removeAttribute("class");
        div.className = "closed";
    } else { 
//        div.setAttribute("class", "open");
        
        div.className = "open"; 
    } 
    ///////////////////////////////////////////////////////
    // This Fixes the issue that occured earlier         //
    ///////////////////////////////////////////////////////
};

window.onload = function() {
    // get the h2 tags
    var faqs = $("faqs");
    var elements = faqs.getElementsByTagName("a");
    
    // attach event handler for each h2 tag	    
    for (var i = 0; i < elements.length; i++ ) {
    	elements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    elements[0].firstChild.focus();       
};
