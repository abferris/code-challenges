# Partition Problem

## Problem statement

Given an array of numbers, give back the minimum difference between the numbers divided into 2 values

## Input/Output

### Input
- Array
- Assumed all numbers

### Examples

- [1 , 2 , 3 , 4] : 0
- [5 , 5] : 0
- [3, 3, 2, 9]: 1
- [ -1, 5 , 4,3]: 1
- [ 7,9,2,5,4]: 1
- [5] = 5

### Edge Cases

- Empty Array : 0
- 1 number: return that number 

## Approach

Recursive function. Separating might do well enough, but will not take care of uneven delegations, as seen in the second and third example

  - Inputs 
    - array
    - counter (starts at 0 if not supplied)
    - current sum (starts at 0 if not supplied)
    - min sum (starts as null)
  
  1) if you iterate past the end of the array, Compare to min sum. If it is less than min sum, return
  2) add current value to the current sum
  3) 
   

