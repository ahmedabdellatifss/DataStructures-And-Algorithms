
// problem description => Given a sorted array of 'n' element and target element 't' , find the index of 't' in the array return -1 if the target element is not found 

// Example arr=[-5,2,4,6,10]  t=10 ; should return 4

function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length -1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if ( target === arr[middleIndex]){
            return middleIndex;
        }
        if ( target < arr[middleIndex]){
            rightIndex = middleIndex - 1;
        }else{
            leftIndex = middleIndex + 1;
        }
    }
    return-1
}


console.log(binarySearch([-5,2,4,6,10], 10)); //4
console.log(binarySearch([-5,2,4,6,10], 6));  //3
console.log(binarySearch([-5,2,4,6,10], 20)); //-1


// Time Complexity = O( log n )
//becouse input Size reduces by half every time