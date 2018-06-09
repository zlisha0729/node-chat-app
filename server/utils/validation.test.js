const expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var num = 1;
    expect(isRealString(num)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var str = "   ";
    expect(isRealString(str)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var str = "123kshte";
    expect(isRealString(str)).toBe(true);
  })
})
