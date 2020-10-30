var timerFace = document.getElementById("timer_face");
var timerOutput = document.getElementById("timer_lap_output");
var timerLapCount = 0;
var buttons = {
    start: document.getElementById("start"),
    stop: document.getElementById("stop"),
    lap: document.getElementById("lap"),
    reset: document.getElementById("reset")
};

var start = {
    hours: null,
    minutes: null,
    seconds: null,
    milliseconds: null
};

function buttonSetup()
{
    buttons.start.addEventListener("click", startTimer);
    buttons.lap.addEventListener("click", lapTimer);
    buttons.reset.addEventListener("click", resetTimer);
}


function startTimer()
{
    let t = new Date();
    start.hours = t.getHours();
    start.minutes = t.getMinutes();
    start.seconds = t.getSeconds();
    start.milliseconds = t.getMilliseconds();
    timerFace.innerHTML = getTimerStart();
    buttons.lap.disabled = false;
}

function getTimerStart()
{
    return start.hours + ":" + 
        start.minutes + ":" + 
        start.seconds + ":" + 
        start.milliseconds; 
}

function lapTimer()
{
    let t = new Date();
    let lapped_time = {
        lap_hr: Math.abs(t.getHours() - start.hours),
        lap_min: Math.abs(t.getMinutes() - start.minutes),
        lap_sec: Math.abs(t.getSeconds() - start.seconds),
        lap_mil: Math.abs(t.getMilliseconds() -start.milliseconds)
    };
    var newEntry = document.createElement("p");
    var node = document.createTextNode("Lap " + timerLapCount + " - " +
        lapped_time.lap_hr + ":" +
        lapped_time.lap_min + ":" +
        lapped_time.lap_sec + ":" +
        lapped_time.lap_mil);
    timerLapCount++;
    newEntry.appendChild(node);
    timerOutput.appendChild(newEntry);
}

function resetTimer()
{
    while(timerOutput.firstChild)
    {
        timerOutput.removeChild(timerOutput.firstChild);
    }
    timerLapCount = 0;
}


window.onload = buttonSetup;