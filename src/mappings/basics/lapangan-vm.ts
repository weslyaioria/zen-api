import { AutoMap, Mapper } from '@nartc/automapper';
import { Lapangan } from '../../libs/db/lapangan';

export class  LapanganVm {
    @AutoMap()
    oid: string;
    @AutoMap()
    lapanganCode: string;
    @AutoMap()
    lapanganName: string;
}
Mapper.createMap(Lapangan, LapanganVm);
