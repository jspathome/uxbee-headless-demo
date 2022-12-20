import React from "react";
import { WeatherForecast } from "src/models/WeatherForecast";
import { GetStaticPropsResult, GetStaticProps } from "next";

interface WeatherForecastProps {
  Data: WeatherForecast[];
}

const WeatherforecastSSGPage = ({ Data }: WeatherForecastProps) => {
  return (
    <>
      <div>Weatherforecast Static Site Generation</div>

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
          {Data.map((wf) => {
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

// export async function getStaticProps(): Promise<
//   GetStaticPropsResult<WeatherForecastProps>
// > {

//   const res = await fetch("/api/weather-forecast");
//   const data = await res.json();

//   return {
//     props: {
//       Data: data,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     // revalidate: 10, // In seconds
//   };
// }

function RandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ConvertCelsius2Farenheit(celsius: number): number {
  return Math.round(32 + celsius / 0.5556);
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<WeatherForecastProps>
> {
  const summeries: string[] = [
    "Freezing",
    "Bracing",
    "Chilly",
    "Cool",
    "Mild",
    "Warm",
    "Balmy",
    "Hot",
    "Sweltering",
    "Scorching",
  ];

  const wfList: WeatherForecast[] = [];

  for (let i = 0; i <= 15; i++) {
    let d = new Date();
    d.setDate(d.getDate() + 1);
    let s = summeries[RandomNumber(0, summeries.length - 1)];
    let c = RandomNumber(3, 30);
    let w = new WeatherForecast(
      d.toLocaleDateString(),
      c,
      ConvertCelsius2Farenheit(c),
      s
    );
    wfList.push(w);
  }

  return {
    props: {
      Data: JSON.parse(JSON.stringify(wfList))
    },
  };
}

export default WeatherforecastSSGPage;
