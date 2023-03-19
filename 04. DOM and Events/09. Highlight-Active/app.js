function focused() {
    let divs = document.querySelectorAll("div input");
    
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("focus", function() {
            this.parentElement.classList.add("focused");
        });
        divs[i].addEventListener("blur", function() {
            this.parentElement.classList.remove("focused");
        });
    }
}
