function formatGrade(grade) {
    if (grade < 3.00) {
        return "Fail (2)";
    } else if (grade >= 3.00 && grade < 3.50) {
        return `Poor (${grade.toFixed(2)})`;
    } else if (grade >= 3.50 && grade < 4.50) {
        return `Good (${grade.toFixed(2)})`;
    } else if (grade >= 4.50 && grade < 5.50) {
        return `Very good (${grade.toFixed(2)})`;
    } else if (grade >= 5.50) {
        return `Excellent (${grade.toFixed(2)})`;
    }
}

console.log(formatGrade(3.33));
console.log(formatGrade(4.50));
console.log(formatGrade(2.99));