window.onload = function () {
  var menu = document.getElementById("menu");
  var nav = document.getElementById("navi");
  menu.addEventListener("click", () => {
    console.log("click");
    nav.classList.toggle("navtoggle");
  });
};

// menu.addEventListener("click", () => {
//   console.log("clicked");
//   nav.classList.toggle("navtoggle");
//   console.log("clicked");
// });
