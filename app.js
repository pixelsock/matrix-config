const swell = require('swell-node');

swell.init('matrix', '75Xly12eYCN0MEiv7M7NZl3hOkYTnUob');

async function getVariantsWithImages() {
  try {
    const products = await swell.products.list();
    const variantsWithImages = [];
    for (const product of products) {
      for (const variant of product.variants) {
        if (variant.image) {
          variantsWithImages.push(variant);
        }
      }
    }
    return variantsWithImages;
  } catch (error) {
    console.error('Error getting variants with images:', error);
  }
}

getVariantsWithImages().then(variants => console.log(variants));
