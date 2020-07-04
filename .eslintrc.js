module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
    "parser": "babel-eslint"
  },
  "extends": [      
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 'off',
  }
}
