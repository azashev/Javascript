function solve() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  const sentences = input.split(".");
  sentences.pop();

  while (sentences.length > 0) {
    const currentSentences = sentences.splice(0, 3)
      .map((x) => x.trimStart());
    const newParagraph = document.createElement("p");
    newParagraph.textContent = currentSentences.join(".") + ".";
    output.appendChild(newParagraph);
  }
}
