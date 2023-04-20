import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  console.log(data);
  return <>home page</>;
}
// key = 411d9c9b7bb24988814161704232004
// weather docs = https://www.weatherapi.com/api-explorer.aspx#forecast

export async function getStaticProps() {
  const WEATHER_YOUR_API_KEY = "411d9c9b7bb24988814161704232004";
  const WEATHER_API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_YOUR_API_KEY}&q=London&days=7`;

  const CURRENCY_API_KEY = "";
  const CURRENCY_API_URL = ``;

  const res = await fetch(WEATHER_API_URL);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

// `https://api.openweathermap.org/data/2.5/weather?q=India&cnt=7&appid=${WEATHER_YOUR_API_KEY}&units=metric`
