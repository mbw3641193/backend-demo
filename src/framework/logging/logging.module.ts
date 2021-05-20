import { Module } from '@nestjs/common';
import { Logger } from './logger';

@Module({
    exports: [Logger],
    providers: [Logger]
})
export class LoggingModule { }
