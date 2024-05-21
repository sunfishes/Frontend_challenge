let minutes = 0;
let seconds = 0;
let tenMillis = 0;
const appendTens = document.getElementById("tenMillis");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const buttonStart = document.getElementById("bt__start");
const buttonStop = document.getElementById("bt__stop");
const buttonReset = document.getElementById("bt__reset");
let intervalId;

buttonStart.onclick = function(){
    clearInterval(intervalId)
    minutes = parseInt(inputMinutes.value) || 0;
    seconds = parseInt(inputSeconds.value) || 0;
    tenMillis = parseInt(inputMillis.value) || 0;

    if (isNaN(minutes) || isNaN(seconds) || isNaN(tenMillis)) {
        alert("유효한 시간을 입력하세요.");
        return;
    }
    updateDisplay();
    intervalId = setInterval(operateTimer, 10);
}

buttonStop.onclick = function(){
    clearInterval(intervalId)
}
buttonReset.onclick = function(){
    clearInterval(intervalId)
    tenMillis = 0; seconds = 0; minutes = 0;
    appendTens.textContent = "00"
    appendSeconds.textContent = "00"
    appendMinutes.textContent = "00"
    inputMinutes.value = "";
    inputSeconds.value = "";
    inputMillis.value = "";
}
//10ms마다 시간에 대한 숫자가 증가한다.
function operateTimer(){
    if (tenMillis > 0) {
        tenMillis--;
    } else if (seconds > 0) {
        tenMillis = 99;
        seconds--;
    } else if (minutes > 0) {
        tenMillis = 99;
        seconds = 59;
        minutes--;
    } else {
        clearInterval(intervalId);
        alert("타이머가 종료되었습니다!");
        return;
    }
    updateDisplay();
    
}
function updateDisplay() {
    appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis;
    appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds;
    appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes;
}
