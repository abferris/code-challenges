function contiguousSum(array,target){
  //error handling
  if( !target || !array){
    return null;
  }

  let finished = false;
  let i = 0;
  let output = [array[0]];
  while(!finished){
    if (!array[i]){
      output = null;
      finished = true;
    } else if(sumArray(output) == target){
      finished = true;
    } else if( i+1 == array.length){
      if (output.length == 0 || sumArray(output)<target){
        output = null;
        finished = true;
      } else {
        output.shift();
      }
    } else if (sumArray(output) > target){
      output.shift();
    } else if (sumArray(output) < target){
      i++;
      output.push(array[i]);
    }
  }
  return output;

}
// helper function to sum array
function sumArray(array){
  let total = 0;
    for (let i = 0; i <array.length; i++){
      total+=array[i];
    }
  return total;
}



let array = [ 3 , 5 , 7 , 6 , 4 , 2];
let target = 1;

contiguousSum(array,target)

module.exports = {contiguousSum}