import React from "react";
import Image from "next/image";
import Link from "next/link";

import Dubai from "../Images/Dubai.jpg";
import London from "../Images/London.jpg";
import Moscow from "../Images/Moscow.jpg";
import Mumbai from "../Images/Mumbai.jpg";
import Newyork from "../Images/Newyork.jpg";
import Tokyo from "../Images/Tokyo.jpg";
import Torronto from "../Images/Torronto.jpg";

const places = [
  {
    name: "Dubai",
    image: Dubai,
    url: "/location/Dubai",
  },
  {
    name: "London",
    image: London,
    url: "/location/london",
  },
  {
    name: "Moscow",
    image: Moscow,
    url: "/location/Moscow",
  },
  {
    name: "Mumbai",
    image: Mumbai,
    url: "/location/Mumbai",
  },
  {
    name: "Newyork",
    image: Newyork,
    url: "/location/Newyork",
  },
  {
    name: "Tokyo",
    image: Tokyo,
    url: "/location/Tokyo",
  },
  {
    name: "Torronto",
    image: Torronto,
    url: "/location/Torronto",
  },
];

const Countries = () => {
  return (
    <div className="lg:flex ">
      {places.map((place, index) => {
        return (
          <div
            // style={{ border: "2px solid orange" }}
            key={index}
            className="flex align-center justify-center my-6 mx-1 shadow-md"
          >
            <Link href={place.url}>
              <div>
                <Image
                  className="object-cover h-48 w-96"
                  src={place.image}
                  alt={place.name}
                />
                <div className="text-center	py-2">
                  <h6>{place.name}</h6>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
