     
function minDiffFinder(arr ,counter = 0,currentDiff = 0, minDiff = null){
  // error handling
  if(!arrayErrorHandler(arr)){
    arrayErrorHandler(arr);
    return false;
  }
   //if we havent reached the end of the array
   if (counter<arr.length){
      let val = arr[counter];
      //check if value is correct
      if (!valueErrorHandler(val)){
        valueErrorHandler(val);
        return false;
      }
      // recursive add the next value
      minDiff = minDiffFinder(arr, counter+1,currentDiff+val,minDiff)
      // recursive subtract next value
      minDiff = minDiffFinder(arr, counter+1,currentDiff-val,minDiff)
  } else {
    // if we have reached the end of the array
    // check if current difference is less than the min difference
    currentDiff = Math.abs(currentDiff)
    if (minDiff==null || Math.abs(currentDiff)< minDiff){
      // if so, return currentDiff
      return currentDiff
    } else{
      return minDiff
    }
  }
  
  return minDiff
}

//helper function to handle errors
function arrayErrorHandler(arr){
  if( !arr || !Array.isArray(arr)){
    return false
  }
  return true 
}

function valueErrorHandler(value){
  if( typeof(value) != 'number'){
    return false
  }
  return true
}
const arr1 = [1,2,3,4];

module.exports = minDiffFinder