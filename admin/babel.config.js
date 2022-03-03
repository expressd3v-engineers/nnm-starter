module.exports = function (api) {
    api.cache(true);

    const presets = ["next/babel"];
    const plugins = [
        ["import", {libraryName: "antd", style: true}],
        [
            "styled-components",
            {
                ssr: true,
            },
        ]
    ];

    return {
        presets,
        plugins,
    };
};
