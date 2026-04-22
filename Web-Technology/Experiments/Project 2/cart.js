document.addEventListener("DOMContentLoaded", loadCartPage);

function loadCartPage() {
    displayCartItems();
}

// Display cart products
function displayCartItems() {

    const cart = getCart();
    const container = document.getElementById("cartContainer");
    const totalElement = document.getElementById("totalPrice");

    container.innerHTML = "";

    // If cart empty
    if (cart.length === 0) {
        container.innerHTML = "<h2>Your cart is empty 🛒</h2>";
        totalElement.textContent = "0";
        return;
    }

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}" width="120">
            <h3>${product.title}</h3>
            <p>₹ ${product.price}</p>
            <button class="remove-btn" data-index="${index}">
                Remove
            </button>
        `;

        container.appendChild(card);
    });

    // Update total price
    totalElement.textContent = total.toFixed(2);
}

//remove event handled
document.addEventListener("click", function(e) {

    if (e.target.classList.contains("remove-btn")) {

        const index = Number(e.target.dataset.index);
        const cart = getCart();
        cart.splice(index, 1); // remove item
        saveCart(cart);

        displayCartItems();
    }
});


// ===============================
// Buy Button
// ===============================
function placeOrder() {

    const cart = getCart();

    // ✅ check if cart is empty
    if (cart.length === 0) {
        alert("⚠️ Please add products to cart first!");
        return; // stop execution
    }

    alert("✅ Your order is placed successfully!");

    // Clear cart
    saveCart([]);

    displayCartItems();
}