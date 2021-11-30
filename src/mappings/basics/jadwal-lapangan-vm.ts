import { AutoMap, Mapper } from '@nartc/automapper';
import { JadwalLapangan } from '../../libs/db/jadwal-lapangan';

export class JadwalLapanganVm {
    @AutoMap()
    oid: string;
    @AutoMap()
    jadwalCode: string;
    @AutoMap()
    jadwalName: string;
}
Mapper.createMap(JadwalLapangan, JadwalLapanganVm);
