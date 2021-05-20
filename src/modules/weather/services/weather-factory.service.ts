import { Injectable } from "@nestjs/common";
import { WEATHER_ENUM } from "../enums";
import { WeatherService } from "./weather.service";

@Injectable()
export class WeatherFactoryService {
    constructor(
        private readonly weatherService: WeatherService
    ) { }

    public getWeather(city: string): Promise<any> {
        console.log(this.weatherService)
        try {
            switch (city) {
                case WEATHER_ENUM.SYDNEY:
                    return this.weatherService.getWeatherApi(WEATHER_ENUM.SYDNEY);
                case WEATHER_ENUM.MELBOURNE:
                    return this.weatherService.getWeatherApi(WEATHER_ENUM.MELBOURNE);
                case WEATHER_ENUM.WOLLONGONG:
                    return this.weatherService.getWeatherApi(WEATHER_ENUM.WOLLONGONG);
                default:
                    return this.weatherService.getWeatherApi(null);
            }
        } catch (error) {
            console.log(error);
        }

    }
}


