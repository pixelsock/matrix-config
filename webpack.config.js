const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'main.js'), // Entry point of your application
    productsPage: path.resolve(__dirname, 'src', 'products-page.js') // Entry point for products-page.js
  },
  output: {
    filename: '[name].build.js', // Output bundle file with dynamic name
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/'
  },
  
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to files ending in .js
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript
          options: {
            presets: ['@babel/preset-env'], // Use the preset for latest ECMAScript features
          },
        },
      },
    ],
  },
  devServer: {
    host: '0.0.0.0', // This allows external access
    port: 9000,
    https: false,
    hot: true,
    allowedHosts: [
      'localhost',
    ],
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};