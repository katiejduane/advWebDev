function countDown(seconds){
    let intervalId = setInterval(function(){
        seconds--;
        if(seconds > 0){
            console.log("Seconds left: ", seconds)
        }else{
            console.log("Ring ring ring!!")
            clearInterval(intervalId);
        }   
    }, 1000)
}

countDown(5)