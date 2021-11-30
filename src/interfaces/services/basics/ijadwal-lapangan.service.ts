import { QueryRunner } from 'typeorm';
import { CreateJadwalLapanganDto, PageJadwalLapanganDto, UpdateJadwalLapanganDto } from '../../../dtos/basics/payload-jadwal-lapangan-dto';
import { JadwalLapangan } from '../../../libs/db/jadwal-lapangan';

export interface IJadwalLapanganService {
    findAll(queryRunner: QueryRunner): Promise<JadwalLapangan[]>;
    findById(queryRunner: QueryRunner, oid: string): Promise<JadwalLapangan>;
    findACountFilter(queryRunner: QueryRunner, getJadwalLapanganDto: PageJadwalLapanganDto): Promise<[JadwalLapangan[], number]>;
    create(queryRunner: QueryRunner, jadwalLapangan: CreateJadwalLapanganDto);
    update(queryRunner: QueryRunner, jadwalLapangan: UpdateJadwalLapanganDto);
    delete(queryRunner: QueryRunner, oid: string): Promise<any | null>;
}
