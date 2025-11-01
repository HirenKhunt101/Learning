=> Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')

Your JS file (script.js) is loaded before the HTML button (<button id="clickMe">Click Me</button>) exists in the DOM.

document.getElementById("clickMe") returns null, because the browser hasn’t yet created the button element.
Then calling .addEventListener on null throws: Error

Solution:
Option 1: Move <script> to the bottom of <body>

Option 2: Use defer attribute
Tell the browser to load the script after

<script src="./script.js" defer></script>

Option 3: Wrap JS in DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
console.log("Script loaded");
document.getElementById("clickMe").addEventListener("click", function () {
console.log(124);
});
});
