// js title
let jsTitle = document.getElementById("jsTitle");
jsTitle.addEventListener("mouseover", function () {
    jsTitle.classList.add("jsTitle");
});

// chatbox code start here
const chatBtn = document.getElementById("chatBtn");
chatBtn.addEventListener("click", () => {
    const chatBox = document.getElementById("chatbox");
    const chatInput = document.getElementById("chatInput").value;
    const newPara = document.createElement("p");
    const newMsg = document.createTextNode("User : " +chatInput);
    newPara.style.border= "thin solid black";
    newPara.style.padding = "10px"
    newPara.appendChild(newMsg);
    chatBox.appendChild(newPara);
    // msg deyar por input box khali korar jonno
    document.getElementById("chatInput").value = "";
    // condition
    if(chatInput === "Ashik" || chatInput === "Nayeem"){
        newPara.innerText = `${chatInput} is the Administrator of this site`;
    }
    else{
        if(chatInput == ""){
            alert("Vai doya kore kisu lekhen");
        }
    }
});

// chat box refresh button code start here
const refreshBtn = document.getElementById("refreshBtn").addEventListener("click", () => {
    location.reload();
});
