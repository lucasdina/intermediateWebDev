"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

// the event handler for the click event of each a element
var toggle = function () {
    var link = this; // the clicked a tag
    var h2 = link.parentNode; // h2 tag that contains a tag     
    var div = h2.nextElementSibling; // h2 tag's sibling div tag

    // toggle plus and minus image in h2 elements by adding or removing a class
    if (h2.classList.contains("minus")) {
        //        h2.removeAttribute("class");	
        h2.classList.remove("minus");
    } else {
        //        h2.setAttribute("class", "minus"); 
        h2.classList.add("minus");
    }

    // toggle div visibility by adding or removing a class
    if (div.classList.contains("open")) {
        //        div.removeAttribute("class");
        $('onlyImage').style.display = 'none';
        div.classList.remove('open');
    } else {
        //        div.setAttribute("class", "open"); 
        div.classList.add('open');
        $('onlyImage').style.display = 'block';
        $('onlyImage').src = "";
    }
};

function changeImage(imagePath) {
    "use strict";
    if ($('onlyImage').style.display === 'none') {
        $('onlyImage').style.display = 'block';
    }

    $('onlyImage').src = imagePath;
}

function imageClick(mouseIn) {
    $('bigImage').src = $('onlyImage').src;
    $('bigImage').style.display = (mouseIn)? 'block' : 'none';
}

window.onload = function () {
    // get the a tags
    var faqs = $("faqs");
    var linkElements = faqs.getElementsByTagName("a");

    // attach event handler for each a tag	    
    for (var i = 0; i < linkElements.length; i++) {
        linkElements[i].onclick = toggle;
    }
    
    $('onlyImage').addEventListener("mouseenter", function() {
        imageClick(true)
    });
    $('onlyImage').addEventListener("mouseleave", function() {
        imageClick(false)
    });
    // set focus on first <a> tag
    linkElements[0].focus();
};
