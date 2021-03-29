const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const isDev = process.env.NODE_ENV === 'development'
/*const isProd = process.env.NODE_ENV === 'production'*/

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`
const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env',
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }

    if (preset) opts.presets.push(preset)

    return opts
}
const cssLoaders = extra => {
    const loaders = [{
        loader: MiniCssExtractPlugin.loader
    }, 'css-loader']
    if (extra) loaders.push(extra)
    return loaders
}

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: 'development',
    entry: {
        app: './index.js'
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, './dist'),
        publicPath: "./",
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        inline: false,
        port: 3000
    },
    devtool: isDev ? 'source-map' : 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            filename: "index.html",
            template: "./templates/index.njk"
        }),
        new HTMLWebpackPlugin({
            filename: "base-for-sign.html",
            template: "./templates/base-for-sign.njk"
        }),
        new HTMLWebpackPlugin({
            filename: "header-for-sign.html",
            template: "./templates/header-for-sign.njk"
        }),
        new HTMLWebpackPlugin({
            filename: "sign-in-one.html",
            template: "./templates/sign-in-one.njk"
        }),
        new HTMLWebpackPlugin({
            filename: "sign-in-two.html",
            template: "./templates/sign-in-two.njk"
        }),
        new HTMLWebpackPlugin({
            filename: "sign-in-three.html",
            template: "./templates/sign-in-three.njk"
        }),
        new HTMLWebpackPlugin({
            filename: "sign-in-four.html",
            template: "./templates/sign-in-four.njk"
        }),
        new HTMLWebpackPlugin({
            filename: "sign-up-one.html",
            template: "./templates/sign-up-one.njk"
        }),
        new HTMLWebpackPlugin({
            filename: "sign-up-two.html",
            template: "./templates/sign-up-two.njk"
        }),
        new HTMLWebpackPlugin({
            filename: "sign-up-three.html",
            template: "./templates/sign-up-three.njk"
        }),
        new HTMLWebpackPlugin({
            filename: "sign-up-four.html",
            template: "./templates/sign-up-four.njk"
        }),
        new HTMLWebpackPlugin({
            filename: "sign-up-five.html",
            template: "./templates/sign-up-five.njk"
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/img/logoMain.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/logoName.png'),
                    to: path.resolve(__dirname, 'dist/img')
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions()
                }
            },
            {
                test: /\.njk$/,
                exclude: /node_modules/,
                use: [
                    'html-loader',
                    {
                        loader: 'nunjucks-html-loader',
                        options: {
                            searchPaths: ['./src/templates'],
                        },
                    },
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: cssLoaders('sass-loader')
            }
        ]
    }
}