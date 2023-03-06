function solve(text) {
    let words = text.split(" ");
    let result = [];

    for (const word of words) {
        if (word.startsWith("#") && word.length > 1 && checkIfWordIsValid(word)) {
            result.push(word.slice(1));
        }
    }

    console.log(result.join('\n'));

    function checkIfWordIsValid(myWord) {
        let wordLowerCase = myWord.toLowerCase()
        .slice(1);
        
        for (const symbol of wordLowerCase) {
            let asciiCode = symbol.charCodeAt(0);
            if (!(asciiCode >= 97 && asciiCode <= 122)) {
                return false;
            }
        }

        return true
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
