
// problem statment: Given an array of integers, sort the array ,
// sorting can either be asending or descending

// Bubble Sort Idea
// Compare adjacent elements in the arrat and swap the positions if they are not in the itended order
// Repeat the instruction as you step through each elements in the array
// Once you step through the whole array with no swaps, the array is sorted

function bubbleSort(arr){
    let swapped;
    do{
        swapped = false;
        for(let i=0; i< arr.length -1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i]= arr[i+1]
                arr[i+1]=temp
                swapped= true
            }
        }
    }while(swapped);
}

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr); //[ -6, -2, 4, 8, 20 ]


// Time Complexity = O( n^2 )
// because we have two loop or nested loop