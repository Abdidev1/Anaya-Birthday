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
var bearpopup = document.getElementById("best-popup");
var closeBtn = document.getElementById("close-popup-btn");

surpriseBtn.onclick = function() {
    bearpopup.style.display = "flex";
};

closeBtn.onclick = function() {
    bearpopup.style.display = "none";
};

window.onclick = function(e) {
    if (e.target === letterPopup) {
        letterPopup.style.display = "none";
    }

    if (e.target === popup) {
        bearpopup.style.display = "none";
    }
};

var openScratchBtn = document.getElementById("open-scratch-btn");
var scratchPopup = document.getElementById("scratch-popup");
var closeScratchBtn = document.getElementById("close-scratch-btn");
var canvas = document.getElementById("scratch-canvas");
var ctx = document.getElementById("2d");
var giftCodeText = document.getElementById("gift-code-text");

var realRobloxCode = "9154-9264-9245-4865";

giftCodeText.innerHTML = realRobloxCode;

var isScratch = false;

function initScratchCanvas() {
    ctx.globalCompositeOperation = "source-over";
    ctz.fillStyle = "#888888";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 16px Arial";
    ctx.textAlign = "center";
    ctx.fillText = ("SCRATCH HERE!", camnvas.width / 2, canvas.height / 2 + 6);
}

openScratchBtn.onclick = function() {
    scratchPopup.style.display = "block";
    initScratchCanvas();
};

closeScratchBtn.onclick = function() {
    scratchPopup.style.display = "none";
};

function scratch(e) {
    if (!isScratching) return;

    var rect = canvas.getBoundingClientRect();
    var clientX = e.ClientX || (e.touches && e.touches[0].ClientX);
    var clientY = e.clientY || (e.touches && e.touches[0].clientY);

    var x = clientX - rect.left;
    var y = clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x,y,18,0, Math.PI * 2);
    ctx.fill;
}

canvas.addEventListener("mousedown", function(e) { isScratching = true; scratch(e); });
canvas.addEventListener("mousemove", scratch);
window.addEventListener("mouseup", function() { isScratching = false; });

canvas.addEventListener("touchstart", function(e) { isScratching = true; scratch(e); });
canvas.addEventListener("touchmove", scratch);
window.addEventListener("touchend", function() { isScratching = false; });

window.onclick = function(e) {
    if (e.target === letterPopup) {
        letterPopup.style.display = "none";
    }
    if (e.target === bearpopup) {
        bearpopup.style.display = "none";
    }
    if (e.target === scratchPopup) {
        scratchPopup.style.display = "none";
    }
};