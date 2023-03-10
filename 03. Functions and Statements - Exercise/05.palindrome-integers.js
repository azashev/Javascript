function palindromes(numbers) {
    for (const el of numbers) {
        // console.log(el)
        if (el.toString().split("").reverse().join("") == el) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromes([123, 323, 421, 121]);


// for (const el of numbers) {
    // if (el.toString().split("").join().reverse()) {
        // ;
    // }
// }