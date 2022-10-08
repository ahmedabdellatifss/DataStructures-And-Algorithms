

//problem -> given a number 'n'  find 'n' elements of the fibonacci sequence

// in mathematics, the fibonacci squence is sequence in whiche each number is the sum of two preceding ones,

// the first two numbers in the squence are 0 and 1 


// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(7) = [0,1,1,2,3,5,8]


function fibonacci(n)
{
    const fib = [0,1]
    for(let i=2 ; i<n ; i++)
    {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}


console.log(fibonacci(7));

// Big-O = O(n)