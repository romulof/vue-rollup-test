// @ts-ignore
// @ts-nocheck
const  fs = require('fs');
const  path = require('path');
const { DEFAULT_EXTENSIONS } = require('@babel/core');
const  { babel } = require('@rollup/plugin-babel');
const  node = require('@rollup/plugin-node-resolve');
const  bundleScss = require('rollup-plugin-bundle-scss');
const  typescript = require('rollup-plugin-typescript2');
const vue = require('rollup-plugin-vue2');

const baseFolder = './src'

const components = fs
    .readdirSync(baseFolder)
    .filter((f) =>
        fs.statSync(path.join(baseFolder, f)).isDirectory()
    )

const entries = {
    'index': './src/index.ts',
    // 'helpers': './src/utils/helpers.ts',
    // 'config': './src/utils/config.ts',
    // ...components.reduce((obj, name) => {
    //     obj[name] = (baseFolder + '/' + name + '.vue')
    //     return obj
    // }, {})
}

const babelOptions = {
    babelHelpers: 'bundled',
    extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
        '.tsx'
    ],
}

const nodeResolveOptions = {
    extensions: ['.vue', '.ts']
}

const vuePluginConfig = {
    template: {
        isProduction: true,
        compilerOptions: {
            whitespace: 'condense'
        }
    },
    defaultLang: {
        script: 'ts' ,
        style: 'scss'
    },
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

module.exports = () => {
    let config = [
        {
            input: entries,
            external: ['vue'],
            output: {
                format: 'esm',
                dir: `dist/esm`,
                entryFileNames: '[name].mjs',
                chunkFileNames: '[name]-[hash].mjs',
            },
            plugins: [
                node(nodeResolveOptions),
                typescript(),
                bundleScss(),
                vue(vuePluginConfig),
                babel(babelOptions),
            ]
        },
        {
            input: 'src/index.ts',
            external: ['vue'],
            output: {
                format: 'umd',
                name: capitalize('lib'),
                file: 'dist/lib.js',
                exports: 'named',
                // banner: bannerTxt,
                globals: {
                    vue: 'Vue'
                }
            },
            plugins: [
                node(nodeResolveOptions),
                typescript(),
                bundleScss(),
                vue(vuePluginConfig),
                babel(babelOptions),
            ]
        },
        {
            input: 'src/index.ts',
            external: ['vue'],
            output: {
                format: 'esm',
                file: 'dist/lib.mjs',
                // banner: bannerTxt
            },
            plugins: [
                node(nodeResolveOptions),
                typescript(),
                bundleScss(),
                vue(vuePluginConfig),
                babel(babelOptions),
            ]
        }
    ]

    return config
}