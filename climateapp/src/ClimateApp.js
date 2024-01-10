import './ClimateApp.css';

function ClimateApp() {

   let api_key="4de720017c90c82fb011dfec499548a9";

   const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value==="")
    {
        return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity+"%";
    wind[0].innerHTML = data.wind.speed+"km/h";
    temperature[0].innerHTML = data.main.temp+"c";
    location[0].innerHTML = data.name;





   }
   

    return (
        <div className='container'>
          <header className='header'>Weather App</header>
          
            <div className='top-bar'>
                <input type="text" className="cityInput" placeholder='Enter City Name' />
                <div className="search-icon" onClick={() => {search()}}>
                <img src="https://cdn-icons-png.flaticon.com/128/4687/4687318.png" height="20px" width="20px" q alt="searchicon"/>
                </div>
                 

            </div>
            <div className="weather-icon">
                  <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-64.png" alt="Weathericon"
/>            
            </div>
            <div className="weather-temp">24 c</div>
            <div className="weather-location">London</div>
            <div className="data-container">
            <div className="element">
              <div className="data">
               <div className="humidity-percent">64%</div>
               <div className="text">Humidity</div>
              </div>
            </div>
              <div className="element">
              <div className="data">
               <div className="wind-rate">18km/hr</div>
               <div className="text">Wind Speed</div>
              </div>
            </div>
            </div>

        </div>
    );
}
export default ClimateApp;