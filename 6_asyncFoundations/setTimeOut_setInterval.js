// setTimeout
function callback(){
    console.log('callback function is runnin')
}

let delay = 1000; // delay is in milliseconds!

// setTimeout(callback, delay);

// 


//setInterval

function callbackInterval(){
    console.log("callback is called over and over, at specified interval!")
}

var repeat = 3000;

// setInterval(callbackInterval, repeat);

// let num = 0;
// setInterval(function(){
//     num++;
//     console.log("the number is:", num)
// }, 1000);

// we can also clear the interval, just like we can clear the timeout! 

let numToClear = 0;
var intervalId = setInterval(function(){
    numToClear++;
    console.log("num: ", numToClear)
    if(numToClear === 5){
        clearInterval(intervalId)
    }
}, 1000);