function employees(names) {
    let employeesObj = {};
    for (const name of names) {
        employeesObj[name] = name.length;
    }

    for (const [name, number] of Object.entries(employeesObj)) {
        console.log(`Name: ${name} -- Personal Number: ${number}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
);

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
);

// Task description
// 
// create a list of employees and their personal numbers.
// You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). 
// Try to use an object.
// At the end print all the list employees in the following format:
//  "Name: {employeeName} -- Personal Number: {personalNum}"
