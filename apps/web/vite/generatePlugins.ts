import { PluginOption } from 'vite'

type PluginDescription = {
    plugin: () => PluginOption | PluginOption[]
    dev?: boolean
    ignore?: boolean;
}

export function generatePlugins(plugins: PluginDescription[], dev: boolean) {
    return plugins.reduce<PluginOption[]>((acc, current) => {
        if ((current.dev === undefined || current.dev === dev) && current.ignore !== true) {
            acc.push(current.plugin())
        }

        return acc
    }, [])
}
