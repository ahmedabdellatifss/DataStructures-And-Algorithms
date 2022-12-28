//problem Statement:=> Given and array of integers, Sort the array

// Merge Sort idea
// divide the array into sub arrays, each contining only one element ( an array with one element is considered sorted)
// repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining, that will be the sorted array

function mergeSort(arr){
    debugger
    if(arr.length < 2){
        return arr;
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr){
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, 4, -6 ];

console.log(mergeSort(arr));

// Time Complexity = O( n log n )