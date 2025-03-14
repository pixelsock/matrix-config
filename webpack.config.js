const path = require('path');
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    main: path.resolve(__dirname, 'src', 'main.js'),
    productsPage: path.resolve(__dirname, 'src', 'products-page.js')
  },
  output: {
    filename: '[name].build.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  
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
    allowedHosts: 'all',
    client: {
      overlay: {
        errors: true,
        warnings: true,
        runtimeErrors: true,
      },
      logging: 'verbose',
      progress: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    static: {
      directory: path.join(__dirname, 'dist')
    }
  },
  stats: 'errors-only',
  infrastructureLogging: {
    level: 'warn',
    debug: ['webpack-dev-server'],
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Your application is running at http://localhost:9000'],
      },
      clearConsole: true,
      formatters: [
        function(messages) {
          return messages;
        }
      ],
      transformers: [
        function(error) {
          if (error.file) {
            error.message = `Error in ${error.file}:${error.line || 0}\n${error.message}`;
          }
          return error;
        }
      ],
    }),
  ],
};

