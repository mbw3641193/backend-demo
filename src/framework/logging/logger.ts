import { Logger as NestLogger, LoggerService } from '@nestjs/common';
import { logger } from './logger.utils';

export class Logger extends NestLogger implements LoggerService {
    public static error(
        message: any,
        trace?: string | undefined,
        context?: string | undefined,
        isTimeDiffEnabled?: boolean | undefined
    ) {
        logger(`[${context}]`).error(message);
        console.log(message);
        super.error(message, trace, context, isTimeDiffEnabled);
    }
    public static log(
        message: any,
        context?: string | undefined,
        isTimeDiffEnabled?: boolean | undefined
    ) {
        logger(`[${context}]`).info(message);
        super.log(message, context, isTimeDiffEnabled);
    }

    public static warn(
        message: any,
        context?: string | undefined,
        isTimeDiffEnabled?: boolean | undefined
    ) {
        logger(`[${context}]`).warn(message);
        super.warn(message, context, isTimeDiffEnabled);
    }
}
