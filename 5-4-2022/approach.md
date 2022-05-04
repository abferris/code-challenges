# Justify Text

## Problem statement
Given an array of words

## Input/Output

### Input

Array of Strings,
number(line length)

### Output

Array of strings, all of length numerical input, with spaces between words, (more on the earlier spaces)
### Given/Assumptions

input 1 will be an array of strings
input 2 will be a positivie integer
input 1 strings will not be longer than input 2
a single word on a line will be left aligned
any punctuation will be included in the strings

### Examples

["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16

["the  quick brown", # 1 extra space on the left
"fox  jumps  over", # 2 extra spaces distributed evenly
"the   lazy   dog"] # 4 extra spaces distributed evenly


## Approach

- Create a map of the array with the string lengths.
- while there are words left
  - while count is less than max string length
  - add values to figure out how many strings are being put together
  - count spaces between
  - count how many you're putting together
  - if string will go longer than line length, figure out how many spaces are left
  - separate out strings, add spaces on odd ones


['this', 'is', 'just', 'a', 'test', 'do, 'not', panic'], 10
->
['this', 'is', 'just', 'a', 'test', 'do, 'not', panic']
[4,2,4,1,4,2,3,5], 10
->
4 can fit-> ['this'] [4] -> 3 can fit -> [4,3] ['this','is']-> 5 cannot fit -> 10-7=3   [4('this'),3 ('   '),3 (' is')]-> 'this    is'
push into output and repeat

Not enough Time today to create tests
   

