const API_KEY = "276ba02c7abbd4954374f705e61756a1";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    //js에서 url 호출한 후 response를 data라는 이름으로 가져옴.
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
            
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

//위치를 받아오는 함수, onGeoOk(obj) 로 콜백
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 