import { ApiProperty } from "@nestjs/swagger";

export class  PaginationDto {
    @ApiProperty()
    readonly pageIndex: number;
    @ApiProperty()
    readonly pageSize: number;    
}