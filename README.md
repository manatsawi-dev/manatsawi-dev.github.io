## Commond Packages
### Dependencies
```js
yarn add axios lodash numeral prop-types react-redux react-router-dom redux redux-devtools-extension redux-saga styled-components styled-icons
```
### UI Dependencies
```js
yarn add babel-eslint babel-jest body-scroll-lock jest moment react-helmet-async react-inlinesvg react-loading-skeleton react-modal react-range react-switch react-tooltip uuid
```

### Dev Dependencies
```js
yarn add --dev babel-eslint babel-jest jest @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react @wojtekmaj/enzyme-adapter-react-17 babel-jest babel-polyfill enzyme jest@26.6.0 react-test-renderer sinon eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
```

### Setup Test
1. package.json
```json
  "jest": {
    "setupFiles": [
      "./src/setupTests.js"
    ]
  }
```
2. src/jest.config.js
```js
  // jest.config.js
  // Sync object
  /** @type {import('@jest/types').Config.InitialOptions} */
  const config = {
    verbose: true,
  };

  module.exports = config;

  // Or async function
  module.exports = async () => {
    return {
      verbose: true,
    };
  };
```
3. setupTest.js
```js
  import Enzyme from "enzyme";
  import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

  Enzyme.configure({ adapter: new Adapter() });
```

4. ./src/babel.config.js
```js
// babel.config.js
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime",
  ],
};
```

## Setup IDE
1. src/.prettierrc.js
```js
  module.exports = {
    bracketSpacing: false,
    jsxBracketSameLine: true,
    singleQuote: true,
    trailingComma: 'all',
    endOfLine: 'auto',
    printWidth: 150,
  };
```
2. src/.eslintrc.js
```js
  module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    parser: 'babel-eslint',
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
      // 'prettier/prettier': 'error',
      'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
      'react/state-in-constructor': 'off',
      'react/react-in-jsx-scope': 'off',
      'object-shorthand': 'off',
      'import/prefer-default-export': 'off',
      'arrow-body-style': 'off',
      camelcase: 'warn',
      'react/jsx-props-no-spreading': 'off',
      'react/forbid-prop-types': 'off',
      'import/no-extraneous-dependencies': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
    },
  };
```

## .gitignore
```gitignore
.DS_STORE
# See http://help.github.com/ignore-files/ for more about ignoring files.

# dependencies
node_modules

# testing
coverage

# production
build

# misc
.DS_Store
.vscode
.env
npm-debug.log
```

## Firebase
```js
yarn add firebase react-firebase-hooks
```
