function Lightdarktoggle() {
    const bodyElements = document.body.querySelectorAll("*");
    bodyElements.forEach(el => {
        el.classList.toggle("dark-mode");
    });
}
