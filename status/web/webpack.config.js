var rucksack = require('rucksack-css');
var webpack = require('webpack');
var path = require('path');

var ENV = process.env.NODE_ENV || 'development';
var isProd = ENV === 'production';
var isPerfDebug = process.env.NODE_ENV === 'perf-debug';
var isIntegrationTests = process.env.NODE_ENV === 'tests';
var WebpackErrorNotificationPlugin = require('webpack-error-notification');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  debug: !isProd,
  cache: !isProd,
  devtool: isProd ? '#source-map' : '#cheap-module-eval-source-map',
  context: path.join(__dirname, 'client'),
  entry: {
    index: './index.js'
  },
  output: {
    path: path.join(__dirname, '..', 'src', 'web'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: isProd ? ['babel'] : [
          'react-hot',
          'babel'
        ]
      },
      {
        test: /\.js$/,
        include: /node_modules(\/|\\)dapps-react-components/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        include: /client/,
        loaders: [
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss'
        ]
      },
      {
        test: /\.css$/,
        exclude: /client/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        loaders: [
          'style',
          'css',
          'less'
        ]
      },
      {
        test: /\.(png|jpg|)$/,
        loader: 'file-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(woff(2)|ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ],
    noParse: [
      /node_modules\/sinon/
    ]
  },
  resolve: {
    root: path.join(__dirname, 'node_modules'),
    fallback: path.join(__dirname, 'node_modules'),
    extensions: ['', '.js', '.jsx'],
    unsafeCache: true
  },
  resolveLoaders: {
    root: path.join(__dirname, 'node_modules'),
    fallback: path.join(__dirname, 'node_modules'),
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ],
  plugins: (function () {
    var plugins = [
      new WebpackErrorNotificationPlugin(),
      new LodashModuleReplacementPlugin(),
      // TODO [todr] paths in dapp-styles is hardcoded for meteor, we need to rewrite it here
      new webpack.NormalModuleReplacementPlugin(
        /ethereum_dapp-styles/,
        function (a) {
          a.request = a.request.replace('./packages/ethereum_dapp-styles', '.');
          a.request = a.request.replace('./lib/packages/ethereum_dapp-styles', '.');
          return a;
        }
      ),
      new webpack.NormalModuleReplacementPlugin(
        /dapp-styles\/hex-grid-tile\.png$/,
        require.resolve('dapp-styles/hex-grid-tile.png')
      ),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(ENV),
          RPC_ADDRESS: JSON.stringify(process.env.RPC_ADDRESS)
        }
      })
    ];

    if (!isPerfDebug) {
      plugins.push(replaceWithEmpty('perf-debug'));
    }

    if (!isIntegrationTests) {
      plugins.push(replaceWithEmpty('integration-tests'));
    }

    if (isProd) {
      plugins.push(new webpack.optimize.OccurrenceOrderPlugin(false));
      plugins.push(new webpack.optimize.DedupePlugin());
      plugins.push(new webpack.optimize.UglifyJsPlugin({
        screwIe8: true,
        compress: {
          warnings: false
        },
        output: {
          comments: false
        }
      }));
    }

    return plugins;
  }()),
  devServer: {
    contentBase: './client',
    hot: !isProd,
    proxy: {
      '/rpc*': {
        target: 'http://localhost:8080'
      },
      '/api*': {
        target: 'http://localhost:8080'
      },
      '/parity-utils/*': {
        target: 'http://localhost:8080'
      }
    }
  }
};

function replaceWithEmpty (what) {
  const r = new RegExp('(' + what + ')');
  return new webpack.NormalModuleReplacementPlugin(r, function (result) {
    result.request = result.request.replace(r, 'empty');
  });
}
