export default {
    syntax: 'postcss-scss',
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        "postcss-nested": {},
        "postcss-flexbugs-fixes": {},
        "postcss-preset-env": {
            autoprefixer: {
                flexbox: 'no-2009',
            },
            stage: 3,
            features: {
                'custom-properties': false,
            },
        },
    },
}
