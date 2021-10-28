# Plan:

Main Objectives: make a 25 minute timer along side a 5 minute break timer

Ways I could solve this:

- Make a counter that would increment with a setInterval of 1000ms
- Use the Date.now api to measure time that has passed since the
  start of timer.

Pseudo Code for first method:

minute = 25 // hard coded to be 25 mintue timer - can be changed through user input if needed.
seconds = 0

timerStartButton.addEventListener("click", ()=>{
const timerId = setInterval(decrement, 1000)
})

const decrement =()=> {
if(second ==0){
minute--
seconds = 59
}
if(minute == 0 && second == 0){
clearInterval(timerId)
}
seconds--
}
