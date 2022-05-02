'use strict';

let minCoins = require('../minCoins.js').minCoins;
let errorHelper = require('../minCoins.js').errorHandler;
//test arrays
const input1 = 26;
const input2 = 55;
const input3 = 9;
const input4 = 25;

//expected results
const result1 = 2;
const result2 = 3;
const result3 = 5;
const result4 = 1;


describe('mincoins Function', () => {

  it('Expects input 1 to get result1', () => {
    expect(minCoins(input1)).toEqual(result1)
  })

  it('Expects input 2 to get result 2', () => {
    expect(minCoins(input2)).toEqual(result2)
  })
  it('Expects input 3 to get result 3', () => {
    expect(minCoins(input3)).toEqual(result3)
  })
  it('Expects input 3 to get result 3', () => {
    expect(minCoins(input4)).toEqual(result4)
  })
 
  
})

describe('mincoins function', () =>{
  it('will return null if the input is not a number', () => {
    expect(minCoins('a')).toEqual(null)
  })
  it('will return 0 or a falsy input with 0', () => {
    expect( minCoins(0)).toEqual(0)
    expect( minCoins(-1)).toEqual(0)
    expect( minCoins(null)).toEqual(0)
    expect( minCoins(false)).toEqual(0)
    expect( minCoins()).toEqual(0)
  })
})
