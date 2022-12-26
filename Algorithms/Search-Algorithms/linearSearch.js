
// problem description =>  given an array of 'n' elements and a target element 't' find the index of 't' in array return-1 if the target element not found

// arr=[-5, 2, 10, 4, 6]  t=10 , index should return = 2;
// arr=[-5, 2, 10, 4, 6]  t=6 , index should return = 4;
// arr=[-5, 2, 10, 4, 6]  t=15 , index should return = -1;


const arr = [-5, 2, 10, 4, 6];

function linearSearch(arr, target){
    for(let i =0 ; i< arr.length ; i++ ){
        if(arr[i] === target){
            return i;
        }
    }    
    return -1;
}


console.log(linearSearch(arr, -5));
console.log(linearSearch(arr, 6));
console.log(linearSearch(arr, 15));

// Big-O = O(n)linear