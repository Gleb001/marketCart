// imports ================================================== //
const path = require("path");
const commonConfig = require("./webpack.common.js");
const { merge } = require("webpack-merge");

// constants ================================================ //
const SRC_PATH = path.resolve(__dirname, "./src");

// main ===================================================== //
const devConfig = {
    mode: "development",
    stats: {
        errorDetails: true
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        watchFiles: SRC_PATH,
        port: 8000
    },
};

// exports ================================================== //
module.exports = merge(commonConfig, devConfig);