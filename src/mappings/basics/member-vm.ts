import { AutoMap, Mapper } from '@nartc/automapper';
import { Member } from '../../libs/db/member';

export class  MemberVm {
    @AutoMap()
    oid: string;
    @AutoMap()
    memberCode: string;
    @AutoMap()
    memberName: string;
}
Mapper.createMap(Member, MemberVm);
