function solve(firstChar, secondChar) {
    let startNum = firstChar.charCodeAt();
    let endNum = secondChar.charCodeAt();
    let resultArr = [];
    let start = Math.min(startNum, endNum);
    let end = Math.max(startNum, endNum);
    

    for (let i = start + 1; i < end; i++) {
        resultArr.push(String.fromCharCode(i))
    }

    return resultArr.join(' ');
}

console.log(solve('a', 'd'));
console.log(solve('#', ':'));
console.log(solve('C', '#'));

// Task description
// 
// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code.
// Keep in mind that the second character code might be before the first one inside the ASCII table.
