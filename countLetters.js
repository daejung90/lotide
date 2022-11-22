const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log('✅ Assertion Passed: ' + actual + ' === ' + expected);
    } else {
      console.log('❗️ Assertion Failed: ' + actual + ' !== ' + expected);
    }
  };

//should return how many times the letters in sentence appears
const countLetters = function (sentence){
//loop trough the sentence given
//create a object variable to add the keys and values
//if statement that, if the letter exists, then just add ++
//if statement, if theres no letter yet then add a letter and ++
const lowerCaseSentene = sentence.toLowerCase()
const letterCount = {};
for (let letter of lowerCaseSentene){
    if(!letterCount[letter]){
        letterCount[letter] = 1;
    } else {
        letterCount[letter]++;
    }
}
return letterCount
}

// console.log(countLetters("Lighthouse in the house"));
// assertEqual(countLetters("letterCount").l, 1)

module.exports = countLetters