/**
 * @callback plugin
 * @returns {import('vite').PluginOption | import('vite').PluginOption[]}
 */

/**
 * @typedef {Object} PluginDescription
 * @property {plugin} plugin
 * @property {boolean} dev
 * @property {boolean} ignore
 */

/**
 *
 * @param {PluginDescription} plugins
 * @param {boolean} dev
 * @returns {import('vite').PluginOption[]}
 */
export default function generatePlugins(plugins, dev) {
    return plugins.reduce((acc, current) => {
        if ((current.dev === undefined || current.dev === dev) && current.ignore !== true) {
            acc.push(current.plugin())
        }

        return acc
    }, [])
}
