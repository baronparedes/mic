const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const buildPath = path.join(__dirname, './build');
const imgPath = path.join(__dirname, './src/img');
const sourcePath = path.join(__dirname, './src');
const stylesPath = path.join(__dirname + './src/styles');

// Common plugins
const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(sourcePath, 'index.html'),
    path: buildPath,
    filename: 'index.html',
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor-[hash].js',
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer({
          browsers: [
            'last 3 version',
            'ie >= 10',
          ],
        }),
      ],
      context: sourcePath,
    },
  }),
];

// Common rules
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
  {
    test: /\.png$/,
    use: "url-loader?limit=100000"
  },
  {
    test: /\.(jpg|jpeg)$/,
    use: "file-loader"
  },
  {
    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
    use: 'url-loader?limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    use: 'url-loader?limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    use: 'file-loader'
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
  }
];

if (isProduction) {
  // Production plugins
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    new ExtractTextPlugin('style-[hash].css')
  );

  // Production rules
  rules.push(
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ]
    },
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      }),
    }
  );
}
else {
  // Development plugins
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style-[hash].css')
  );

  // Development rules
  rules.push(
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ]
    },
    {
      test: /\.less$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        // Using source maps breaks urls in the CSS loader
        // https://github.com/webpack/css-loader/issues/232
        // This comment solves it, but breaks testing from a local network
        // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
        // 'css-loader?sourceMap',
        'css-loader',
        'postcss-loader',
        'less-loader?sourceMap',
      ],
    }
  );
}

module.exports = {
  devtool: isProduction ? 'eval' : 'source-map',
  context: sourcePath,
  entry: {
    js: './index.jsx',
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-bootstrap',
      'classnames'
    ],
  },
  output: {
    path: buildPath,
    publicPath: '/assets',
    filename: 'app-[hash].js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.css', '.less'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath,
    ],
  },
  plugins,
  devServer: {
    contentBase: isProduction ? './build' : './src',
    historyApiFallback: true,
    port: 3000,
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: 'localhost',
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
};
