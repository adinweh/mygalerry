// script.js
const text = " INI ADALAH BEBERAPA ALBUM SAYA";
let index = 0; 

function typeText() {
    if (index < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust typing speed here (in milliseconds)
    }
}

typeText();