export class WeatherForecast {
    Date: string;
    TemperatureC: number;
    TemperatureF : number; 
    Summary: string;

    // public get TemperatureF() {
    //     return 32 + this.TemperatureC / 0.5556;
    // }

    constructor(date: string, temperatureC: number, temperatureF: number, summery: string) {
        this.Date = date;
        this.TemperatureC = temperatureC;
        this.Summary = summery;
        this.TemperatureF = temperatureF;
    }
}