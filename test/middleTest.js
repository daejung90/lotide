const assertEqual = require ('../assertEqual');
const eqArrays = require ('../eqArrays')
const middle = require('../middle.js')

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5]) // => [3]