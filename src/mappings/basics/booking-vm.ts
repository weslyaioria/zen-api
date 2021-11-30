import { AutoMap, Mapper } from '@nartc/automapper';
import { Booking } from '../../libs/db/booking';

export class  BookingVm {
    @AutoMap()
    oid: string;
    @AutoMap()
    bookingCode: string;
    @AutoMap()
    bookingName: string;
}
Mapper.createMap(Booking, BookingVm);
