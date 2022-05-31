const API_KEY = "6ddd4f9a715a0071059d70469aa5a37e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather div:first-child");
      const city = document.querySelector("#weather .weather_area");
      const temp = document.querySelector("#weather .weather_temp");
      city.innerText = data.name;
      temp.innerText = Math.floor(data.main.temp) + "º";

      const iconImg = document.createElement("img");
      const currIcon = document.querySelector(".curr_icon");
      let iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

      iconImg.src = iconUrl;
      weather.appendChild(iconImg);
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
