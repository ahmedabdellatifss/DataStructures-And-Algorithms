
class Queue{
    constructor(){
        this.items = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift();
    }
    isEmpty(){
        return this.items.length === 0 ;
    }
    peek(){
        if(! this.isEmpty()){
            return this.items[0]
        }
        return null;
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}

// create instance from queue

const queue = new Queue();

console.log(queue.isEmpty());

// let's insert three element to queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

// what is size
console.log(queue.size())

// let's print the element
queue.print()

// try the dequeue
queue.dequeue()
queue.print()