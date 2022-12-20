// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { WeatherForecast } from 'src/models/WeatherForecast'

type Data = {
    weatherforecasts: WeatherForecast[]
}

function RandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ConvertCelsius2Farenheit(celsius: number): number {
    return Math.round(32 + celsius / 0.5556);
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

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

    res.status(200).json({ weatherforecasts: wfList })
}