let content = document.querySelector("#time");
let interval = document.querySelector("#interval");


setInterval(() => {
    fetch('/getTime').then(res => res.json()).then((res => {

        content.innerHTML = res.hour + ":" + res.minute + ":" + res.second + ":" + res.milisecond;

    })).catch(e => console.log(e));

}, interval.value);