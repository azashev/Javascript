function storeProvision(firstArr, secondArr) {
    let store = {};
    let currentProduct = '';
    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            currentProduct = firstArr[i];
        } else {
            store[currentProduct] = Number(firstArr[i]);
            currentProduct = '';
        }
    }

    for (let i = 0; i < secondArr.length; i++) {
        if (i % 2 === 0) {
            currentProduct = secondArr[i];
        } else {
            if (currentProduct in store) {
                store[currentProduct] += Number(secondArr[i]);
            } else {
                store[currentProduct] = Number(secondArr[i]);
            }
            currentProduct = '';
        }
    }

    for (const [key, value] of Object.entries(store)) {
        console.log(`${key} -> ${value}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);

console.log('\n');

storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);

// Task description
// 
// You will receive two arrays. The first array represents the current stock of the local store. The second array will contain products that the store has ordered for delivery.
// The following information applies to both arrays:
// Every even index will hold the name of the product and every odd index will hold the quantity of that product.
// 
// The second array could contain products that are already in the local store. If that happens increase the quantity for the given product.
// You should store them into an object, and print them in the following format: (product -> quantity)
// All of the arrays’ values will be strings.
