const API_URL = "https://fakestoreapi.com/products";

async function fetchProducts() {
    const loading = document.getElementById("loading");

    try {
        if (loading) loading.style.display = "block";

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();
        return products;
    } catch (error) {
        console.error("API Error:", error);
        alert("Unable to load products. Please try again later.");

        return [];
    } finally {
        if (loading) loading.style.display = "none";
    }
}