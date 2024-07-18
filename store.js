function createStore() {
    const storeContainer = document.getElementById('store-container');
    const storeForm = document.createElement('div');

    storeForm.innerHTML = `
        <h2>Create a Product</h2>
        <input type="text" id="product-name" placeholder="Product Name"><br>
        <input type="number" id="product-quantity" placeholder="Quantity"><br>
        <input type="file" id="product-image"><br>
        <button onclick="addProduct()">Add Product</button>
    `;

    storeContainer.appendChild(storeForm);
}

function addProduct() {
    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;
    const productImage = document.getElementById('product-image').files[0];

    const storeContainer = document.getElementById('store-container');
    const productElement = document.createElement('div');

    const reader = new FileReader();
    reader.onload = function(e) {
        productElement.innerHTML = `
            <h3>${productName}</h3>
            <p>Quantity: ${productQuantity}</p>
            <img src="${e.target.result}" alt="${productName}">
        `;
        storeContainer.appendChild(productElement);
    }
    reader.readAsDataURL(productImage);
}
