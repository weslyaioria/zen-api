import { AutoMap } from '@nartc/automapper';
import { Entity, Column, PrimaryGeneratedColumn, Generated, OneToMany } from 'typeorm';
import { Base } from './base';
import { Booking } from './booking';
import { JadwalLapangan } from './jadwal-lapangan';

@Entity({name: "lapangan"})
export class Lapangan extends Base {
  @AutoMap()
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  oid: string;

  @AutoMap()
  @Column({ length: 20, nullable: false })
  lapanganCode: string;

  @AutoMap()
  @Column({ length: 100, nullable: false })
  lapanganName: string;

  
  @AutoMap(() => JadwalLapangan)
  @OneToMany(type => JadwalLapangan, jadwalLapangan => jadwalLapangan.lapangan)
  jadwalLapangans: JadwalLapangan[];

  @AutoMap(() => Booking)
  @OneToMany(type => Booking, booking => booking.lapangan)
  bookings: Booking[];
}
