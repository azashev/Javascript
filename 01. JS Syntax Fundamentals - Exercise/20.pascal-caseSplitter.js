function solve(text) {
    let characters = text.split("");
    let result = [];

    for (const element of characters) {
        // let char = element.charCodeAt();

        if (element === element.toUpperCase()) {
            if (result.length > 0) {
                result += ', '
            }
            result += element;
        } else {
            result += element;
        }
    }

    console.log(result);
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');

// Regex
// console.log('SplitMeIfYouCanHaHaYouCantOrYouCan'.split(/(?=[A-Z])/).join(", "));
// console.log('HoldTheDoor'.split(/(?=[A-Z])/).join(", "));
// console.log('ThisIsSoAnnoyingToDo'.split(/(?=[A-Z])/).join(", "));
