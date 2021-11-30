import { Injectable } from '@nestjs/common';
import { Like, QueryRunner } from 'typeorm';
import { PageMemberDto, CreateMemberDto, UpdateMemberDto } from '../../dtos/basics/payload-member-dto';
import { IMemberService } from '../../interfaces/services/basics/imember.service';
import { Member } from '../../libs/db/member';
import { MemberRepository } from '../../repository/basic/member-repository';
@Injectable()
export class MemberService implements IMemberService {

  constructor(private memberRepository: MemberRepository) { }

  async findAll(queryRunner: QueryRunner): Promise<Member[]> {
    return this.memberRepository.findAll(queryRunner)
  }

  async findById(queryRunner: QueryRunner, oid: string): Promise<Member> {
    return this.memberRepository.findById(queryRunner, oid)
  }

  async findACountFilter(queryRunner: QueryRunner, pageMemberDto: PageMemberDto): Promise<[Member[],number]> {
    const where: any = [];
    if (pageMemberDto.memberCode) {
      where.push({ memberCode: Like('%' + pageMemberDto.memberCode + '%') })
    }
    if (pageMemberDto.memberName) {
      where.push({ memberName: Like('%' + pageMemberDto.memberName + '%') })
    }
    Object.assign(where, { deleted: false })
    const select = ['oid', 'memberCode', 'memberName'];


    const skip = pageMemberDto.pageIndex;
    const take = pageMemberDto.pageSize;

    const filter = {
      select,
      where,
      // order,
      skip,
      take
    }
    return this.memberRepository.findCountFilter(queryRunner, filter)
  }

  async create(queryRunner: QueryRunner, memberdto: CreateMemberDto) {
    const _member = new Member();
    Object.assign(_member, memberdto);
    return this.memberRepository.create(queryRunner, _member)
  }

  async update(queryRunner: QueryRunner, memberdto: UpdateMemberDto) {
    return this.memberRepository.update(queryRunner, memberdto);
  }

  async delete(queryRunner: QueryRunner, oid: string) {
    const memberdto = await this.memberRepository.findById(queryRunner, oid)
    memberdto.deleted = true;
    return this.memberRepository.update(queryRunner, memberdto);
  }
}


