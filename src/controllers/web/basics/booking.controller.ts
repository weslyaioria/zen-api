import { Controller, Get, HttpCode, HttpStatus, Param, Post, Body, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { getConnection } from 'typeorm';
import { IBase } from 'src/interfaces/mappings/ibase';
import { ErrorResponse } from '../../../libs/commons/errorResponse';
import { SuccessResponse } from '../../../libs/commons/successResponse';
import { Mapper } from '@nartc/automapper';
import { PageBookingDto, CreateBookingDto, UpdateBookingDto } from '../../../dtos/basics/payload-booking-dto';
import { BookingVm } from '../../../mappings/basics/booking-vm';
import { BookingService } from '../../../services/basic/booking.service';
import { Roles } from 'src/libs/decorator/roles.decorator';
import { RoleGuard } from 'src/libs/guards/role.guard';

@Controller('booking')
// @ApiBearerAuth()
@ApiTags('Booking')
// @UseGuards(RoleGuard)
export class BookingController {
    constructor(private readonly bookingService: BookingService,
    ) { }

    @Roles('adminxx')
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get All Booking' })
    @ApiOkResponse({ type: BookingVm })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async findAll(): Promise<IBase<any>> {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.bookingService.findAll(queryRunner);
            const bookingVm = Mapper.mapArray(response, BookingVm);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(bookingVm, bookingVm.length,null);
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
    @ApiOperation({ summary: 'Get All Booking By Oid' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async findOne(@Param('oid') oid) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.bookingService.findById(queryRunner, oid);
            const bookingVm = Mapper.map(response, BookingVm);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(bookingVm, 1,null);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }


    @Post('/q')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Filter Booking' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async findAdvanceFilter(@Body() payload: PageBookingDto) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.bookingService.findACountFilter(queryRunner, payload);
            const bookingVm = Mapper.mapArray(response[0], BookingVm);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(bookingVm, response[1],null);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }
    
    @Post('create')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Save Booking' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })

    async create(@Body() createBookingDto: CreateBookingDto) {        
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();            
            const response = await this.bookingService.create(queryRunner, createBookingDto);
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
    @ApiOperation({ summary: 'Update Booking' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async update(@Body() updateBookingDto: UpdateBookingDto) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.bookingService.update(queryRunner, updateBookingDto);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(response, 0,updateBookingDto.oid);
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
    @ApiOperation({ summary: 'Delete Booking' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async delete(@Param('oid') oid) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.bookingService.delete(queryRunner, oid);
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
