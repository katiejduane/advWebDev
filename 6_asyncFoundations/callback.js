function callback() {
    console.log("Coming from callback");
}

function higherOrder(fn) {
    console.log("About to call callback");
    fn(); // Callback function is invoked
    console.log("Callback has been invoked");
}

higherOrder(callback);

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

//

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

//

function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

greet("Tim", function (name) {
    return name.toUpperCase();
});

greet("Tim", function (name) {
    return name + "!!!!!";
});
