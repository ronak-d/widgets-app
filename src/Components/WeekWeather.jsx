import React from "react";

const WeekWeather = ({ weatherData }) => {
  return (
    <div className="">
      <p>Weekly Weather</p>
      {weatherData.forecast.forecastday.map((place, index) => {
        return (
          <div className=" w-full flex bg-sky-400 my-4 justify-around">
            <div className="flex-1 content-center ">
              <p>{place.date}</p>
            </div>
            <div className="flex-1 ">
              <p> Sunrise {place.astro.sunrise}</p>
              <p> Sunset {place.astro.sunset}</p>
            </div>
            <div className="flex-1 ">
              <img src={place.day.condition.icon} alt="" />
              <div>{place.day.condition.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeekWeather;
