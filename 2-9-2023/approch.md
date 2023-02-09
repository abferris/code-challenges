# Climbing Staircase Problem

## Problem statement

Given a single integer and an array of integers, give all of the permutations you can use to get to the single integer, using the numbers inside the array. Numbers can be repeated, and order matters.

## Input/Output

### Input
- number of steps
- number of steps you can take at a time

### Output
- number of ways you can get there

### Examples
- 4 , [ 3 ] = 0
- 2 , [ 5 ] = 0
-  4, [ 1 ] : 1
- 5 [ 5 ] : 1
- 5[1, 3]: 4

### Assumptions

- no negative values
- integers
- must end on exactly the number


## Approach

- recursive function
- iterates through every value, and adds it to an array
- if sum of the array is equal to the value, add it to the array and don't repeat the function
- if sum of array is greater than value, don't repeat it.