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

var numArr = [5,4,1,4,5];
numArr.reduce(function(accumulator, nextVal){
    if(nextVal in accumulator){
        accumulator[nextVal]++;
    }else{
        accumulator[nextVal] = 1
    }
    return accumulator;
}, {});

function sumOddNums(arr){
    return arr.reduce(function(accumulator, nextVal){
        if(nextVal % 2 !== 0){
            accumulator += nextVal;
        }
        return accumulator
    }, 0);
}
// console.log(sumOddNums([1,2,3,4,5]))

let sisters = [{ first: 'kathryn', middle: 'jonina', last: 'duane' }, { first: 'hannah', middle: 'louise', last: 'duane' }, {first: 'ellen', middle: 'elizabeth', last: 'duane'} ]
function createFullName(arr){
    return arr.reduce(function(accumulator, nextVal){
        accumulator.push(nextVal.first + " " + nextVal.middle + " " + nextVal.last);
        return accumulator;
    }, []);
}
// console.log(createFullName(sisters))


//exercises!
function extractValue(arr, key){
    return arr.reduce(function(accumulator, nextVal){
        accumulator.push(nextVal[key]);
        return accumulator;
    }, []);
}
// console.log(extractValue(sisters, 'first'))

function vowelCount(str){
    let vowels = 'aeiou';
    return str.split('').reduce(function(acc, next){
        if(vowels.indexOf(next.toLowerCase()) !== -1){
            if(next in acc){
                acc[next]++
            }else{
                acc[next] = 1;
            }
        }
        return acc;
    }, {})
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function (acc, next, index) {
        acc[index][key] = value;
        return acc;
    }, arr)
}

// console.log(addKeyAndValue(sisters, 'related', true))

function partition(arr, cb){
    return arr.reduce(function(acc, next){
        if(cb(next)){
            acc[0].push(next);
        }else{
            acc[1].push(next)
        }
        return acc;
    },[[],[]])
}

function isEven(val){
    return val % 2 === 0;
}

let numArray = [11,12,13,14]
console.log(partition(numArray, isEven))