function generateResponse() {
    let prompt = document.getElementById("promptInput").value;
    document.getElementById("output").innerText = "Generated response for: " + prompt;
}
