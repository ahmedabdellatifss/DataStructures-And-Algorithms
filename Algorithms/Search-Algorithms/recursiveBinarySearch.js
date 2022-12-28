


function recursiveBinarySearch(arr, target){
    return search(arr, target, 0, arr.length-1);
}

function search(array, target, leftIndex, rightIndex){
    // if the array is empty
    if( leftIndex > rightIndex){
        return -1;
    }
    let middleIndex = Math.floor((leftIndex + rightIndex ) / 2);
    if(target === array[middleIndex]){
        return middleIndex;
    }
    if( target < array[middleIndex]){
        return search(array, target, leftIndex, middleIndex -1);
    }else{
        return search(array, target, middleIndex +1, rightIndex);
    }
}

console.log(recursiveBinarySearch([-5,2,4,6,10], 10)); //4
console.log(recursiveBinarySearch([-5,2,4,6,10], 6));  //3
console.log(recursiveBinarySearch([-5,2,4,6,10], 20)); //-1


// Time Complexity = O( log n )
//because input Size reduces by half every time