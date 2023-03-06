function solve(numberAsInt) {
    let numberAsString = numberAsInt.toString();
    let numToCompare = numberAsString[0];
    let areSame = true;
    let sum = 0;

    for (const num of numberAsString) {
        if (num != numToCompare) {
            areSame = false;
        }
        sum += Number(num);
    }

    console.log(areSame);
    console.log(sum);
}

solve(2222222);
solve(1234);
