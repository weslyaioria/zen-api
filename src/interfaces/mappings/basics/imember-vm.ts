import { MemberVm } from '../../../mappings/basics/member-vm';
import { BaseHeaderVm } from '../../../mappings/base/base-header-vm';

export class  IMemberVm extends BaseHeaderVm {
    body: MemberVm[];
}
