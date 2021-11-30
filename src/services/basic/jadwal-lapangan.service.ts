import { Injectable } from '@nestjs/common';
import { Like, QueryRunner } from 'typeorm';
import { PageJadwalLapanganDto, CreateJadwalLapanganDto, UpdateJadwalLapanganDto } from '../../dtos/basics/payload-jadwal-lapangan-dto';
import { IJadwalLapanganService } from '../../interfaces/services/basics/ijadwal-lapangan.service';
import { JadwalLapangan } from '../../libs/db/jadwal-lapangan';
import { JadwalLapanganRepository } from '../../repository/basic/jadwal-lapangan-repository';
@Injectable()
export class JadwalLapanganService implements IJadwalLapanganService {

    constructor(private jadwalLapanganRepository: JadwalLapanganRepository) { }

    async findAll(queryRunner: QueryRunner): Promise<JadwalLapangan[]> {
        return this.jadwalLapanganRepository.findAll(queryRunner)
    }

    async findById(queryRunner: QueryRunner, oid: string): Promise<JadwalLapangan> {
        return this.jadwalLapanganRepository.findById(queryRunner, oid)
    }

    async findACountFilter(queryRunner: QueryRunner, pageJadwalLapanganDto: PageJadwalLapanganDto): Promise<[JadwalLapangan[], number]> {
        const where: any = [];
        if (pageJadwalLapanganDto.jadwalLapanganCode) {
            where.push({ jadwalLapanganCode: Like('%' + pageJadwalLapanganDto.jadwalLapanganCode + '%') })
        }
        if (pageJadwalLapanganDto.jadwalLapanganName) {
            where.push({ jadwalLapanganName: Like('%' + pageJadwalLapanganDto.jadwalLapanganName + '%') })
        }
        Object.assign(where, { deleted: false })
        const select = ['oid', 'jadwalLapanganCode', 'jadwalLapanganName'];


        const skip = pageJadwalLapanganDto.pageIndex;
        const take = pageJadwalLapanganDto.pageSize;

        const filter = {
            select,
            where,
            // order,
            skip,
            take
        }
        return this.jadwalLapanganRepository.findCountFilter(queryRunner, filter)
    }

    async create(queryRunner: QueryRunner, jadwalLapangandto: CreateJadwalLapanganDto) {
        const _jadwalLapangan = new JadwalLapangan();
        Object.assign(_jadwalLapangan, jadwalLapangandto);
        return this.jadwalLapanganRepository.create(queryRunner, _jadwalLapangan)
    }

    async update(queryRunner: QueryRunner, jadwalLapangandto: UpdateJadwalLapanganDto) {
        return this.jadwalLapanganRepository.update(queryRunner, jadwalLapangandto);
    }

    async delete(queryRunner: QueryRunner, oid: string) {
        const jadwalLapangandto = await this.jadwalLapanganRepository.findById(queryRunner, oid)
        jadwalLapangandto.deleted = true;
        return this.jadwalLapanganRepository.update(queryRunner, jadwalLapangandto);
    }
}


