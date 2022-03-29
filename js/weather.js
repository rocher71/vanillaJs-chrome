function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in ", lat, lng);
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

//위치를 받아오는 함수, onGeoOk(obj) 로 콜백
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 