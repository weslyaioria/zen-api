import { JadwalLapanganVm } from '../../../mappings/basics/jadwal-lapangan-vm';
import { BaseHeaderVm } from '../../../mappings/base/base-header-vm';

export class  IJadwalLapanganVm extends BaseHeaderVm {
    body: JadwalLapanganVm[];
}
