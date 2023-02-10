'use strict';

let contiguousSum = require('../contiguous_sum.js').contiguousSum;
//test arrays
let arrayIn1 = [ 1 , 2 , 3 , 4 , 5 ] ;
let arrayIn2 = [ 1 , 5 , 7 , 6 , 4 , 2];
let arrayIn3 = [ 7 , 9 , 4 , 3 , 5 ] ;
let arrayIn4 = [ 6 , 9  , 4 , 3 , 5 ] ;
let arrayIn5 = [ 6 , 9  , 4 , 5 ] ;
let arrayIn6 = [ 6 , 9  , 4 , 5 ];

let target1 = 9 ;
let target2 = 13;
let target3 = 12;
let target4 = 7;
let target5 = 4;
let target6 = 7;

let output1 =  [ 2 , 3 , 4 ];
let output2 =  [ 1 , 5 , 7 ];
let output3 = [ 4 , 3 , 5];
let output4 =  [  4 , 3 ];
let output5 =  [ 4 ];
let output6 =  null;



describe('contiguousSum Function', () => {

  it('Expects input 1 to get result1', () => {
    expect(contiguousSum(arrayIn1, target1)).toEqual(output1)
  })
  it('Expects input 2 to get result2', () => {
    expect(contiguousSum(arrayIn2, target2)).toEqual(output2)
  })
  it('Expects input 3 to get result3', () => {
    expect(contiguousSum(arrayIn3, target3)).toEqual(output3)
  })
  it('Expects input 4 to get result4', () => {
    expect(contiguousSum(arrayIn4, target4)).toEqual(output4)
  })
  it('Expects input 5 to get result5', () => {
    expect(contiguousSum(arrayIn5, target5)).toEqual(output5)
  })
  it('Expects input 6 to get result6', () => {
    expect(contiguousSum(arrayIn6, target6)).toEqual(output6)
  })

})


