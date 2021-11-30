import { Controller, Get, HttpCode, HttpStatus, Param, Post, Body, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { getConnection } from 'typeorm';
import { IBase } from 'src/interfaces/mappings/ibase';
import { ErrorResponse } from '../../../libs/commons/errorResponse';
import { SuccessResponse } from '../../../libs/commons/successResponse';
import { Mapper } from '@nartc/automapper';
import { PageMemberDto, CreateMemberDto, UpdateMemberDto } from '../../../dtos/basics/payload-member-dto';
import { MemberVm } from '../../../mappings/basics/member-vm';
import { MemberService } from '../../../services/basic/member.service';
import { Roles } from 'src/libs/decorator/roles.decorator';
import { RoleGuard } from 'src/libs/guards/role.guard';

@Controller('member')
// @ApiBearerAuth()
@ApiTags('Member')
// @UseGuards(RoleGuard)
export class MemberController {
    constructor(private readonly memberService: MemberService,
    ) { }

    @Roles('adminxx')
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get All Member' })
    @ApiOkResponse({ type: MemberVm })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async findAll(): Promise<IBase<any>> {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.memberService.findAll(queryRunner);
            const memberVm = Mapper.mapArray(response, MemberVm);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(memberVm, memberVm.length,null);
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
    @ApiOperation({ summary: 'Get All Member By Oid' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async findOne(@Param('oid') oid) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.memberService.findById(queryRunner, oid);
            const memberVm = Mapper.map(response, MemberVm);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(memberVm, 1,null);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }


    @Post('/q')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Filter Member' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async findAdvanceFilter(@Body() payload: PageMemberDto) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.memberService.findACountFilter(queryRunner, payload);
            const memberVm = Mapper.mapArray(response[0], MemberVm);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(memberVm, response[1],null);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            return ErrorResponse.rollBackTrans(err)
        } finally {
            await queryRunner.release();
        }
    }
    
    @Post('create')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Save Member' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })

    async create(@Body() createMemberDto: CreateMemberDto) {        
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();            
            const response = await this.memberService.create(queryRunner, createMemberDto);
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
    @ApiOperation({ summary: 'Update Member' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async update(@Body() updateMemberDto: UpdateMemberDto) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.memberService.update(queryRunner, updateMemberDto);
            await queryRunner.commitTransaction();
            return await SuccessResponse.commitTrans(response, 0,updateMemberDto.oid);
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
    @ApiOperation({ summary: 'Delete Member' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: null, isArray: false })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
    async delete(@Param('oid') oid) {
        const queryRunner = getConnection().createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const response = await this.memberService.delete(queryRunner, oid);
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
