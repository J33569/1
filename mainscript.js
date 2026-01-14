function Lightdarktoggle() {
    const allElements = document.querySelectorAll("*");
    allElements.forEach(el => {
        el.classList.toggle("dark-mode");
    });
}
