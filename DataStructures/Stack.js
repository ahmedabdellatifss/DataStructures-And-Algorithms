
class Stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    // peek -> to get the value of the top element without removing it`
    peek(){
        return this.items[this.items.length -1 ]
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length;
    }
    print(){
        console.log(this.items.toString())
    }
}

// use the stack 

const stack = new Stack();

// check if the stack is empty
console.log(stack.isEmpty()) // True


//  try to insert three element in the array
stack.push(20)
stack.push(10)
stack.push(30)

// let's print the stack elements
stack.print();

// let's check the size of the stack
console.log(stack.size())

// let's remove the last element in the stack
console.log(stack.pop());

// let's see the top element if the stack
console.log(stack.peek());


