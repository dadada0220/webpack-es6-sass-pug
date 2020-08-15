const webpack = require('webpack');
const globule = require('globule');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const TerserPlugin = require('terser-webpack-plugin');

/**
 * 出力元と出力先のディレクトリを定義
 */
const dir = {
  src: path.join(__dirname, 'src'),
  public: path.join(__dirname, 'public')
};

/**
 * sassとjsの設定を定義
 */

const scssAndJsConfig = {
  entry: {
    application: path.resolve(dir.src, 'js/_index.js'),
    'style.css': path.resolve(dir.src, 'sass/_index.sass'),
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(dir.public, 'assets')
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
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
}

/**
 * pugの設定を定義
 */

const from = 'pug'
const to = 'html'
const entry = {}

globule.find([`**/*.${from}`, `!**/_*.${from}`], {
  cwd: dir.src
}).forEach(filename => {
  let _output = filename.replace(new RegExp(`.${from}$`, 'i'), `.${to}`);
  let _source = path.join(dir.src, filename);
  if (_output.indexOf('pug/') !== -1) {
    _output = _output.replace('pug/', '');
    entry[_output] = _source;
  }
});

const pugConfig = {
  entry: entry,
  output: {
    filename: '[name]',
    publicPath: '/',
    path: dir.public
  },
  module: {
    rules: [{
      test: /\.pug$/,
      use: ExtractTextPlugin.extract({
        use: [
          'html-loader',
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
            }
          }
        ]
      })
    }]
  },
  plugins: [new ExtractTextPlugin('[name]')],
}

/**
 * 実行
 */

module.exports = [
  scssAndJsConfig,
  pugConfig
];