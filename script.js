const newYear="30 Jan 2021"
const newYearDate=new Date(newYear)
const currentDate=new Date()
const milliSec=newYearDate-currentDate

//console.log(new Date()-newYear)
const daysTag=document.getElementById("days")
const hoursTag=document.getElementById("hours")
const minutesTag=document.getElementById("minutes")
const secondsTag=document.getElementById("seconds")
function countdown(){
    const seconds=Math.floor(milliSec/1000);
    const minutes=Math.floor(seconds/60)
    const hours=Math.floor(minutes/60)
    const days=Math.floor(hours/24)
    console.log(seconds);
    console.log(minutes);
    console.log(hours);
    console.log(days);
    daysTag.innerHTML=days
    hoursTag.innerHTML=hours
    minutesTag.innerHTML=minutes
    secondsTag.innerHTML=seconds
}
countdown()
setInterval(secondsTimer,1000)
function secondsTimer(){
    secondsTag.innerHTML=secondsTag.innerHTML-1
}


setInterval(minutesTimer,60000)
function secondsTimer(){
    minutesTag.innerHTML=minutesTag.innerHTML-1
}

setInterval(secondsTimer,3600000)
function secondsTimer(){
    secondsTag.innerHTML=secondsTag.innerHTML-1
}