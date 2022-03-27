const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

getClock(); // 얘 없이 interval만 하면 refresh 했을 때 1초 기다리고 뜸
setInterval(getClock, 1000);