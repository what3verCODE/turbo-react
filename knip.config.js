/** @type {import('knip').KnipConfig} */
export default {
    workspaces: {
        "projects/server": {
            entry: ["src/main.tsx"],
            project: ["**/*.ts"]
        },
        "projects/web": {
            entry: ["src/main.tsx"],
            project: ["**/*.{ts,tsx}"],
            ignore: ["src/vite-env.d.ts"]
        },
    },
    ignoreWorkspaces: ["projects/typescript-config", "projects/jest-presets", "projects/server"]
}
