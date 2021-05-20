import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class WeatherModel {
    @IsNotEmpty({ message: 'fileName不为空' })
    @IsString()
    public city?: string;
}



