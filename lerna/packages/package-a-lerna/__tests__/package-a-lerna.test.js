'use strict';

const packageALerna = require('..');
const assert = require('assert').strict;

assert.strictEqual(packageALerna(), 'Hello from packageALerna');
console.info("packageALerna tests passed");
