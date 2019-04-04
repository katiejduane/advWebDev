// every is similar to 'some', but this time, if the callback returns false for ANY single 
// value, the whole function ('every'), returns 'false'; result is a boolean

let arr = [-1,-2,-3];
arr.every(function(value, index, array){
    return value < 0;
}); // true

let arr2 = [1, 2, 3];
arr2.every(function (value, index, array) {
    return value < 2;
}); // false

//anatomy of every
function every(array, callback){
    for(let i = 0; i <array.length; i++){
        if(callback(array[i], i, array) === false){
            return false;
        }
    }
    return true;
}

function allLower(str){
    return str.split('').every(function(value){
        return value === value.toLowerCase();
    })
}

allLower('Hello') //false
allLower('hello') //true

function allArrays(arr){
    return arr.every(Array.isArray)
}