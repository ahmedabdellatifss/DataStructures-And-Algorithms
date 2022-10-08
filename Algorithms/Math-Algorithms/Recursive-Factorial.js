

// problem -> given an iteger 'n' , find the factorial of the integer 

// in mathematics ,, the factorial of an non-negative integer 'n' , denoted ( n! )
// is the product of all positive integrs less than or equal to 'n',

// You should Know the factorial of 0 is 1

//for example  factorial(4) = 4*3*2*1=24
//             factorial(5) = 5*4*3*2*1=120

function recursiveFactorial(n)
{
    if( n=== 0)
    {
        return 1;
    }
    return n*recursiveFactorial(n-1);

}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(7));


// Big-O = O(n)

