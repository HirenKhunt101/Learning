let count = 0;

function renderCount() {
  document.getElementById("count").innerText = count;
}

document.getElementById("increment").addEventListener("click", function () {
  ++count;
  renderCount();
});

document.getElementById("decrement").addEventListener("click", function () {
  --count;
  renderCount();
});
renderCount();
