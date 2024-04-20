async function fetchCart() {
    try {
        const response = await fetch("https://fakestoreapi.com/carts?limit=2");
        const results = await response.json();

        let products = [];
        results.forEach((item) => {
            products = [...item.products, ...products];
        });

        return products;
    } catch (err) {
        console.log(err);
        throw err; // Re-throw the error to propagate it to the caller
    }
}

async function displayData() {
    try {
        const products = await fetchCart();
        const results = await Promise.all(
            products.map(async (product) => {
                const res = await fetch(`https://fakestoreapi.com/products/${product.productId}`);
                const final = await res.json();
                return final;
            })
        );

        const container = document.getElementById("root");

        // Map through the data and create HTML elements
        const productListHTML = results.map((product) => {
            return `<div>
                        <h2>${product.title}</h2>
                        <p>${product.description}</p>
                        <img src="${product.image}" alt="${product.title}">
                     </div>`;
        });

        // Insert the HTML into the container
        container.innerHTML = productListHTML.join('');
    } catch (err) {
        console.log(err);
    }
}

// Call the displayData function to initiate the process
displayData();