// Use case 3: Event handlers with closures

let setButton = function () {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log(++count);
  });
};

setButton();

// Even after setupButton() is done, the click handler remembers count.
