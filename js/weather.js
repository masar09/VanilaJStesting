const API_KEY = "dd199941bf0412a82973c26622a8d0fd";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const city = document.querySelector(".weather .weather__city");
      const weather = document.querySelector(".weather .weather__weather");
      const temp = document.querySelector(".weather .weather__temp");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp + "°C";
    });
}
function onGeoError() {
  console.log("Error");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
