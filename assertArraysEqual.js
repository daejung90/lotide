const eqArrays = require('./eqArrays')

const assertArrayEqual = function(actual, expected) {
    if (eqArrays(actual,expected)) {
      console.log('✅ Assertion Passed: ' + actual + ' === ' + expected);
    } else {
      console.log('❗️ Assertion Failed: ' + actual + ' !== ' + expected);
    }
  };
  
  // const eqArrays = function(val1, val2) {
  //   if (val1 === val2) {
  //       return true;
  //     } else {
  //       return false;
  //     }
    
  // };

  // const eqArrays = function(arrOne, arrTwo) {
  
  //   if(arrOne.length !== arrTwo.length){
  //     return false;
  //   }
  
  //   for (let i = 0; i < arrOne.length; i++) {
  //   if(Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i])){
  //     if(!eqArrays(arrOne[i], arrTwo[i])){
  //       return false
  //     }
  //     }else if(arrOne[i] !== arrTwo[i]){
  //       return false
  //     }
  //   }
    
  //   return true
  // };

  
  module.exports = assertArrayEqual;

  

  