import { ApiProperty } from '@nestjs/swagger';
import { QueryPaging } from './query-paging';
import { QuerySort } from './query-sort';

export class  QueryOption {
    @ApiProperty()
    readonly QueryPaging: QueryPaging;
    @ApiProperty()
    readonly QuerySort: QuerySort[];

}
