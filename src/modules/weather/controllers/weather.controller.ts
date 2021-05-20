import { Body, Controller, Get, Injectable, Post, Query, UseGuards, Request } from "@nestjs/common";
import { BaseApiController } from "../../../framework/BaseApi/controller/base-api.controller";
import { WeatherModel } from "../models/weather.model";
import { WeatherFactoryService, WeatherService } from "../services";
import { Logger } from "../../../framework/logging";

@Injectable()
@Controller('api/backend/v1/weather')
export class WeatherController extends BaseApiController {
    constructor(
        private readonly weatherFactoryService: WeatherFactoryService
    ) {
        super();
    }

    @Get('list')
    async getList(@Query() weather: WeatherModel) {
        try {
            console.log(weather);
            const data = await this.weatherFactoryService.getWeather(weather.city);
            Logger.log(data);
            return this.ApiResultData(data);
        } catch (error) {
            Logger.error(error);
        }


    }




}