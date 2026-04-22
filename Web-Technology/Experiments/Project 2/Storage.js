const CART_KEY = "cart";

function getCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(product) {

    const cart = getCart();
    cart.push(product);
    saveCart(cart);
}

function removeFromCart(index) {

    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
}

function clearCart() {
    localStorage.removeItem(CART_KEY);
}

function getCartCount() {
    return getCart().length;
}