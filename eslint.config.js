// https://github.com/eslint/eslint/discussions/16960
import globals from "globals";

import js from "@eslint/js";
import ts from 'typescript-eslint';
import jest from 'eslint-plugin-jest'
import prettier from 'eslint-config-prettier';

import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

// export default [
//     ...compat.extends("eslint:recommended"),
//     {
//         plugins: {
//             "@typescript-eslint": typescriptEslint,
//         },

//         languageOptions: {
//             globals: {
//                 ...globals.node,
//             },

//             ecmaVersion: 2020,
//             sourceType: "module",
//         },
//     },
//     {
//         files: ["**/__tests__/**/*"],

//         languageOptions: {
//             globals: {
//                 ...globals.jest,
//             },
//         },
//     }
// ];

const jestConfig = jest.configs['flat/recommended'];

/** @type {import('eslint').Linter.FlatConfig.Config[]} */
export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    ...ts.configs.stylistic,
    {
        name: "JavaScriptConfig",
        files: ["**/*.jsx?"],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: "module"
        }
    },
    {
        name: "TypeScriptConfig",
        files: ["**/*.tsx?"],
        plugins: {
            '@typescript-eslint': ts.plugin,
        },
        languageOptions: {
            parser: ts.parser,
            parserOptions: {
                project: true
            },
            ecmaVersion: 2020,
            sourceType: "module"
        }
    },
    {
        name: "ReactConfig",
        files: ["web/**/*.tsx?", "ui/**/*.tsx?"],
        languageOptions: {
            globals: {
                ...globals.browser,
            }
        }
    },
    {
        name: "ServerConfig",
        files: ["server/**/*.ts"],
        languageOptions: {
            globals: {
                ...globals.node,
            }
        }
    },
    {
        name: "TestConfig",
        files: ["**/__tests__/**/*"],
        languageOptions: {
            globals: {
                ...globals.jest,
            }
        },
        ...jestConfig,
    },
    prettier,
]
