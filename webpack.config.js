const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'main.js'), // Entry point of your application
  watch: true, // Enable watching
  output: {
    filename: 'build.js', // Output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
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
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from the dist directory
    },
    compress: true,
    port: 9000, // Port for the development server
    open: true, // Open the page in browser
  },
  
};