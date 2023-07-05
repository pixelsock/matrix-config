const swell = require('swell-node');

swell.init('your-store-id', 'your-secret-key');

// Function to update a product
async function updateProduct(productId, productData) {
    try {
        const updatedProduct = await swell.products.update(productId, productData);
        console.log(updatedProduct);
    } catch (error) {
        console.error(error);
    }
}

// TODO: Call the function with actual product id and data
// updateProduct('product-id', { name: 'New Product Name' });
