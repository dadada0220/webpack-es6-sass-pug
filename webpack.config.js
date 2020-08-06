const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')

module.exports = {

  entry: {
    application: path.resolve(__dirname, '_src/js/_index.js'),
    'style.css': path.resolve(__dirname, '_src/sass/_index.sass'),
  },

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'public/assets')
  },

  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]',
    })
  ],

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.css'],
  },

  devtool: 'source-map',

  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ],
  },

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ]
          }
        }]
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')({
                  grid: true
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          },
        ],
      },
    ]
  }
};