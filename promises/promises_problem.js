async function fetchcart(callback) {
    const resonse = await fetch("https://fakestoreapi.com/carts?limit=2");
    const responseBody = await resonse.json();
    let products = [];
    responseBody.map((productItem) => {
      products = [...products, ...productItem.products];
    });
  
    callback(products);
  }
  
  fetchcart(async (products) => {
    const response = await Promise.all(
      products.map(async (productItem) => {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productItem.productId}`
        );
        const finalRes = await response.json();
        return finalRes;
      })
    );
  
    console.log(response);
  });
  