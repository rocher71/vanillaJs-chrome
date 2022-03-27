const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    //padStart를 쓰기 위해서 number -> string
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText= `${hours}:${minutes}:${seconds}`;
}

getClock(); // 얘 없이 interval만 하면 refresh 했을 때 1초 기다리고 뜸
setInterval(getClock, 1000);