const assertEqual = function(arr1, arr2) {
  if (arr1 === arr2) {
    console.log('✅ Assertion Passed: ' + arr1 + ' === ' + arr2);
  } else {
    console.log('❗️ Assertion Failed: ' + arr1 + ' !== ' + arr2);
  }
};
  
const eqArrays = function(elements) {
  for (let element of elements) {
    if (element[0] === element[1]) {
      return true;
    } else {
      return false;
    }
  }
};
  
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);