// non forEach option:

var arr = [1,2,3,4,5,6];

function double(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i] * 2)
    }
}

double(arr);

// with forEach!

forEach(arr, function(number){
    console.log(number * 2)
})

var strings = ["my", "forEach", "example"];

var result = "";
forEach(strings, function (str, index, array) {
    // the forEach callback function ALWAYS has access to these 3 params:
    // the item in the array, its index, and the array itself
    // it's up to use to decide how many of these we want to use!
    if (array.length - 1 !== index) {
        result += str + " ";
    } else {
        result += str + "!!!";
    }
});

// how the forEach function works
function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
