// XHR request; the old school way

// var XHR = new XMLHttpRequest();

// XHR.onreadystatechange = function () {
//     console.log("ready state is... " + XHR.readyState)
//     if(XHR.readyState == 4){
//         if(XHR.status == 200){
//             console.log(XHR.responseText);
//         }else{
//             console.log("There was a problem");
//         }
//     }
// }

// XHR.open("GET", "https://api.github.com/zen");
// XHR.send(); 

//variable declarations
let link = 'https://dog.ceo/api/breeds/image/random'
let btn = document.querySelector("#btn");
let img = document.querySelector("#photo");

//listen for clicks
btn.addEventListener("click", function(){
    //make the request!
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var url = JSON.parse(xhr.responseText).message;
            img.src = url;
        }
    }
    xhr.open("GET", link);
    xhr.send();
})

let coinLink = 'https://api.coindesk.com/v1/bpi/currentprice.json';
let coinButton = document.querySelector("#coin-button");
let price = document.querySelector("#price");
let currency = "USD";

coinButton.addEventListener("click",()=>{
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState == 4 && xhr.status == 200){
            let responsePrice = JSON.parse(xhr.responseText).bpi[currency].rate;
            price.textContent = responsePrice + " " + currency;
        }
    }
    xhr.open("GET", coinLink);
    xhr.send();
})
