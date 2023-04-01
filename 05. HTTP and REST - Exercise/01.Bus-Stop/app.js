function getInfo() {
    const stopId = document.getElementById("stopId").value;
    const stopName = document.getElementById("stopName");
    const busesUl = document.getElementById("buses");
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';

    fetch(`${BASE_URL}${stopId}`)
    .then((res) => {
		return res.json();
	})
    .then((data) => {
        const name = data.name;
        stopName.textContent = name;
        const buses = Object.entries(data.buses);
        for (const [ bus, time ] of buses) {
            const li = document.createElement("li");
            li.textContent = `Bus ${bus} arrives in ${time} minutes`;
            busesUl.appendChild(li);
        }
    })
    .catch((err) => {
        stopName.textContent = "Error";
    });
}
