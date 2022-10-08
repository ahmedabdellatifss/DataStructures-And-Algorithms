
// problem -> given an iteger 'n' , find the factorial of the integer 

// in mathematics ,, the factorial of an non-negative integer 'n' , denoted ( n! )
// is the product of all positive integrs less than or equal to 'n',

// You should Know the factorial of 0 is 1

//for example  factorial(4) = 4*3*2*1=24
//             factorial(5) = 5*4*3*2*1=120


function factorial(n)
{
    let result = 1;
    for(let i=2 ; i<=n ; i++)
    {
        result = result * i
    }
    return result;
}

console.log(factorial(5));


// Big-O = O(n)