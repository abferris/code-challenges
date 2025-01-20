"use strict";
let Node = require('../LLNode/LLNode.js')

class  Stack {
    #top;
    #capacity
    constructor( value = null, num = null) {
      this.#top = new Node(value);
      this.#capacity = parseInt(num);
        if(isNaN(this.#capacity)){
          this.#capacity = null
        }
    }

    isFull(){
      if(!capacity){
        return false;
      }
      let size = 0;
      let current = this.#top;
      while(current){
        size ++;
        if(size == this.#capacity){
          return true;
        }
        current = current.getNext();
      }
      return false;
    }

    peek(){
      return this.#top.getValue();
    } 

    isEmpty(){
      if(!this.#top){
        return true;
      } else {
        return false;
      }
    }

    push(value){
      if(this.isFull()){
        console.error('Stack is Full!');
        throw new Error('Stack is Full!');
      }
      let element = new Node(value, this.#top);
      this.#top = element;
      return this.peek();
    }

    pop(){
      if(this.isEmpty()){
        console.error('Stack is Empty!');
        throw new Error('Stack is Empty!');
      }

      let temp = this.#top;
      this.#top = this.#top.getNext();
      temp.removeNext()
      return temp.getValue();
    }
    

}

module.exports = Stack;