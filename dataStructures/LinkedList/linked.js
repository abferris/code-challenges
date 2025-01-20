"use strict";
let Node = require('../LLNode/LLNode.js')

class LinkedList {
    constructor(){
        this.#head = null;
        this.#size = 0;
    }

    isEmpty(){
        if(!this.#head){
            return true;
        } else {
            return false;
        }
    }


    add(element){
        let newElement = new Node(element);
        if(this.isEmpty()){
            this.#head = newElement;
        } else {
            let current = this.#head;
            while(current.getNext()){
                current = current.getNext();
            }
            current.setNext(element);
        }
        this.#size ++;
    }

    insertAt(element,index){
        let newNode = new Node(element)
        if(index==1){
            let temp = this.#head;
            this.#head =newNode;
            newNode.setNext(temp);
            size ++;
        } else if (index<=this.#size+1) {
            let location = this.#head;
            for(let i = 1; i<this.index-1; i++) {
                let location = location.getNext();
            }          
            location.setNext(newNode);
            size ++;
        }
    }

    removeFrom(index){
        let output = null;
        if(index<=this.#size){
            let current = this.#head;
            for(let i = 1; i<this.#index-1; i++){
                current = current.getNext();
            }
            let output = current.getNext();
            current.setNext(output.getNext());
            output.setNext(null);
            this.#size --;
            return output.getValue();
        }
    }
    removeElement(element){
        let current =this.#head;
        while(current.getNext()){
            if(current.getNext().getValue()== element){
                current.setNext(current.getNext().getNext())
                this.#size --;
                return true;    
            }
            current = current.getNext();
        }
        return false
    }

    indexOf(element){
        let current = this.#head;
        let idx = 1;
        while(current){
            if(current.getValue() == element ){
                return idx;
            }
            current = current.getNext();
            idx++;
        }
        return null
    }
    lastIndexOf(){
        let current = this.#head;
        let output = null
        let idx = 1;
        while(current){
            if(current.getValue() == element ){
                output = idx;
            }
            current = current.getNext();
            idx++;
        }
        return output
    }
    getSize(){
        return this.#size;
    }
    printList(){
        let arr = []
        let current = this.#head;
        while(current){
            arr.push(current.getValue().toString());
        }
        arr.join(", ")
    }

    getFirst(){
        if(this.#head){
            return this.#head.getValue();
        } else {
            return null;
        }
    }
    getLast(){
        if(!this.#head){
            return null
        } else {
            let current = this.#head;
            while(current.getNext()){
                current = current.getNext();
            }
            return current.getValue();
        }
    }
    contains(element){
        let current = this.#head;
        while(current){
            if(current.getValue() == element){
                return true;
            }
            current=current.getNext();
        }
        return false;
    }
    get(index){
        if (index<this.#size){
            let current = this.head;
            let idx = 0;
            while(idx<index){
                current = current.getNext();
                idx++;
            }
            return current.value;
        }
    }

    clone(){
        return structuredClone(this);
    }

}

module.exports = Stack;