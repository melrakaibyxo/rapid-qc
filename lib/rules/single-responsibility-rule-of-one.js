/**
 * @license
 * Copyright Trilogy Enterprises, Inc - All Rights Reserved.
 *
 * This file is part of Rapid Engineering QC project.
 * Unauthorized copying of this file, via any medium is strictly prohibited - Proprietary and confidential
 */

"use strict";

const RULE = require('eslint/lib/rules/max-classes-per-file');
const RP_CONF = {
    meta: {
        docs: {
            description: 'Do define one thing, such as a Service, Facade, State, Model, Component, etc. per file',
            url: 'https://angular.io/guide/styleguide#rule-of-one'
        },
        messages: {
            maximumExceeded: 'QB Rule #1: File has {{ classCount }} classes and maximum allowed is {{ max }}'
        }
    }
}

module.exports = {...RULE, ...RP_CONF};
