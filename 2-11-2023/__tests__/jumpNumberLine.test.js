'use strict';

let jumpNumberLine = require('../jumpNumberLine.js').jumpNumberLine;
//test arrays
const input1 = 1;
const input2 = 2;
const input3 = 3;
const input4 = 4;
const input5 = 5;
const input6 = 6;

//expected results
const result1 = 1;
const result2 = 3;
const result3 = 2;
const result4 = 3;
const result5 = 5;
const result6 = 3;

describe('jumpNumberLine Function', () => {

  it('Will find the answer for 1', () => {
    expect(jumpNumberLine(input1)).toEqual(result1)
  })

  it('Will find the answer for 2', () => {
    expect(jumpNumberLine(input2)).toEqual(result2)
  })
  it('Will find the answer for 3', () => {
    expect(jumpNumberLine(input3)).toEqual(result3)
  })
  it('Will find the answer for 4', () => {
    expect(jumpNumberLine(input4)).toEqual(result4)
  })
  it('Will find the answer for 5', () => {
    expect(jumpNumberLine(input5)).toEqual(result5)
  });
  it('Will find the answer for 6', () => {
    expect(jumpNumberLine(input6)).toEqual(result6)
  });
  
})
