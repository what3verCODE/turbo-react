import packageJson from '../package.json' assert { type: "json" };

/**
 *
 * @param {string[]} array
 * @param {string} str
 * @returns boolean
 */
function isIncluded(array, str) {
    return array.some((x) => str.includes(x))
}

const react = ['react', 'react-dom']

const redux = ['@reduxjs/toolkit', 'react-redux', 'redux-logger', 'redux-persist']

const i18n = ['react-intl']

const router = ['@tanstack/react-router']

/**
 *
 * @param {string} dependency
 * @returns boolean
 */
function existing(dependency) {
    return isIncluded(react, dependency) || isIncluded(redux, dependency) || isIncluded(i18n, dependency) || isIncluded(router, dependency)
}

const vendor = Object.keys(packageJson.dependencies).reduce((acc, dependency) => {
    if (!existing(dependency)) {
        acc.push(dependency)
    }

    return acc
}, [])

export default function generateChunksObject() {
    const result = {
        react: react,
        redux: redux,
        i18n: i18n,
        router: router,
        vendor: vendor,
    }

    return result
}
