let content = document.querySelector("#time");
let interval = document.querySelector("#interval");
let timeLooper;
startInterval(interval.value);

function startInterval(time) {
    timeLooper = setInterval(() => {
        fetch('/getTime').then(res => res.json()).then((res => {

            content.innerHTML = res.hour + ":" + res.minute + ":" + res.second + ":" + res.milisecond;


        })).catch(e => console.log(e));
        if (document.querySelector("#interval").value != interval.value) {
            console.log("zmiana");
            interval = document.querySelector("#interval");
            clearInterval();
            startInterval(interval.value);
        }

    }, time);
}


document.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        clearInterval(timeLooper);
        timeLooper = startInterval(document.getElementById("interval").value);
    }
})