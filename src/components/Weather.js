import { useState } from "react";
import "./Weather.css";

const api = {
  key: "e6089c56092ec527242b47928742ff4f",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [searchData, setSearchData] = useState(null);
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);
  const imgUrl = "http://openweathermap.org/img/w/";

  function weatherSearchHandler() {
    fetch(`${api.base}weather?q=${searchData}&units=metric&appid=${api.key}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        if (result.cod === "404") {
          setError("Location Not Found");
        } else {
          setWeather(result);
          setSearchData(null);
          console.log(result);
        }
      });
  }

  function searchHandler(ev) {
    setSearchData(ev.target.value);
    console.log(searchData);
  }

  return (
    <div className="card-container">
      <section className="section-main">
        {typeof weather.main != "undefined" ? (
          <div className="temperature">
            <div>{Math.round(weather.main.temp)}ºC</div>
            <div>{weather.weather[0].main}</div>
            <div>
              <img
                src={`${imgUrl}${weather.weather[0].icon}.png`}
                alt="weather icon"
              ></img>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
      <div className="search-main">
        <input
          type="text"
          placeholder="Search place..."
          onChange={searchHandler}
        ></input>
        <button onClick={weatherSearchHandler}>Search</button>
      </div>
      <section className="section-secondary">
        <div className="weather-country">
          {typeof weather.main != "undefined" ? (
            <div className="temperature">
              {weather.name},{weather.sys.country}
            </div>
          ) : (
            <div>{error}</div>
          )}
        </div>

        <div className="other-stats">
          {typeof weather.main != "undefined" ? (
            <div>Humidity : {weather.main.humidity}%</div>
          ) : (
            ""
          )}
          {typeof weather.main != "undefined" ? (
            <div>Min temperature : {Math.round(weather.main.temp_min)}ºC</div>
          ) : (
            ""
          )}
          {typeof weather.main != "undefined" ? (
            <div>Max temperature : {Math.round(weather.main.temp_max)}ºC</div>
          ) : (
            ""
          )}
          {typeof weather.main != "undefined" ? (
            <div>Longitude : {weather.coord.lon}ºN</div>
          ) : (
            ""
          )}
          {typeof weather.main != "undefined" ? (
            <div>Latitude : {weather.coord.lat}ºS</div>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}

export default Weather;
