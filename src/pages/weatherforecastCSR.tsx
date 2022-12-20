import React from "react";
import { WeatherForecast } from "src/models/WeatherForecast";
import { useState, useEffect } from "react";
import UIPageTitle from "@components/UI/atoms/UIPageTitle";
import absoluteUrl from "next-absolute-url";
import { NextPage } from "next";

interface WeatherForecastProps {
  weatherforecasts: WeatherForecast[];
}

interface PageProps{
  Domain :string;
}

const WeatherforecastCSRPage: NextPage<PageProps>  = ({Domain}) => {
  const [data, setData] = useState<WeatherForecastProps>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const apiWeatherForecast = [Domain,"api/weather-forecast"].join("/")

  useEffect(() => {
    console.log("Start useEffect");
    setLoading(true)
    fetch(apiWeatherForecast)
      .then((res) => { 
        console.log("fetch,Then =>"+res.statusText);
        return res.json()        
      })
      .then((data) => {
        console.log(data);
        setData(data)
        console.log(data);
        setLoading(false)
      }).catch((error) =>{
        console.log(error);
        throw(error);
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data || data.weatherforecasts?.length === 0) return <p>No data found.</p>

  return (
    <>
      <UIPageTitle title="Weatherforecast Client Side Rendering" />

      <table className="table-auto">
        <thead className="bg-white border-b">
          <tr>
            <th
              scope="col"
              className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
            >
              Date
            </th>
            <th
              scope="col"
              className="text-sm font-bold text-gray-900 px-6 py-4 text-end"
            >
              Temp C.
            </th>
            <th
              scope="col"
              className="text-sm font-bold text-gray-900 px-6 py-4 text-end"
            >
              Temp F.
            </th>
            <th
              scope="col"
              className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
            >
              Summery
            </th>
          </tr>
        </thead>
        <tbody>
          {data.weatherforecasts.map((wf) => {
            return (
              <tr key={wf.Date} className="bg-white border-b odd:bg-gray-300 ">
                <td className="px-2">{wf.Date}</td>
                <td className="px-2 text-end">{wf.TemperatureC}</td>
                <td className="px-2 text-end">{wf.TemperatureF}</td>
                <td className="px-3">{wf.Summary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

WeatherforecastCSRPage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const host = req ? req.headers.host : "";
  const domain = ["http://",host].join("");
  console.log(domain);
  return { 
    Domain : domain 
  }
}

export default WeatherforecastCSRPage;
