var dropdown = document.getElementsByClassName("sidePanelDropdownBtn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("activeDropdown");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block"
        }
    });
}

function openNav() {
    document.getElementById("sidePanel").style.width = "290px";
}

function closeNav() {
    document.getElementById("sidePanel").style.width = "0";
}

const switchButton = document.querySelector("#switch")
switchButton.addEventListener("click", (event) => {

    event.preventDefault();
    const theme = document.documentElement.getAttribute("data-theme");
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
})

const toggle = document.querySelector(".toggle");
const html = document.querySelector("html")

const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = prefersDarkMode ? "dark" : "ligth";
const preferredTheme = localStorage.getItem("theme")

if (!preferredTheme) {
    localStorage.setItem("theme", defaultTheme);
}

html.dataset.theme = preferredTheme || defaultTheme;

toggle.addEventListener("click", () => {
    const isDarkTheme = localStorage.getItem("theme") === "dark";
    const newTheme = isDarkTheme ? "light" : "dark"
    localStorage.setItem("theme", newTheme);
    html.dataset.theme = newTheme
});