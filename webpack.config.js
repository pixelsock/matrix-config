const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'main.js'), // Entry point of your application
  output: {
    filename: 'build.js', // Output bundle file
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
      '.matrixmirrors.com', // This allows any subdomain of matrixmirrors.com
    ],
    proxy: {
      '/': {
        target: 'https://matrixmirrors.com',
        changeOrigin: true,
        secure: false,
      },
      '/sockjs-node': {
        target: 'https://matrixmirrors.com',
        ws: true,
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};