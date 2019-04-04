// called on array and iterates through the array, running a callback on each value;
// if the callback returns true for at least ONE single value, 'some' returns true;
// otherwise, it returns false. the result of the callback, and of 'some' will always 
// evaluate to a boolean. NOT another array!

// ex:
let arr = [1,2,3]
console.log(arr.some(function(value, index, array){
    return value < 2;
})); // true

// anatomy of 'some'
function some(array, callback){
    for(let i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            return true;
        }
    }
    return false;
}

function hasEvenNum(arr){
    return arr.some(function(val){
        return val % 2 === 0;
    });
}

function hasComma(str){
    return str.split('').some(function(val){
        return val === ',';
    });
}
// console.log(hasComma('oh, hello there!'))