function solve(start, end) {
    let nums = [];
    let sum = 0;

    for (let i = start; i <= end; i++) {
        nums.push(i);
        sum += i;
    }

    console.log(nums.join(" "));
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
