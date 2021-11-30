import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { Booking } from '../../libs/db/booking';
import { BookingService } from '../../services/basic/booking.service';
import { BookingController } from '../../controllers/web/basics/booking.controller';
import { BookingRepository } from '../../repository/basic/booking-repository';
import { JadwalLapanganRepository } from '../../repository/basic/jadwal-lapangan-repository';

@Module({
  imports: [TypeOrmModule.forFeature([Booking]), PassportModule],
  controllers: [BookingController],
  providers: [BookingService, JadwalLapanganRepository,BookingRepository],
})
export class  BookingModule {}
