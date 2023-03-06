function solve(arg) {
    let result;
    if (typeof arg == 'number') {
        result = (arg ** 2 * Math.PI).toFixed(2);
    } else {
        result = `We can not calculate the circle area, because we receive a ${typeof arg}.`
    }
    console.log(result);
}

solve(5);
solve("name");
