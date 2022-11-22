// const assertEqual = require ('../assertEqual');
// const eqArrays = require ('../eqArrays')
const middle = require('../middle.js')
const assert = require('chai').assert;

describe('#middle', () => {

    it("returns [2, 3] for [1, 2, 3, 4]", () => {
        assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
    })
})


middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5]) // => [3]