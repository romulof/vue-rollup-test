const buildPresets = [
  [
    '@babel/preset-env',
    // Config for @babel/preset-env
    {
      modules: 'auto',
      // Example: Always transpile optional chaining/nullish coalescing
      // include: [
      //   /(optional-chaining|nullish-coalescing)/
      // ],
    },
  ],
  '@babel/preset-typescript',
];

module.exports = {
  presets: buildPresets,
};
