import { Injectable } from "@nestjs/common";
import { QueryRunner } from "typeorm";
import { Member } from "../../libs/db/member";

@Injectable()
export class MemberRepository {
        
    async findAll(queryRunner: QueryRunner,): Promise<Member[]> {        
        return queryRunner.manager.find(Member)
    }

    async findById(queryRunner: QueryRunner, oid: string): Promise<Member> {        
        return queryRunner.manager.findOne(Member, { oid });
    }

    async findFilter(queryRunner: QueryRunner, filter: any): Promise<any> {
        return queryRunner.manager.find(Member, filter);
    }

    async findCountFilter(queryRunner: QueryRunner, filter: any): Promise<any> {
        return queryRunner.manager.findAndCount(
            Member, filter
        );
    }

    async create(queryRunner: QueryRunner, memberdto: Member) {
        return queryRunner.manager.insert(Member, memberdto);
    }

    async update(queryRunner: QueryRunner, memberdto: any) {
        return queryRunner.manager.update(Member, { oid: memberdto.oid }, memberdto);
    }

    async delete(queryRunner: QueryRunner, oid: string) {
        return queryRunner.manager.delete(Member, { oid });
    }
}
