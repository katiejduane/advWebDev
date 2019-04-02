// enter the fetch API!

let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

// fetch(url)
// .then(function(response){
//     console.log(response);
//     return response.json()
//     })
//     .then(function (data) {
//         console.log(data.bpi.EUR.rate)
// })

// fetch options
// you must ALWAYS provide the url first, but you can also send an object
// that contains key-value pairs for the options you want to provide.

// fetch(url, {
//     method: 'POST',
//     body: JSON.stringify({
//         name: 'blue',
//         login: 'bluecat'
//     })
// })
// .then(function(data){
//     //do something
// })
// .catch(function(error){
//     //handle error
// })

// fetch(url, {
//     // method, body, headers, credientials, redirect, etc, can be sent through here
// })
//     .then(function (response) {
//         console.log(response);
//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data.bpi.EUR.rate)
//     })

// fetch error handling
var btn = document.querySelector("#bad-button");
btn.addEventListener("click", function () {
    var url = 'https://api.github.com/users/coltsadas';
    fetch(url)
        .then(handleErrors)
        .then(function(request){
            console.log('everything is fine!')
            console.log(request)
        })
        .catch(function(error){
            console.log(error);
            //if the problem is rejected, if there is aproblem with the request itself,
            //.catch is called, but if there is a problem in the RESPONSE, .catch isn't triggered
        }) 
});

function handleErrors(request) {
    if (!request.ok) {
        //throw error
        throw Error(request.status);
    }
    return request;
}

// random user generator exercise!
var avatar = document.querySelector("#avatar");
var fullName = document.querySelector("#fullname");
var userName = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
var nextButton = document.querySelector("#btn");

nextButton.addEventListener("click", ()=> {
    let url = 'https://randomuser.me/api/'
    fetch(url)
        .then(errorHandler)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError)
})

function errorHandler(res){
    if(!res.ok){
        throw Error(res.status);
    }
    return res;
}

function parseJSON(response){
    return response.json().then(function(data){
        return data.results[0]
    })
}

function updateProfile(data){
    fullName.textContent = data.name.first + " " + data.name.last
    userName.textContent = data.login.username
    email.textContent = data.email
    city.textContent = data.location.city
    avatar.src = data.picture.medium

}

function printError(error){
    console.log(error)

}

// FETCH is neat-o, but there is a problem...
// browser compatibility is NOT supported by IE...