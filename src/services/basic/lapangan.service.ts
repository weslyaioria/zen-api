import { Injectable } from '@nestjs/common';
import { Like, QueryRunner } from 'typeorm';
import { PageLapanganDto, CreateLapanganDto, UpdateLapanganDto } from '../../dtos/basics/payload-lapangan-dto';
import { ILapanganService } from '../../interfaces/services/basics/ilapangan.service';
import { Lapangan } from '../../libs/db/lapangan';
import { LapanganRepository } from '../../repository/basic/lapangan-repository';
@Injectable()
export class LapanganService implements ILapanganService {

  constructor(private lapanganRepository: LapanganRepository) { }

  async findAll(queryRunner: QueryRunner): Promise<Lapangan[]> {
    return this.lapanganRepository.findAll(queryRunner)
  }

  async findById(queryRunner: QueryRunner, oid: string): Promise<Lapangan> {
    return this.lapanganRepository.findById(queryRunner, oid)
  }

  async findACountFilter(queryRunner: QueryRunner, pageLapanganDto: PageLapanganDto): Promise<[Lapangan[],number]> {
    const where: any = [];
    if (pageLapanganDto.lapanganCode) {
      where.push({ lapanganCode: Like('%' + pageLapanganDto.lapanganCode + '%') })
    }
    if (pageLapanganDto.lapanganName) {
      where.push({ lapanganName: Like('%' + pageLapanganDto.lapanganName + '%') })
    }
    Object.assign(where, { deleted: false })
    const select = ['oid', 'lapanganCode', 'lapanganName'];


    const skip = pageLapanganDto.pageIndex;
    const take = pageLapanganDto.pageSize;

    const filter = {
      select,
      where,
      // order,
      skip,
      take
    }
    return this.lapanganRepository.findCountFilter(queryRunner, filter)
  }

  async create(queryRunner: QueryRunner, lapangandto: CreateLapanganDto) {
    const _lapangan = new Lapangan();
    Object.assign(_lapangan, lapangandto);
    return this.lapanganRepository.create(queryRunner, _lapangan)
  }

  async update(queryRunner: QueryRunner, lapangandto: UpdateLapanganDto) {
    return this.lapanganRepository.update(queryRunner, lapangandto);
  }

  async delete(queryRunner: QueryRunner, oid: string) {
    const lapangandto = await this.lapanganRepository.findById(queryRunner, oid)
    lapangandto.deleted = true;
    return this.lapanganRepository.update(queryRunner, lapangandto);
  }
}


