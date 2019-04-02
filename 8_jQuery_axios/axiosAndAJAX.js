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
var btn = document.querySelector("button");
var section = document.querySelector("#comments");
btn.addEventListener("click", sendRequest);

function sendRequest() {
    axios.get("https://jsonplaaskjldceholder.typicode.com/comments", {
        params: {
            postId: 1
        }
    })
        .then(addComments)
        .catch(handleErrors)
}

function addComments(res) {
    res.data.forEach(function (comment) {
        appendComment(comment);
    });
}

function appendComment(comment) {
    var newP = document.createElement("p");
    newP.innerText = comment.email;
    section.appendChild(newP);
}

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
var ronUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';




