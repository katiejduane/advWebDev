// filter is similar to forEach and map in that it operates on arrays and requires a callback function

// however..

// the result of the callback will always be evaluated into a boolean
// like map, creates  a new array, iterates through it, runs callback function on each item in new array
// if the callback returns true, that value will be added to the new array
// if the callback returns false, that valued will be ignored, not added to new array
// the result of the callback will ALWAYS BE A BOOLEAN!

// try never to write IF statements within a  'filter' function!

// examples...

var arr = [1,2,3]

// console.log(arr.filter(function(value, index, array){
//     return value > 2;
// })) // [3]

var instructors = [
    {name: 'ellie'},
    { name: 'timmy' },
    { name: 'colt' },
    { name: 'bobby' },
];

// console.log(instructors.filter(function(value){
//     return value.name.length > 4;
// }));

// anatomy of filter
function filter(array, callback){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(callback(array[i], i , array)){
            newArr.push(array[i])
        }
    }
    return newArr;
}

function only4Letters(arr){
    return arr.filter(function(val){
        return val.length === 4;
    });
}
// console.log(only4Letters(['amy', 'bobby', 'stan']))

function divisibleBy3(arr){
    return arr.filter(function(value){
        return value % 3 === 0;
    });
}
// console.log(divisibleBy3([1,2,3,4,5,6,7,8,9]))

// exercises

let colorArray = [{ color: 'blue', warmth: 'cool', isPrimary: true }, { color: 'ochre', warmth: 'warm', isPrimary: false }, { color: 'sienna', warmth: 'warm', isPrimary: false }, 
    { color: 'cerulean', warmth: 'cool', isPrimary: false }, { color: 'red', warmth: 'warm', isPrimary: true },]

function filterByValue(arr, key){
    return arr.filter(function(color){
        return color[key] !== undefined;
    });
}
// console.log(filterByValue(colorArray, 'warmth'));

function find(arr, searchVal){
    return arr.filter(function(val){
        return val === searchVal;
    })[0];
}

// console.log(find([1,2,3,4,5], 6))

function findInObj(arr, key, searchVal){
    return arr.filter(function(val){
        return val[key] === searchVal
    })[0];
}

// console.log(findInObj(colorArray, 'isPrimary', true))

function removeVowels(str){
    let vowels = 'aeiou';
    return str.toLowerCase().split('').filter(function(letter){
        return vowels.indexOf(letter) === -1
    }).join('');
}
// console.log(removeVowels('Starcluster'))

function doubleTheOdds(arr){
    return arr.filter(function(num){
        return num % 2 !== 0;
    }).map(function(num){
        return num * 2;
    });
}
// console.log(doubleTheOdds([1,2,3,4,5,6]))