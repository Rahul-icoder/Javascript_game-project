console.log("This tutorial of weather app using Fetch api");
let lat;
let long;

let timeZone = document.querySelector(".timezone");
let temp_Degree = document.querySelector(".temprature-degree");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;
      //   const proxy = "https://cors-anywhre.herokuapp.com/";
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=1d5c42f7ba5591e3db5b1663130ed970`;
      fetch(api)
        .then((Response) => {
          return Response.json();
        })
        .then((data) => {
          console.log(data);
          document.querySelector(".temprature-degree").innerHTML =
            data.main.temp;
          document.querySelector(".description").innerHTML =
            data.weather[0].description;
          document.querySelector(".timezone").innerHTML = data.name;
          document.querySelector(".weather").innerHTML = data.weather[0].icon;
          // const {temprature, summary} = data.currently;
          // temp_Degree.textContent = temprature;
          // timeZone.textContent = data.timezone;
        });
    },
    (error) => {
      console.error(error);
    }
  );
}
