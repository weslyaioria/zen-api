import { ApiProperty } from '@nestjs/swagger';

export class  FilterJadwalLapanganPageDto {
    @ApiProperty()
    readonly jadwalLapanganCode: string;
    @ApiProperty()
    readonly jadwalLapanganName: string;
}

export class  PageJadwalLapanganDto   {
    @ApiProperty()
    readonly jadwalLapanganCode: string;
    @ApiProperty()
    readonly jadwalLapanganName: string;
    @ApiProperty()
    readonly pageIndex: number;
    @ApiProperty()
    readonly pageSize: number;
}

export class  CreateJadwalLapanganDto {
    @ApiProperty()
    readonly jadwalLapanganCode: string;
    @ApiProperty()
    readonly jadwalLapanganName: string;
    @ApiProperty()
    readonly userInserted: string;
}

export class  UpdateJadwalLapanganDto {
    @ApiProperty()
    readonly oid: string;
    @ApiProperty()
    readonly jadwalLapanganCode: string;
    @ApiProperty()
    readonly jadwalLapanganName: string;
    @ApiProperty()
    readonly lastUpdate: string;
}
