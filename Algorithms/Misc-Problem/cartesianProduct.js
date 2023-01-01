// problem statement => Given finite non-empty sets, find their Cartesion Product



function cartesianProduct(arr1, arr2){
    const result = [];
    for(let i=0; i< arr1.length; i++){
        for(let k=0; k< arr2.length; k++){
            result.push([arr1[i],arr2[k]]);
        }
    }
    return result;
}

const arr1 =[1, 2]
const arr2 =[3, 4, 5]

console.log(cartesianProduct(arr1, arr2)); //[ [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ]

// what is the time complexity?
// from the first see we can say we have two lop the time complexity is 0(n^2) but we have 
// difference here the two array don't have same length becuase that the 
// time complexity will be = 0(m*n)
// m = the lenght of arraya1
// n = the lenght of arraya
