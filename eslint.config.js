// https://github.com/eslint/eslint/discussions/16960
import globals from "globals";
import js from "@eslint/js";
import ts from 'typescript-eslint';
import jest from 'eslint-plugin-jest'
import prettier from 'eslint-config-prettier';

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
        ...jest.configs['flat/recommended'],
    },
    prettier,
]
