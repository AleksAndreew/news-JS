const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
        module: true,
    },

    experiments: {
        outputModule: true,
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            noEmit: false,
                        },
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],

    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
};
