import { Controller, Get, HttpCode, HttpStatus, Param, Post, Body, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { getConnection } from 'typeorm';
import { IBase } from 'src/interfaces/mappings/ibase';
import { ErrorResponse } from '../../../libs/commons/errorResponse';
import { SuccessResponse } from '../../../libs/commons/successResponse';
import { Mapper } from '@nartc/automapper';
import { RoleGuard } from '../../../libs/guards/role.guard';
import { PagePermissionPolicyUserDto, CreatePermissionPolicyUserDto, UpdatePermissionPolicyUserDto, PermissionPolicyUserDto } from '../../../dtos/permission/permission-policy-user-dto';
import { PermissionPolicyUserVm } from '../../../mappings/security/permission-policy-user-vm';
import { PermissionPolicyUserService } from '../../../services/permission/permission-policy-user.service';

@Controller('permissionPolicyUser')
@ApiBearerAuth()
@ApiTags('PermissionPolicyUser')
@UseGuards(RoleGuard)
export class PermissionPolicyUserController {
    constructor(private readonly permissionPolicyUserService: PermissionPolicyUserService,
    ) { }

    @Post('auth/login')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Login' })
    @ApiOkResponse({ type: PermissionPolicyUserVm })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async login(@Body() payload: PermissionPolicyUserDto) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.permissionPolicyUserService.Login(queryRunner, payload.emailName, payload.password);            
            const permissionPolicyUserVm = Mapper.mapArray(response, PermissionPolicyUserVm);
            await queryRunner.commitTransaction();            
            return await SuccessResponse.commitTrans(response, permissionPolicyUserVm.length, response);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get All PermissionPolicyUser' })
    @ApiOkResponse({ type: PermissionPolicyUserVm })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async findAll(): Promise<IBase<any>> {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.permissionPolicyUserService.findAll(queryRunner);
            const permissionPolicyUserVm = Mapper.mapArray(response, PermissionPolicyUserVm);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(permissionPolicyUserVm, permissionPolicyUserVm.length, null);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }


    @Get(':oid')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'oid' })
    @ApiOperation({ summary: 'Get All PermissionPolicyUser By Oid' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async findOne(@Param('oid') oid) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.permissionPolicyUserService.findById(queryRunner, oid);
            const permissionPolicyUserVm = Mapper.map(response, PermissionPolicyUserVm);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(permissionPolicyUserVm, 1, null);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }


    @Post('/q')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Filter PermissionPolicyUser' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async findAdvanceFilter(@Body() payload: PagePermissionPolicyUserDto) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.permissionPolicyUserService.findACountFilter(queryRunner, payload);
            const permissionPolicyUserVm = Mapper.mapArray(response[0], PermissionPolicyUserVm);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(permissionPolicyUserVm, response[1], null);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }

    @Post('create')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Save PermissionPolicyUser' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })

    async create(@Body() createPermissionPolicyUserDto: CreatePermissionPolicyUserDto) {

        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.permissionPolicyUserService.create(queryRunner, createPermissionPolicyUserDto);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(response, 0, response.identifiers[0].oid);
        } catch (err) {
            console.log('err : ', err)
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }


    @Put('update')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Update PermissionPolicyUser' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async update(@Body() updatePermissionPolicyUserDto: UpdatePermissionPolicyUserDto) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.permissionPolicyUserService.update(queryRunner, updatePermissionPolicyUserDto);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(response, 0, updatePermissionPolicyUserDto.oid);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }


    @Put('/delete/:oid')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'oid' })
    @ApiOperation({ summary: 'Delete PermissionPolicyUser' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async delete(@Param('oid') oid) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.permissionPolicyUserService.delete(queryRunner, oid);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(response, 0, oid);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }
}
