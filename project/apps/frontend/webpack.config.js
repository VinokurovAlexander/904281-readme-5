const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const webpack = require('webpack');

// Nx plugins for webpack.
module.exports = composePlugins(
    withNx(),
    withReact({
        svgr: true,
        // Uncomment this line if you don't want to use SVGR
        // See: https://react-svgr.com/
        // svgr: false
    }),
    (config) => {
        config.plugins.push(
            new webpack.DefinePlugin({
                AUTH_API_BASE_URL: JSON.stringify(
                    process.env.AUTH_API_BASE_URL,
                ),
                POSTS_API_BASE_URL: JSON.stringify(
                    process.env.POSTS_API_BASE_URL,
                ),
            }),
        );

        // Update the webpack config as needed here.
        // e.g. `config.plugins.push(new MyPlugin())`
        return config;
    },
);
