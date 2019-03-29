// The Stack: An ordered set of stak frames (the 'stack frame' contains the function that was 
// invoked, the parameters that were passed into the function, and the current line number).
// Most recently invoed function is on the top of the stack, the bottom of the stack is the 
// first function invoked. The stack is processed from top to bottom.

// The Heap: An area in memory where you data is stored. An example:
// The object is created in the heap. obj (below) is only a REFERENCE to the object. 
let obj = {firstName: "Unicorn", lastName: "Smith"}
// New data is not created, only a copy of the reference:
let referenceCopy = obj;


function multiply(x, y) {
    return x * y;
}

var res = multiply(3, 5);

//

function upperCaseFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function upperCaseWords(sentence) {
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = upperCaseFirstLetter(words[i]);
    }
    return words.join(" ");
}

upperCaseWords("lowercase words");

