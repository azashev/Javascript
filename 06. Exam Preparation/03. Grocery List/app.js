function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
    const tableBody = document.getElementById('tbody');

    const addProductBtn = document.getElementById('add-product');
    const updateProductBtn = document.getElementById('update-product');
    const loadProductsBtn = document.getElementById('load-product');


    addProductBtn.addEventListener('click', addProductEventHandler);
    updateProductBtn.addEventListener('click', updateProductBtnHandler);
    loadProductsBtn.addEventListener('click', loadProductsEventHandler);

    const inputDomElements = {
        productName: document.getElementById('product'),
        productCount: document.getElementById('count'),
        productPrice: document.getElementById('price')
    }

    const productsObj = {};
    let editingProductId = null;

    function addProductEventHandler(e) {
        const allFieldsNotEmpty = Object.values(inputDomElements)
        .every((input) => input.value !== '');

        if (!allFieldsNotEmpty) {
            return;
        }

        e.preventDefault();
        
        const httpHeaders = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                product: inputDomElements.productName.value,
                count: inputDomElements.productCount.value,
                price: inputDomElements.productPrice.value
            })
        }

        fetch(BASE_URL, httpHeaders)
        .then(() => {
            // Clear inputs
            for (const element of Object.values(inputDomElements)) {
                element.value = '';
            }
            loadProductsEventHandler(e);
        }).catch((err) => {
            console.log(err);
        })
    }

    async function loadProductsEventHandler(e) {
        if (e) {
            e.preventDefault();
        }
        
        tableBody.textContent = '';

        try {
            const response = await fetch(BASE_URL);
            const productData = await response.json();
            for (const key in productData) {
                const currentProductData = productData[key];
                const currentProductId = productData[key]._id;
                const currentProduct = currentProductData.product;
                const currentProductCount = currentProductData.count;
                const currentProductPrice = currentProductData.price;

                productsObj[currentProductId] = {currentProduct, currentProductCount, currentProductPrice};


                // Create the new row for the product
                const row = document.createElement('tr');

                const productNameTd = document.createElement('td');
                productNameTd.classList = 'name';
                productNameTd.textContent = currentProduct;

                const productCountTd = document.createElement('td');
                productCountTd.classList = 'count-product';
                productCountTd.textContent = currentProductCount;

                const productPriceTd = document.createElement('td');
                productPriceTd.classList = 'product-price';
                productPriceTd.textContent = currentProductPrice;

                const productButtonsTd = document.createElement('td');
                productButtonsTd.classList = 'btn';
                
                const updateBtn = document.createElement('button');
                updateBtn.classList = 'update';
                updateBtn.textContent = 'Update';
                updateBtn.addEventListener('click', () => updateProductEventHandler(currentProductId));

                const deleteBtn = document.createElement('button');
                deleteBtn.classList = 'delete';
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', () => deleteProductEventHandler(currentProductId));

                productButtonsTd.appendChild(updateBtn);
                productButtonsTd.appendChild(deleteBtn);
                row.appendChild(productNameTd);
                row.appendChild(productCountTd);
                row.appendChild(productPriceTd);
                row.appendChild(productButtonsTd);
                tableBody.appendChild(row);
            }
        } catch(err) {
            console.log(err);
        }
    }

    function updateProductEventHandler(productId) {
        editingProductId = productId;
        const currentProductToEdit = productsObj[productId];
        inputDomElements.productName.value = currentProductToEdit.currentProduct;
        inputDomElements.productCount.value = currentProductToEdit.currentProductCount;
        inputDomElements.productPrice.value = currentProductToEdit.currentProductPrice;

        delete productsObj[productId];

        addProductBtn.disabled = true;
        updateProductBtn.disabled = false;
    }

    async function deleteProductEventHandler(productId) {
        try {
            const response = await fetch(`${BASE_URL}${productId}`, { method: 'DELETE' });
            loadProductsEventHandler();
        } catch (error) {
            console.log(error);
        }
    }

    function updateProductBtnHandler() {
        const productNewName = inputDomElements.productName.value;
        const productNewCount = inputDomElements.productCount.value;
        const productNewPrice = inputDomElements.productPrice.value;

        const httpHeaders = {
            method: 'PATCH',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                product: productNewName,
                count: productNewCount,
                price: productNewPrice
            })
        }

        fetch(`${BASE_URL}${editingProductId}`, httpHeaders)
        .then((res) => {
            if (res.ok) {
                for (const element of Object.values(inputDomElements)) {
                    element.value = '';
                }
                loadProductsEventHandler();
                addProductBtn.disabled = false;
            }
        }).catch((err) => {
            console.log(err);
        })
    }
}

attachEvents();
