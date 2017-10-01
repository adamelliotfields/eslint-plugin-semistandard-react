'use strict';

module.exports = {
  rules: {
    /* eslint-plugin-import */
    'export': require('eslint-plugin-import/lib/rules/export'),
    'first': require('eslint-plugin-import/lib/rules/first'),
    'no-duplicates': require('eslint-plugin-import/lib/rules/no-duplicates'),
    'no-webpack-loader-syntax': require('eslint-plugin-import/lib/rules/no-webpack-loader-syntax'),

    /* eslint-plugin-node */
    'no-deprecated-api': require('eslint-plugin-node/lib/rules/no-deprecated-api'),
    'process-exit-as-throw': require('eslint-plugin-node/lib/rules/process-exit-as-throw'),

    /* eslint-plugin-promise */
    'param-names': require('eslint-plugin-promise/rules/param-names'),

    /* eslint-plugin-react */
    'jsx-boolean-value': require('eslint-plugin-react/lib/rules/jsx-boolean-value'),
    'jsx-curly-spacing': require('eslint-plugin-react/lib/rules/jsx-curly-spacing'),
    'jsx-equals-spacing': require('eslint-plugin-react/lib/rules/jsx-equals-spacing'),
    'jsx-indent': require('eslint-plugin-react/lib/rules/jsx-indent'),
    'jsx-indent-props': require('eslint-plugin-react/lib/rules/jsx-indent-props'),
    'jsx-no-bind': require('eslint-plugin-react/lib/rules/jsx-no-bind'),
    'jsx-no-duplicate-props': require('eslint-plugin-react/lib/rules/jsx-no-duplicate-props'),
    'jsx-no-undef': require('eslint-plugin-react/lib/rules/jsx-no-undef'),
    'jsx-tag-spacing': require('eslint-plugin-react/lib/rules/jsx-tag-spacing'),
    'jsx-uses-react': require('eslint-plugin-react/lib/rules/jsx-uses-react'),
    'jsx-uses-vars': require('eslint-plugin-react/lib/rules/jsx-uses-vars'),
    'no-did-update-set-state': require('eslint-plugin-react/lib/rules/no-did-update-set-state'),
    'no-unknown-property': require('eslint-plugin-react/lib/rules/no-unknown-property'),
    'no-unused-prop-types': require('eslint-plugin-react/lib/rules/no-unused-prop-types'),
    'prop-types': require('eslint-plugin-react/lib/rules/prop-types'),
    'self-closing-comp': require('eslint-plugin-react/lib/rules/self-closing-comp'),

    /* eslint-plugin-standard */
    'array-bracket-even-spacing': require('eslint-plugin-standard/rules/array-bracket-even-spacing.js'),
    'computed-property-even-spacing': require('eslint-plugin-standard/rules/computed-property-even-spacing.js'),
    'no-callback-literal': require('eslint-plugin-standard/rules/no-callback-literal.js'),
    'object-curly-even-spacing': require('eslint-plugin-standard/rules/object-curly-even-spacing.js')
  }
};
