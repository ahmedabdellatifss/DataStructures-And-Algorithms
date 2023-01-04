
const linkedList = require("./linkedList");

class linkedListStack{
    constructor(){
        this.list = new linkedList();
    }
    // Append new element to front of list
    push(value){
        this.list.prepend(value);
    }
    // remove element from front of list and return it
    pop(){
        return this.list.removeFromFront();
    }
    // Return the element in the top of stack
    peek(){
        return this.list.head.value;
    }
    isEmpty(){
        return this.list.isEmpty();
    }
    getSize(){
        return this.list.getSize();
    }
    print(){
        return this.list.print();
    }
}

const stack = new linkedListStack();

console.log(stack.isEmpty());

stack.push(20);
stack.push(10);
stack.push(30);

console.log(stack.getSize());

stack.print();

console.log(stack.pop());
stack.print();


console.log(stack.peek());
