var object = document.getElementById('item');
var a = document.getElementById('scream')
object.onmouseenter=function(){
    var x = Math.floor(Math.random()*500);
    var y = Math.floor(Math.random()*500);
    object.style.top = x + 'px';
    object.style.left = y + 'px';
};
object.addEventListener('click', () => {
    a.style.visibility = 'visible';
    object.style.visibility = 'hidden';
});
document.addEventListener("DOMContentLoaded", function() {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
    }

    const toggleButton = document.getElementById("toggle-theme");
    const resetButton = document.getElementById("reset-theme");

    toggleButton.addEventListener("click", function() {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });

    resetButton.addEventListener("click", function() {
        localStorage.removeItem("theme");
        document.documentElement.setAttribute("data-theme", "light");
    });
});