import { ApiProperty } from '@nestjs/swagger';

export class  QuerySort {
    @ApiProperty()
    readonly field: string;
    @ApiProperty()
    readonly dir: boolean = false;
}
