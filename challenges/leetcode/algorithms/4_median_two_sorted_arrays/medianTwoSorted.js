/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function medianTwoSorted(arr1,arr2) {
    // while there are more than 2 left
    for(let i = arr1.length+arr2.length; i>2; i-=2){
          // pop off the largest number of the two arrays its array
        if(arr1[arr1.length-1]>arr2[arr2.length-1]){
            arr1.pop();
        } else {
            arr2.pop();
        }
        // shift the smallest from the two arrays
        if(arr1[0]<arr2[0]){
            arr1.shift();

        } else {
            arr2.shift();
        }
    }
    let output = 0;
    let l = arr1.length+arr2.length;
    while(arr1.length||arr2.length){
        if(arr1[0]>arr2[0]){
            output+=arr1.shift();
        } else {
            output+=arr2.shift();
        }
    }
    return output/l
};


module.exports =  medianTwoSorted;