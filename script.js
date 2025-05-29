function generateResponse() {
    let prompt = document.getElementById("promptInput").value;
    document.getElementById("output").innerText = "Generated response for: " + prompt;
}

function fadeInEffect() {
    let elements = document.querySelectorAll(".fade-text");
    elements.forEach(element => {
        element.style.opacity = "0";
        setTimeout(() => {
            element.style.transition = "opacity 2s";
            element.style.opacity = "1";
        }, 500);
    });
}

window.onload = fadeInEffect;

