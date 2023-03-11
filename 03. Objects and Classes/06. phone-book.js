function phoneBook(input) {
    let data = {};
    for (let info of input) {
        info = info.split(' ');
        data[info[0]] = info[1];
    }

    for (const [key, value] of Object.entries(data)) {
        console.log(`${key} -> ${value}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);

console.log('\n');

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
);

// Task description
// 
// Write a function that stores information about a person’s name and phone number.
// The input is an array of strings with space-separated name and number. Replace duplicate names. Print the result as shown.
