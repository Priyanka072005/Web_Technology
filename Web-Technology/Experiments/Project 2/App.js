document.addEventListener("DOMContentLoaded", init);

async function init() {
    try {
        const products = await fetchProducts();

        if (!products) return;
        displayProducts(products);

    } catch (error) {
        console.error("App Error:", error);
    }
}