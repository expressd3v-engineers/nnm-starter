const withPlugins = require("next-compose-plugins");
const withAntdLess = require("next-plugin-antd-less");

module.exports = withPlugins(
    [
        [
            withAntdLess,
            {
                modifyVars: {
                    "@primary-color": "#000000",
                },
                cssLoaderOptions: {},
            }
        ]
    ],
    {
        env: {
            PORT: process.env.PORT
        },
        reactStrictMode: true,
    }
)
