import { AutoMap, Mapper } from '@nartc/automapper'; 
import { PermissionPolicyUser } from '../../libs/db/permission-policy-user';
 

export class  PermissionPolicyUserVm {
    @AutoMap()
    oid: string;
    @AutoMap()
    companyName: string;
    @AutoMap()
    emailName: string;
}
Mapper.createMap(PermissionPolicyUser, PermissionPolicyUserVm);
