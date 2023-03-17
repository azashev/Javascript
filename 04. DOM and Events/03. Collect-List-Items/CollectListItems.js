function extractText() {
    let nodeItems = document.querySelectorAll("#items li");
    let text = document.getElementById("result");

    for (const item of nodeItems) {
        text.value += item.textContent + "\n";
    }
}
