function addressBook(input) {
    let obj = {};

    for (const data of input) {
        let [name, address] = data.split(':');
        obj[name] = address;
    }

    let sortedNames = Object.keys(obj)
    .sort((a, b) => a.localeCompare(b));

    for (const name of sortedNames) {
        console.log(`${name} -> ${obj[name]}`);
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);

console.log('\n');

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);

// Task description
// 
// Write a function that stores information about a person’s name and his address. The input comes as an array of strings.
// Each string contains the name and the address separated by a colon. If you receive the same name twice just replace the address.
// In the end, print the full list, sorted alphabetically by the person's name.
