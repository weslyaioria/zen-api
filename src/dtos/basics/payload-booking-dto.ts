import { ApiProperty } from '@nestjs/swagger';

export class  FilterBookingPageDto {
    @ApiProperty()
    readonly bookingCode: string;
    @ApiProperty()
    readonly bookingName: string;
}

export class  PageBookingDto   {
    @ApiProperty()
    readonly bookingCode: string;
    @ApiProperty()
    readonly bookingName: string;
    @ApiProperty()
    readonly pageIndex: number;
    @ApiProperty()
    readonly pageSize: number;
}

export class  CreateBookingDto {
    @ApiProperty()
    readonly bookingCode: string;
    @ApiProperty()
    readonly bookingName: string;
    @ApiProperty()
    readonly userInserted: string;
}

export class  UpdateBookingDto {
    @ApiProperty()
    readonly oid: string;
    @ApiProperty()
    readonly bookingCode: string;
    @ApiProperty()
    readonly bookingName: string;
    @ApiProperty()
    readonly lastUpdate: string;
}
