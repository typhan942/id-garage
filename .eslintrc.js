module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "react-native/react-native": true,
    },
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": ["react", "react-native"],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/no-array-index-key": "off",
        "no-plusplus": "off",
        "radix": ["error", "as-needed"],
        "no-nested-ternary": "off",
        "no-return-assign": "off",
        "no-param-reassign": "off",
        "no-useless-escape": "off",
        "react/jsx-props-no-spreading": "off",
        "react/display-name": "off",
        "no-case-declarations": "off",
        // "react-native/no-unused-styles": 2,
        // "react-native/split-platform-components": 2,
        // "react-native/no-inline-styles": 2,
        // "react-native/no-color-literals": 2,
        // "react-native/no-raw-text": 2,
        // "accessor-pairs": "error",
        // "array-bracket-newline": "error",
        // "array-bracket-spacing": [
        //     "error",
        //     "never"
        // ],
        // "array-callback-return": "error",
        // "array-element-newline": "off",
        // "arrow-body-style": "error",
        // "arrow-parens": [
        //     "error",
        //     "always"
        // ],
        // "arrow-spacing": [
        //     "error",
        //     {
        //         "after": true,
        //         "before": true
        //     }
        // ],
        // "block-scoped-var": "error",
        // "block-spacing": "error",
        // "brace-style": "error",
        // "callback-return": "error",
        // "camelcase": "error",
        // "capitalized-comments": [
        //     "error",
        //     "never"
        // ],
        // "class-methods-use-this": "error",
        // "comma-dangle": "off",
        // "comma-spacing": [
        //     "error",
        //     {
        //         "after": true,
        //         "before": false
        //     }
        // ],
        // "comma-style": [
        //     "error",
        //     "last"
        // ],
        // "complexity": "error",
        // "computed-property-spacing": [
        //     "error",
        //     "never"
        // ],
        // "consistent-return": "error",
        // "consistent-this": "error",
        // "curly": "error",
        // "default-case": "error",
        // "default-case-last": "error",
        // "default-param-last": "off",
        // "dot-location": "error",
        // "dot-notation": "error",
        // "eol-last": "off",
        // "eqeqeq": "error",
        // "func-call-spacing": "error",
        // "func-name-matching": "error",
        // "func-names": "error",
        // "func-style": [
        //     "error",
        //     "expression"
        // ],
        // "function-call-argument-newline": [
        //     "error",
        //     "consistent"
        // ],
        // "function-paren-newline": "error",
        // "generator-star-spacing": "error",
        // "global-require": "error",
        // "grouped-accessor-pairs": "error",
        // "guard-for-in": "error",
        // "handle-callback-err": "error",
        // "id-blacklist": "error",
        // "id-length": "off",
        // "id-match": "error",
        // "implicit-arrow-linebreak": [
        //     "error",
        //     "beside"
        // ],
        // "indent": "off",
        // "indent-legacy": "off",
        // "init-declarations": "error",
        // "jsx-quotes": [
        //     "error",
        //     "prefer-double"
        // ],
        // "key-spacing": "off",
        // "keyword-spacing": [
        //     "error",
        //     {
        //         "after": true,
        //         "before": true
        //     }
        // ],
        // "line-comment-position": "error",
        // "linebreak-style": [
        //     "error",
        //     "unix"
        // ],
        // "lines-around-comment": "error",
        // "lines-around-directive": "error",
        // "lines-between-class-members": "error",
        // "max-classes-per-file": "error",
        // "max-depth": "error",
        // "max-len": "off",
        // "max-lines": "error",
        // "max-lines-per-function": "off",
        // "max-nested-callbacks": "error",
        // "max-params": "error",
        // "max-statements": "off",
        // "max-statements-per-line": "error",
        // "multiline-comment-style": [
        //     "error",
        //     "separate-lines"
        // ],
        // "new-cap": "error",
        // "new-parens": "error",
        // "newline-after-var": "off",
        // "newline-before-return": "off",
        // "newline-per-chained-call": "off",
        // "no-alert": "error",
        // "no-array-constructor": "error",
        // "no-await-in-loop": "error",
        // "no-bitwise": "error",
        // "no-buffer-constructor": "error",
        // "no-caller": "error",
        // "no-catch-shadow": "error",
        // "no-confusing-arrow": "error",
        // "no-console": "error",
        // "no-constructor-return": "error",
        // "no-continue": "error",
        // "no-div-regex": "error",
        // "no-duplicate-imports": "error",
        // "no-else-return": "error",
        // "no-empty-function": "error",
        // "no-eq-null": "error",
        // "no-eval": "error",
        // "no-extend-native": "error",
        // "no-extra-bind": "error",
        // "no-extra-label": "error",
        // "no-extra-parens": "error",
        // "no-floating-decimal": "error",
        // "no-implicit-coercion": "error",
        // "no-implicit-globals": "error",
        // "no-implied-eval": "error",
        // "no-inline-comments": "error",
        // "no-invalid-this": "error",
        // "no-iterator": "error",
        // "no-label-var": "error",
        // "no-labels": "error",
        // "no-lone-blocks": "error",
        // "no-lonely-if": "error",
        // "no-loop-func": "error",
        // "no-loss-of-precision": "error",
        // "no-magic-numbers": "off",
        // "no-mixed-operators": "off",
        // "no-mixed-requires": "error",
        // "no-multi-assign": "error",
        // "no-multi-spaces": "error",
        // "no-multi-str": "error",
        // "no-multiple-empty-lines": "error",
        // "no-native-reassign": "error",
        // "no-negated-condition": "error",
        // "no-negated-in-lhs": "error",
        // "no-nested-ternary": "error",
        // "no-new": "error",
        // "no-new-func": "error",
        // "no-new-object": "error",
        // "no-new-require": "error",
        // "no-new-wrappers": "error",
        // "no-octal-escape": "error",
        // "no-param-reassign": "error",
        // "no-path-concat": "error",
        // "no-plusplus": [
        //     "error",
        //     {
        //         "allowForLoopAfterthoughts": true
        //     }
        // ],
        // "no-process-env": "error",
        // "no-process-exit": "error",
        // "no-proto": "error",
        // "no-restricted-exports": "error",
        // "no-restricted-globals": "error",
        // "no-restricted-imports": "error",
        // "no-restricted-modules": "error",
        // "no-restricted-properties": "error",
        // "no-restricted-syntax": "error",
        // "no-return-assign": "error",
        // "no-return-await": "error",
        // "no-script-url": "error",
        // "no-self-compare": "error",
        // "no-sequences": "error",
        // "no-shadow": "error",
        // "no-spaced-func": "error",
        // "no-sync": "error",
        // "no-tabs": "error",
        // "no-template-curly-in-string": "error",
        // "no-ternary": "off",
        // "no-throw-literal": "error",
        // "no-trailing-spaces": "error",
        // "no-undef-init": "error",
        // "no-undefined": "error",
        // "no-underscore-dangle": "error",
        // "no-unmodified-loop-condition": "error",
        // "no-unneeded-ternary": "error",
        // "no-unused-expressions": "error",
        // "no-use-before-define": "off",
        // "no-useless-backreference": "error",
        // "no-useless-call": "error",
        // "no-useless-computed-key": "error",
        // "no-useless-concat": "error",
        // "no-useless-constructor": "error",
        // "no-useless-rename": "error",
        // "no-useless-return": "error",
        // "no-var": "error",
        // "no-void": "error",
        // "no-warning-comments": "error",
        // "no-whitespace-before-property": "error",
        // "nonblock-statement-body-position": "error",
        // "object-curly-newline": "error",
        // "object-curly-spacing": [
        //     "error",
        //     "always"
        // ],
        // "object-property-newline": "error",
        // "object-shorthand": "error",
        // "one-var": "off",
        // "one-var-declaration-per-line": "error",
        // "operator-assignment": [
        //     "error",
        //     "always"
        // ],
        // "operator-linebreak": "error",
        // "padded-blocks": "off",
        // "padding-line-between-statements": "error",
        // "prefer-arrow-callback": "error",
        // "prefer-const": "error",
        // "prefer-destructuring": "error",
        // "prefer-exponentiation-operator": "error",
        // "prefer-named-capture-group": "error",
        // "prefer-numeric-literals": "error",
        // "prefer-object-spread": "error",
        // "prefer-promise-reject-errors": "error",
        // "prefer-reflect": "error",
        // "prefer-regex-literals": "error",
        // "prefer-rest-params": "error",
        // "prefer-spread": "error",
        // "prefer-template": "off",
        // "quote-props": "off",
        // "quotes": "off",
        // "radix": "error",
        // "require-atomic-updates": "error",
        // "require-await": "error",
        // "require-jsdoc": "off",
        // "require-unicode-regexp": "error",
        // "rest-spread-spacing": [
        //     "error",
        //     "never"
        // ],
        // "semi": "off",
        // "semi-spacing": [
        //     "error",
        //     {
        //         "after": true,
        //         "before": false
        //     }
        // ],
        // "semi-style": [
        //     "error",
        //     "last"
        // ],
        // "sort-keys": "off",
        // "sort-vars": "error",
        // "space-before-blocks": "error",
        // "space-before-function-paren": "off",
        // "space-in-parens": [
        //     "error",
        //     "never"
        // ],
        // "space-infix-ops": "off",
        // "space-unary-ops": "error",
        // "spaced-comment": [
        //     "error",
        //     "always"
        // ],
        // "strict": "error",
        // "switch-colon-spacing": "error",
        // "symbol-description": "error",
        // "template-curly-spacing": [
        //     "error",
        //     "never"
        // ],
        // "template-tag-spacing": "error",
        // "unicode-bom": [
        //     "error",
        //     "never"
        // ],
        // "valid-jsdoc": "error",
        // "vars-on-top": "error",
        // "wrap-iife": "error",
        // "wrap-regex": "error",
        // "yield-star-spacing": "error",
        // "yoda": [
        //     "error",
        //     "never"
        // ]
    }
};
