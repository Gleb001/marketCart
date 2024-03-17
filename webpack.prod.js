// requires ================================================= //
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// main ===================================================== //
const prodConfig = {
    mode: "production",
    optimization: {
        minimize: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
    ]
};

// exports ================================================== //
module.exports = merge(commonConfig, prodConfig);