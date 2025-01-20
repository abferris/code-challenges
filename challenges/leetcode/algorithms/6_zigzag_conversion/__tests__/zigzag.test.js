'use strict';

let zigzag = require('../zigzag.js');
//test arrays

let input1 = "PAYPALISHIRING";
let rows1 = 3;
let output1 = "PAHNAPLSIIGYIR";
let input2 = "PAYPALISHIRING";
let rows2 = 4;
let output2 = "PINALSIGYAHRPI";
let input3 = "A";
let rows3 = 1;
let output3 = "A";





describe('medianTwoSorted Function', () => {

  it('Will recognize when 2 numbers sum to the target', () => {
    expect(medianTwoSorted(input1,rows1)).toEqual(output1);
  })

  it('Will handle a number that can add with itself', () => {
    expect(medianTwoSorted(input2)).toEqual(output2);
  })

  it('will work when two numbers are the same value', () => {
    expect(medianTwoSorted(input3)).toEqual(output3);
  })

})