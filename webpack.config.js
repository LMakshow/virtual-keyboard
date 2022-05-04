const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/js/scripts.js',
    styles: './src/sass/styles.scss',
  },
  // devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Virtual Keyboard',
      meta: {
        viewport: 'width=device-width, initial-scale=1',
        description: 'That\'s a virtual keyboard. It has so many buttons to click! Type anything and unleash your creativity!',
        author: 'Maksym Lytvyn',
        themeColor: '#ffffff',
        prop1: {
          property: 'og:title',
          content: 'Virtual Keyboard',
        },
        prop2: {
          property: 'og:type',
          content: 'website',
        },
        prop3: {
          property: 'og:description',
          content: 'That\'s a virtual keyboard. It has so many buttons to click! Type anything and unleash your creativity!',
        },
      },
      favicon: './src/img/favicon/apple-icon.png',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
