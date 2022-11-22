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


// const words = ["ground", "control", "to", "major", "tom"];



const map = function(array, callback) {
    // empty for now :)
    const results =[];
    for (let item of array){
      results.push(callback(item))
    }
    return results;
  }

  const results1 = map(words, word => word[0]);

// console.log(map)

module.exports = map;

