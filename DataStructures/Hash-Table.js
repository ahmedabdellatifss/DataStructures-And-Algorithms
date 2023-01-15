// Hash Table:-
// - A hash table, also known as hash Map, is a data structure that used to store key-vlue pairs
// - Given a key, you can associate a value with that key for ever fast lookup
// - JavaScript objects is special implentation of the hash table data structure, However, object class adds its own keys.
// - Keys thay you input may conflict and overwrite the inherited default property

// - Map which were introduce in 2015 allow you to stoe key-value pairs


class HashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    hash(key) {
      let total = 0;
      for(let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }    
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) {
          this.table[index] = [[key, value]];
        } else {
          const sameKeyItem = bucket.find((item) => item[0] === key);
          if (sameKeyItem) {
            sameKeyItem[1] = value;
          } else {
            bucket.push([key, value]);
          }
        }
      }
    
      get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
          const sameKeyItem = bucket.find((item) => item[0] === key);
          if (sameKeyItem) {
            return sameKeyItem[1];
          }
        }
        return undefined;
      }

      remove(key) {

        let index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
          const sameKeyItem = bucket.find((item) => item[0] === key);
          if (sameKeyItem) {
            bucket.splice(bucket.indexOf(sameKeyItem), 1);
          }
        }
      }
    
      display() {
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[i]) {
            console.log(i, this.table[i]);
          }
        }
      }
 }

 let table = new HashTable(50);

 table.set('name', 'Ahmed');
 table.set('age', '30');
 table.set('name', 'Mohammed');

 table.display();

 table.remove('age');
 table.display();
