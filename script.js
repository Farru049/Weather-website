const inputvalue = document.querySelector('#cityInput');
const btn = document.querySelector('#add');
const city = document.querySelector('#cityoutput');
const desc = document.querySelector('#description');
const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');
const weatherInfo = document.querySelector('#weatherInfo');
const loading = document.querySelector('#loading');

const API_KEY = "6918d48353997d638332838f17db666b";

function convertKelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(1);
}

function showLoading() {
    loading.style.display = 'block';
    weatherInfo.style.display = 'none';
}

function hideLoading() {
    loading.style.display = 'none';
}

async function getWeather() {
    const cityName = inputvalue.value.trim();
    
    if (!cityName) {
        alert('Please enter a city name');
        return;
    }

    showLoading();

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
        );
        
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        
        weatherInfo.style.display = 'block';
        city.innerHTML = `Weather in <span>${data.name}, ${data.sys.country}</span>`;
        temp.innerHTML = `Temperature: <span>${convertKelvinToCelsius(data.main.temp)}°C</span>`;
        description.innerHTML = `Conditions: <span>${data.weather[0].description}</span>`;
        wind.innerHTML = `Wind Speed: <span>${data.wind.speed} m/s</span>`;
        
    } catch (error) {
        alert(error.message === 'City not found' 
            ? 'City not found. Please check the spelling and try again.' 
            : 'An error occurred. Please try again later.');
        weatherInfo.style.display = 'none';
    } finally {
        hideLoading();
    }
}

// Allow form submission with Enter key
inputvalue.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});