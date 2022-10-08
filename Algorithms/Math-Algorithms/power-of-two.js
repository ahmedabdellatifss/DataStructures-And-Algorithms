

// problem description =>  give a positive integer 'n' , determine if the number is a power of 2 or not 

// An integer is power of two if there exists an iteger 'x' such that 'n'===2^x

// for example => isPowerOfTwo(1) = true(2^0)
//                isPowerOfTwo(2) = true(2^1)
//                isPowerOfTwo(3) = false


function isPowerOfTwo(n)
{
    if(n < 1)
    {
        return false;
    }
    while( n > 1 )
    {
        if( n % 2 !== 0 )
        {
            return false
        }
        n = n/2
    }
    return true
}

// input size reduce by half -> then time complixety is Big_O = O(log'n')

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false



// inhance code by use bitwise  operator 

// when use bitwise the time complexity will be constant instead of linear time complexity

function isPowerOfTwoBitwise(n)
{
    if(n < 1)
    {
        return false;
    }
    
    return ( n & (n-1)) === 0 ;
}

console.log(isPowerOfTwoBitwise(1)); // true
console.log(isPowerOfTwoBitwise(2)); // true
console.log(isPowerOfTwoBitwise(5)); // false


 // Big-O = O(1)