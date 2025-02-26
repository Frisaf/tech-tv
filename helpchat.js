const showChatButton = document.querySelector(".helpChat")

showChatButton.addEventListener("click", (event) => {
    var chat = document.getElementById("chatContent");
    chat.classList.toggle("hidden")
})

var messageElement = document.getElementById("message");

function sendMessage() {
    var userMessage = document.getElementById("userMessage");

    document.getElementById("userMessage").innerText = "Du: " + messageElement.value;
    userMessage.style.display = "block";
    messageElement.value = "";

    setTimeout(showStaffMessage, 1000);
}

function showStaffMessage() {
    var staffMessage = document.getElementById("staffMessage");

    document.getElementById("staffMessage").innerText = "Support: Hej! Välkommen till vår kundsupport. Just nu är det många som vill ha hjälp. Din plats i kön är: 3674378534985793485. Tack för att du väntar! Din tid betyder mycket för oss.";
    staffMessage.style.display = "block";
    console.log(messageElement)
}