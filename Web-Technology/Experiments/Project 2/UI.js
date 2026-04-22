let allProducts = [];

function displayProducts(products) {

    const container = document.getElementById("productContainer");
    allProducts = products;

    container.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="price">₹ ${product.price}</p>

            <button 
                class="add-cart" 
                data-id="${product.id}">
                Add to Cart
            </button>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("click", function(e) {

    if (e.target.classList.contains("add-cart")) {

        const id = Number(e.target.dataset.id);
        const selectedProduct = allProducts.find(
            product => product.id === id
        );

        addToCart(selectedProduct);

        // updateCartCount();
        alert("✅ Product added to cart!");
    }
});