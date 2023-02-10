# Contiguous Sum Problem

## Problem statement

Given an array of numbers, and a single number, return which connected numbers will add up to the given number

## Input/Output

### Input
- array of numbers
- target number

### Output
- array of numbers which will help you get there.

### Examples
- [ 1 , 2 , 3 , 4 , 5 ] , 9 => [ 2 , 3 , 4 ]
- [ 1 , 5 , 7 , 6 , 4 , 2] , 13 => [ 1 , 5 , 7 ] or [ 7 , 6 ]
-  [ 7 , 9 , 4 , 3 , 5 ] , 12 => [ 4 , 3 , 5]
- [ 6 , 9  , 4 , 3 , 5 ] , 7 => [  4 , 3 ]
- [ 6 , 9  , 4 , 5 ] , 4 => [ 4 ]
- [ 6 , 9  , 4 , 5 ] , 7 => null

### Assumptions
- any return of a series of numbers that add up will be acceptable
- numbers do not have to be ascending in given array
- positive numbers in array
- only need one successful output

## Approach
- start with first number
- if sum of output array is larger than target, add next number
- otherwise if sum of output array is less than number or the length is 0 take away first number
- if we reach the end of the array and the output sum is less than target return null