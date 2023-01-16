const globals = require('globals');
const react = require('eslint-plugin-react');
const reactRecommended = require('eslint-plugin-react/configs/recommended');

module.exports = [
    reactRecommended,
    {
        files: ['./src/**/*.{ts,tsx}'],
        ignores: [],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
            },
        },
        plugins: [
            react
        ],
        rules: {
        }
    }
]
