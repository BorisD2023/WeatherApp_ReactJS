
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Düsseldorf from './pages/Düsseldorf'




function App() {
    const apiKey = "874ce9c13ce43fc2440816a921167ac0"

    const [weatherData, setWeatherData] = useState()
    console.log(weatherData);
    

    useEffect(() =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Düsseldorf&lang=de&units=metric&appid=${apiKey}`)
        .then((response) => response.json())
        .then((apiData) =>{
            setWeatherData(apiData)
        })
        .catch((error) =>{
            console.log("Fehler beim Laden", error);
        })
       },[])

  return (
    <>
      <Navbar />
      <section>
        {weatherData ? (
            <Düsseldorf 
              temp={Math.round(weatherData.main.feels_like)}
              weather={weatherData.weather[0].description}
              icon={weatherData.weather[0].icon}
              wind={Math.round(weatherData.wind.speed * 3.701)}
              name={weatherData.name}
            />
        ) : (
          <p>Loading weather data...</p>
        )}
      </section>
    </>
  )
}

export default App
