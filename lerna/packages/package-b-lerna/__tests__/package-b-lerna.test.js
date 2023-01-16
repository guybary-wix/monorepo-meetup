'use strict';

const packageBLerna = require('..');
const assert = require('assert').strict;

assert.strictEqual(packageBLerna(), 'Hello from packageBLerna');
console.info("packageBLerna tests passed");
