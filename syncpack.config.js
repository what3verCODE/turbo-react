/**
 * @see https://jamiemason.github.io/syncpack/config/syncpackrc/
 * @type {import("syncpack").RcFile}
 */
module.exports = {
    versionGroups: [
        {
            "dependencies": [
                "@repo/**"
            ],
            "isIgnored": true
        }
    ],
    semverGroups: [
        {
            range: "",
            dependencyTypes: [
                "prod",
                "resolutions",
                "overrides",
                "pnpmOverrides",
                "local"
            ],
            dependencies: [
                "**"
            ],
            packages: [
                "**"
            ]
        },
        {
            range: "~",
            dependencyTypes: [
                "dev"
            ],
            dependencies: [
                "**"
            ],
            packages: [
                "**"
            ]
        },
        {
            range: "^",
            dependencyTypes: [
                "peer"
            ],
            dependencies: [
                "**"
            ],
            packages: [
                "**"
            ]
        }
    ]
}
