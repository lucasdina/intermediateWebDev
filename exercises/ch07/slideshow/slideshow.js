"use strict";
var $ = function (id) { return document.getElementById(id); };

var imageCache = [];
var imageCounter = 0;
var countdownThing;

var runSlideShow = function() {
    imageCounter = (imageCounter + 1) % imageCache.length;
    var image = imageCache[imageCounter];
    $("image").src = image.src;
    $("caption").firstChild.nodeValue = image.title;
};

window.onload = function () {
    var listNode = $("image_list");    // the ul element
    var links = listNode.getElementsByTagName("a");
    
    // Preload images, copy title properties, and store in array
    var i, link, image;
    for ( i = 0; i < links.length; i++ ) {
        link = links[i];
        image = new Image();
        image.src = link.getAttribute("href");
        image.title = link.getAttribute("title");
        imageCache[imageCache.length] = image;
    }

    $("start").onclick = function() {
        runSlideShow();
        countdownThing = setInterval(runSlideShow, 2000);
        $("start").setAttribute("disabled", "true");
        $("pause").removeAttribute("disabled");
    };
    $("pause").onclick = function() {
        clearInterval(countdownThing);
        $("start").removeAttribute("disabled");
        $("pause").setAttribute("disabled", "true");
    };
};
