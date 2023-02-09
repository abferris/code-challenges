'use strict';

let steps = require('../steps.js').steps;
//test arrays
const input1 = 5;


const input2_1 = [1];
const input2_2 = [1,2];
const input2_3 = [1,3,4];
const input2_4 = [5];
const input2_5 = [6];

//expected results
const result1 = 1;
const result2 = 8;
const result3 = 6;
const result4 = 1;
const result5 = 0;


describe('steps Function', () => {

  it('Expects input 1 and input 2_1 to get result1', () => {
    expect(steps(input1,input2_1)).toEqual(result1)
  })

  it('Expects input 2and input 2_2 to get result 2', () => {
    expect(steps(input1,input2_2)).toEqual(result2)
  })
  it('Expects input 3and input 2_3 to get result 3', () => {
    expect(steps(input1,input2_3)).toEqual(result3)
  })
  it('Expects input 3and input 2_4 to get result 4', () => {
    expect(steps(input1,input2_4)).toEqual(result4)
  })
  it('Expects input 3and input 2_5 to get result 5', () => {
    expect(steps(input1,input2_5)).toEqual(result5)
  })
 
  
})

