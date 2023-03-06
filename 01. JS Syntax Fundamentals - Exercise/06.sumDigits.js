function solve(numberAsDigit) {
    let numberAsString = numberAsDigit.toString();
    let sum = 0;
    
    for (const num of numberAsString) {
        sum += Number(num);
    }

    console.log(sum);
}

solve(245678);
solve(97561);
solve(543);
