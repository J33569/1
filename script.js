function Lightdarktoggle() {
   const bodyElements = document.body.querySelectorAll("*");
   bodyElements.forEach(el => {
      el.classList.toggle("dark-mode");
   });
}
function ldtb() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
