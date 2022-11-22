const assertEqual = function(actual, expected) {
    if (eqArrays(actual,expected)) {
      console.log('✅ Assertion Passed: ' + actual + ' === ' + expected);
    } else {
      console.log('❗️ Assertion Failed: ' + actual + ' !== ' + expected);
    }
  };
  
  const eqArrays = function(arrOne, arrTwo) {
  
    if(arrOne.length !== arrTwo.length){
      return false;
    }
  
    for (let i = 0; i < arrOne.length; i++) {
    if(Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i])){
      if(!eqArrays(arrOne[i], arrTwo[i])){
        return false
      }
      }else if(arrOne[i] !== arrTwo[i]){
        return false
      }
    }
    
    return true
  };

  const middle = function(arr){
    const midIndexArr = Math.floor(arr.length/2);
    if(arr.length < 3){
      return([]);
    }else if(arr.length % 2 === 0){
      return arr.slice(midIndexArr -1, midIndexArr +1)
    }else{
      return arr.slice(midIndexArr, midIndexArr +1)
    }
  }

  // middle([1, 2, 3, 4]) // => [2, 3]
  // middle([1, 2, 3, 4, 5]) // => [3]   

  module.exports = middle