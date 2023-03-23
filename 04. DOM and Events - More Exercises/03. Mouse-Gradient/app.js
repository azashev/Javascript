function attachGradientEvents() {
    let element = document.getElementById("gradient");
    let result = document.getElementById("result");
    element.addEventListener("mousemove", moveCalc);
    element.addEventListener("mouseout", mouseOut);

    function moveCalc(e) {
        let movePercent = Math.trunc((e.offsetX / (e.target.clientWidth - 1)) * 100);
        result.textContent = movePercent + "%";
    }

    function mouseOut(e) {
        result.textContent = "";
    }
}
