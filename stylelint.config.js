/** @type {import('stylelint').Config} */
export default {
    extends: [
        "stylelint-config-recommended",
        "stylelint-config-standard",
    ],
    overrides: [
        {
            files: ["**/*.scss"],
            customSyntax: "postcss-scss"
        }
    ],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                ],
            },
        ],
        'function-no-unknown': [
            true,
            {
                ignoreFunctions: ['theme'],
            },
        ],
        'no-descending-specificity': null,
    }
}
