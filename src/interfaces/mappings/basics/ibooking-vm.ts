import { BookingVm } from '../../../mappings/basics/booking-vm';
import { BaseHeaderVm } from '../../../mappings/base/base-header-vm';

export class  IBookingVm extends BaseHeaderVm {
    body: BookingVm[];
}
