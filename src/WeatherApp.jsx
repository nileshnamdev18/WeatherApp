import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function () {

  const [weatherInfo, setWeatherInfo] = useState({
    city: "Kasrawad",
    feelIsLike: 27.43,
    humidity: 24,
    temp: 28.79,
    tempMax: 28.79,
    tempMin: 28.79,
    weather: "clear sky",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo)
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>WeatherApp</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
