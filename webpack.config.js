const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pages = ['index', 'marketplace', 'auctions', 'drops'];

module.exports = {
  mode: 'production',
  entry: pages.reduce((entries, page) => {
    if (page === 'index') {
      entries[page] = `./src/js/${page}.js`;
    } else {
      entries[page] = `./src/js/components/${page}.js`;
    }
      return entries;
  }, {}),
  devServer: {
    static: './dist',
  },
  plugins: [].concat(pages.map(page => {
    if (page === 'index') {
      return new HtmlWebpackPlugin({
        inject: true,
        template: `./src/${page}.html`,
        filename: `${page}.html`,
        chunks: [page],
      });
    } else {
      return new HtmlWebpackPlugin({
        inject: true,
        template: `./src/components/${page}.html`,
        filename: `components/${page}.html`,
        chunks: [page],
      });
    }
  })).concat([
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css'
    })
  ]),
  output:{
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'assets/[name][ext][query]',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ico|png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]'
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};