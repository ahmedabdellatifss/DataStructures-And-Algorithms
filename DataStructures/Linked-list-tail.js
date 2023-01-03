class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class List{
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
    print(){
        if(this.isEmpty()){
            console.log("List is empty !");
        }else{
            let curr = this.head;
            let listValue = '';
            while(curr){
                listValue += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValue);
        }
    }
    // Append new element to front of list
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node
        }
        this.size ++;
    }

    // Append element to the end of list
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size ++;
    }

    // Remove Node from the front
    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size --;

        return value;
    }
    // Remove Node from the end
    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.tail.value;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            let prev = this.head;
            while(prev.next !== this.tail){
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size --;
        return value;
    }
}

const list = new List();

// check if the list is empty
console.log('List is empty: ', list.isEmpty());

// pint the list 
list.print();

// try to insert three elment 
list.prepend(15);
list.prepend(20);
list.prepend(25);

list.append(30);
list.append(35);
list.append(40);

// pint the list 
list.print();

list.removeFromEnd();
list.print();

list.removeFromFront();
list.print();