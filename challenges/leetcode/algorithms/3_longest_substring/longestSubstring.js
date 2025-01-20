/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function longestSubstring(str) {
    let longest = 0;
    let start = 0;
    let current = 0;
    let chars = new Set();
    while (current < str.length) {
        if (chars.has(s[current])) {
            chars.delete(str[start]);
            start++;
        } else {
            chars.add(s[current]);
            if(chars.size>longest){
                longest=chars.size;
            }
        }
    }
    return longest;
};
module.exports =  longestSubstring;