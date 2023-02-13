'use strict';

let minDiffFunction = require('../mindiff.js');
//test arrays
const arr1 = [1,2,3,4];
const arr2 = [5,5];
const arr3 = [3,3,2,9];
const arr4 = [-1,5,4,3];
const arr5 = [5,9,2,7,4];
const arr6 = [1,1,1.5];
const arr7 = [5];

// Random test array
let randomArray = []
let l = Math.floor(Math.random() * 25);
for (let i=0; i< l; i++){
  let isNegative = Math.random() < 0.5 ? -1 : 1;
  let number = Math.random()*100*isNegative;
  randomArray.push(number)
}


//expected results
const result1 = 0;
const result2 = 0;
const result3 = 1;
const result4 = 1;
const result5 = 1;
const resutlt6 = .5;
const result7 = 5

describe('minDiffFunction Function', () => {

  it('Will recognize min difference of 0 with multiple numbers', () => {
    expect(minDiffFunction(arr1)).toEqual(result1)
  })

  it('Will recognize min difference of 0 with the same numbers', () => {
    expect(minDiffFunction(arr2)).toEqual(result2)
  })
  it('Will find a minimum difference when the numbers do not divide evenly', () => {
    expect(minDiffFunction(arr3)).toEqual(result3)
  })
  it('Will process a negative number', () => {
    expect(minDiffFunction(arr4)).toEqual(result4)
  })
  it('Will process an odd value of numbers number', () => {
    expect(minDiffFunction(arr4)).toEqual(result4)
  });
  it('Will process 1 number', () => {
    expect(minDiffFunction(arr4)).toEqual(result4)
  });
  it('Will process an empty array', () => {
    expect(minDiffFunction(arr4)).toEqual(result4)
  });
  it('Will process a random array an invalid array', () => {
    expect(typeof(minDiffFunction(randomArray))).toEqual('number')
  });

 it('Will handle an imporper input', () => {
   expect(minDiffFunction('rawr')).toEqual(false);
 })
 it('will recognize no array', () => {
    expect(minDiffFunction()).toEqual(false);
 })
 it('will recognize improper array element', () => {
    expect(minDiffFunction([5,3,'a'])).toEqual(false);
 })
  
})
