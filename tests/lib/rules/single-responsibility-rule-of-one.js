/**
 * @license
 * Copyright Trilogy Enterprises, Inc - All Rights Reserved.
 *
 * This file is part of Rapid Engineering QC project.
 * Unauthorized copying of this file, via any medium is strictly prohibited - Proprietary and confidential
 */

'use strict';

const RULE = require('../../../lib/rules/single-responsibility-rule-of-one');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('Single Responsibility: Rule of One', RULE, {
    valid: [{
        code: 'class One {}',
        parserOptions: { ecmaVersion: 6 },
        errors: []
    }],
    invalid: [{
        code: 'class One {}; class Two {}',
        parserOptions: { ecmaVersion: 6 },
        errors: [{
            messageId: 'maximumExceeded',
            data: {
                classCount: 2,
                max: 1
            }
        }]
    }]
});
