const path = require('path');

module.exports = {
  entry: './src/index.js', // The entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // The output directory for bundled files
    filename: 'bundle.js' // The name of the output bundle file
    
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        // ...other loader configuration...
      },
      // ...other rules...
    ],
  },
  module: {
    rules: [
      {

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
}
