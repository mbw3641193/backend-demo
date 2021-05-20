import { Module } from '@nestjs/common';
import { LoggingModule } from './framework/logging';
import { WeatherModule } from './modules/weather';


const Modules = [
  WeatherModule,
  LoggingModule
];

@Module({
  imports: [...Modules],
})
export class AppModule { }
