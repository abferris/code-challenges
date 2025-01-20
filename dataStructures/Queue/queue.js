"use strict";
let Node = require('../LLNode/LLNode.js')

class  Queue {
    #front;
    #rear;
    #capacity;
    constructor( value = null, int = null) {
        let start = value
        if(start != null ){
            start = new Node(value)
        } 
        this.#front = start;
        this.#rear = start;
        this.#capacity = parseInt(int);
        if(isNaN(this.#capacity)){
            this.#capacity = null
        }
    }

    // check if queue is at capacity
    isFull(){
        if(!this.#capacity){
            return false;
        }
        let size = 0;
        let current = this.#front;
        while(current){
            size ++;
            if(size == this.#capacity){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // check if there are any elements in queue
    isEmpty(){
        if(!this.#front){
            return true;
        } else {
            return false;
        }
    }


    enqueue(...values){
        for(let i=0;i< values.length;i++){
            let value = values[i];
            if(this.isFull()){
                console.error('Queue is full!');
                throw new Error('Queue is full!');
            } 
            if(this.isEmpty()){
                this.#front = element;
            }

            let element = new Node(value, this.#rear);
            if(this.#rear){
                this.#rear.setPrev(element);
            }
            this.#rear = element;
        }
    }

    dequeue(){
        if (this.isEmpty()){
            console.error('Queue is empty!')
            throw new Error('Queue is empty!')
        }
        // save the front of the queue
        let temp = this.#front;
        //change the front of the queue
        this.#front = this.#front.getPrev();
        // if length is 1 set the rear to null too
        if(!this.#front){
            this.#rear = null;
        } else {
            //otherwise remove relationships
            this.#front.setNext();
            temp.setPrev()
        }
        return temp.getValue();
    }
    
    peek(){
        if(this.isEmpty()){
            return this.#front;
        }
        return this.#front.getValue();
    }



}




module.exports = Queue;