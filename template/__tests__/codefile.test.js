'use strict';

let example = require('../codefile.js').example;
let errorHelper = require('../codefile.js').errorHelper;
//test arrays
const input1 = [1,2,3,4];
const input2 = 'asdf';
const input3 = 3.14159;

// Random test input 



//expected results
const result1 = true;
const result2 = true;
const result3 = true;


describe('example Function', () => {

  it('Expects input 1 to get result1', () => {
    expect(example(input1)).toEqual(result1)
  })

  it('Expects input 2 to get result 2', () => {
    expect(example(input2)).toEqual(result2)
  })
  it('Expects input 3 to get result 3', () => {
    expect(example(input3)).toEqual(result3)
  })
 
  
})

describe('error helper function', () =>{
  it('will return false if the input is falsy', () => {
    expect(errorHelper()).toEqual(false)
    expect(errorHelper(false)).toEqual(false)
  })
  it('will return true with a truthy input', () => {
    expect( errorHelper(1)).toEqual(true)
  })
})
