// Initialize Firebase
"use strict";
var config = {
    apiKey: "AIzaSyDCyi5PsywIMB_nPFV6-SuEET-sjw5rmnY",
    authDomain: "jukebox-64431.firebaseapp.com",
    databaseURL: "https://jukebox-64431.firebaseio.com",
    projectId: "jukebox-64431",
    storageBucket: "jukebox-64431.appspot.com",
    messagingSenderId: "400908270199"
};
firebase.initializeApp(config);

//Anonymously sign in with firebase
firebase.auth().signInAnonymously().catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
});

//Watch auth with firebase
firebase.auth().onAuthStateChanged(function (user) {
    var foo = document.getElementById("pageTitle");
    if (user) {
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        foo.innerHTML = "It worked";
    } else {
        foo.innerHTML = "It didnt work";
    }
});

function setUser()

