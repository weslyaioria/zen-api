import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, Length, Matches } from "class-validator"
import { MESSAGES, REGEX } from "../../configs/util"

export class  PermissionPolicyUserDto {
    // @ApiProperty()
    // oid: string
    @ApiProperty()
    companyName: string

    @ApiProperty()
    address: string

    @ApiProperty()
    contactPerson: string

    @ApiProperty()
    phoneNumber: string

    @ApiProperty()
    emailName: string

    @ApiProperty()
    password: string
}


export class  PagePermissionPolicyUserDto   {
    @ApiProperty()
    companyName: string

    @ApiProperty()
    address: string

    @ApiProperty()
    contactPerson: string
    
    @ApiProperty()
    phoneNumber: string 

    @ApiProperty()
    readonly pageIndex: number;

    @ApiProperty()
    readonly pageSize: number;
}

export class  CreatePermissionPolicyUserDto {
    // @ApiProperty()
    // oid: string
    @ApiProperty()
    companyName: string

    @ApiProperty()
    address: string

    @ApiProperty()
    contactPerson: string
    
    @ApiProperty()
    phoneNumber: string 

    @ApiProperty()    
    emailName: string

    @ApiProperty()
    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE })
    password: string

    @ApiProperty()
    levelUser: number

    @ApiProperty()
    androidToken: string
    
}

export class  UpdatePermissionPolicyUserDto {
    @ApiProperty()
    oid: string

    @ApiProperty()
    companyName: string

    @ApiProperty()
    address: string

    @ApiProperty()
    contactPerson: string
    
    @ApiProperty()
    phoneNumber: string 

    @ApiProperty()
    emailName: string

    @ApiProperty()
    password: string

    @ApiProperty()
    levelUser: number

    @ApiProperty()
    androidToken: string
}
