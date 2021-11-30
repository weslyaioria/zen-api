import { Injectable } from "@nestjs/common";
import { QueryRunner } from "typeorm";
import { PermissionPolicyUser } from "../../libs/db/permission-policy-user";

@Injectable()
export class PermissionPolicyUserRepository {
        
    async findAll(queryRunner: QueryRunner,): Promise<PermissionPolicyUser[]> {        
        return queryRunner.manager.find(PermissionPolicyUser)
    }

    async findOne(queryRunner: QueryRunner, filter: any): Promise<PermissionPolicyUser> {        
        return queryRunner.manager.findOne(PermissionPolicyUser, filter);
    }

    async findById(queryRunner: QueryRunner, oid: string): Promise<PermissionPolicyUser> {        
        return queryRunner.manager.findOne(PermissionPolicyUser, { oid });
    }

    async findFilter(queryRunner: QueryRunner, filter: any): Promise<any> {
        return queryRunner.manager.find(PermissionPolicyUser, filter);
    }

    async findCountFilter(queryRunner: QueryRunner, filter: any): Promise<any> {
        return queryRunner.manager.findAndCount(
            PermissionPolicyUser, filter
        );
    }

    async create(queryRunner: QueryRunner, permissionPolicyUserdto: PermissionPolicyUser) {
        return queryRunner.manager.insert(PermissionPolicyUser, permissionPolicyUserdto);
    }

    async update(queryRunner: QueryRunner, permissionPolicyUserdto: any) {
        return queryRunner.manager.update(PermissionPolicyUser, { oid: permissionPolicyUserdto.oid }, permissionPolicyUserdto);
    }

    async delete(queryRunner: QueryRunner, oid: string) {
        return queryRunner.manager.delete(PermissionPolicyUser, { oid });
    }
}
