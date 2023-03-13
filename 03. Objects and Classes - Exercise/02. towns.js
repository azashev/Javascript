function towns(input) {
    let objects = [];

    for (const data of input) {
        let [townName, latitude, longitude] = data.split(' | ');
        let obj = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        };
        objects.push(obj);
    }

    for (const obj of objects) {
        console.log(obj);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);

towns(['Plovdiv | 136.45 | 812.575']);

// Task description
// 
// Create and print objects from a text table. 
// You will receive the input as an array of strings, where each string represents a table row, with values on the row separated by pipes " | " and spaces.
// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers.
// Check the examples to get a better understanding of your task.
// The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!
