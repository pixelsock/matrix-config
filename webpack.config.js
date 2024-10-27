const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'main.js'),
    productsPage: path.resolve(__dirname, 'src', 'products-page.js')
  },
  output: {
    filename: '[name].build.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/matrix-config/' // Updated for GitHub Pages
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
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
