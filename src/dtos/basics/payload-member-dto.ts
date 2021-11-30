import { ApiProperty } from '@nestjs/swagger';

export class  FilterMemberPageDto {
    @ApiProperty()
    readonly memberCode: string;
    @ApiProperty()
    readonly memberName: string;
}

export class  PageMemberDto   {
    @ApiProperty()
    readonly memberCode: string;
    @ApiProperty()
    readonly memberName: string;
    @ApiProperty()
    readonly pageIndex: number;
    @ApiProperty()
    readonly pageSize: number;
}

export class  CreateMemberDto {
    @ApiProperty()
    readonly memberCode: string;
    @ApiProperty()
    readonly memberName: string;
    @ApiProperty()
    readonly userInserted: string;
}

export class  UpdateMemberDto {
    @ApiProperty()
    readonly oid: string;
    @ApiProperty()
    readonly memberCode: string;
    @ApiProperty()
    readonly memberName: string;
    @ApiProperty()
    readonly lastUpdate: string;
}
