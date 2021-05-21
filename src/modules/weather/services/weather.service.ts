import { Injectable } from '@nestjs/common';
import request from 'request';
import { Logger } from '../../../framework/logging';
import moment from 'moment';

const {
    WEATHER_API: apiUrl,
    WEATHER_API_APPID: appId,
} = process.env;
@Injectable()
export class WeatherService {
    constructor(
    ) { }

    public async getWeather(cityName: string) {
        try {
            // city不能为空 或 不存在与对应枚举中
            if (!cityName) return "city is null or is not included";
            let data = await this.getWeatherApi(cityName);
            // 对第三方数据模型进行处理
            return {
                city: cityName,
                updatedTime: moment(new Date()).format("dddd HH:mm A"),
                weather: data.list[0].weather[0].main,
                temperature: data.list[0].main.temp,
                wind: data.list[0].wind.speed
            }
        } catch (error) {
            console.log(error);
        }

    }

    public async getWeatherApi(cityName: string): Promise<any> {

        let url = apiUrl + `?q=${cityName}&units=metric&appid=${appId}`;
        return new Promise(async function (resolve, reject) {
            await request.get(url, async function (error: any, response: any) {
                if (error) {
                    // Logger.error(error, 'Error');
                    reject(error);
                } else {
                    resolve(JSON.parse(response.body));
                }
            });
        });
    }

}
