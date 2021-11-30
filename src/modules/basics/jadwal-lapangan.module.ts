
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JadwalLapangan } from '../../libs/db/jadwal-lapangan';
import { JadwalLapanganController } from '../../controllers/web/basics/jadwal-lapangan.controller';
import { JadwalLapanganRepository } from '../../repository/basic/jadwal-lapangan-repository';
import { JadwalLapanganService } from '../../services/basic/jadwal-lapangan.service';


@Module({
    imports: [TypeOrmModule.forFeature([JadwalLapangan]), PassportModule],
    controllers: [JadwalLapanganController],
    providers: [JadwalLapanganService, JadwalLapanganRepository],
})
export class JadwalLapanganModule { }
