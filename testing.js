const capitalize = (str) => {
  if(!str) return '';
  return str[0].toUpperCase() + str.slice(1);
}

const reverseString = (str) => {
  if(!str) return '';
  return str.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
}

function caesarCipher(str, shift) {
  function shiftChar(char, shift) {
    if (/[a-zA-Z]/.test(char)) { 
      const isUpperCase = char === char.toUpperCase();
      const base = isUpperCase ? 65 : 97; 
      const charCode = char.charCodeAt(0);
      const shiftedCode = ((charCode - base + shift) % 26 + 26) % 26 + base;
      return String.fromCharCode(shiftedCode);
    }
    return char; 
  }

  return str.split('').map(char => shiftChar(char, shift)).join('');
}

function analyzeArray(arr) {
  return {
    average: arr.reduce((sum, num) => sum + num, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
}