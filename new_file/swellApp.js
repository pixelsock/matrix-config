const swell = require('swell-node');

swell.init('your-store-id', 'your-secret-key');

swell.products.list().then(products => {
  console.log(products);
}).catch(error => {
  console.error(error);
});
