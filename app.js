// var count = 0;
// var intervel ;






// function Timer (){
//     count++
//     console.log(count)



// }
// intervel=setInterval(Timer,1000)

// setTimeout(function(){
// clearInterval (intervel)


// },5000)



// function TimeOut (){
//     console.log("Runnimg")



// }
// setTimeout(TimeOut,5000)

var min = 0;
var sec = 0;
var msec = 0;

var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");

var interval ;

function timer (){

    msec++
    msecheading.innerHTML = msec;
    if(msec >=100){
        sec++
        secheading.innerHTML= sec
        msec = 0;

    }

    else if(sec >= 60){
        min++

        minheading.innerHTML= min
        sec=0;
    }
}

function start (){
    interval = setInterval(timer,10)
}
function pause (){

    clearInterval(interval)


}
function reset (){
min=0;
sec=0;
msec=0;

minheading.innerHTML = min
secheading.innerHTML = sec
msecheading.innerHTML = msec

} 





























