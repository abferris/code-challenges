"use strict";

class  Array {
    // Issue: we have to use rest paramaters, which means we are inherently using the built-in array function
    constructor( ...items ) {
        this.data= {};
        this.length = 0;
        for ( const item of items ) {
            this.data[this.length] = item;
            this.length++;
        }
        
    }


    at(idx){
        return this.data[idx];
    }

    print(){
        let output = '[';
        for(let i = 0; i<this.length; i++){
            if (i>0){
                output+= ', '
            }
            output += this.at(i);
        }
        output += "]";
        return output;
    }


    push(...items){
        for (const item of items){
            this.data[this.length] = item;
            this.length++;
        }
        return this.length;
    }

    //assuming arr is a instance of Array
    concat(arr){
        if(arr instanceof Array == false){
            return this;
        }

        let cloneData = new Array()
        for( let i=0; i<this.length; i++){
            cloneData.push(this.at(i))
        }
        for(let j=0;j<arr.length; j++){
            cloneData.push(arr.at(j))
        }
        return cloneData;
    }
    
    slice(start=0, end=this.length){
        if(start<0){
            start = this.length+start;
        }
        if(end<0){
            end = this.length+end;
        }

        let newArr = new Array();
        for (let i = start; i<end && i<this.length; i++){
            newArr.push(this.at(i))
        }
        return newArr
    }

    copyWithin(target,start,end=this.length){
        //use slice to create an array of what you want to copy
        let copy =this.slice(start,end)
        for(let i=0; i<copy.length; i++){
            if(target+i < this.length){
                this.data[target+i] = copy.data[i];
            }
        }
        return this;
    }

    every(callbackfn){
        for(let i = 0; i<this.length; i++){
            if(!callbackfn(this.data[i])){
                return false;
            }
        }
        return true
    }

    fill(value, start=0, end=this.length){
        for(let i=start; i<end; i++){
            if (i>this.length) {
                return this;
            } else{
                this.data[i] = value;
            }
        }
        return this
    }

    filter(callbackfn){
        let output = new Array()
        for(let i=0; i<this.length; i++){
            if( callbackfn(this.data[i])){
                output.push(this.data[i]);
            }
        }
        return output
    }
    find(callbackfn){
        for(let i=0; i<this.length; i++){
            if( callbackfn(this.at(i))){
                return this.at(i);
            }
        }
        return undefined
    }
    findIndex(callbackfn){
        for(let i=0; i<this.length; i++){
            if( callbackfn(this.at(i))){
                return i;
            }
        }
        return undefined
    }
    findLast(callbackfn){
        for(let i=this.length-1; i>=0; i--){
            if( callbackfn(this.at(i))){
                return this.data[i];
            }
        }
        return undefined
    }
    findLastIndex(callbackfn){
        for(let i=this.length-1; i>=0; i--){
            if( callbackfn(this.at(i))){
                return i;
            }
        }
        return undefined
    }
    flat(){
        let output= new Array();
        
        return output;
    }
    flatMap(){}
    forEach(callbackfn, thisArg){

    }
    includes(target, start=0){
        for(let i=start; i<this.length; i++){
            if(this.at(i) == target){
                return true
            }
        }
        return false
    }
    indexOf(target, start=0){
        for(let i=start; i<this.length;i++){
            if(this.at(i) == target){
                return i;
            }
        }
        return -1;
    }
    join(separator=","){
        let output = ''
        for(let i=0; i<this.length;i++){
            if(i>0){
                output+= separator;
            }
            output+=this.at(i);
        }
        return output;
    }

    lastIndexOf(target, start=this.length){
        if(start<0){
            start+=this.length;
        }
        for(let i = start; i>=0; i--){
            if(this.at(i) == target){
                return i;
            }
        }
        return -1;
    }
    map(callbackfn, thisArg){
        let output = new Array()
        for(let i =0; i<this.length;i++){
            output.push(callbackfn(this.at(i)))
        }
        return output;
    }
    pop(){
        delete this.data[this.length-1];
        this.length--;
    }
    reduce(callbackfn, initialValue){
        if(this.length==0){
            throw new Error('Reduce of empty array with no initial value')
        }
        if( typeof initialValue !== 'undefined'){
            output= initialValue;
            let i = 0;
        } else{
            output=this.at(0);
            let i = 1;
        }
        for(i; i<this.length;i++){
            output = callbackfn(output,this.at(i));
        }
        return output
    }
    reduceRight(callbackfn, initialValue){
        if(this.length==0){
            throw new Error('Reduce of empty array with no initial value')
        }
        if( typeof initialValue !== 'undefined'){
            output= initialValue;
            let i = this.length-1;
        } else{
            output=this.data[this.length-1];
            let i = this.length-2;
        }
        for(i; i>=0;i--){
            output = callbackfn(output,this.at(i));
        }
        return output
    }
    reverse(){
        let output= new Array();
        for(let i = this.length-1; i>=0; i--){
            output.push(this.at(i));
        }
        return output
    }
    shift(){
        for( let i = 0; i< this.length-1;i++){
            this.data[i] = this.at(i+1);
            this.pop();
        }
    }
    
    some(callbackfn){
        for(let i=0; i<this.length; i++){
            if(callbackfn(this.at(i))){
                return true;
            } else {
                return false;
            }
        }
    }
    sort(compareFn=compareNumbers){
        for(let i = 1; i>this.length; i++){
            let stop = false;
            let j = i;
            while(j>0 && !stop){
                if(compareFn(this.at(j),this.at(j-1))){
                    let holder = this.at(j);
                    this.data[j] = this.at(j-1);
                    this.data[j-1] = holder;
                } else {
                    stop=true;
                }
            }
        }
    }

    splice(start, deleteCount, ...items){
        let temp = this.slice(start);
        for(let i =0 ;i<deleteCount; i++){
            temp.shift();
        }

        for(let i=0; i<items.length; i++){
            this.data[i+start]= items[i];
        }

        let newStart=start+items.length
        for(let j=0; j<temp.length; j++){
            this.data[newStart+j] = temp[j];0
        }
    }

    unshift(...items){
        for(let i = this.length-1; i>=0;){
            this.data[i+items.length] = this.at(i);
        }
        this.length+=items.length;
        for(let j=0;j<items.length;j++){
            this.data[j] = items[j];
        }
        
        return this.length;
    }
    with(idx,value){
        let temp = this.slice()
        temp.data[i]= value;
    }
    
    // following functions requires iterator
    // maybe use linked list?
    values(){}
    keys(){}
    entries(){}
}

function compareNumbers(a, b) {
    return a - b;
}
const isBelowThreshold = (currentValue) => currentValue < 40;
let arr = new Array(1, 30, 39, 42, 10, 13)


module.exports = Array;