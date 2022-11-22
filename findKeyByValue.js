const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log('✅ Assertion Passed: ' + actual + ' === ' + expected);
    } else {
      console.log('❗️ Assertion Failed: ' + actual + ' !== ' + expected);
    }
  };


  const findKeyByValue = function(object, value){
    //loop through the object argument
    //find the value from the key to compare
    //return the first key which contains the given value
    //if no key then return undefined
    let objectKey = Object.keys(object);
    let firstKey = 0;
    for (let element in object){
        if(object[element] === value){
            return objectKey[firstKey];
    }
    firstKey++
  }
  return undefined
  }

  // const bestTVShowsByGenre = { 
  //   sci_fi: "The Expanse",
  //   comedy: "Brooklyn Nine-Nine",
  //   drama:  "The Wire"
  // };
  
  // assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  // assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  

  module.exports = findKeyByValue