function matrix(n) {
    for (let i = 0; i < n; i++) {
        let result = '';
        for (let x = 0; x < n; x++) {
            result += String(n) + ' ';
        }
        console.log(result);
    }
}

matrix(3);
matrix(7);
matrix(2);

// Second solution
// (n) => new Array(n).fill(new Array(n).fill(n)).forEach(row => console.log(row.join(' ')));


// Task description
// Write a function that receives a single integer number n and prints nxn matrix with that number.
