module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-wrap-multilines": ["error", {
            'declaration': "true",
            'assignment': "parens-new-line",
            'return': "parens-new-line",
            'arrow': "parens-new-line",
            'condition': 'ignore',
            'logical': 'parens',
            'prop': 'parens-new-line',
        }],
        "react/jsx-one-expression-per-line": ["error", { "allow": "single-child" }]
    },
    "settings": {
        react: {
            version: "detect"
        }
    },
};