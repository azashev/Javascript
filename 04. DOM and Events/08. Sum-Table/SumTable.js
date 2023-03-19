function sumTable() {
    let table = document.querySelector("table");
    let prices = table.querySelectorAll("tr td:last-child");
    let total = document.getElementById("sum");

    let totalSum = Array.from(prices)
      .map(price => Number(price.textContent))
      .reduce((a, b) => a + b, 0);

    total.textContent = totalSum;
}
