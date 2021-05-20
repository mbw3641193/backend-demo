import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
    constructor(
    ) { }

    public async getWeather() {

        const data = 'hello world';
        return data;

    }

}
