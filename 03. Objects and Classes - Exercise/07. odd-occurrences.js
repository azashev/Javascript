function oddOccurrences(input) {
  let words = new Set;
  input = input.split(" ");

  for (const word of input) {
    wordLower = word.toLowerCase();
    let wordOccurrences = input.filter((w) => w.toLowerCase() === wordLower);
    if (wordOccurrences.length % 2 !== 0) {
        words.add(wordLower);
    }
  }

  console.log([...words].join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');

// Task description
// 
// Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.
