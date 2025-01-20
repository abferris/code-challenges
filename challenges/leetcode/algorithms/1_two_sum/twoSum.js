/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for ( let i = 0; i < nums.length; i++){
        let int = nums[i]
        if (target - int in map){
            return [map[target-int], i]
        }
        map[int] = i
    }
    return null;
};
module.exports =  twoSum;