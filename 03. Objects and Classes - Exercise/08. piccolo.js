function parking(input) {
  let parkingLot = new Set();

  for (const line of input) {
    [ command, plateNumber ] = line.split(", ");
    if (command === "IN") {
        parkingLot.add(plateNumber);
    } else if (command === "OUT") {
        parkingLot.delete(plateNumber);
    }
  }
  
  if (parkingLot.size > 0){ 
    let parkingLotSorted = [...parkingLot].sort((a, b) => a.localeCompare(b));
    return console.log([...parkingLotSorted].join("\n"));
  } else {
    return console.log("Parking Lot is Empty");
  }
}

parking(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);

console.log("\n");

parking(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);

// Task description
// 
// Write a function that:
// • Records a car number for every car that enters the parking lot
// • Removes a car number when the car goes out
// • Input will be an array of strings in format [direction, carNumber]
// 
// Print the output with all car numbers which are in the parking lot sorted in ascending by number.
// If the parking lot is empty, print: "Parking Lot is Empty".
