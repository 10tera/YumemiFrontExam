/**
 * @type import('webpack').Configuration
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./src/main.tsx",
    output: {
        path: path.resolve(__dirname,"docs/"),
        filename: "[name].js",
    },
    module: {
        rules: [{
            test: /\.ts[x]?$/ , use: "ts-loader"
        }]
    },
    target: "web",
    resolve: {
        extensions: [".ts",".js",".tsx",".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
        }),
    ],
    devServer: {},
    watch: true
}