module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    /**
                     * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
                     */
                    '@components': './src/components',
                    '@components/*': './src/components/*',
                    '@services': './src/services',
                    '@services/*': './src/services/*',
                },
                extensions: [
                    '.ios.js',
                    '.android.js',
                    '.js',
                    '.jsx',
                    '.json',
                    '.tsx',
                    '.ts',
                    '.native.js',
                ],
            },
        ],
        [
            "@babel/plugin-proposal-decorators",
            {"legacy": true}
        ],
        // ["@babel/plugin-proposal-class-properties"],
    ],
    "assumptions": {
        "setPublicClassFields": true,
        "privateFieldsAsProperties": true,

    }
};
