function create(words) {
   const content = document.getElementById("content");

   for (const word of words) {
      const newParagraph = document.createElement("p");
      newParagraph.style.display = "none";
      const newDiv = document.createElement("div");
      newParagraph.textContent = word;
      newDiv.appendChild(newParagraph);
      newDiv.addEventListener("click", () => newParagraph.style.display = "block");
      content.appendChild(newDiv);
   }
}
