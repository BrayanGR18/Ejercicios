const test = document.getElementById("test");
// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    event.target.style.color = "blue";
    
// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", (event) => {
  // highlight the mouseenter target
  event.target.style.color = "red";
  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "purple";
  }, 500);
}, false);

  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 1000);
}, false);


const body = document.getElementById("body");

// This handler will be executed every time the cursor
// is moved over a different list item
body.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    event.target.style.color = "blue";
// This handler will be executed only once when the cursor
// moves over the unordered list
body.addEventListener("mouseenter", (event) => {
  // highlight the mouseenter target
  event.target.style.color = "red";
  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "purple";
  }, 500);
}, false);

  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 1000);
}, false);