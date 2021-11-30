import { QueryRunner } from 'typeorm';
import { CreateMemberDto, PageMemberDto, UpdateMemberDto } from '../../../dtos/basics/payload-member-dto';
import { Member } from '../../../libs/db/member';

export interface IMemberService {
    findAll(queryRunner: QueryRunner): Promise<Member[]>;
    findById(queryRunner: QueryRunner,oid: string):  Promise<Member>;
    findACountFilter(queryRunner: QueryRunner,getMemberDto: PageMemberDto): Promise<[Member[],number]>;
    create(queryRunner: QueryRunner, member: CreateMemberDto);
    update(queryRunner: QueryRunner, member: UpdateMemberDto);
    delete(queryRunner: QueryRunner, oid: string): Promise<any | null>;
}
