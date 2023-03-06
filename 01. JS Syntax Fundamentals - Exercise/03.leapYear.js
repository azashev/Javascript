function solve(year) {
    let isLeap = "no";

    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        isLeap = "yes";
    }
    console.log(isLeap);   
}

solve(1984);
solve(2003);
solve(4);
