const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    productionSourceMap: false, // 生产打包时不输出map文件，增加打包速度
    pwa: {
        iconPaths: {
            favicon32: "favicon.ico",
            favicon16: "favicon.ico",
            appleTouchIcon: "favicon.ico",
            maskIcon: "favicon.ico",
            msTileImage: "favicon.ico"
        }
    },
    configureWebpack: {
        module: {
            rules: [{
                test: /\.js$/,
                use: ["thread-loader", 'babel-loader'],
                include: path.resolve('src'),
                exclude: /node_modules/
            }]
        },
        // 缩小你的JavaScript 生产环境删除console.log。
        optimization: {
            minimizer: [
                new TerserPlugin({
                    // pure_funcs: ['console.log'],
                    cache: true, //开启文件缓存
                    parallel: true, //开启并发 也也可以指定并发数
                }),
            ],
        }
    },
    chainWebpack: config => {
        config
            .plugin('webpack-bundle-analyzer')
            .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
};