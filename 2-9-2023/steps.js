function steps(stairs, options, output = 0){
  if(stairs==0){
    return output+1;
  } else if (stairs<0){
    return output;
  } else {
    options.forEach(option =>{
     output = steps(stairs-option, options, output);
    })
  }
  return output
}



module.exports= {steps}