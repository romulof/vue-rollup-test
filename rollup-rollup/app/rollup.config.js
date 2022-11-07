const { DEFAULT_EXTENSIONS } = require('@babel/core');
const { babel } = require('@rollup/plugin-babel');
const node = require('@rollup/plugin-node-resolve');
const bundleScss = require('rollup-plugin-bundle-scss');
const typescript = require('rollup-plugin-typescript2');
const vue = require('rollup-plugin-vue2');

const nodeResolveOptions = {
    extensions: ['.vue', '.ts'],
};

const babelOptions = {
    babelHelpers: 'bundled',
    extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
};

const vuePluginConfig = {
    template: {
        isProduction: true,
        compilerOptions: {
            whitespace: 'condense',
        },
    },
    defaultLang: {
        script: 'ts',
        style: 'scss',
    },
};

const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};

module.exports = () => [
    {
        input: 'src/index.ts',
        external: ['vue'],
        output: {
            format: 'es',
            name: capitalize('lib'),
            dir: 'dist',
            exports: 'named',
            // banner: bannerTxt,
            globals: {
                vue: 'Vue',
            },
        },
        plugins: [
            node(nodeResolveOptions),
            typescript(),
            bundleScss(),
            vue(vuePluginConfig),
            babel(babelOptions),
        ],
    },
];
