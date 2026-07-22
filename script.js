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

var surpriseBtn = document.getElementById("surprise-btn");
var popup = document.getElementById("best-popup");
var closeBtn = document.getElementById("close-popup-btn");

surpriseBtn.onclick = function() {
    popup.style.display = "block";
};

closeBtn.onclick = function() {
    popup.style.display = "none";
}