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
    document.getElementById("sidePanel").style.width = "500px";
}

function closeNav() {
    document.getElementById("sidePanel").style.width = "0";
}