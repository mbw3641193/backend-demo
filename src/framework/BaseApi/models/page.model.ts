import { IsOptional, IsInt } from 'class-validator';

export class Pager {
    @IsOptional()
    public page?: string | number;

    @IsOptional()
    public pageSize?: string | number;

    @IsOptional()
    public total?: number;
}

export class PageModel {
    @IsOptional()
    public pager?: Pager
}


