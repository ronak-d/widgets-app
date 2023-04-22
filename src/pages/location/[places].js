import WeekWeather from "@/Components/WeekWeather";
import { useRouter } from "next/router";
import React from "react";

const places = ({ weatherData }) => {
  const router = useRouter();
  const country = router.query.places;
  // console.log(country);
  console.log(weatherData);
  return (
    <div>
      <div>
        <WeekWeather weatherData={weatherData} />
      </div>
    </div>
  );
};

export default places;

export async function getServerSideProps(context) {
  const country = context.query.places;

  const WEATHER_YOUR_API_KEY = "411d9c9b7bb24988814161704232004";
  const WEATHER_API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_YOUR_API_KEY}&q=${country}&days=7`;

  const CURRENCY_API_URL = `https://restcountries.com/v3.1/name/Bharat`;

  const res1 = await fetch(WEATHER_API_URL);
  const weatherData = await res1.json();

  const res2 = await fetch(CURRENCY_API_URL);
  const currencyData = await res2.json();

  return {
    props: {
      weatherData,
      // currencyData,
    },
  };
}
