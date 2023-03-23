function extract(content) {
    let element = document.getElementById(content);
    let text = element.textContent.trim();
    let result = [];
    let x = 0;
    let i = 0;

    while (x < text.length) {
        if (text[x] === "(") {
            i = x + 1;
        } else if (text[x] === ")") {
            result.push(text.slice(i, x));
        }
        x++;
    }
    return result.join("; ");
}

// Task description
// 
// Write a JS function that when executed, extracts all parenthesized text from a target paragraph by given element ID. The result is a string, joined by "; " (semicolon, space).
// 
// Input:
// Your function will receive a string parameter, representing the target element ID, from which text must be extracted. The text should be extracted from the DOM.
// 
// Output:
// Return a string with all matched text, separated by "; " (semicolon, space)
