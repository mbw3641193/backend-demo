import { Module } from "@nestjs/common";
import { WeatherController } from "./controllers/weather.controller";
import { WeatherFactoryService, WeatherService } from "./services";



@Module({
    controllers: [WeatherController],
    providers: [WeatherService, WeatherFactoryService]
})
export class WeatherModule { }