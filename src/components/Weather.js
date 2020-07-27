import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { CircularProgress } from '@material-ui/core';

const APIKEY = '83e08d195ea14caa896105833202507';

const Weather = ({ lat, long }) => {
  const [weather, setWeather] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${lat},${long}`
      )
        .then((response) => response.json())
        .then((data) => {
          setLoading(true);
          setWeather(data);
          setLoading(false);
          console.log(data);
        });
    };
    fetchWeather();
  }, [lat, long]);

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center mt-4  h-12">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <div>
          {
            <div className=" flex flex-auto justify-between rounded-lg bg-secondary h-30">
              <div className="flex flex-col px-4 py-2 ">
                <h2 className="text-sm text-red-600 tracking-widest font-md mb-0">
                  {weather.location.name}
                </h2>
                <div className="flex flex-auto flex-row justify-start items-center">
                  <img
                    src={weather.current.condition.icon}
                    className="h-15 w-15 "
                    alt=""
                  />
                  <div className="flex flex-auto flex-col justify-start">
                    <div className="text-center py-0 px-2 text-2xl md:text-3xl lg:text-3xl">
                      {weather.current.temp_c}
                      <span className="text-red-500">&#176;</span>
                      <span className="text-sm font-semibold">C</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm font-md ml-2">
                  {weather.current.condition.text}
                </div>
              </div>
              <div className="flex flex-col px-6 py-10 text-sm font-normal text-white ">
                <span className="text-red-600 text-sm md:text-base lg:text-base">
                  {moment().format('LL')}
                </span>
                <span className="text-xs md:text-sm lg:text-sm">
                  {' '}
                  {moment().format('dddd')}, {moment().format('LT')}
                </span>
              </div>
            </div>
          }
        </div>
      )}
    </>
  );
};

export default Weather;
