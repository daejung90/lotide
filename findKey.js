const assertEqual = require('./assertEqual')

const findKey = function (object, callback){
    for(key in object){
        // console.log(key)
        const keyToFind = callback(object[key])
        if(keyToFind){
            return key
        } 
    }
}


assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2), 'noma') // => "noma"