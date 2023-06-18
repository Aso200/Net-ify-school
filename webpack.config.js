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
        test: /\.js$/, // Apply the following rules to JavaScript files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: 'babel-loader' // Use the babel-loader for transpiling JavaScript files
      }
    ]
  },
  resolve: {
    extensions: ['.js'] // List of file extensions to resolve
  }
};
