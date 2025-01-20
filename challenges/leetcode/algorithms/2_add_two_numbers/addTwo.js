
function addTwo(arr1,arr2){
  // error handling
  //function
  console.log("start")
  let i = 0;
  let l = arr2.length

 
  for(let i = 0; i<l; i++){
    console.log(arr1, arr2, arr2.length)
   
    let num = arr2.shift();
    console.log(num)
    if (i<arr1.length){
      
      arr1[i]+= num;
    } else {
      arr1.push(num)
    }
    if (arr1[i]>=10){
      arr1[i]-=10;
      if(!arr1[i+1]){
        arr1[i+1]=1;
      } else {
        arr1[i+1]++
      }
    }
  }

  console.log(arr1)
  return arr1;
}

let l1 =[0];
let l2 = [0];
addTwo(l1,l2)


// error helper function
function errorHelper(i){
  if(!i){
    return false;
  }
  return true;
}

module.exports = addTwo;