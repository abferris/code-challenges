'use strict';

let medianTwoSorted = require('../medianTwoSorted.js');
//test arrays

let input1 = [1,3];
let arr12 = [2];
let output1 = 2;
let arr21 = [1,3];
let arr22 = [2,4];
let output2 = 2.5;
let arr





describe('medianTwoSorted Function', () => {

  it('Will recognize when 2 numbers sum to the target', () => {
    expect(medianTwoSorted(input1)).toEqual(output1);
  })

  it('Will handle a number that can add with itself', () => {
    expect(medianTwoSorted(input2)).toEqual(output2);
  })

  it('will work when two numbers are the same value', () => {
    expect(medianTwoSorted(input3)).toEqual(output3);
  })

})