
const linkedList = require('./linkedList');

class LinkedListQueue{
    constructor(){
        this.list = new linkedList();
    }

    // Insert element to rear/tail of Queue
    enqueue(value){
        this.list.append(value);
    }
    // Remove element from Front of Queue
    dequeue(){
        return this.list.removeFromFront();
    }
    // Retrive the first element in the Queue
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

const queue = new LinkedListQueue();

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.getSize());

queue.print();

console.log(queue.peek());

queue.dequeue();

queue.print();
