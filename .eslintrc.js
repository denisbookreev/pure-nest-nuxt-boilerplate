module.exports = {
  root: true,
  env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
      jest: true,
  },
  extends: [
      '@nuxtjs/eslint-config-typescript',
      'plugin:nuxt/recommended',
  ],
};
