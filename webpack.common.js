// requires ================================================= //
const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// constants ================================================= //
const SRC_PATH = path.resolve(__dirname, "./src");
const PATHS = {
    "@app"     : `${SRC_PATH}/app/index.tsx`,
    "@pages"   : `${SRC_PATH}/pages`,
    "@shared"  : `${SRC_PATH}/shared`,
    "@widgets" : `${SRC_PATH}/widgets`,
    "@features": `${SRC_PATH}/features`,
    "@entities": `${SRC_PATH}/entities`,
};

// main ===================================================== //
const commonConfig = {
    entry: `${SRC_PATH}/index.tsx`,
    output: {
        clean: true,
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            // importLoaders: 1
                        }
                    }
                ]
            },
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                type: "asset/resource",
            },
            {
                test: /\.(ttf|woff|eot|otf|woff(2)?|)$/,
                type: "asset/resource",
            }
        ]
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: `${SRC_PATH}/index.html`,
            minify: "auto"
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
        alias: PATHS
    },
};

// exports ================================================== //
module.exports = commonConfig;