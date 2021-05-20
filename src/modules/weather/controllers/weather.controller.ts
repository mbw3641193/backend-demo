import { Body, Controller, Get, Injectable, Post, Query, UseGuards, Request } from "@nestjs/common";
import { BaseApiController } from "../../../framework/BaseApi/controller/base-api.controller";
import { WeatherModel } from "../models/weather.model";
import { WeatherService } from "../services";
import { Logger } from "../../../framework/logging";

@Injectable()
@Controller('api/backend/v1/weather')
export class WeatherController extends BaseApiController {
    constructor(
        private readonly weatherService: WeatherService
    ) {
        super();
    }

    @Get('list')
    async getList(@Query() weather: WeatherModel) {
        try {
            const data = await this.weatherService.getWeather();
            Logger.log(data);
            return this.ApiResultData(data);
        } catch (error) {
            Logger.error(error);
        }


    }




}