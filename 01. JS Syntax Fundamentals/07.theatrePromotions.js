function solve(day, age) {
    let result;
    let validAge = true

    if (age < 0 || age > 122){
        validAge = false
        result = "Error!";
    }

    if (validAge){
        switch (day) {
            case 'Weekday':
                if (0 <= age && age <= 18){
                    result = "12$"
                } else if (18 < age && age <= 64){
                    result = "18$"
                } else{
                    result = "12$"
                }
                break;
            case 'Weekend':
                if (0 <= age && age <= 18){
                    result = "15$"
                } else if (18 < age && age <= 64){
                    result = "20$"
                } else{
                    result = "15$"
                }
                break;
            case 'Holiday':
                if (0 <= age && age <= 18){
                    result = "5$"
                } else if (18 < age && age <= 64){
                    result = "12$"
                } else{
                    result = "10$"
                }
                break;
        }
    }
    console.log(result)
}

solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);
