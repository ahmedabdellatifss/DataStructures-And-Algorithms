

// problem -> give a natural number 'n', determine if the number is prime or not,

// What is a prime number?
// A prim number is a natural number greater than 1 , that is not product of two smaller natural numbers.

// for example ->   isPrime(5) = True (5*1 or 1*5)
//                  isPrime(4) = False (1*4 or 2*2 or 4*1 ) false becuse it can be expressed as 2 times 2



function isPrime(n)
{
    if( n < 2 )
    {
        return false;
    }
    for(let i=2 ; i<n ; i++)
    {
        if( n % i === 0 )
        {
            return false;
        }
    }
    return true
}

//Big-O = O(n)


console.log(isPrime(1));   // false
console.log(isPrime(5));   // ture
console.log(isPrime(4));   // false



function isPrimeEnhance(n)
{
    if( n < 2 )
    {
        return false;
    }
    for(let i=2 ; i<=Math.sqrt(n) ; i++)
    {
        if( n % i === 0 )
        {
            return false;
        }
    }
    return true
}

// Big-O = O(square(n))
console.log(isPrimeEnhance(1));   // false
console.log(isPrimeEnhance(5));   // ture
console.log(isPrimeEnhance(4));   // false