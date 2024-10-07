// Get the button element
const button = document.getElementById("MYbutton");

// Add a click event listener
button.addEventListener("click", function() {
  alert("Button clicked!");
});

// Add a mouseover event listener
button.addEventListener("mouseover", function() {
  alert("Button hovered!");
});

// Add a mouseout event listener
button.addEventListener("mouseout", function() {
  alert("Button left!");
});

// Add a mousedown event listener
button.addEventListener("mousedown", function() {
  alert("Button pressed down!");
});

// Add a mouseup event listener
button.addEventListener("mouseup", function() {
  alert("Button released!");
});

// Add a dblclick event listener
button.addEventListener("dblclick", function() {
  alert("Button double-clicked!");
});

// Add a contextmenu event listener
button.addEventListener("contextmenu", function() {
  alert("Button right-clicked!");
});

// Add a focus event listener
button.addEventListener("focus", function() {
  alert("Button focused!");
});

// Add a blur event listener
button.addEventListener("blur", function() {
  alert("Button blurred!");
});

// Add a keydown event listener
button.addEventListener("keydown", function() {
  alert("Button keydown!");
});

// Add a keyup event listener
button.addEventListener("keyup", function() {
  alert("Button keyup!");
});

// Add a keypress event listener
button.addEventListener("keypress", function() {
  alert("Button keypress!");
});