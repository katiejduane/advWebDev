// forEach ALWAYS returns 'undefined'; don't try to store the return results

let array = [2,4,6,8,10,11,13]

array.forEach(function(value, index, array){
    // the callback function will execute as many times as there are items in the array
    // we don't always need all three parameters, but the order matters!
    // console.log(value, index, array)
})

//anatomy of a forEach
function forEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array)
    }
}

function halfValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val / 2);
    })
    return newArr;
}

// console.log(halfValues(array))

function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val * 2)
    })
    return newArr;
}

// console.log(doubleValues(array))

function onlyEvens(arr){
    let newArr = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
            newArr.push(val)
        }
    })
    return newArr;
}

// console.log(onlyEvens(array))

stringArray = ['katie', 'colt', 'water']
function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val.slice(0,1) + val.slice(-1))
    })
    return newArr;
}

// showFirstAndLast(stringArray)

colorsArray = [{ color: 'plum' }, { color: 'azure' }, { color: 'lemon custard' }]
function addKeyAndValue(arr,key,value){
    arr.forEach(function(color){
        color[key] = value;
    });
    return arr;
}

// console.log(addKeyAndValue(colorsArray, 'favorite', true))

let myString = 'Quinn'
function letterCount(string){
    let stringArray = string.toLowerCase().split('');
    let counter = {};
    stringArray.forEach(function (letter) {
        if (!counter[letter]) {
            counter[letter] = 1;
        } else {
            counter[letter]++;
        }
    });
    return counter;
}

console.log(letterCount(myString))

function vowelCount(str){
    var splitArr = str.split('');
    var obj = {};
    var vowels = 'aeiou'
    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter.toLowerCase()) !== -1){
            if(letter in obj){
                obj[letter]++
            }else{
                obj[letter] = 1
            }
        }
    });
    return obj;
}
