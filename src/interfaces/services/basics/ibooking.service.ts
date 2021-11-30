import { QueryRunner } from 'typeorm';
import { CreateBookingDto, PageBookingDto, UpdateBookingDto } from '../../../dtos/basics/payload-booking-dto';
import { Booking } from '../../../libs/db/booking';

export interface IBookingService {
    findAll(queryRunner: QueryRunner): Promise<Booking[]>;
    findById(queryRunner: QueryRunner,oid: string):  Promise<Booking>;
    findACountFilter(queryRunner: QueryRunner,getBookingDto: PageBookingDto): Promise<[Booking[],number]>;
    create(queryRunner: QueryRunner, booking: CreateBookingDto);
    update(queryRunner: QueryRunner, booking: UpdateBookingDto);
    delete(queryRunner: QueryRunner, oid: string): Promise<any | null>;
}
