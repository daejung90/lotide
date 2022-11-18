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
 // Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
    
    if(Object.keys(object1).length !== Object.keys(object2).length){
        return false
    }
    for (let key in object1){
        if(typeof object1[key] !== typeof object2[key]){
            return false
    } else if(Array.isArray(object1[key])){
        return eqArrays(object1[key], object2[key])
    }
}
    return true;
}

const assertObjectsEqual = function (actual, expected){
    const inspect = require('util').inspect;
    if(eqObjects(actual, expected)){
        console.log(`✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    }else{
        console.log(`❗️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
    }
}


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), true); // => false