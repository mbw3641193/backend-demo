import { Pager } from './page.model';

export class Result<T> {
    public data?: T;
    public code?: number;
    public message?: string;
    public pager?: Pager;

    public constructor(data?: T, code?: number, message?: string, pager?: Pager) {
        this.data = data;
        this.code = code == null ? 200 : code;
        this.message = message;
        this.pager = pager;
    }
}
