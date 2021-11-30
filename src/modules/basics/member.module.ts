import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { Member } from '../../libs/db/member';
import { MemberService } from '../../services/basic/member.service';
import { MemberController } from '../../controllers/web/basics/member.controller';
import { MemberRepository } from '../../repository/basic/member-repository';

@Module({
  imports: [TypeOrmModule.forFeature([Member]), PassportModule],
  controllers: [MemberController],
  providers: [MemberService, MemberRepository],
})
export class  MemberModule {}
