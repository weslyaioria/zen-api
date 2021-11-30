import { ApiProperty } from '@nestjs/swagger';

export class  FilterLapanganPageDto {
    @ApiProperty()
    readonly lapanganCode: string;
    @ApiProperty()
    readonly lapanganName: string;
}

export class  PageLapanganDto   {
    @ApiProperty()
    readonly lapanganCode: string;
    @ApiProperty()
    readonly lapanganName: string;
    @ApiProperty()
    readonly pageIndex: number;
    @ApiProperty()
    readonly pageSize: number;
}

export class  CreateLapanganDto {
    @ApiProperty()
    readonly lapanganCode: string;
    @ApiProperty()
    readonly lapanganName: string;
    @ApiProperty()
    readonly userInserted: string;
}

export class  UpdateLapanganDto {
    @ApiProperty()
    readonly oid: string;
    @ApiProperty()
    readonly lapanganCode: string;
    @ApiProperty()
    readonly lapanganName: string;
    @ApiProperty()
    readonly lastUpdate: string;
}
