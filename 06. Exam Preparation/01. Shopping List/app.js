function solve(input) {
    let groceries = input.shift().split('!');
    
    for (const line of input) {
        if (line === 'Go Shopping!') {
            console.log(groceries.join(', '));
            break;
        }

        [command, ...products] = line.split(' ');
        
        switch (command) {
            case 'Urgent':
                if (!groceries.includes(products[0])) {
                    groceries.unshift(products[0]);
                }
                break;
            case 'Unnecessary':
                const idx = groceries.indexOf(products[0]);
                if (idx !== -1) {
                    groceries.splice(idx, 1);
                }
                break;
            case 'Correct':
                const [oldProduct, newProduct] = products;
                const itemIndex = groceries.indexOf(oldProduct);
                if (itemIndex !== -1) {
                    groceries[itemIndex] = newProduct;
                }
                break;
            case 'Rearrange':
                const itemIdx = groceries.indexOf(products[0]);
                if (itemIdx !== -1) {
                    const item = groceries.splice(itemIdx, 1);
                    groceries.push(item);
                }
                break;
            default:
                break;
        }
    }
}

solve((["Tomatoes!Potatoes!Bread",
"Unnecessary Tomatoes",
"Urgent Tomatoes",
"Go Shopping!"])
);

solve((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
);
