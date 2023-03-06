function solve(word, text) {
    let wordToLowerCase = word.toLowerCase();
    let textArr = text.split(" ");

    for (const word of textArr) {
        if (word.toLowerCase() === wordToLowerCase) {
            return word;
        }
    }

    return `${word} not found!`;
}

console.log(solve('javascript', 'JavaScript is the best programming language'));
console.log(solve('python', 'JavaScript is the best programming language'));
