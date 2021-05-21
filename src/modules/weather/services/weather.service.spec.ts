import { WeatherFactoryService, WeatherService } from './index';
import { Test } from '@nestjs/testing';
import { WeatherModule } from '../weather.module';

describe('The WeatherService', () => {
  let weatherFactoryService: WeatherFactoryService;
  let weatherService: WeatherService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        WeatherModule,
      ],
      providers: [
        WeatherFactoryService,
        WeatherService
      ],
    }).compile();
    weatherFactoryService = await module.get<WeatherFactoryService>(WeatherFactoryService);
    weatherService = await module.get<WeatherService>(WeatherService);
  })
  describe('when input weather', () => {
    it('should return a string', async () => {
      expect(
        await weatherService.getWeather('abc')
      ).toEqual('string')
    })
  })
});