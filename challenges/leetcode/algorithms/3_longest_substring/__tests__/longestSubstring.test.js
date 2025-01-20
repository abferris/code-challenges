'use strict';

let longestSubstring = require('../longestSubstring.js');
//test arrays

let input1 = "abcabcbb";
let output1 = 3;
let  input2 = "bbbbb";
let output2 = 1 ;
let input3 = "pwwkew";
let output3 = 3;





describe('longestSubstring Function', () => {

  it('Will recognize when 2 numbers sum to the target', () => {
    expect(longestSubstring(input1)).toEqual(output1);
  })

  it('Will handle a number that can add with itself', () => {
    expect(longestSubstring(input2)).toEqual(output2);
  })

  it('will work when two numbers are the same value', () => {
    expect(longestSubstring(input3)).toEqual(output3);
  })

})