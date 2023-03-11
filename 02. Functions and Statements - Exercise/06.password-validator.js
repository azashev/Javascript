function validator(pwd) {
    function lengthValidator(pwd) {
        return pwd.length >= 6 && pwd.length <= 10;
    }

    function lettersAndDigitsValidator(pwd) {
        let isValid = false;
        for (const el of pwd) {
            elChar = el.charCodeAt(0);
            if ((elChar >= 65 && elChar <= 90) || (elChar >= 97 && elChar <= 122) || (elChar >= 48 && elChar <= 57)) {
                    isValid = true;
            } else {
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    function digitsValidator(pwd) {
        let digitsCount = 0;
        for (const el of pwd) {
            if (el.charCodeAt(0) >= 48 && el.charCodeAt(0) <= 57) {
                digitsCount++;
            }
        }
        return digitsCount >= 2;
    }

    let lengthIsValid = lengthValidator(pwd);
    let lettersAndDigitsValid = lettersAndDigitsValidator(pwd);
    let digitsAreValid = digitsValidator(pwd);
    let pwdIsValid = true;

    if (!lengthIsValid) {
        console.log("Password must be between 6 and 10 characters");
        pwdIsValid = false;
    }

    if (!lettersAndDigitsValid) {
        console.log("Password must consist only of letters and digits");
        pwdIsValid = false;
    }

    if (!digitsAreValid) {
        console.log("Password must have at least 2 digits");
        pwdIsValid = false;
    }

    if (pwdIsValid) {
        console.log("Password is valid");
    }
}

validator('logIn');
validator('MyPass123');
validator('Pa$s$s');

// Task description
// 
// Write a function that checks if a given password is valid. Password validations are:
// The length should be 6 - 10 characters (inclusive)
// It should consist only of letters and digits
// It should have at least 2 digits 
// If a password is a valid print: "Password is valid".
// 
// If it is NOT valid, for every unfulfilled rule print a message:
// "Password must be between 6 and 10 characters"
// "Password must consist only of letters and digits"
// "Password must have at least 2 digits"
