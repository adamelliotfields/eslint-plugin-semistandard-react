# ESLint Plugin Semistandard React
> All the necessary plugins for eslint-config-semistandard-react.

This file exports all the necessary rules for [eslint-config-semistandard-react](https://github.com/adamelliotfields/eslint-config-semistandard-react) to facilitate easier installs.


### Changelog

See [`CHANGELOG.md`](https://github.com/adamelliotfields/eslint-plugin-semistandard-react/blob/master/CHANGELOG.md).


### Install

**NPM:**

```bash
npm install -D eslint babel-eslint eslint-config-semistandard-react eslint-plugin-semistandard-react
```

**Yarn:**

```bash
yarn add -D eslint babel-eslint eslint-config-semistandard-react eslint-plugin-semistandard-react
```

**Globally:**

`npm install --global ...` **or** `yarn global add ...`


### Usage

This plugin was intended to be used with [eslint-config-semistandard-react](https://github.com/adamelliotfields/eslint-config-semistandard-react), which has more information on configuring your `eslintrc`.

With that said, you're free to use it with any ESLint config. Add `semistandard-react` to your
plugins array, and any rules to your rules object.

You do **NOT** have to do this if you're already extending the Semistandard React config (unless of
course you want to override a rule).

For example:

```json
{
  "plugins": [
    "semistandard-react"
  ],
  "rules": {
    "semistandard-react/jsx-curly-spacing": ["error", "never"],
    "semistandard-react/jsx-equals-spacing": ["error", "never"]
  }
}
```


### Rules

The following rules are exported:

 - **`eslint-plugin-import`**
   - `export`
   - `first`
   - `no-duplicates`
   - `no-webpack-loader-syntax`
 - **`eslint-plugin-node`**
   - `no-deprecated-api`
   - `process-exit-as-throw`
 - **`eslint-plugin-promise`**
   - `param-names`
 - **`eslint-plugin-react`**
   - `jsx-boolean-value`
   - `jsx-curly-spacing`
   - `jsx-equals-spacing`
   - `jsx-indent`
   - `jsx-indent-props`
   - `jsx-no-bind`
   - `jsx-no-duplicate-props`
   - `jsx-no-undef`
   - `jsx-tag-spacing`
   - `jsx-uses-react`
   - `jsx-uses-vars`
   - `no-did-update-set-state`
   - `no-unknown-property`
   - `no-unused-prop-types`
   - `prop-types`
   - `self-closing-comp`
 - **`eslint-plugin-standard`**
   - `array-bracket-even-spacing`
   - `computed-property-even-spacing`
   - `no-callback-literal`
   - `object-curly-even-spacing`
   

### Acknowledgements
 - [@benmosher](https://github.com/benmosher): [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
 - [@mysticatea](https://github.com/mysticatea): [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node)
 - [@xjamundx](https://github.com/xjamundx): [`eslint-plugin-promise`](https://github.com/xjamundx/eslint-plugin-promise)
 - [@yannickcr](https://github.com/yannickcr): [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
 - [@xjamundx](https://github.com/xjamundx): [`eslint-plugin-standard`](https://github.com/xjamundx/eslint-plugin-standard)
