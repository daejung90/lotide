const assertEqual = function(arr1, arr2) {
  if (arr1 === arr2) {
    console.log('✅ Assertion Passed: ' + arr1 + ' === ' + arr2);
  } else {
    console.log('❗️ Assertion Failed: ' + arr1 + ' !== ' + arr2);
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
  
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);