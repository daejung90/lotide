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

const letterPositions = function(sentence) {
  const lowerCaseSt = sentence.toLowerCase()
    const results = {};
    //loop through the sentence
    //if statement to check if there is the letter or not
    //if theres not, create an object in array in it
    //if already has a letter than just push the index to the array
    
  for (let i = 0; i < lowerCaseSt.length; i++ ){
    let letter = lowerCaseSt[i]
    if(!results[letter]){
      results[letter] = [i];
    } else {
      results[letter].push(i)
    }
    }
    return results;
  };
  console.log(letterPositions("Lighthouse lab course"))
  // assertArraysEqual(letterPositions("hello").e, [1]);