import webpack from 'webpack';

import paths from './paths';
import rules from './rules';

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: paths.outputPath,
        chunkFilename: '[name].js'
    },
    module: {
        rules
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 450000,
        maxEntrypointSize: 8500000,
        assetFilter: assetFilename => {
            return (
                assetFilename.endsWith('.css') || assetFilename.endsWith('.js') || assetFilename.endsWith('.less')
            );
        }
    },
    optimization: {
        splitChunks: {
          minSize: 10000,
          maxSize: 250000,
        }
    },
    devServer: {
        contentBase: paths.outputPath,
        compress: true,
        hot: true,
        historyApiFallback: true,
        port: 5500
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};