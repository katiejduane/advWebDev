// PROMISE: a promise is an object that represents a task that will be completed in the future


// basic examples, CREATING a promise

// // handling only the resolve
// let p1 = new Promise(function(resolve, reject){
//     resolve([1,2,3,4,5])
// })

// p1.then(function(arr){
//     console.log('promise p1 resolved with data:', arr)
// })

// // handling only the reject
// let p2 = new Promise(function(resolve, reject){
//     reject("error!")
// })
// p2.then(function(data){
//     console.log('promise p1 resolved with data:', data)
// }).catch(function(error){
//     console.log('error', error)
// })

// // handling both resolveand reject
// let p3 =  new Promise(function(resolve, reject){
//     let num= Math.random();
//     if(num < 0.5){
//         resolve(num)
//     }else{
//         reject(num)
//     }
// })

// p3.then(function(result){
//     console.log('success: ', result)
// }).catch(function(error){
//     console.log('error: ', error)
// })

// // example that is actually asynchronous!
// let timePromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let randomInt = Math.floor(Math.random()*10);
//         resolve(randomInt)
//     }, 4000)
// })

// timePromise.then(function(data){
//     console.log('random into passed to reolve:', data)
// })


// disadvantages of nested callbacks (ie: 'callback hell') -->
// - the code is hard to read
// - logic is difficult to reason about
// - the code is not modular

// promise chaining: returning a promise! 

// let promiseChain = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let randInt = Math.floor(Math.random()*10);
//         resolve(randInt);
//     }, 3000);
// });
// promiseChain.then(function(data){
//     console.log('rand int passed to resolve:', data);
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve(Math.floor(Math.random() * 10));
//         }, 500);
//     });
// }).then(function(data){
//     console.log('second random int passed to resolve:', data)
// })

// // promise chaining: returning data
// let promData = new Promise(function(resolve, reject){
//     resolve(5);
// });

// promData.then(function(data){
//     return data * 2
// }).then(function(data){
//     return data + 20;
// }).then(function(data){
//     console.log(data)
// })


// refactoring callback hell
let  counter = 0;
// setTimeout(function(){
//     counter++;
//     console.log("counter:", counter);
//     setTimeout(function(){
//         counter++;
//         console.log("counter:", counter);
//         setTimeout(function(){
//             counter++;
//             console.log("counter:", counter);
//         }, 3000);
//     }, 2000);
// }, 1000);

function inCounter(){
    counter++;
    console.log('counter:', counter)
}

function runLater(callback, timeInMs){
    var p = new Promise(function(resolve, reject){
        setTimeout(function() {
            var res = callback();
            resolve(res);
        }, timeInMs)
    });
    return p;
}

// promise chaining with the above counter!
runLater(inCounter, 1000).then(function(){
    return runLater(inCounter, 2000);
}).then(function(){
    return runLater(inCounter, 3000);
}).then(function(){
    // not necessary
})
