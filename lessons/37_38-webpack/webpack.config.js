const { resolve } = require('path')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');


const isProduction = process.env.NODE_ENV === 'production'

const productionPlugin = [
    new MiniCssExtractPlugin(),
]
const config = {
    devtool: 'source-map',
    mode: isProduction ? 'production' : 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [isProduction ? MiniCssExtractPlugin.loader :'style-loader',
                 'css-loader'
                ],
            },
            {
                test: /\.png|jpeg$/i,
                use: ['file-loader'],
            },
            {
                test: /\.woff2$/i,
                use: ['file-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
            },
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            'src',
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ImageMinimizerPlugin({
            minimizerOptions: {
              plugins: [
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }],
              ],
            },
          }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ].concat(isProduction ? productionPlugin : []),
    devServer: {
        contentBase: '/.dist',
        historyApiFallback : true,
    },
}

if(isProduction){
    config.optimization = {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ], 
    }
}

if (module.hot) {
    module.hot.accept('./components/Header', () => {
      console.log('Accepting the updated printMe module!');
      render();
    })
  }

module.exports = config
