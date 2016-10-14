import webpack from 'webpack';
import pkg from './package.json';
import camelCase from 'camelcase';
import ExtractTextPlugin from "extract-text-webpack-plugin";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const webpackConfig = {
  output: {
    filename: pkg.name + '.js',
    library: capitalizeFirstLetter(camelCase(pkg.name)),
    library: pkg.moduleName,
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom'
    }
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }, {
      test: /\.(scss|css)$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.jsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })/*,
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })*/,
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin("react-gallery-swiper.css", {allChunks: false})
  ]
};

export default webpackConfig;
