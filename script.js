/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");



// ----- GLITCH STARTER PROJECT HELPER CODE -----

//
(function titleScroller(text) {
    document.title = text;
    console.log(text);
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 500);
}(" Hello! Welcome to Samantha Cheng's virtual space :) "));

