class Queue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    // use enqueue to append item to the end of queue
    enqueue(element){
        this.items[this.rear] = element;
        this.rear++
    }
    // use dequeue to remove item from the front of the queue
    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front ++;
        return item
    }
    isEmpty(){
        return this.rear === 0
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear - this.front;
    }
    print(){
        console.log(this.items)
    }

}

const queue = new Queue();

// check the queue is empty
console.log(queue.isEmpty());

// try to insert three elements into queue
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

// print the size of queue
console.log(queue.size())

// print the queue
queue.print();

// try dequeue
console.log(queue.dequeue());

// try peek
console.log(queue.peek())

// with this optimization the enqueue and dequeue have constant time complexity