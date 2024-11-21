const getWeather = async () => {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1')
    const weather = await response.json()
    createrCard(weather)
}

function createrCard(data) {
    const timeDate = "2024-11-21T11:15"
    const date = new Date(timeDate)
    const formatDate = date.toLocaleString()
    const article = document.createElement('article')
    article.innerHTML = `
        <h1>Today's Weather</h1>
        <h2 class="temp">${data.current.temperature_2m} ${data.current_units.temperature_2m}</h2>
        <p class="wind">Wind Speed: ${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}</p>
        <h3 class="place">${data.timezone}</h3>
        <p class="date">Last Updated: ${formatDate}</p>
    `
    document.body.append(article)
    console.log(formatDate)
}

getWeather()