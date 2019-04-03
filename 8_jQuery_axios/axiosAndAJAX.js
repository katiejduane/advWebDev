// we must first REQUIRE axios, since it's not native! link w/ a CDN is easiest...

// basic axios syntax:

// axios.get(url)
// .then(function(res){
//     console.log(res.data)
// })
// .catch(function(err){
//     console.log(err)
// })

// trivia API call!
let url = 'https://opentdb.com/api.php?amount=1'

axios.get(url)
.then(function(res){
    console.log(res.data.results[0])
})
.catch(function(){
    console.log('error')
})

// axios error handling!
// var btn = document.querySelector("button");
// var section = document.querySelector("#comments");
// btn.addEventListener("click", sendRequest);

// function sendRequest() {
//     axios.get("https://jsonplaaskjldceholder.typicode.com/comments", {
//         params: {
//             postId: 1
//         }
//     })
//         .then(addComments)
//         .catch(handleErrors)
// }

// function addComments(res) {
//     res.data.forEach(function (comment) {
//         appendComment(comment);
//     });
// }

// function appendComment(comment) {
//     var newP = document.createElement("p");
//     newP.innerText = comment.email;
//     section.appendChild(newP);
// }

// axios has a special property for the responses and the request; 'err'
// it checks if there is an error with the response, or the request
function handleErrors(err) {
    if (err.response) {
        console.log("Problem With Response ", err.response.status);
    } else if (err.request) {
        console.log("Problem With Request!");
    } else {
        console.log('Error', err.message);
    }
}

// RON SWANSON EXERCISE!
let ronUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
let xhrButton = document.querySelector('#xhr');
let fetchButton = document.querySelector('#fetch');
let jQueryButton = document.querySelector('#jquery');
let axiosButton = document.querySelector('#axios');
let quoteBox = document.querySelector('#quote');

//xhr
xhrButton.addEventListener("click", function(){
    let xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = JSON.parse(xhr.responseText);
            quoteBox.textContent = response[0]
        }
    }
    xhr.open("GET", ronUrl);
    xhr.send();
})

//fetch
fetchButton.addEventListener('click', function(){
    fetch(ronUrl)
        .then(errorHandler)
        .then(parseJSON)
        .then(changeDOM)
        .catch(printError)
})


function errorHandler(response){
    if(!response.ok){
        throw Error(response.status)
    }
    return response
}

function parseJSON(response){
    return response.json().then(function(data){
        console.log(data)
        return data[0]
    })
}

function changeDOM(data){
    quoteBox.textContent = data
}

function printError(error){
    console.log(error)
}

//jQuery
$('#jquery').click(function () {
    $.getJSON(ronUrl)
        .done(function(data){
            $('#quote').text(data[0])
        })
        .fail(function(){
            alert("ron didn't answer!")
        })
})

//axios
axiosButton.addEventListener('click', function(){
    axios.get(ronUrl)
        .then(function(res){
            let ronsAnswer = res.data[0]
            quoteBox.textContent = ronsAnswer
        })
        .catch(function(){
            console.log('oops. there was an error')
        })
})







