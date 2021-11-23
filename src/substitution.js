const substitutionModule = (function () {
  const normalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  function substitution(input, alphabet, encode = true) {
    result = "";
    //Check out susbtituted alphabet, if it is too short (not 26) or missing, return false.
    if (!alphabet || alphabet.length !== 26) return false;

    //Check if the alphabet contains special characters (no duplicates!)
    let duplicateChecks = alphabet.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    // ^ This will split the string into an array, sort them by order, join them, and check if any index matches it's +1 index
    if (duplicateChecks !== null) return false;


    //If Encode, text ==> .oa.
    if (encode){
      //Check each letter of our input, if there is a space, include it, otherwise convert each letter using alphabetKey ==> alphabet
      for (let index of input) {
        index === " " ? result += " " : result += alphabet[normalAlphabet.indexOf(index)];
      }
    } 

    //If Decode, .oa. ==> text
    else {
      //Check each letter of our input, if there is a space, include it, otherwise convert each letter using alphabet ==> alphabetKey
      for (let index of input) {
        index === " " ? result += " " : result += normalAlphabet[alphabet.indexOf(index)];
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
