/*
 * For a detailed explanation regarding each configuration property and type check visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import("jest").Config} */
module.exports = {
    roots: ["<rootDir>"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    modulePathIgnorePatterns: [
        "<rootDir>/test/__fixtures__",
        "<rootDir>/node_modules",
        "<rootDir>/dist",
    ],
    preset: "ts-jest",
    reporters: [
        ["jest-clean-console-reporter", {}]
    ]
}