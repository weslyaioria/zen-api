import { Injectable } from '@nestjs/common';
import { Like, QueryRunner } from 'typeorm';
import { PageBookingDto, CreateBookingDto, UpdateBookingDto } from '../../dtos/basics/payload-booking-dto';
import { IBookingService } from '../../interfaces/services/basics/ibooking.service';
import { Booking } from '../../libs/db/booking';
import { BookingRepository } from '../../repository/basic/booking-repository';
import { JadwalLapanganRepository } from '../../repository/basic/jadwal-lapangan-repository';
@Injectable()
export class BookingService implements IBookingService {

    constructor(private bookingRepository: BookingRepository,
        private jadwalLapanganRepository: JadwalLapanganRepository) { }

    async findAll(queryRunner: QueryRunner): Promise<Booking[]> {
        return this.bookingRepository.findAll(queryRunner)
    }

    async findById(queryRunner: QueryRunner, oid: string): Promise<Booking> {
        return this.bookingRepository.findById(queryRunner, oid)
    }

    async findACountFilter(queryRunner: QueryRunner, pageBookingDto: PageBookingDto): Promise<[Booking[], number]> {
        const where: any = [];
        if (pageBookingDto.bookingCode) {
            where.push({ bookingCode: Like('%' + pageBookingDto.bookingCode + '%') })
        }
        if (pageBookingDto.bookingName) {
            where.push({ bookingName: Like('%' + pageBookingDto.bookingName + '%') })
        }
        Object.assign(where, { deleted: false })
        const select = ['oid', 'bookingCode', 'bookingName'];


        const skip = pageBookingDto.pageIndex;
        const take = pageBookingDto.pageSize;

        const filter = {
            select,
            where,
            // order,
            skip,
            take
        }
        return this.bookingRepository.findCountFilter(queryRunner, filter)
    }

    async create(queryRunner: QueryRunner, bookingdto: CreateBookingDto) {
        const _booking = new Booking();
        Object.assign(_booking, bookingdto);
        const where: any = [];
        const filter = {
            where,
        }
        const totalHarga = this.jadwalLapanganRepository.findFilter(queryRunner, filter)

        return this.bookingRepository.create(queryRunner, _booking)
    }

    async update(queryRunner: QueryRunner, bookingdto: UpdateBookingDto) {
        return this.bookingRepository.update(queryRunner, bookingdto);
    }

    async delete(queryRunner: QueryRunner, oid: string) {
        const bookingdto = await this.bookingRepository.findById(queryRunner, oid)
        bookingdto.deleted = true;
        return this.bookingRepository.update(queryRunner, bookingdto);
    }
}


