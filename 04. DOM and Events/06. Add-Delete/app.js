function addItem() {
    let text = document.getElementById("newItemText").value;

    if (text.length == 0) {
        return;
    }

    let li = document.createElement("li");
    li.textContent = text;

    let deleteLink = document.createElement("a");
    let deleteLinkText = document.createTextNode("[Delete]");
    deleteLink.href = "#";
    deleteLink.appendChild(deleteLinkText);

    deleteLink.addEventListener("click", deleteLi);

    li.appendChild(deleteLink);
    document.getElementById("items").appendChild(li);

    document.getElementById("newItemText").value = "";

    function deleteLi() {
        li.remove();
    }
}
