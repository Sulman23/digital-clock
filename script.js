// selecting elements
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

//setInterval function

setInterval(() => {
// getting date from date object
    let date = new Date;
// getting hours from date object
    let hr = date.getHours();
// getting minutes from date object
    let min = date.getMinutes();
// getting seconds from date object
    let sec = date.getSeconds();

if (hr < 10) {
    hr = "0" + hr;
} 

if (min < 10) {
    min = "0" + min;
} 

if (sec < 10) {
    sec = "0" + sec;
} 

// updating time  
    hours.innerText = hr;
    minutes.innerText = min;
    seconds.innerText = sec;
}, 1000);