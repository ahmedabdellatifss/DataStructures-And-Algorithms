

// problem statement =>>  Give an number 'n' , find the (n)th  element of the fibonacci squencr

// for example  recursiveFeibonacci(0) = 0 
//              recursiveFeibonacci(1) = 1
//              recursiveFeibonacci(6) = 8     (0,1,1,2,3,5,8)


function recursiveFibonacci(n)
{
    if( n < 2 )
    {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}

console.log(recursiveFibonacci(0));  // 0
console.log(recursiveFibonacci(1));  // 1
console.log(recursiveFibonacci(6));  // 8

//Big-O = O(2^n)

// here the recursion is not best soluthion but in other cases will be best solution