module.exports = {
    env: {
        node: true,
        es6: true,
    },
    extends: ["eslint:recommended"],
    plugins: ["@typescript-eslint"],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    overrides: [
        {
            files: ["**/__tests__/**/*"],
            env: {
                jest: true,
            },
        },
    ],
}
