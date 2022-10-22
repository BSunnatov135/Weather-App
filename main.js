const app = document.getElementsByClassName('weather-container');
const temp = document.getElementsByClassName('temp');
const date = document.getElementsByClassName('date');
const time = document.getElementsByClassName('time');
const weatherType = document.getElementsByClassName('weather-type');
const city = document.getElementsByClassName('city-name');
const icon = document.getElementsByClassName('weather-icon')
const cloud = document.getElementsByClassName('cloud');
const humidity = document.getElementsByClassName('humidity');
const wind = document.getElementsByClassName('wind');
const locationSearch = document.getElementById('locationSearch');
const search = document.getElementsByClassName('search');
const submitButton = document.getElementsByClassName('submit');
const cities = document.getElementsByClassName('city');

let weather = {
    "apiKey": "ab00b2b0126131b17e22c3ac0b4048a9"
}

let cityInput = "London";

cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        cityInput = e.target.innerHTML;
        fetchWeatherData();
    })
})

locationSearch.addEventListener('submit', (e) => {
    if(search.value.length == 0) {
        alert('Please type in a city name');}
        else {
            city = search.value;
            fetchWeatherData();
            search.value = "";
        }
        e.preventDefault();
    }
)

function dayOfTheWeek(day,month,year) {
    const weekDay =  [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    return weekDay[new Date(`${day}/${month}/${year}`).getDay()]
}

console.log(locationSearch);

function fetchWeatherData(){
    fetch(`http://api.weatherapi.com/v1/current.json?key=19bc6f73f36c493c85654214222210=${cityInput}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        temp.innerHTML
    })
}
