const test = require('node:test');
const assert = require('node:assert');
const { add, subtract } = require('./calculator');

test('add works', () => {
    assert.strictEqual(add(2, 3), 6);
});

test('subtract works', () => {
  assert.strictEqual(subtract(5, 3), 2);
});