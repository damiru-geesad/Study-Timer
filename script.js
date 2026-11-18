let time = 30* 60;
let timer = null;

const display = document.getElementById("time");

function updateDisplay(){
    let minutes = Math.floor(time/60);
    let seconds = time % 60;

    display.textContent =
        String(minutes).padStart(2,"0") + ":" +
        String(seconds).padStart(2,"0");
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
    time = 25 * 60;
    updateDisplay();
}

document.getElementById("start").addEventListener("click",startTimer);
document.getElementById("pause").addEventListener("click",pauseTimer);
document.getElementById("reset").addEventListener("click",resetTimer);

updateDisplay();