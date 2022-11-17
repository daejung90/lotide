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

  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  assertEqual("winter", "winter");
  assertEqual(3, 2);