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
