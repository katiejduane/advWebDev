// a callback function is... 
// a function that is passed into another function as a parameter
// then invoked by that other function

// a higher order function is...
// a function that accepts a callback function as a parameter

// what are callbacks used for?
// advanced array methods, broswer events, AJAX requests, React Development

function callback() {
    console.log("Coming from callback");
}

function higherOrder(fn) {
    console.log("About to call callback");
    fn(); // Callback function is invoked
    console.log("Callback has been invoked");
}

// higherOrder(callback);

//

function sendMessageConsole(message) {
    console.log(message);
}

function sendMessageAlert(message) {
    alert(message);
}

function sendMessageConfirm(message) {
    return confirm(message);
}

sendMessageAlert("Lots of duplication");

// how can the above functions be refactored to use callbacks and be less redundant?

function sendMessage(message, callback) {
    return callback(message);
}

sendMessage("Message for console",
    console.log);

sendMessage("Message for alert", alert);

var answer = sendMessage("Are you sure??",
    confirm);

//

function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

function upperCaseName(name) {
    return name.toUpperCase();
}

greet("Tim", upperCaseName);

// though, callback functions are often anonymous, not declared, see below, and compare to above:

function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

greet("Tim", function (name) {
    return name.toUpperCase();
});

greet("Tim", function (name) {
    return name + "!!!!!";
});
