module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'backend/**'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': ['error', 'never'],
    "react/react-in-jsx-scope": "off",
    "object-curly-spacing": ['error', 'always'],
    "quote-props": ['error', 'as-needed'],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "indent": ['warn', 2, { "SwitchCase": 1 }],
    "@typescript-eslint/no-misused-promises": ["error", {
      "checksVoidReturn": false
    }]
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  }
}
