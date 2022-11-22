const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log('✅ Assertion Passed: ' + actual + ' === ' + expected);
    } else {
      console.log('❗️ Assertion Failed: ' + actual + ' !== ' + expected);
    }
  };
 
 
const tail = function (element){
    let newTail = [];
    for( let i = 1; i < element.length; i++){
        newTail.push(element[i])
    }
    return newTail
}

const words = ['Yo Yo', 'Lighthouse', 'Labs']

// assertEqual(words.length, 3);

module.exports = tail;