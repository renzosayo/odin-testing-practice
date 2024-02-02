function caesarCipher (string, shift) {
  string = string.split('');
  return string.map((letter) => {
    let code = letter.charCodeAt(0);

    // a-z is 97-122, A-Z is 65-90
    if (
      !(code < 65 
      || code > 122 
      || (code > 90 && code < 97))
    ) return String.fromCharCode(shiftBy(code, shift));
    else return letter;
  })
  .reduce((finalString, letter) => {
    return finalString += letter || ' ';
  }, '');
}

function shiftBy (char, shift) {
  let shifted = char + shift;

  // check if originally upper or lowercase
  if (char >= 97 && char <= 122) {
    // enables wrapping
    if (shifted > 122) shifted -= 26;
    else if (shifted < 97) shifted += 26;
  }
  if (char >= 65 && char <= 90) {
    if (shifted > 90) shifted -= 26;
    else if (shifted < 65) shifted += 26; 
  }
  return shifted;
}

module.exports = caesarCipher;