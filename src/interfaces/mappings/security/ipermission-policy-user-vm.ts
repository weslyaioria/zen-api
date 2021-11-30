import { BaseHeaderVm } from '../../../mappings/base/base-header-vm';
import { PermissionPolicyUserVm } from '../../../mappings/security/permission-policy-user-vm';

export class  IPermissionPolicyUserVm extends BaseHeaderVm {
    body: PermissionPolicyUserVm[];
}
