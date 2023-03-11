function loadingBar(number) {
    n = number / 10;

    if (n == 10) {
        console.log("100% Complete!")
    } else {
        console.log(`${number}% [${"%".repeat(n)}${".".repeat(10 - n)}]`);
        console.log("Still loading...");
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);

// Task description
// 
// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.
