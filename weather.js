const weather = document.querySelector('.js-weather');
const COORDS = 'coords';
const API_KEY = `73421530f95a38cf6ac5f079a3791af3`;

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
    .then(function(res) {
        return res.json();
    }).then(function(json){
        console.log(json);
        const currentWT = json.weather[0].main;
        const temp = json.main.temp;
        const location = json.name;
        weather.innerHTML = `${currentWT} ${temp}°C<br>@${location}`;
    });
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    getWeather(latitude, longtitude);
}

function handleGeoError() {
    console.log(`Can't access your position!`);
}


function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    }else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();