/**
 * @license
 * Copyright Trilogy Enterprises, Inc - All Rights Reserved.
 *
 * This file is part of Rapid Engineering QC project.
 * Unauthorized copying of this file, via any medium is strictly prohibited - Proprietary and confidential
 */

module.exports = {
  configs: {
    typescript: {
      extends: ['plugin:@angular-eslint/recommended'],
      plugins: ['rp', '@angular-eslint'],
      rules: {
        'rp/rule-of-one': ['error', 1],
        'rp/file-size': [
          'error',
          { max: 400, skipComments: true, skipBlankLines: true },
        ],
        'rp/small-functions': [
          'error',
          { max: 75, skipComments: true, skipBlankLines: true },
        ],
        'rp/no-console': 'error',
        "@angular-eslint/component-selector": [
          "error",
          { "type": ["element", "attribute"], "prefix": "", "style": "kebab-case" }
        ]
      },
    },
  },
  rules: {
    'rule-of-one': require('./rules/single-responsibility-rule-of-one'),
    'file-size': require('./rules/single-responsibility-file-size'),
    'small-functions': require('./rules/single-responsibility-small-functions'),
    'no-console': require('./rules/no-console-rule'),
  },
};
