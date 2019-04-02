// There are 4 jQuery methods we're going to take a look at:
// - $.ajax
// - $.get
// - $.post
// - $.getJSON

$('#alert-btn').click(function(){
    alert("jQuery works!")
})

// ajax syntax with jQuery
// $.ajax({
//     //we pass it an object containing info about the request we're going to make
//     method:"GET",
//     url:"some.api.com"
//     })
//     .done(function(res){
//         // console.log(res);
//     })
//     .fail(function () {
//         //do something if there's a problem
// })

$("#btn").click(function(){
    $.ajax({
        method: "GET",
        url: 'https://baconipsum.com/api/?type=meat-and-filler',
        dataType: 'json'
    })
    .done(addMeat)
    .fail(function(){
        alert('oh no! failed!')
    })
})

function addMeat(data){
    $("#meatText").text(data[0])
}

// jQuery AJAX shorthand methods

//.get()
// jQuery.get == $.get
$("#getBtn").click(function () {
    $.get('https://api.github.com/users/katiejduane')
    .done(function(data){
        console.log(data)
    })
    .fail(function(){
        console.log('error')
    })
})

//.post()
$("#postBtn").click(function () {
    var data = {name: 'tabitha', city: 'north pole'}
    $.post('www.catsarecool.com', data)
    //obviously this is not a real url
    .done(function(data){
        console.log('hi!');
    })
    .fail(function(){
        console.log('error');
    })
})

//.getJSON()
$("#getJSONBtn").click(function () {
    $.getJSON('https://api.github.com/users/katiejduane')
    .done(function(data){
        console.log(data)
    })
    .fail(function(){
        console.log('uh oh')
    })
})

$("#catButton").click(function(){
    $.getJSON('http://aws.random.cat/meow')
    .done(function(data){
        // console.log(data)
        $('#catImg').attr("src", data.file);
    })
    .fail(function(){
        alert('This request is not pawsible :(')
    })
})