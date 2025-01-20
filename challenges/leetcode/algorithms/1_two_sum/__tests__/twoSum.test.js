'use strict';

let twoSums = require('../twoSum.js');
//test arrays

let nums1 = [2,7,11,15];
let target1 = 9;
let  nums2 = [3,2,4];
let target2 = 6 ;
let nums3 = [3,3];
let target3 = 6;
let nums4 = [-5,-3, 0 , 4, 6];
let target4 = 3;
let nums5 = [1,3,5,7,9];
let target5 = 11;

//expected results
const result1 = [0,1];
const result2 = [1,2];
const result3 = [0,1];
const result4 = [1,4];
const result5 = null;


describe('twoSums Function', () => {

  it('Will recognize when 2 numbers sum to the target', () => {
    expect(twoSums(nums1,target1)).toEqual(result1)
  })

  it('Will handle a number that can add with itself', () => {
    expect(twoSums(nums2,target2)).toEqual(result2)
  })
  it('will work when two numbers are the same value', () => {
    expect(twoSums(nums3,target3)).toEqual(result3)
  })
  it('Will process a negative number', () => {
    expect(twoSums(nums4,target4)).toEqual(result4)
  })
  it('will process no result', () => {
    expect(twoSums(nums5,target5)).toEqual(result5)
  });  
})