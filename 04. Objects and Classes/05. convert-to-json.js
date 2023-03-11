function convertToJson(firstName, lastName, hairColor) {
    let obj = {}
    obj.name = firstName;
    obj.lastName = lastName;
    obj.hairColor = hairColor;

    console.log(JSON.stringify(obj));
}

convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');

// Task description
// 
// Write a function that receives a first name, last name, hair color and sets them to an object.
// Convert the object to JSON string and print it.
// Input is provided as 3 single strings in the order stated above.
