# code-challenges
This is a space for warmups and code challenges for myself. The challenges will be pulled from online.

## Structure
- Each folder will be where the code challenge came from
- inside such folder will have subdivisions
- Each code challenge will have a README.md file containing the statement of the problem in how it is given
- A markdown file will be given with the following sections in order to mimic a whiteboarding session
  - problem statement
  - inputs
  - expected outputs
  - approach
  - pseudo code
- pseudo code will be copied into the final code

## Tests
For every challenge, when time permits, tests will be created to run and verify that the code functions.

Usually these tests will mimic the given inputs and ouputs, and will have an extra few so that edge cases I wish to test will be accounted for.

This is being done using the npm's jest. If you are downloading this, please run npm i. The commands are as follows:

>jest 
  This will run all of the tests in the folders, excluding archived ones
> jest directory_name
  run all tests within a directory
> jest file.test.js
  run individual test
