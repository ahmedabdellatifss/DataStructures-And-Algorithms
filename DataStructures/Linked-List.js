class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
    // insert Node to the Start of list
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node
        }
        this.size ++;
    }
    // Append Node to last of list
    append(val){
        const node = new Node(val);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while( prev.next){
                prev = prev.next;
            }
            prev.next = node
        }
        this.size ++
    }

    // print Linked list in the console
    print(){
        if(this.isEmpty()){
            console.log('List is empty!')
        }else{
            let curr = this.head;
            let listValues = ""
            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues)
        }
    }

    // insert element in any position in list
    insert(value, index){
        if(index < 0 || index > this.size){
            return
        }
        if( index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value);
            let prev = this.head
            for(let i=0; i<index -1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size ++
        }
    }
    // Remove Node by index from list
    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removeNode;
        if(index === 0){
            removeNode = this.head;
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0; i< index-1; i++){
                prev = prev.next
            }
            removeNode = prev.next;
            prev.next = removeNode.next

        }
        this.size --;
        return removeNode;
    }

    // Rmove Node by Value 
    removeValue(value){
        
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head = this.head.next;
            this.size --;
            return value;
        }else{
            let prev = this.head;
            while( prev.next && prev.next.value !== value){
                prev = prev.next;
            }
            if(prev.next){
                const removeNode = prev.next;
                prev.next = removeNode.next;
                this.size --;
                return value
            }
            return null;
        }
    }
    // Search 
    search(value) {
        if (this.isEmpty()) {
          return -1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
          if (curr.value === value) {
            return i;
          }
          curr = curr.next;
          i++;
        }
        return -1;
    } 
    // Reverse list
    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;    
    }



    
}


// create new linked list 
const list = new LinkedList();

// // check if the list is empty
// console.log('List is empty: ', list.isEmpty());

// // pint the list 
// list.print();

// // try to insert three elment 
// list.prepend(15);
// list.prepend(20);
// list.prepend(25);

// // pint the list 
// list.print();

// // append elements to start of list
// list.append(5);
// list.append(10);

// // pint the list 
// list.print();

// try to insert element in index zero
list.insert(50,0)
list.insert(60,0)
list.print();

// try to insert2 element in index one
list.insert(70,1)
list.print();
// try to insert element in index two
list.insert(80,2)
list.print();

// remove the element in index 2
list.removeFrom(2)
list.print();

// Remove Node that its value is 70
list.removeValue(50);
list.print();

// search 
console.log(list.search(70));

list.prepend(20);
list.prepend(30);
list.print();
// Reverse the list
list.reverse();
list.print();
// Check the list size 
console.log('list size', list.getSize());