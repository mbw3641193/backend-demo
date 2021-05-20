import * as log4js from 'log4js';

let getLogger: log4js.Logger;

export function logger(category: string): log4js.Logger {
    if (getLogger === undefined) {
        const {
            env: { DEBUG_FOLDER: debugFolder, DEBUG_LEVEL: debugLevel }
        } = process;
        if (debugFolder === undefined || debugLevel === undefined) {
            throw Error();
        }
        log4js.configure({
            appenders: {
                app: {
                    alwaysIncludePattern: true,
                    filename: debugFolder,
                    pattern: 'yyyy-MM-dd.log',
                    type: 'dateFile'
                }
            },
            categories: {
                default: {
                    appenders: ['app'],
                    level: debugLevel
                }
            }
        });
        getLogger = log4js.getLogger(category);
    }
    return getLogger;
}
