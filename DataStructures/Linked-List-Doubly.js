class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }

}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
    // Append Element to start of list
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size ++;
    }
    //Append e{lement to the end of list
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }
    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size --;
        return value;
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.tail.value;
        if(this.size === 1 ){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return value;
    }
    print(){
        if(this.isEmpty()){
            console.log("List is Empty !");
        }else{
            let curr = this.head;
            let list = "";
            while(curr){
                list += `${curr.value} - `;
                curr = curr.next;
            }
            console.log(list);
        }

    }
    printReverse(){
        if(this.isEmpty()){
            console.log("List is Empty !");
        }else{
            let curr = this.tail;
            let list = "";
            while(curr){
                list += `${curr.value} - `;
                curr = curr.prev;
            }
            console.log(list);
        }
    }
}

// Let's try the code 

const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);

list.prepend(0);
list.print();

list.printReverse();

list.removeFromFront();
list.print();

list.removeFromEnd();
list.print();

console.log(list.getSize());
