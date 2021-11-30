import { Injectable } from "@nestjs/common";
import { QueryRunner } from "typeorm";
import { Booking } from "../../libs/db/booking";

@Injectable()
export class BookingRepository {
        
    async findAll(queryRunner: QueryRunner,): Promise<Booking[]> {        
        return queryRunner.manager.find(Booking)
    }

    async findById(queryRunner: QueryRunner, oid: string): Promise<Booking> {        
        return queryRunner.manager.findOne(Booking, { oid });
    }

    async findFilter(queryRunner: QueryRunner, filter: any): Promise<any> {
        return queryRunner.manager.find(Booking, filter);
    }

    async findCountFilter(queryRunner: QueryRunner, filter: any): Promise<any> {
        return queryRunner.manager.findAndCount(
            Booking, filter
        );
    }

    async create(queryRunner: QueryRunner, bookingdto: Booking) {
        return queryRunner.manager.insert(Booking, bookingdto);
    }

    async update(queryRunner: QueryRunner, bookingdto: any) {
        return queryRunner.manager.update(Booking, { oid: bookingdto.oid }, bookingdto);
    }

    async delete(queryRunner: QueryRunner, oid: string) {
        return queryRunner.manager.delete(Booking, { oid });
    }
}
