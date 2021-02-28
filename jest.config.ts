module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
        "<rootDir>/jest-setup.ts",
        "@testing-library/react/cleanup-after-each",
        "@testing-library/jest-dom/extend-expect"
    ],
    moduleFileExtensions: ["ts", "tsx"]
}

export {}