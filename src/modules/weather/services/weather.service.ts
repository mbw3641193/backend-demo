import { Injectable } from '@nestjs/common';
import request from 'request';
import { Logger } from '../../../framework/logging';

const {
    WEATHER_API: apiUrl,
    WEATHER_API_APPID: appId,
} = process.env;
@Injectable()
export class WeatherService {
    constructor(
    ) { }

    public async getWeatherApi(cityName: string): Promise<any> {
        // city不能为空
        if (!cityName) return "city is null";

        let url = apiUrl + `?q=${cityName}&appid=${appId}`;
        return new Promise(async function (resolve, reject) {
            await request.get(url, async function (error: any, response: any) {
                if (error) {
                    Logger.error(error, 'Error');
                    reject(error);
                } else {
                    resolve(JSON.parse(response.body));
                }
            });
        });
    }

}
