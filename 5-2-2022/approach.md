# Find minimum number of coins that make a given value

## Problem statement

Given a value, and assuming we have an infinite amount of coins, what is the least value of coins we are will need?

## Input/Output

### Input

Input: number in cents. Usually below 100, but can be any number

### Output

Output: number of Coins

### Assumptions

 - Us Standard denominations
 - no negative values 

### Examples

 - 26 => 2 (quarter and penny)
 - 55 => 3 (2 quarter and a nickel)
 - 9 => 5 (nickel and 4 pennies)
 - 25 => 1 (quarter)

### Edge Cases

There shouldn't be any outliars

## Approach

Some may do this recursively, like the number of varition problems, but that creates memory.

Better to create an array of the denomination values, and divide by those. If we were not allowed to assume standard denominations, this might be necessary, ex Denominations = [10, 7, 5, 1] and the value 12. if we did it this way we would end up with 3, but the true answer would be 2.



   

