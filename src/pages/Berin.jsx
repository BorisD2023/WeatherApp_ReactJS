import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Berlin = () => {
    const apiKey = "874ce9c13ce43fc2440816a921167ac0"

    const [weatherData, setWeatherData] = useState()
    console.log(weatherData);
    

    useEffect(() =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Berlin&lang=de&units=metric&appid=${apiKey}`)
        .then((response) => response.json())
        .then((apiData) =>{
            setWeatherData(apiData)
        })
        .catch((error) =>{
            console.log("Fehler beim Laden", error);
        })
       },[])

    return ( <>
            <Navbar />
            <section>
                {weatherData ? (
                    <article>
                        <div className="wetter-info">
                           <span>{weatherData.weather[0].description}</span>  in {weatherData.name}
                            <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="icon" />
                        </div>
                        <div><span>Temperatur: </span> {Math.round(weatherData.main.temp)} °C</div>
                        <div><span>Wind:</span>  {Math.round(weatherData.wind.speed * 3.701)} km/h</div>
                    </article>
                ) : (
                    <p>Loading weather data...</p>

                )}
            </section>
    </> );
}
 
export default Berlin;