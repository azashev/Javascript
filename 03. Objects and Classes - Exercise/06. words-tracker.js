function wordsTracker(input) {
  let wordsToFind = input.shift(2).split(" ");
  let words = {};
  for (const currentWord of wordsToFind) {    
    let wordCount = input.filter((w) => w === currentWord).length;
    words[currentWord] = wordCount;
  }

  let sortedWords = Object.entries(words)
    .sort((wordA, wordB) => {
      return wordB[1] - wordA[1];
    })

  for (const [ word, count ] of sortedWords) {
    console.log(`${word} - ${count}`);
  }
}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
);

console.log("\n");

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);
