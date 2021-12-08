module.exports = function override(webpackConfig) {
    webpackConfig.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
    });

    return webpackConfig;
}

module.exports = {
    jest: (config) => {
        config.collectCoverageFrom = [
            "src/**/*.{ts,tsx}",
            "!src/index.tsx",
            "!src/data/**",
            "!src/domain/game/mode/**",
            "!src/domain/learn/mode/**",
            "!src/tests"
        ];
        return config;
    }
}
