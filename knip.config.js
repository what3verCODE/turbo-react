/** @type {import('knip').KnipConfig} */
export default {
    includeEntryExports: true,
    rules: {
        files: "warn", // cannot ignore unused files which might exist as precursor work
        dependencies: "error",
        devDependencies: "error",
        optionalPeerDependencies: "error",
        unlisted: "error",
        binaries: "error",
        unresolved: "error",
        exports: "warn", // still open issues to squash
        types: "warn", // still open issues to squash
        nsExports: "off", // off by default
        nsTypes: "off", // off by default
        enumMembers: "off", // many open issues still; some might not be resolvable without changes to knip
        classMembers: "off", // off by default -- consumes a lot of memory and may cause crashes
        duplicates: "error",
    },
    workspaces: {
        "projects/server": {
            entry: ["src/main.ts"],
            project: ["**/*.ts"],
        },
        "projects/web": {
            entry: ["src/main.tsx"],
            project: ["**/*.{ts,tsx}"],
            ignore: ["src/vite-env.d.ts"],
        },
    },
    ignoreWorkspaces: ["projects/typescript-config", "projects/jest-presets", "projects/server"]
}
