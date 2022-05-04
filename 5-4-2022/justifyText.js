
function justifyText(words,maxLength){
  // setup output array
  let output = [];
  // start at 0
  let i = 0;
  //iterate through words
  let start = 0;
  let line = [];
  while(i<=words.length){
    // if the line is empty add a word.
    if (line.length==0){
      line.push(words[i]);
      i++;
      console.log(line,i)
    } else if (i==words.length || lineLength(line)+words[i].length+1 > maxLength){

      //if we have reached max capacity
      // calculate spaces to add
      let lineString = line[0];
      if(line.length != 1){
        //figure out the spaces needed
        let spacesNeeded = maxLength - lineLength(line);
        //how many spaces per word
        let spaceSlots = line.length-1;
        let baseSpacesPerWord = Math.floor(spacesNeeded/spaceSlots);
        //how many extra spaces do we need
        let extraSpaces = spacesNeeded%spaceSlots
        // setup the spaces to add to
        let space = '';
        for (let k=0;k<baseSpacesPerWord; k++){
          space += ' ';
        }
        // setup the string to push to output
        // put them together
        for(let j=1; j<line.length; j++){
          if (j<extraSpaces){
            // for each extra space needed, add space string, an extra space, and the word
            lineString = lineString+ space +' '+ line[j];
          } else {
            // otherwise add spacestring and the word
            lineString = lineString+space+line[j];
            //reset the line
          }
        }
        line=[];
      } 
      output.push(lineString);
    } else{
            // if this is not the first word, add a word with a space before
            let wordWithSpace = ' '+words[i];
            line.push(wordWithSpace);
            i++
    }

  }
  return output;
}

// count line length helper function
function lineLength(array){
  let l=0
  for(let i=0; i<array.length; i++){
    l+=array[i].length;
  }
  return l
}
// error helper function
function errorHelper(i){
  if(!i){
    return false;
  }
  return true;
}

module.exports = {
  justifyText,errorHelper};


console.log(justifyText(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 16))