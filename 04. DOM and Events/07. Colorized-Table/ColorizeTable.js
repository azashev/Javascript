function colorize() {
    var rows = document.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i += 2) {
        rows[i].style.backgroundColor = "Teal";
    }
}
