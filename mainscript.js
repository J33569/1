function Lightdarktoggle() {
   var allElements = document.querySelectorAll("*");
   allElements.forEach(function (el) {
      el.classList.toggle("dark-mode");
   });
}