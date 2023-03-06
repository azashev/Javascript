function solve(words, text) {
    words = words.split(", ");
    textArray = text.split(" ");

    for (const word of words) {
        for (const element of textArray) {
            if (element.includes("*") && element.length == word.length) {
                text = text.replace(element, word);
            }
        }
    }

    console.log(text);
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');
