// reduce takes an array and turns it into another data structure
// it accepts a callback and an option second parameter
// it iterates through the array
// runs a callback on each value in the array
// the first parameter to the callback is either the first value in the array or 
// the optional second parameter
// the first paranter to the callback is often call the "accumulator";
// and if we do NOT pass in optional second paramter, the "accumulator" will automatically
// start as the first value in the array
// the returned value from the callback becomes the new value of the accumulator
// **** WHATEVER IS RETURNED FROM THE CALLBACK FUNCTION BECOMES THE VALUE OF THE ACCUMULATOR ****


// ANATOMY OF REDUCE
// [1,2,3].reduce(function(accumulator, nextValue, index, array){
//     //whatever is reutrned inside here, will be the value
//     //of the accumulator in the next iteration
// }, optionalSecondParameter)

let array = [1,2,3,4,5]
array.reduce(function(accumulator, nextVal){
    return accumulator + nextVal;
}); // here, no second param was passed, so the  accumulator takes the value of the first item in the array
array.reduce(function (accumulator, nextVal) {
    return accumulator + nextVal;
}, 10); // here '10' is the optional second param, so THAT is the 'accumulator'

var names = ['tim', 'matt', 'colt', 'ellie'];
console.log(names.reduce(function(accumulator, nextVal){
    return accumulator += ' ' + nextVal
}, 'The instructors are'));

var arr = [5,4,1,4,5];
console.log(arr.reduce(function(accumulator, nextVal){
    if(nextVal in accumulator){
        accumulator[nextVal]++;
    }else{
        accumulator[nextVal] = 1
    }
    return accumulator;
}, {}));