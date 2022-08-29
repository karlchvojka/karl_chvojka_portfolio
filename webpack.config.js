const path = require('path')

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'main.js',
  },
  target: 'web',
  devServer: {
    port: '9500',
    static: ['./public'],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    alias: {
      path: require.resolve('path-browserify'),
      public: path.resolve(__dirname, './public'),
      src: path.resolve(__dirname, './src'),
      elements: path.resolve(__dirname, './src/components/elements'),
      globalAssets: path.resolve(__dirname, './src/globalAssets'),
      globalConfig: path.resolve(__dirname, './src/globalConfig'),
      modules: path.resolve(__dirname, './src/components/modules'),
      pages: path.resolve(__dirname, './src/components/pages'),
      templates: path.resolve(__dirname, './src/components/templates'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
}
