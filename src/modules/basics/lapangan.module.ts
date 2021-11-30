import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { Lapangan } from '../../libs/db/lapangan';
import { LapanganService } from '../../services/basic/lapangan.service';
import { LapanganController } from '../../controllers/web/basics/lapangan.controller';
import { LapanganRepository } from '../../repository/basic/lapangan-repository';

@Module({
  imports: [TypeOrmModule.forFeature([Lapangan]), PassportModule],
  controllers: [LapanganController],
  providers: [LapanganService, LapanganRepository],
})
export class  LapanganModule {}
