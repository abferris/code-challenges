# Jumping the Numberline Problem

## Problem statement

Given a position, calculate the fastest way to get there. You may only move by jumping the same number of spots left or right as the number jump. The first jump, you may move left or right 1. Second jump you may move left or right 2.

## Input/Output

### Input
- integer

### How it works

1 => [ 1 ]
2 => [ 3 , -1]
3 => [ 0 , 6 , 2 , -4 ]
4 => [ -4 , 4 , 2 , 10 , -2 , 6 , 0 , 8 ]
5 => [ -9 , 1 , -1 , 9 , 7 , 3 , 5 , 15 , 3 , -7 , 1 , 11 , -5 , 5 , 13 , 3]

### Examples

- 1 => 1
- 2 => 4
- 3 => 2
- 4 => 3
- 5 => 5
- 6 => 3



## Approach

The value we look for can be positive or negative, because we can go either way. Whether we hit positive or negative, it will take the same number of jumps. This means that we can condense/cleanse the array by taking the absolute value of each number and deleting the repeats.

While the absolute value number is not in the array, iterate again, then clean it.
   
### Edge Cases

- 0
