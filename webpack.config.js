const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeEnv = process.env.NODE_ENV || 'development';
const pathList = {
    dist: path.resolve(__dirname, 'www/build'),
    public: path.resolve(__dirname, 'www'),
    src: path.resolve(__dirname, 'src'),
};
const isProd = 'production' === nodeEnv;
const stats = {
    colors: true,
    errorDetails: true,
    reasons: isProd,
};

module.exports = {
    mode: isProd ? 'production' : 'development',
    devServer: isProd ? {} : {
        contentBase: pathList.public,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 8000,
        index: path.resolve(pathList.dist, './index.html'),
        stats,
    },
    devtool: isProd ? false : 'eval',
    module: {
        rules: getRuleList(),
    },
    output: {
        filename: '[name].min.js',
        path: pathList.dist,
        publicPath: '/build/',
    },
    resolve: {
        extensions: ['.es', '.js', '.jsx'],
        mainFiles: ['index'],
        modules: [
            path.resolve(pathList.src, '/modules'),
            pathList.src,
            'node_modules',
        ],
    },
    stats,
    watchOptions: {aggregateTimeout: 100},
};

function getRuleList() {
    const ruleListBase = getRuleListBase();
    const ruleListStyle = getRuleListStyle();

    return ruleListBase.concat(ruleListStyle);
}

function getRuleListBase() {
    return [
        {
            test: /\.html$/,
            use: {
                loader: 'file-loader',
                options: {name: '[name].[hash:5].[ext]'},
            },
        },
        {
            exclude: /node_modules/,
            test: /\.(es|js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {cacheDirectory: true},
            },
        },
    ];
}

function getRuleListStyle() {
    return [
        {
            test: /\.css$/,
            use: [
                isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                'css-loader',
                'postcss-loader',
            ],
        },
        {
            test: /\.less$/,
            use: [
                isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader',
                {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true,
                    },
                },
            ],
        },
    ];
}