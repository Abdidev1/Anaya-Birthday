var lockScreen = document.getElementById("lock-screen");
var passInput = document.getElementById("passcode-input");
var unlockBtn = document.getElementById("unlock-btn");
var errorMsg = document.getElementById("error-msg");

function checkPasscode() {
    if (passInput.value === "2407") {
        lockScreen.style.display = "none";
    } else {
        errorMsg.innerHTML = "Wrong Code! Try Again.";
        passInput.value = "";
    }
}

unlockBtn.onclick = checkPasscode;

passInput.onkeypress = function(e) {
    if (e.key === "Enter") {
        checkPasscode();
    }
};

var btn1 = document.getElementById("p1");
var btn2 = document.getElementById("p2");
var btn3 = document.getElementById("p3");
var resultText = document.getElementById("reward-result");

btn1.onclick = function() {
    resultText.innerHTML = "Free snacks pass: I Have to buy you snacks next time we hang out."
}

btn2.onclick = function() {
    resultText.innerHTML = "Venting Pass: You can rant about anything for 30 minutes straight."
}

btn3.onclick = function() {
    resultText.innerHTML = "Music Privilege: You get full control over the music next time."
}

var openLetterBtn = document.getElementById("open-letter-btn");
var letterPopup = document.getElementById("letter-popup");
var closeLetterBtn = document.getElementById("close-letter-btn");

openLetterBtn.onclick = function() {
    letterPopup.style.display = "block";
};

closeLetterBtn.onclick = function() {
    letterPopup.style.display = "none";
};

var surpriseBtn = document.getElementById("surprise-btn");
var popup = document.getElementById("best-popup");
var closeBtn = document.getElementById("close-popup-btn");

surpriseBtn.onclick = function() {
    popup.style.display = "flex";
};

closeBtn.onclick = function() {
    popup.style.display = "none";
};

window.onclick = function(e) {
    if (e.target === letterPopup) {
        letterPopup.style.display = "none";
    }

    if (e.target === popup) {
        popup.style.display = "none";
    }
};
