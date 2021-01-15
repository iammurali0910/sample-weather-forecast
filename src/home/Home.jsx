import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  //Home component state variables
  const [cityWeatherInfo, setCityWeatherInfo] = React.useState([]);
  const [cityName, setCityName] = React.useState("");

  //fetch data asyn function
  const fetchData = async () => {
    const result = await axios(
      "https://api.openweathermap.org/data/2.5/forecast?id=4517009&count=5&appid=64813bed39e7e05d3566344699c07414"
    );
    setCityName(result.data.city.name);
    setCityWeatherInfo(result.data.list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // get UTC date
  const getDay = (timestamp) => {
    const utcDateString = new Date(timestamp * 1000).toUTCString();
    const utcDateName = utcDateString.toString().split(" ")[0];
    const utcDate = new Date(timestamp * 1000).getUTCDate();
    return utcDateName + " " + utcDate;
  };

  // get UTC time
  const getTime = (timestamp) => {
    let utcTime = new Date(timestamp * 1000).getUTCHours();
    if (utcTime < 12) {
      if (utcTime === 0) utcTime = utcTime + 12 + "AM";
      else utcTime = utcTime + "AM";
    } else {
      if (utcTime === 12) utcTime = utcTime + "PM";
      else utcTime = (utcTime % 12) + "PM";
    }
    return utcTime;
  };

  return (
    <div>
      <div className='city-title'>
        <h1>Weather Forecast</h1>
        <h2>City: {cityName}</h2>
      </div>
      {cityWeatherInfo &&
        cityWeatherInfo.length !== 0 &&
        cityWeatherInfo.map((data) => (
          <div className='weather-info-card' key={data.dt}>
            <div className='weather-fist-col'>
              <span className='col-title'>Date</span>
              <h4>{getDay(data.dt)}</h4>
            </div>
            <div className='weather-fist-col'>
              <span className='col-title'>Time</span>
              <h4>{getTime(data.dt)}</h4>
            </div>
            <div className='weather-fist-col'>
              <span className='col-title'>Temp</span>
              <h4>{Math.round(data.main.temp - 273.15)}°C</h4>
            </div>
            <div className='weather-fist-col'>
              <span className='col-title'>Feels Like</span>
              <h4>{Math.round(data.main.feels_like - 273.15)}°C</h4>
            </div>
            <div className='weather-fist-col'>
              <span className='col-title'>Humidity</span>
              <h4>{data.main.humidity}%</h4>
            </div>
            <div className='weather-fist-col'>
              <span className='col-title'>Wind Speed</span>
              <h4>{data.wind.speed}km/h</h4>
            </div>
            <div className='weather-fist-col'>
              <span className='col-title'>{"  "}</span>
              <h4>{data.weather[0].main}</h4>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
