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


const takeUntil = function(array, callback) {
  let newArr = [];
    for (let number of array) {
     const breakPoint = callback(number);
     if (breakPoint === false){
      //if(!callback(number))
      newArr.push(number)
     } else {
      return newArr
     }
        
    }
    
  }

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);