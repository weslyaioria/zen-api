import { Controller, Get, HttpCode, HttpStatus, Param, Post, Body, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { getConnection } from 'typeorm';
import { IBase } from 'src/interfaces/mappings/ibase';
import { ErrorResponse } from '../../../libs/commons/errorResponse';
import { SuccessResponse } from '../../../libs/commons/successResponse';
import { Mapper } from '@nartc/automapper';
import { PageLapanganDto, CreateLapanganDto, UpdateLapanganDto } from '../../../dtos/basics/payload-lapangan-dto';
import { LapanganVm } from '../../../mappings/basics/lapangan-vm';
import { LapanganService } from '../../../services/basic/lapangan.service';
import { Roles } from 'src/libs/decorator/roles.decorator';
import { RoleGuard } from 'src/libs/guards/role.guard';

@Controller('lapangan')
// @ApiBearerAuth()
@ApiTags('Lapangan')
// @UseGuards(RoleGuard)
export class LapanganController {
    constructor(private readonly lapanganService: LapanganService,
    ) { }

    @Roles('adminxx')
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get All Lapangan' })
    @ApiOkResponse({ type: LapanganVm })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async findAll(): Promise<IBase<any>> {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.lapanganService.findAll(queryRunner);
            const lapanganVm = Mapper.mapArray(response, LapanganVm);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(lapanganVm, lapanganVm.length,null);
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
    @ApiOperation({ summary: 'Get All Lapangan By Oid' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async findOne(@Param('oid') oid) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.lapanganService.findById(queryRunner, oid);
            const lapanganVm = Mapper.map(response, LapanganVm);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(lapanganVm, 1,null);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }


    @Post('/q')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Filter Lapangan' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async findAdvanceFilter(@Body() payload: PageLapanganDto) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.lapanganService.findACountFilter(queryRunner, payload);
            const lapanganVm = Mapper.mapArray(response[0], LapanganVm);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(lapanganVm, response[1],null);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }
    
    @Post('create')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Save Lapangan' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })

    async create(@Body() createLapanganDto: CreateLapanganDto) {        
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();            
            const response = await this.lapanganService.create(queryRunner, createLapanganDto);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(response, 0,response.identifiers[0].oid);
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
    @ApiOperation({ summary: 'Update Lapangan' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async update(@Body() updateLapanganDto: UpdateLapanganDto) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.lapanganService.update(queryRunner, updateLapanganDto);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(response, 0,updateLapanganDto.oid);
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
    @ApiOperation({ summary: 'Delete Lapangan' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async delete(@Param('oid') oid) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.lapanganService.delete(queryRunner, oid);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(response, 0,oid);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }
}
