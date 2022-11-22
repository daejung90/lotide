const assertEqual = function(actual, expected) {
    if (eqArrays(actual,expected)) {
      console.log('✅ Assertion Passed: ' + actual + ' === ' + expected);
    } else {
      console.log('❗️ Assertion Failed: ' + actual + ' !== ' + expected);
    }
  };
  
  const eqArrays = function(val1, val2) {
    if (val1 === val2) {
        return true;
      } else {
        return false;
      }
    
  };

  const without = function (source, itemsToRemove){
    for (let i = 0; i < source.length; i++){
        for (let j = 0; j < itemsToRemove.length; j++){
            if(source[i] === itemsToRemove[j]){
                source.splice(i, 1);
            }
        }
    }
    return(source)

  }

//   without([1, 2, 3], [1]) // => [2, 3]
//   without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

//   const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// // assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;