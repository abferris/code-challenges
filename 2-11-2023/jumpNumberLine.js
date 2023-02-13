function jumpNumberLine(target, array=[0], i = 0 ){
  if( array.includes(target) ){
    return i;
  } 
  i++;
  let newArray = [];
  array.forEach(value=>{
    let plus = Math.abs(value+i);
    let minus = Math.abs(value-i);
    if(!newArray.includes(minus)){
      newArray.push(minus);
    }
    if(!newArray.includes(plus)){
      newArray.push(plus);
    }

  });
  return jumpNumberLine(Math.abs(target),newArray, i )
}



module.exports = {jumpNumberLine};