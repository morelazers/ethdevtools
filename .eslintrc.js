// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  globals: {
    "chrome": true,
  },
  extends: [
    'airbnb-base',
    // 'plugin:vue/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    // 'import/extensions': ['error', 'always', {
    //   js: 'never',
    //   vue: 'never'
    // }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-return-assign': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production'
      ? ['error', { "args": "none" }]
      : 'off'
    ,
    'no-plusplus': 0, // i++ OK :D
    'no-else-return': ["error", { allowElseIf: true }],
    'arrow-parens': ["error", "always"], // Forces `(thing) -> thing.x`
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex store
        'payload',
      ],
    }],
    // TODO: write custom rule to allow as object props
    'global-require': 0, // allows importing components into an object
    // TODO: figure out how to enforce this just within vue watchers?
    'func-names': 0,
    // sometimes it makes sense if you think the file will soon be expanded
    'import/prefer-default-export': 0,
    'radix': 0,
    'no-confusing-arrow': 0,
  }
}