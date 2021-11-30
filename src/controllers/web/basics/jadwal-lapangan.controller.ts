import { Controller, Get, HttpCode, HttpStatus, Param, Post, Body, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { getConnection } from 'typeorm';
import { IBase } from 'src/interfaces/mappings/ibase';
import { ErrorResponse } from '../../../libs/commons/errorResponse';
import { SuccessResponse } from '../../../libs/commons/successResponse';
import { Mapper } from '@nartc/automapper';
import { PageJadwalLapanganDto, CreateJadwalLapanganDto, UpdateJadwalLapanganDto } from '../../../dtos/basics/payload-jadwal-lapangan-dto';
import { JadwalLapanganVm } from '../../../mappings/basics/jadwal-lapangan-vm';
import { JadwalLapanganService } from '../../../services/basic/jadwal-lapangan.service';
import { Roles } from 'src/libs/decorator/roles.decorator';
import { RoleGuard } from 'src/libs/guards/role.guard';

@Controller('jadwalLapangan')
// @ApiBearerAuth()
@ApiTags('JadwalLapangan')
// @UseGuards(RoleGuard)
export class JadwalLapanganController {
    constructor(private readonly jadwalLapanganService: JadwalLapanganService,
    ) { }

    @Roles('adminxx')
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get All JadwalLapangan' })
    @ApiOkResponse({ type: JadwalLapanganVm })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async findAll(): Promise<IBase<any>> {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.jadwalLapanganService.findAll(queryRunner);
            const jadwalLapanganVm = Mapper.mapArray(response, JadwalLapanganVm);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(jadwalLapanganVm, jadwalLapanganVm.length,null);
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
    @ApiOperation({ summary: 'Get All JadwalLapangan By Oid' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async findOne(@Param('oid') oid) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.jadwalLapanganService.findById(queryRunner, oid);
            const jadwalLapanganVm = Mapper.map(response, JadwalLapanganVm);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(jadwalLapanganVm, 1,null);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }


    @Post('/q')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Filter JadwalLapangan' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async findAdvanceFilter(@Body() payload: PageJadwalLapanganDto) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.jadwalLapanganService.findACountFilter(queryRunner, payload);
            const jadwalLapanganVm = Mapper.mapArray(response[0], JadwalLapanganVm);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(jadwalLapanganVm, response[1],null);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }
    
    @Post('create')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Save JadwalLapangan' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })

    async create(@Body() createJadwalLapanganDto: CreateJadwalLapanganDto) {        
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();            
            const response = await this.jadwalLapanganService.create(queryRunner, createJadwalLapanganDto);
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
    @ApiOperation({ summary: 'Update JadwalLapangan' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async update(@Body() updateJadwalLapanganDto: UpdateJadwalLapanganDto) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.jadwalLapanganService.update(queryRunner, updateJadwalLapanganDto);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(response, 0,updateJadwalLapanganDto.oid);
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
    @ApiOperation({ summary: 'Delete JadwalLapangan' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async delete(@Param('oid') oid) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.jadwalLapanganService.delete(queryRunner, oid);
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
