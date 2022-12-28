
//problem Statement:=> Given and array of integers, Sort the array Sorting can either be ascending ot descending

// Quick Sort Idea
// identify the pivot element in the array it could be any element such as last element
// what role the pivot play?
//well you traverse the array from the first element to the last but one element and you put everything that's smaller than the pivot element into a left array and everything that's greater than the pivot element into right array 
// you repeat the process for the individualleft and right arrays till you have an array of length one, an array of length one is sorted array by definition when you reach that base condition you simply concatenate the left array + pivot+ right

function quickSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let pivot = arr[arr.length -1];
    let left = [];
    let right = [];

    for(let i=0; i < arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot , ...quickSort(right)]

}

const arr = [8, 20, -2, 4, -6 ];

console.log(quickSort(arr));

// Time Complexity
// worst case complexity = O(n^2) this will hapen when the array is already sorted
// quick sort algorith is a popular algorith because its average case complexity is (n log n)
// average case complexity = O(n log n)