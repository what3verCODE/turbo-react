import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite as routerPlugin } from '@tanstack/router-plugin/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import MillionCompiler from '@million/lint'

import generatePlugins from './vite/generatePlugins.js'
import generateChunksObject from './vite/generateChunks.js'

export default defineConfig((config) => {
    return {
        plugins: generatePlugins(
            [
                // https://marketplace.visualstudio.com/items?itemName=million.million-lint
                { plugin: () => MillionCompiler.vite(), dev: true, ignore: true },
                { plugin: () => react() },
                {
                    plugin: () =>
                        routerPlugin({
                            routesDirectory: './src/pages',
                            generatedRouteTree: './src/app/router/router.gen.ts',
                            routeFileIgnorePrefix: '-',
                            quoteStyle: 'single',
                            disableLogging: true,
                        }),
                    dev: true,
                },
                { plugin: () => tsconfigPaths() },
            ],
            config.command === 'serve'
        ),
        build: {
            rollupOptions: {
                output: {
                    manualChunks: generateChunksObject(),
                },
            },
        },
    }
})
