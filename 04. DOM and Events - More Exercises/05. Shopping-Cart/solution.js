function solve() {
   let addBtns = Array.from(document.querySelectorAll(".add-product"));
   let itemsTextArea = document.querySelector("body > div > textarea");
   let checkoutBtn = document.querySelector(".checkout");
   let allBtns = Array.from(document.getElementsByTagName("button"));
   let boughtItems = [];
   let totalPrice = 0;
   addBtns.forEach((b) => b.addEventListener("click", addBtnClick));
   checkoutBtn.addEventListener("click", checkoutBtnClick);

   function addBtnClick(e) {
      let currentProduct = e.target.parentNode.parentNode;
      let currentTitle = currentProduct.querySelector(".product-title").textContent;
      let currentProductPrice = Number(currentProduct.querySelector(".product-line-price").textContent);
      itemsTextArea.value += `Added ${currentTitle} for ${currentProductPrice.toFixed(2)} to the cart.\n`;
      if (!boughtItems.includes(currentTitle)) {
         boughtItems.push(currentTitle);
      }
      totalPrice += currentProductPrice;
   }

   function checkoutBtnClick(e) {
      itemsTextArea.value += `You bought ${boughtItems.join(", ")} for ${totalPrice.toFixed(2)}.`;
      allBtns.forEach((b) => b.disabled = true);
   }
}

// Task description
// 
// You will be given some products that you should be able to add to your cart. Each product will have a name, picture, and price.
// When the "Add" button is clicked, append the current product to the textarea in the following format: "Added {name} for {money} to the cart.\n".
// The price must be fixed to the second digit.
// 
// When the button "Checkout" is clicked, calculate the total money that you need to pay for the products that are currently in your cart. 
// Append the result to the textarea in the following format:
// "You bought {list} for {totalPrice}."
// 
// The list should contain only the unique products, separated by ", ". The total price should be rounded to the second decimal point.
// Also, after clicking over "Checkout" and every from above is done you should disable all buttons. (You can't add products or checkout again if once the checkout button is clicked).
