import { Injectable } from "@nestjs/common";
import { QueryRunner } from "typeorm";
import { JadwalLapangan } from "../../libs/db/jadwal-lapangan";

@Injectable()
export class JadwalLapanganRepository {

    async findAll(queryRunner: QueryRunner,): Promise<JadwalLapangan[]> {
        return queryRunner.manager.find(JadwalLapangan)
    }

    async findById(queryRunner: QueryRunner, oid: string): Promise<JadwalLapangan> {
        return queryRunner.manager.findOne(JadwalLapangan, { oid });
    }

    async findFilter(queryRunner: QueryRunner, filter: any): Promise<any> {
        return queryRunner.manager.find(JadwalLapangan, filter);
    }

    async findCountFilter(queryRunner: QueryRunner, filter: any): Promise<any> {
        return queryRunner.manager.findAndCount(
            JadwalLapangan, filter
        );
    }

    async create(queryRunner: QueryRunner, jadwalLapangandto: JadwalLapangan) {
        return queryRunner.manager.insert(JadwalLapangan, jadwalLapangandto);
    }

    async update(queryRunner: QueryRunner, jadwalLapangandto: any) {
        return queryRunner.manager.update(JadwalLapangan, { oid: jadwalLapangandto.oid }, jadwalLapangandto);
    }

    async delete(queryRunner: QueryRunner, oid: string) {
        return queryRunner.manager.delete(JadwalLapangan, { oid });
    }
}
