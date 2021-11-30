import { QueryRunner } from 'typeorm';
import { PagePermissionPolicyUserDto, CreatePermissionPolicyUserDto, UpdatePermissionPolicyUserDto } from '../../../dtos/permission/permission-policy-user-dto';
import { PermissionPolicyUser } from '../../../libs/db/permission-policy-user';

export interface IPermissionPolicyUserService {
    findAll(queryRunner: QueryRunner): Promise<PermissionPolicyUser[]>;
    findById(queryRunner: QueryRunner, oid: string): Promise<PermissionPolicyUser>;
    findACountFilter(queryRunner: QueryRunner, getPermissionPolicyUserDto: PagePermissionPolicyUserDto): Promise<any>;
    create(queryRunner: QueryRunner, permissionPolicyUser: CreatePermissionPolicyUserDto);
    update(queryRunner: QueryRunner, permissionPolicyUser: UpdatePermissionPolicyUserDto);
    delete(queryRunner: QueryRunner, oid: string): Promise<any | null>;
}
