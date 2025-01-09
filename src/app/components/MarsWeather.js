// components/MarsWeather.js
'use client';
import { useEffect, useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;
const apiUrl = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;

const MarsWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeatherData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
      <>
        <div className="w-screen">
          <div>
            <section className="mb-8 text-white mx-4 md:mx-20">
              <h1 className="text-3xl font-bold text-center mb-4 title-text-multi">Mars Weather Data</h1>
              <p className="text-center">
                This page offers the latest weather data from NASA&#39;s Mars Weather Data API, which includes real-time
                information from the InSight lander on Mars. Users can access details about temperature, atmospheric
                pressure, wind speed, and various other meteorological observations.
              </p>
            </section>
          </div>
          <div className="bg-[url('/assets/mars.gif')] bg-center h-screen w-screen bg-no-repeat bg-cover overflow-scroll rounded-lg shadow-lg text-white px-4 py-8 md:px-16">
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}

            {weatherData && (
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {weatherData.sol_keys.map((sol) => {
                    const weather = weatherData[sol];
                    return (
                        <div key={sol} className="bg-black bg-opacity-70 border border-neutral-800 rounded-lg p-4 shadow-md">
                          <h3 className="text-lg font-semibold">Sol {sol} - {weather.Season}</h3>
                          <p><strong>Temperature:</strong> {weather.AT ? weather.AT.av + ' °C' : 'N/A'}</p>
                          <p><strong>Pressure:</strong> {weather.PRE ? weather.PRE.av + ' Pa' : 'N/A'}</p>
                          <p><strong>Wind Speed:</strong> {weather.HWS ? weather.HWS.av + ' m/s' : 'N/A'}</p>
                          <p><strong>Most Common Wind Direction:</strong> {weather.WD && weather.WD.most_common ? weather.WD.most_common.compass_point : 'N/A'}</p>
                          <p><strong>First Data Point:</strong> {weather.First_UTC}</p>
                          <p><strong>Last Data Point:</strong> {weather.Last_UTC}</p>
                        </div>
                    );
                  })}
                </section>
            )}
          </div>
        </div>
      </>
  );
};

export default MarsWeather;