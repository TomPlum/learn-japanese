module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
