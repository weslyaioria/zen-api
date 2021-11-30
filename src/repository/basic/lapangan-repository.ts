import { Injectable } from "@nestjs/common";
import { QueryRunner } from "typeorm";
import { Lapangan } from "../../libs/db/lapangan";

@Injectable()
export class LapanganRepository {
        
    async findAll(queryRunner: QueryRunner,): Promise<Lapangan[]> {        
        return queryRunner.manager.find(Lapangan)
    }

    async findById(queryRunner: QueryRunner, oid: string): Promise<Lapangan> {        
        return queryRunner.manager.findOne(Lapangan, { oid });
    }

    async findFilter(queryRunner: QueryRunner, filter: any): Promise<any> {
        return queryRunner.manager.find(Lapangan, filter);
    }

    async findCountFilter(queryRunner: QueryRunner, filter: any): Promise<any> {
        return queryRunner.manager.findAndCount(
            Lapangan, filter
        );
    }

    async create(queryRunner: QueryRunner, satuandto: Lapangan) {
        return queryRunner.manager.insert(Lapangan, satuandto);
    }

    async update(queryRunner: QueryRunner, satuandto: any) {
        return queryRunner.manager.update(Lapangan, { oid: satuandto.oid }, satuandto);
    }

    async delete(queryRunner: QueryRunner, oid: string) {
        return queryRunner.manager.delete(Lapangan, { oid });
    }
}
