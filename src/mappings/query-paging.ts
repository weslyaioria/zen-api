import { ApiProperty } from '@nestjs/swagger';

export class  QueryPaging {
    @ApiProperty()
    readonly pageIndex: number;
    @ApiProperty()
    readonly pageSize: number;
}
