/**
 * @param {string} str
 * @return {string}
 */
function longestPalindrome(str) {
    let output = "";
    lstr = str.toLowerCase();
    for(let i = 0; i<lstr.length; i++){
        if (lstr.length-i < output.length){
            return output
        }
        let j = lstr.length;
        while(j>i && j-i>output.length){
            if (
                lstr[i] == lstr[j-1] &&
                isPalindrome(lstr.substring(i,j))
            ){
                output = str.substring(i,j);
            }
            j--
        }
    }
    return output

};


function isPalindrome(string){
    let reverse = string.split("").reverse().join("")
    if(string==reverse){
        return true;
    } else{
        return false;
    }
};

console.log(longestPalindrome(test))

module.exports =  longestPalindrome;