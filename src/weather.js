const weatherimg = document.querySelector("#todayWeather span:first-child");
const city = document.querySelector("#todayWeather span:last-child");
const API_KEY = "a83845622fb89f98cb319324d7bc57f2";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weatherimg.innerHTML = `<img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png alt="Weather Image" width="50"> ${data.main.temp}°C `;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}
if (false) {
  console.log("hi");
} else {
  console.log("bye");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
