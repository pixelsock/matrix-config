const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';
const baseUrl = isProduction ? '/matrix-config/production/' : '/matrix-config/development/';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    main: './src/main.js',
    productsPage: './src/products-page.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].build.js',
    publicPath: baseUrl,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `vendor.${packageName.replace('@', '')}`;
          },
        },
      },
    },
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
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/'
    },
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization, Private-Token',
      'Access-Control-Allow-Credentials': 'true'
    },
    devMiddleware: {
      publicPath: '/',
      writeToDisk: true
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: 'public/index.html', 
          to: 'index.html',
          transform(content) {
            return content
              .toString()
              .replace(
                './main.build.js',
                `${baseUrl}main.build.js`
              );
          },
        },
      ],
    }),
  ],
}
