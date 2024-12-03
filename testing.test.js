const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('./testing');

describe('capitalize function', () => {
  test('capitalizes the first letter of a single word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('does not change already capitalized strings', () => {
    expect(capitalize('World')).toBe('World');
  });

  test('handles multi-word strings by only capitalizing the first character', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('returns an empty string if the input is an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('works with special characters in the string', () => {
    expect(capitalize('@hello')).toBe('@hello');
  });
});

describe('reverse string function', () => {
  test('returns an empty string if the input is an empty string', () => {
    expect(reverseString('')).toBe('');
  });
  test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh')
  });
  test('reveres with respect to capitalization', () => {
    expect(reverseString('World')).toBe('dlroW')
  })
});

describe('calculator', () => {
  test('returns 5', () => {
    expect(calculator.add(3, 2)).toBe(5);
  });
  test('returns 10', () => {
    expect(calculator.subtract(25, 15)).toBe(10);
  });
  test('returns 120', () => {
    expect(calculator.multiply(6, 20)).toBe(120);
  });
  test('returns 3', () => {
    expect(calculator.divide(450, 150)).toBe(3);
  });
});

describe('ceaser cipher', () => {
  test('shifts letters by the given factor', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('Hello', 1)).toBe('Ifmmp');
  });

  test('wraps around from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('abc', -1)).toBe('zab');
  });

  test('preserves letter case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('AbCz', 5)).toBe('FgHe');
  });

  test('leaves non-alphabetic characters unchanged', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    expect(caesarCipher('1234!@#', 5)).toBe('1234!@#');
  });

  test('handles negative shifts', () => {
    expect(caesarCipher('abc', -3)).toBe('xyz');
    expect(caesarCipher('XYZ', -3)).toBe('UVW');
  });

  test('returns the same string when shift is 0', () => {
    expect(caesarCipher('abc XYZ', 0)).toBe('abc XYZ');
  });
});

describe('analyze array', () => {
  test('calculates correct values for the given array', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });

  test('handles an array with one number', () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1
    });
  });

  test('handles an empty array', () => {
    const result = analyzeArray([]);
    expect(result).toEqual({
      average: NaN,
      min: Infinity,
      max: -Infinity,
      length: 0
    });
  });
});
