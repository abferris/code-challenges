function smallestMissingNum(array){
  let possibles = new Array(n+1);
  for (let i = 0; i<possibles.length; i++){
    possibles[i]= false;
  }
  array.forEach(value=>{
    if(Number.isInteger(value) &&  value>0 && value<=array.length){
      possibles[value-1]==true;
    }
  })
  let found = false;
  let i = 0
  while(!found){
    if (possibles[i]){
      return i+1;
    } else{
      i++
    }
  }
}



module.exports = {smallestMissingNum};