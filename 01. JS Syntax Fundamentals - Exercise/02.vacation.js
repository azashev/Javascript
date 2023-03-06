function solve(people, group, day) {
    let totalPrice = 0;

    switch (group) {
        case "Students":
            if (day == "Friday") {
                totalPrice += people * 8.45;
            } else if (day == "Saturday") {
                totalPrice += people * 9.80;
            } else if (day == "Sunday") {
                totalPrice += people * 10.46;
            }

            if (people >= 30) {
                totalPrice -= totalPrice * 0.15
            }
            
            break;
        case "Business":
            if (people >= 100){
                people -= 10;
            }

            if (day == "Friday") {
                totalPrice += people * 10.90;
            } else if (day == "Saturday") {
                totalPrice += people * 15.60;
            } else if (day == "Sunday") {
                totalPrice += people * 16;
            }

            break;

        case "Regular":
            if (day == "Friday") {
                totalPrice += people * 15;
            } else if (day == "Saturday") {
                totalPrice += people * 20;
            } else if (day == "Sunday") {
                totalPrice += people * 22.50;
            }

            if (people >= 10 && people <= 20) {
                totalPrice -= totalPrice * 0.05
            }

            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");
