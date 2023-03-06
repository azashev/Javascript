function solve(driverSpeed, area) {
    let speedLimit;
    let status;
    let speedDifference;

    if (area == "motorway") {
        speedLimit = 130;
    } else if (area == "interstate") {
        speedLimit = 90;
    } else if (area == "city") {
        speedLimit = 50;
    } else if (area == "residential") {
        speedLimit = 20;
    }

    if (driverSpeed <= speedLimit) {
        console.log(`Driving ${driverSpeed} km/h in a ${speedLimit} zone`)
    } else {
        speedDifference = driverSpeed - speedLimit;

        if (speedDifference <= 20) {
            status = "speeding";
        } else if (speedDifference <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }  
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
