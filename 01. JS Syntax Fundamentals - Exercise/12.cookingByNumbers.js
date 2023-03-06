function solve(number, op1, op2, op3, op4, op5) {
    number = Number(number);
    let operations = [op1, op2, op3, op4, op5];

    for (const operation of operations) {
        switch (operation) {
            case "chop":
                number /= 2;
                console.log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                number += 1;
                console.log(number);
                break;
            case "bake":
                number *= 3;
                console.log(number);
                break;
            case "fillet":
                number -= number * 0.2;
                console.log(number);
                break;
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
