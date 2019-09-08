module.exports = {
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
    ],
    env: {
        'node': true,
        'browser': true,
    },
    globals: {
        'axios': true,
        '$cookies': true,
        'Vue': true,
    },
    rules: {
        'indent': 'off',
        'no-console': 0,
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-indent': [
            'error',
            4
        ],
        'vue/script-indent': ['error', 4, {
            'baseIndent': 1,
            'switchCase': 1,
        }],
        'vue/component-name-in-template-casing': 'off',
        'no-var': 1,
        'vue/no-v-html': 'off',
        'no-unused-vars': [1, { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
    },
    parserOptions: {"parser": "babel-eslint"}
};
