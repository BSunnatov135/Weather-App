const app = document.querySelector('.weather-container');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const weatherType = document.querySelector('.weather-type');
const cityName = document.querySelector('.city-name');
const icon = document.querySelector('.weather-icon')
const cloud = document.querySelector('.cloud');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const temp = document.querySelector('.temp');
const rain = document.querySelector('.rain');
const submitButton = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');

let cityInput = "London";
cities.forEach((cityname) => {
    cityname.addEventListener('click', (e) => {
        cityInput = e.target.innerHTML;
        getWeatherData();
    })
})

const locationSearch = document.querySelector('#locationSearch');
const search = document.querySelector('.search');

locationSearch.addEventListener('submit', (e) => {
    if(search.value.length == 0) {
        alert('City not written');}
        else {
            cityInput = search.value;
            getWeatherData();
            search.value = "";
        }
        e.preventDefault();
    }
)

function dayOfTheWeek(day,month,year) {
    const weekDay =  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return weekDay[new Date(`${year}/${month}/${day}`).getDay()]
}

function getWeatherData(){
    fetch(`http://api.weatherapi.com/v1/current.json?key=8cb1ebeba6a441ec9cb155211220811 &q=${cityInput}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    

        temp.innerHTML = data.current.temp_c + "&deg";
        weatherType.innerHTML = data.current.condition.text;
        dateOutput.innerHTML = data.location.localtime;
        cityName.innerHTML = data.location.name;
        cloud.innerHTML = data.current.cloud + "%";
        humidity.innerHTML = data.current.humidity + "%";
        wind.innerHTML = data.current.wind_kph + "km/h"
        rain.innerHTML = data.current.precip_mm + "mm"
        

        const condition = data.current.condition.text;

        if (data.current.is_day == 1){
            if (condition == "Sunny") {
            app.style.backgroundImage = `url(./images/day/sunny.jpeg)`;
            }
            else if (condition == "Partly cloudy" || condition == "Cloudy" || condition == "Partly cloudy" || condition == "Overcast") {
            app.style.backgroundImage = `url(./images/day/cloudy.jpeg)`;
            } 
            else if (condition == "Patchy rain possible" || condition == "Patchy light rain" || condition == "Light rain" || condition == "Moderate rain at times" || condition == "Moderate rain" || condition == "Heavy rain" || condition == "Light rain shower") {
            app.style.backgroundImage = `url(./images/day/rain.jpeg)`;
            } 
            else if (condition == "Patchy snow possible" || condition == "Blowing snow" || condition == "Light snow" || condition == "Moderate rain at times" || condition == "Moderate snow" || condition == "Heavy snow" || condition == "Light snow showers" || condition == "Moderate or heavy snow showers") {
            app.style.backgroundImage = `url(./images/day/snow.jpeg)`;
            } 
        }

        if (data.current.is_day != 1) {
            if (condition == "Clear") {
            app.style.backgroundImage = `url(./images/night/clear.jpeg)`
            }
            if (condition == "Partly cloudy" || condition == "Cloudy" || condition == "Partly cloudy" || condition == "Overcast") {
            app.style.backgroundImage = `url(./images/night/cloudy.jpeg)`;
            } 
            if (condition == "Patchy rain possible" || condition == "Patchy light rain" || condition == "Light rain" || condition == "Moderate rain at times" || condition == "Moderate rain" || condition == "Heavy rain" || condition == "Light rain shower") {
            app.style.backgroundImage = `url(./images/night/rain.jpeg)`;
            } 
            if (condition == "Patchy snow possible" || condition == "Blowing snow" || condition == "Light snow" || condition == "Moderate rain at times" || condition == "Moderate snow" || condition == "Heavy snow" || condition == "Light snow showers" || condition == "Moderate or heavy snow showers") {
            app.style.backgroundImage = `url(./images/night/snow.jpeg)`;
            } 
        }
    })
    
}



