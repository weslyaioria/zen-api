import { QueryRunner } from 'typeorm';
import { CreateLapanganDto, PageLapanganDto, UpdateLapanganDto } from '../../../dtos/basics/payload-lapangan-dto';
import { Lapangan } from '../../../libs/db/lapangan';

export interface ILapanganService {
    findAll(queryRunner: QueryRunner): Promise<Lapangan[]>;
    findById(queryRunner: QueryRunner,oid: string):  Promise<Lapangan>;
    findACountFilter(queryRunner: QueryRunner,getLapanganDto: PageLapanganDto): Promise<[Lapangan[],number]>;
    create(queryRunner: QueryRunner, lapangan: CreateLapanganDto);
    update(queryRunner: QueryRunner, lapangan: UpdateLapanganDto);
    delete(queryRunner: QueryRunner, oid: string): Promise<any | null>;
}
