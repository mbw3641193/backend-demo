import { HTTP_STATUS_CODE_ENUM, RESULT_MESSAGE } from '../enmus';
import { Pager, Result } from '../models'

export class BaseApiController {
    public ApiResultData<T>(data: T, pager: Pager = null) {
        return new Result(data, HTTP_STATUS_CODE_ENUM.OK, RESULT_MESSAGE.SUCCESS, pager);
    }

    public ApiResultSuccess(
        code: number = HTTP_STATUS_CODE_ENUM.OK,
        message: string = RESULT_MESSAGE.SUCCESS
    ) {
        return new Result(null, code, message, null);
    }

    public ApiResultError(
        code: number = HTTP_STATUS_CODE_ENUM.INTERNAL_SERVER_ERROR,
        message: string = RESULT_MESSAGE.ERROR
    ) {
        return new Result(null, code, message, null);
    }
}
