function validate() {
    let emailEl = document.getElementById("email");
    let emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/g;
    emailEl.addEventListener("change", validateEmail);
    
    function validateEmail() {
        let email = emailEl.value;
        if (email.match(emailRegex)) {
            emailEl.classList.remove("error");
        } else {
            emailEl.classList.add("error");
        }
    }
}
 
// Task description
// 
// Write a function that dynamically validates an email input field when it is changed. If the input is invalid, apply the class "error".
// Do not validate on every keystroke, as it is annoying for the user, consider only change events.
// A valid email is considered to be in the format: <name>@<domain>.<extension>
// Only lowercase Latin characters are allowed for any of the parts of the email. If the input is valid, clear the style.
