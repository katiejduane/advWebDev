// map is like forEach, but pushes values onto a NEW array of the same length and returns it :D
 
var arr = [1,2,3];
var doubledArr = arr.map(function(value,index,array){
    return value * 2
})
// console.log(doubledArr)

function tripleValues(arr){
    return arr.map(function(value){
        return value * 3
    });
}
// console.log(tripleValues(arr))

function onlyFirstName(arr){
    return arr.map(function(val){
        return val.first;
    });
}
// console.log(onlyFirstName([{first: 'katie', last: 'duane'}, {first: 'emily', last: 'craver'}]));

// exercises

function valTimesIndex(arr){
    return arr.map(function(val, index){
        return val * index;
    })
}
// console.log(valTimesIndex(arr))


let namesArray = [{ first: 'sissy', last: 'spacek' }, { first: 'tonya', last: 'harding' }];
function extractKey(arr, key) {
    return arr.map(function (val) {
        return val[key];
    });
}
// console.log(extractKey(namesArray,'first'));

function extractFullName(arr){
    return arr.map(function(val){
        return val.first + " " + val.last;
    });
}
console.log(extractFullName(namesArray))