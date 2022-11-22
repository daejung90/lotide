// const assertEqual = require('../assertEqual');
const assert = require ('chai').assert;
const tail = require('../tail.js')

describe('#tail', () => {

    it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
        assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs'])
    })
})

// const words = ['Yo Yo', 'Lighthouse', 'Labs']
// assertEqual(words.length, 3);