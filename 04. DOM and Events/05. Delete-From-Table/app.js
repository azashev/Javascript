function deleteByEmail() {
    let email = document.getElementsByName("email")[0].value;
    let secondRow = document.querySelectorAll("#customers tr td:nth-child(2)");
    
    for (const row of secondRow) {
        if (row.textContent === email) {
            row.parentNode.remove();
            document.getElementById("result").textContent = "Deleted.";
            return;
        }
    }

    document.getElementById("result").textContent = "Not found.";
}
