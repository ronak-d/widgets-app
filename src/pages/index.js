import Countries from "@/Components/Countries";
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

export default function Home() {
  return (
    <>
      <h5 className="text-center mt-5">See the Weather and Currency </h5>
      <Countries />
    </>
  );
}
