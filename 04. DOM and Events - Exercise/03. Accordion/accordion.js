function toggle() {
    const btn = document.querySelector(".button");
    const element = document.getElementById("extra");

    if (btn.textContent === "More") {
        element.style.display = "block";
        btn.textContent = "Less";
    } else {
        element.style.display = "none";
        btn.textContent = "More";
    }
}
