# Smallest Positive Missing Number Problem

## NOTE

Due to time constraints, I'm going to not do tests on this one.

## Problem statement

Given an array, return the smallest positive integer missing in the array.

## Input/Output

### Input
- array


### Ouput

- integer

### Approach
This could be done by either sorting the original array, or checking with a new array. I go for new array. Part of this is in addition to a sort, we will have to go through the array again to delete negative numbers, and then go through it again until
We will have to iterate through the array at least once, but we know that the number cannot be more than the length of the array + 1. At worst case scenario, if we have an array with 4 of length,  we will get [1,2,3,4], and the missing number will be 5.


### Examples
#### Straight numbers
input = [4,2,3,1] 
We create an array with values false, and make them 
potential answers = [false,false,false,false,false]
Go through and mark them as true as we run across them
- input at 1 is 4, mark potential answers at 4 as true
  => [false,false,false,true,false]
- input at 2 is 2, mark potential answers at 2 as true
  => [false,true,false,true,false]
- repeat until we get [true,true,true,true,false]
- at that point we have gone through the whole array

#### Numbers outside of Range

- input = [8 , 3 , 4, -1, 1,]
- possibles = [false,false,false,false,false,false]
- iterate through array
- 8 > possibles.length, no need to change the array
- 3 -> possible at 3 is true, [false,false,true,false,false,false]
- 4 -> possible at 4 is true, [false,false,true,true,false,false]
- -1 is not possible to be in the array as its negative. no change needed
- 1 -> possible at 1 is true, [true,false,true,true,false,false]

#