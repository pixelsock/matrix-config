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
    liveReload: true, // Enable live reloading
    compress: true, // Enable gzip compression
    port: 9000, // Use port 9000
    open: true, // Open the default browser when the server starts
  },
};