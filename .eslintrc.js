module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  "env" : {
    "browser" : true,
    "node" : true,
    "es6" : true
  },
  rules: {
    'no-unused-vars' : 2,
    'no-undef' : 2,
    'no-new': 0
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ]
}