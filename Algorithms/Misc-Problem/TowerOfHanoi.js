
// problem statment
// tower of hanoi is a mathematic puzzle wher we have three rods a number of diske of various diameters.
// the entire stack to the last rod, obeying the following rules.
// -> only one disk may be moved at a time.
// -> each move consists of tacking the upper disk from one of the stacks and placing it on top of another stack or on an emlpty ord. and lastly 
// -> No disk may be placed on top of a disk that is smaller

function towerOfHanoi(n, fromRod, toRod, usingRod){
    debugger
    if(n === 1){
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return
    }
    towerOfHanoi(n-1, fromRod, usingRod, toRod)
       console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n-1, usingRod, toRod, fromRod)   
}
towerOfHanoi(3, 'A', 'C', 'B');

// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C

// Time complexity = 0(n^2)