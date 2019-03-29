// The Queue: An ordered list of functions waiting to be placed on the stack. Functions in the Q
// are processed in a first in first out (FIFO) basis

// The Event Loop: Functionality in the JS runtime that checkes the Q when the stack is empty.
// If the stack is empty, whatever's at the front of the Q is placed in the stack 

// JavaScript is a SINGLE THREADED language! Code exexution is linear. Code that is running canNOT
// be interupted by something else going on in the program


function square(n){
    return n * n;
}

setTimeout(function(){
    console.log("callback is placed", "on the Q");
}, 0)
// putting '0' here doesn't allow it to run immediately, it still waits till the stack is empty

console.log(square(2))