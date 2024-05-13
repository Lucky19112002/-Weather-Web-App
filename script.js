async function fetchWeather() {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '94a1ec3986msh705cbb30e55020ep14bdb0jsn2fd75f938ba0',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Extracting weather data into local variables
        const temp = data.temp;
        const min_temp = data.min_temp;
        const max_temp = data.max_temp;
        const cloud_pct = data.cloud_pct;
        const feels_like = data.feels_like;
        const humidity = data.humidity;
        const wind_speed = data.wind_speed;

        // Setting the values in HTML span tags by their IDs
        document.getElementById('temp').textContent = temp+"°";
        document.getElementById('min_temp').textContent = min_temp+"°";
        document.getElementById('max_temp').textContent = max_temp+"°";
        document.getElementById('cloud_pct').textContent = cloud_pct;
        document.getElementById('feels_like').textContent = feels_like+"°";
        document.getElementById('humidity').textContent = humidity+"%";
        document.getElementById('wind_speed').textContent = wind_speed+"km/h";

    } catch (error) {
        console.error(error);
    }
}

// Call the async function after the DOM has loaded
document.addEventListener('DOMContentLoaded', fetchWeather);
