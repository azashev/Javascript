function solve() {
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");
    const infoBox = document.querySelector('div#info span.info');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    let nextStop = 'depot';
    let stopName = null;

    function depart() {
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        fetch(`${BASE_URL}${nextStop}`)
            .then((res) => res.json())
            .then((data) => {
                const { name, next } = data;
                infoBox.textContent = `Next stop ${name}`;
                nextStop = next;
                stopName = name;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch((err) => {
                infoBox.textContent = "Error";
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            })
    }

    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        infoBox.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
