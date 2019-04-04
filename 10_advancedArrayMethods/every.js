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

//exercises
function hasOnlyOdds(arr){
    return arr.every(function(num){
        return num % 2 !== 0;
    });
}
// console.log(hasOnlyOdds([1,2,3,4]))

function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val)
    });
}

let bookArr = [{ title: 'ordinary people', fave: true, own: true }, { title: 'jitterbug perfume', fave: true, own: true },
{ title: 'jurassic park', fave: false, own: false}]

function hasCertainKey(arr, key){
    return arr.every(function(value){
        return key in value;
    })
}
// console.log(hasCertainKey(bookArr, 'own'))

function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
        return val[key] === searchValue;
    })
}

console.log(hasCertainValue(bookArr, 'fave', true))