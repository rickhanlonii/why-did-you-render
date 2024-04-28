const babelParser = require('@babel/eslint-parser');
const js = require("@eslint/js");
const globals = require('globals');
const reactRecommended = require('eslint-plugin-react/configs/recommended');

module.exports = [
  js.configs.recommended,
  reactRecommended,
  {
    "files": [
      "*.js",
    ],
    "ignores": [
      "dist",
      "_*.js",
    ],
    "languageOptions": {
      "parser": babelParser,
      "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
          "jsx": true,
        },
      },
      "globals": {
        "flushConsoleOutput": true,
        "jest": true,
        ...globals.browser,
        ...globals.node,
      },
    },
    "rules": {
      "semi": ["error", "always",],
      "curly": "error",
      "no-var": "error",
      "quotes": ["error", "single",],
      "no-console": "error",
      "no-debugger": "warn",
      "no-unused-vars": ["error", {"ignoreRestSiblings": true,},],
      "eol-last": "error",
      "object-curly-spacing": ["error", "always",],
      "react/prop-types": "off",
      "react/display-name": "off",
      "space-before-function-paren": ["error", "never",],
      "space-before-blocks": ["error", "always",],
      "space-in-parens": ["error", "never",],
      "comma-dangle": ["error", "only-multiline",],
      "func-call-spacing": ["error", "never",],
      "no-multi-spaces": "error",
      "indent": ["error", 2,],
    }
  }  
]