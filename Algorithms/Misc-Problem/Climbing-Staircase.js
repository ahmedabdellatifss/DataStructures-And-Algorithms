// Problem Statment => Given a staircse of 'n' steps, Count the nuber of distinct ways to climb to the top.
// you can either climb 1 step or 2 step at a time

// For example -> if we have one step there is only one way to climb it 
// n1, climbingStaircase(1)=1   | (1)
// if you have two steps there are two ways cimb them
// n2, climbingStaircase(2)= 2   | (1,1) 
// similarly if you have three steps there are three ways to climb one at a time one and thes two or then on 
// n3, climbingStaircase(3)= 3   | (1,1,1) (1,2) and (2,1)
// similarly if you have four steps you have five ways to climb to the top
// n3, climbingStaircase(4)= 5   | (1,1,1,1) (1,1,2) (1,2,1) (2,1,1) and (2,2)

function climbingStaircase(n){
    const noOfWays = [1,2];
    for(let i=2; i<=n; i++){
        noOfWays[i] = noOfWays[i-1]+ noOfWays[i-2]
    }
    return noOfWays[n-1]
}

console.log(climbingStaircase(1)); //1
console.log(climbingStaircase(2)); //2
console.log(climbingStaircase(3)); //3
console.log(climbingStaircase(4)); //5
console.log(climbingStaircase(5)); //8

// Time complexity = 0(n)