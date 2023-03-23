function solve() {
  let text = document.getElementById("text").value.split(" ")
    .map(word => word.toLowerCase());
  let namingConvention = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");
  let index = 0;
  if (namingConvention === "Camel Case") {
      index = 1;
  } else if (namingConvention === "Pascal Case") {
    index = 0;
  } else {
    result.textContent = "Error!";
    return
  }
  
  for (let i = index; i < text.length; i++) {
    text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
  }
  result.textContent = text.join("");
}

// Task description
// 
// An HTML file is given and your task is to write a function that takes two string parameters as an input and transforms the first parameter to 
// the type required by the second parameter.
// 
// • The first parameter will be the text that you need to modify depending on the second parameter. The words in it will always be separated by space.
// • The second parameter will be either "Camel Case" or "Pascal Case". In case of different input, your output should be "Error!"
// When the button is clicked the function should convert the first string to either of the cases.
// The output should consist of only one word - the string you have modified. Once your output is done, you should set it as HTML to the <span> element.
// 
// Example input:
// this is an example, Camel Case
// 
// Expected output:
// thisIsAnExample
// 
// 
// Example input:
// secOND eXamPLE", "Pascal Case
// 
// Expected output:
// SecondExample
// 
// 
// Example input:
// Invalid Input, Another Case
// 
// Expected output:
// Error!
