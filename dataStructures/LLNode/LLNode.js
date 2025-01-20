'use strict';

class LLNode {
    #data
    constructor(data=null,next=null,prev=null ){
        this.#data = #data;
        this.prev = #prev;
        this.next = #next;
    }

    // get functions
    getValue(){
        return this.#data;
    }
    getPrev(){
        return this.#prev;
    }
    getNext(){
        return this.#next;
    }

    //set functions
    setValue(value){
        this.#data = value;
    }
    setPrev(node=null){
        this.#prev = node;
    }
    setNext(node=null){
        this.#next = node;
    }

    // remove functions
    removePrev(){
        this.#prev = null;
    }
    removeNext(){
        this.#next = null;
    }
}

module.exports = LLNode;