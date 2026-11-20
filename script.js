let initialTime = 30*60;
let time = initialTime;
let timer = null;

const display = document.getElementById("time");

function updateDisplay(){
   let hours = Math.floor(time/3600);
   let minutes = Math.floor((time % 3600) / 60);
   let seconds = time % 60;

   display.textContent = 
    String(hours).padStart(2,"0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");
}

function startTimer(){
    if(timer !== null) return;

    timer = setInterval(function(){
        if(time > 0){
            time--;
            updateDisplay();
        }else{
            clearInterval(timer);
            timer = null;
            alert("Study Time Finished");
        }

    },1000);
}
function pauseTimer(){
    clearInterval(timer);
    timer = null;
}
function resetTimer(){
    pauseTimer();
    time = initialTime;
    updateDisplay();
}

document.getElementById("start").addEventListener("click",startTimer);
document.getElementById("pause").addEventListener("click",pauseTimer);
document.getElementById("reset").addEventListener("click",resetTimer);

updateDisplay();

document.getElementById("setTime").addEventListener("click",function(){
    pauseTimer();
    let hours = Number(document.getElementById("hours").value);
    let minutes = Number(document.getElementById("minutesInput").value);
    let seconds = Number(document.getElementById("secondsInput").value);

    if(
        !Number.isInteger(hours) ||
        !Number.isInteger(minutes) || 
        !Number.isInteger(seconds) ||
        hours < 0 || hours > 99 || 
        minutes < 0 || minutes > 59 ||
        seconds < 0 || seconds > 59
    ){
        alert("Please enter valid time values!");
        return;
    }

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if(totalSeconds <= 0){
        alert("Please enter a time grater than Zero!")
        return;
    }
    initialTime = totalSeconds;
    time = totalSeconds;

    updateDisplay();

    alert("Your study time has been set!");
})