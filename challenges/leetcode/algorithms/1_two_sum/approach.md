# Two Sum

## Problem statement

Given an array of integers and a integer target, return the indices of the two numbers that add up to the target

## Input/Output

### Input
- Array
- Assumed all numbers

### Examples

- nums = [2,7,11,15], target = 9 : [0,1]
-  nums = [3,2,4], target = 6 : [1,2]
- nums = [3,3], target = 6 : [0,1]
- 

### Assumptions

- 2 <= nums.length <= 104 (array is at least length of 2)
- -10^9 <= nums[i] <= 10^9 (integers in the array)
- -109 <= target <= 109
### Edge Cases

- Empty Array : 0
- 1 number: return that number 

## Approach

1. create a map/dictionary of integers that are potential matches
    - map will have key as the potential match, and the value as the index of that match
2. iterate through the array
    - check if number is in the map of potential matches
    - if it is
        - return the value of the map at the match
    - if it isnt
        - add the value to the map with key being the number to match, and the value as the its index
3. if the array is iterated through without value, return null
