import Image from "next/image";

const countries = {
  UnitedStates: "New York",
  UnitedKingdom: "London",
  UAE: "Dubai",
  Bharat: "Mumbai",
  Japan: "Tokyo",
  Russia: "Moscow",
  Canada: "Toronto",
};

export default function Home({ weatherData, currencyData }) {
  return (
    <>
      <div>
        <title>Weather App</title>
      </div>
      home page
    </>
  );
}

// export async function getStaticProps() {
//   const WEATHER_YOUR_API_KEY = "411d9c9b7bb24988814161704232004";
//   const WEATHER_API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_YOUR_API_KEY}&q=India&days=7`;

//   const CURRENCY_API_URL = `https://restcountries.com/v3.1/name/Bharat`;

//   const res1 = await fetch(WEATHER_API_URL);
//   const weatherData = await res1.json();

//   const res2 = await fetch(CURRENCY_API_URL);
//   const currencyData = await res2.json();

//   return {
//     props: {
//       weatherData,
//       currencyData,
//     },
//   };
// }

// key = 411d9c9b7bb24988814161704232004
// weather docs = https://www.weatherapi.com/api-explorer.aspx#forecast
