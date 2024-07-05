import { dependencies } from '../package.json'

function isIncluded(array: string[], str: string) {
    return array.some(x => str.includes(x));
}

const react = ['react', 'react-dom']

const redux = ['@reduxjs/toolkit', 'react-redux', 'redux-logger', 'redux-persist']

const i18n = ['react-intl']

const router = ['@tanstack/react-router']

function existing(dependency: string) {
    return isIncluded(react, dependency) || 
    isIncluded(redux, dependency) || 
    isIncluded(i18n, dependency) || 
    isIncluded(router, dependency);
}

const vendor = Object.keys(dependencies).reduce<string[]>((acc, dependency) => {
    if (!existing(dependency)) {
        acc.push(dependency);
    }

    return acc;
}, [])

export function generateChunksObject() {
    const result = {
        react: react,
        redux: redux,
        i18n: i18n,
        router: router,
        vendor: vendor,
    }

    return result;
}