
function minCoins(cents){
  // error handling function
  if(!cents){
    cents=0;
  }
  if(!errorHandler(cents)){
    return null;
  }


  let denominations = [25,10,5,1];
  let coinsUsed=0;
  // iterate through the first column
  while(cents>0){
    for(let i=0; i<denominations.length;i++){
      let denNum = Math.floor(cents/denominations[i]);
      coinsUsed += denNum;
      cents -= denNum*denominations[i];
    }
  }
  return coinsUsed;
}

function errorHandler(value){
  if ( typeof(value) != 'number'){
    console.error('incorrect input')
    return false;
  }
  return true
}


module.exports = {
  minCoins,errorHandler
};