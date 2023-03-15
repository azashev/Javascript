function dictionary(input) {
  let result = {};
  for (const line of input) {
    lineParse = JSON.parse(line);

    for (const [ key, value ] of Object.entries(lineParse)) {
        result[key] = value;
    }
  }

  let resultSorted = Object.keys(result).sort((a, b) => a.localeCompare(b));

  for (const term of resultSorted) {
    console.log(`Term: ${term} => Definition: ${result[term]}`);
  }
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);

console.log("\n");

dictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
    ]
);

// Task description
// 
// You will receive an array with strings in the form of JSON's. 
// Parse these strings and combine them into one object.
// Every string from the array will hold terms and a description. If you receive the same term twice, replace it with the new definition.
// 
// Print every term and definition in that dictionary on new line in format:
// `Term: ${term} => Definition: ${definition}`
// Sort the dictionary alphabetically by the terms as in real dictionaries.
